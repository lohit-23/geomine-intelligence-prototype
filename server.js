const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

/* ---------- MOCK DOMAIN DATA ---------- */
const SUBSIDIARIES = ["SECL","WCL","CCL","MCL","ECL","BCCL","NCL","SECL-Korba"];
const SEAMS = ["Seam II","Seam III","Seam IV","Seam V","Seam VI","Jhingurdah Seam","Kurasia Seam"];
const MINES = [
  {name:"Gevra OC", sub:"SECL", lat:22.33, lng:82.49, prod:18.2, status:"active"},
  {name:"Kusmunda OC", sub:"SECL", lat:22.28, lng:82.55, prod:19.6, status:"active"},
  {name:"Dipka OC", sub:"SECL", lat:22.30, lng:82.60, prod:16.4, status:"active"},
  {name:"Jayant OC", sub:"NCL", lat:24.19, lng:82.68, prod:12.1, status:"active"},
  {name:"Nigahi OC", sub:"NCL", lat:24.22, lng:82.72, prod:10.8, status:"warn"},
  {name:"Talcher Coalfield", sub:"MCL", lat:20.95, lng:85.22, prod:14.3, status:"active"},
  {name:"Bharatpur OC", sub:"MCL", lat:20.98, lng:85.18, prod:9.7, status:"active"},
  {name:"Sonepur Bazari", sub:"ECL", lat:23.68, lng:87.05, prod:6.2, status:"warn"},
  {name:"Kathara Group", sub:"CCL", lat:23.85, lng:85.60, prod:8.9, status:"active"},
  {name:"Block II Moonidih", sub:"BCCL", lat:23.72, lng:86.30, prod:5.4, status:"active"},
];
const DOC_TYPES = ["Geological Exploration Report","Borehole Log","Drilling Report","Geophysical Survey","Production Statement","Annual Report","Monthly Report","Reserve Estimation Sheet","Environmental Compliance Report","Mining Plan"];
const TOPICS = [
  {name:"Exploration", freq:842, size:38}, {name:"Production", freq:1120, size:44},
  {name:"Coal Quality", freq:610, size:30}, {name:"Boreholes", freq:530, size:27},
  {name:"Drilling", freq:495, size:26}, {name:"Reserves", freq:780, size:34},
  {name:"Resources", freq:715, size:32}, {name:"Mining Plan", freq:410, size:23},
  {name:"Land Acquisition", freq:265, size:18}, {name:"Environmental Compliance", freq:390, size:22},
  {name:"Safety", freq:340, size:20}, {name:"Infrastructure", freq:220, size:16},
  {name:"Overburden", freq:305, size:19}, {name:"Stripping Ratio", freq:245, size:17},
  {name:"Dispatch", freq:288, size:18}, {name:"Seam IV", freq:198, size:15}
];

function rnd(min,max){return Math.round((Math.random()*(max-min)+min)*10)/10;}
function pick(arr){return arr[Math.floor(Math.random()*arr.length)];}
function pad(n){return n.toString().padStart(4,'0');}

let DOCS = [];
(function seedDocs(){
  let names = [
    "Geological_Exploration_BlockA_2024.pdf","Borehole_Log_BH-118_Gevra.xlsx","Drilling_Report_Q3_Kusmunda.pdf",
    "Geophysical_Survey_Talcher_2023.pdf","Production_Statement_Aug2026.xlsx","Annual_Report_2024-25_SECL.pdf",
    "Monthly_Report_Jul2026_NCL.docx","Reserve_Estimation_SeamIV.xlsx","Environmental_Compliance_MCL.pdf",
    "Mining_Plan_Dipka_Revision3.pdf","Borehole_Log_BH-204_Jayant.xlsx","Geological_Survey_Block_C.pdf",
    "Production_Statement_Jul2026.xlsx","Drilling_Report_Nigahi_2026.pdf","Coal_Quality_Assay_Sonepur.xlsx",
    "Annual_Report_2023-24_CCL.pdf","Exploration_Summary_BharatpurOC.pdf","Land_Acquisition_Status_ECL.docx",
    "Reserve_Report_BCCL_Q2.pdf","Safety_Audit_Kathara_2026.pdf"
  ];
  let statuses = ["Completed","Validated","Needs Review","Extracted","Processing","Completed","Completed","Validated"];
  names.forEach((n,i)=>{
    let type = DOC_TYPES[i % DOC_TYPES.length];
    let conf = rnd(78,99);
    DOCS.push({
      id:'DOC-'+pad(1000+i), name:n, type, source: n.endsWith('.pdf')?'Scanned PDF':n.endsWith('.xlsx')?'Excel Spreadsheet':'Digital Document',
      sub: pick(SUBSIDIARIES), date:`${pick(['12','04','21','29','07','15'])} ${pick(['Jan','Mar','May','Jul','Aug','2026'])==='2026'?'Aug 2026':pick(['Jan 2026','Mar 2026','May 2026','Jul 2026'])}`,
      status: pick(statuses), pages: Math.floor(rnd(4,120)), fields: Math.floor(rnd(8,42)), confidence: conf,
      seam: pick(SEAMS), tags:[pick(TOPICS).name, pick(TOPICS).name]
    });
  });
})();

const VALIDATION_RULES = [
  {rule:"Production total reconciliation", doc:"Annual_Report_2024-25_SECL.pdf", status:"pass", conf:99.1},
  {rule:"Resource figure consistency", doc:"Geological_Exploration_BlockA_2024.pdf", status:"warn", conf:87.3},
  {rule:"Missing exploration date field", doc:"Borehole_Log_BH-118_Gevra.xlsx", status:"error", conf:64.2},
  {rule:"Year-on-year change within expected range", doc:"Production_Statement_Aug2026.xlsx", status:"pass", conf:97.8},
  {rule:"Required fields present", doc:"Monthly_Report_Jul2026_NCL.docx", status:"pass", conf:95.0},
  {rule:"Duplicate document detected", doc:"Reserve_Estimation_SeamIV.xlsx", status:"warn", conf:81.4},
  {rule:"Conflicting values across sources", doc:"Drilling_Report_Nigahi_2026.pdf", status:"error", conf:58.9},
  {rule:"Coal quality (GCV) within statutory band", doc:"Coal_Quality_Assay_Sonepur.xlsx", status:"pass", conf:96.6},
  {rule:"Borehole count matches drilling log", doc:"Exploration_Summary_BharatpurOC.pdf", status:"pass", conf:93.2},
  {rule:"Stripping ratio anomaly check", doc:"Mining_Plan_Dipka_Revision3.pdf", status:"warn", conf:84.0},
];

const PROD_TREND = [
  {y:"2021-22", v:612}, {y:"2022-23", v:640}, {y:"2023-24", v:678}, {y:"2024-25", v:703}, {y:"2025-26", v:762}
];
const DOCS_TREND = [820,940,1010,1180,1340,1490,1620,1780,1950,2140,2380,2620];
const MONTHS_SHORT = ["Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"];

// Endpoint to get all mock data
app.get('/api/data', (req, res) => {
  res.json({
    SUBSIDIARIES,
    SEAMS,
    MINES,
    DOC_TYPES,
    TOPICS,
    DOCS,
    VALIDATION_RULES,
    PROD_TREND,
    DOCS_TREND,
    MONTHS_SHORT
  });
});

// AI Chat mockup
app.post('/api/chat', (req, res) => {
  const q = req.body.query || '';
  const lower = q.toLowerCase();
  
  // Detect Tamil script
  const isTamil = /[\u0B80-\u0BFF]/.test(q) || lower.includes('tamil');
  let text, entities;
  
  if(isTamil) {
    if(lower.includes('பாதுகாப்பு') || lower.includes('safety')) {
      text = "குஸ்முண்டா சுரங்கத்தில் தற்போது எந்தப் பாதுகாப்பு பிரச்சனையும் இல்லை. ஆனால், வலய 4-ல் சிறிது இயந்திரச் செயல்பாடுகள் அதிகம் காணப்படுகின்றன.";
      entities = ['Kusmunda', 'Safety'];
    } else {
      text = "உங்கள் கோரிக்கை ஏற்கப்பட்டது. தற்போதைய தரவுப் பதிவேடுகளின்படி, 45 மெட்ரிக் டன் நிலக்கரி கையிருப்பில் உள்ளது.";
      entities = ['Reserve', 'Inventory'];
    }
  } else {
    if(lower.includes('production') && (lower.includes('trend') || lower.includes('year'))){
      text = `Coal production across CIL subsidiaries has grown from 612 MT in FY2021-22 to an estimated 762 MT in FY2025-26 — a compound increase of roughly ${(((762/612)**(1/4)-1)*100).toFixed(1)}% per year, driven largely by SECL and NCL opencast expansion.`;
      entities = ['SECL','NCL','FY2021-26'];
    } else if(lower.includes('declin')){
      text = `Nigahi OC (NCL) and Sonepur Bazari (ECL) show declining month-on-month production over the last quarter, largely attributed to overburden removal delays and seasonal disruption.`;
      entities = ['Nigahi OC','Sonepur Bazari'];
    } else if(lower.includes('seam iv') || lower.includes('seam 4')){
      text = `3 geological reports reference Seam IV directly: Geological_Exploration_BlockA_2024.pdf, Reserve_Estimation_SeamIV.xlsx, and Exploration_Summary_BharatpurOC.pdf — covering an estimated combined resource of 184.6 MT.`;
      entities = ['Seam IV','Block A'];
    } else if(lower.includes('gevra')){
      text = `Gevra OC (SECL) has 4 associated documents in the repository, including its latest production statement and a 2024 geological exploration report, showing current output of approximately 18.2 MT for this period.`;
      entities = ['Gevra OC','SECL'];
    } else if(lower.includes('ministry')){
      text = `Summary for Ministry of Coal: overall production is trending upward (+8.4% YoY), automation-assisted reporting has cut average report preparation time from 18 hours to 2.5 hours, and 97.2% of validated documents pass quality checks without manual correction.`;
      entities = ['Ministry Summary'];
    } else {
      text = `Based on the processed document corpus, the most relevant finding is a ${rnd(4,12)}% year-on-year change across the parameters mentioned in your query, drawn primarily from recent production statements and geological exploration reports.`;
      entities = [pick(TOPICS).name, pick(SUBSIDIARIES)];
    }
  }
  
  const sources = [
    {doc: pick(DOCS).name, page: Math.floor(rnd(3,60)), sub: pick(SUBSIDIARIES)},
    {doc: pick(DOCS).name, page: Math.floor(rnd(3,60)), sub: pick(SUBSIDIARIES)}
  ];
  
  setTimeout(() => {
    res.json({ text, entities, sources, conf: Math.floor(rnd(85,99)), isTamil });
  }, 1200);
});

app.post('/api/upload', (req, res) => {
    // Just mock receiving a file
    const newDoc = {
        id:'DOC-'+pad(1000+DOCS.length+Math.floor(Math.random()*900)),
        name: pick(["Geological_Exploration_BlockE_2026.pdf","Borehole_Log_BH-312_Talcher.xlsx","Production_Statement_Aug2026_v2.xlsx","Drilling_Report_SeamVI_2026.pdf"]),
        type: pick(DOC_TYPES), source:'Scanned PDF', sub: pick(SUBSIDIARIES),
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }), status:'Uploaded', pages: Math.floor(rnd(6,80)), fields:0, confidence:0, seam: pick(SEAMS), tags:[pick(TOPICS).name]
    };
    DOCS.unshift(newDoc);
    res.json(newDoc);
});

app.post('/api/action/approve', (req, res) => {
    const { id } = req.body;
    const d = DOCS.find(x=>x.id===id); 
    if(d){ d.status='Validated'; }
    res.json({ success: true, doc: d });
});

app.post('/api/action/review', (req, res) => {
    const { id } = req.body;
    const d = DOCS.find(x=>x.id===id); 
    if(d){ d.status='Needs Review'; }
    res.json({ success: true, doc: d });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

// Telemetry Generator
setInterval(() => {
  if (io.engine.clientsCount > 0) {
    const events = ['prod_update', 'doc_ingested', 'alert'];
    const type = events[Math.floor(Math.random() * events.length)];
    let payload = {};
    if (type === 'prod_update') {
      payload = { mine: MINES[Math.floor(Math.random()*MINES.length)].name, value: (Math.random() * 10 + 10).toFixed(1), unit: 'MT/hr' };
    } else if (type === 'doc_ingested') {
      payload = { doc: 'AutoSync_' + Math.floor(Math.random() * 9000 + 1000) + '.pdf', status: 'Processing' };
    } else {
      payload = { message: 'Data anomaly detected in ' + SUBSIDIARIES[Math.floor(Math.random()*SUBSIDIARIES.length)] + ' region', level: 'warn' };
    }
    io.emit('telemetry', { type, data: payload, time: new Date().toLocaleTimeString() });
  }
}, 4500);
