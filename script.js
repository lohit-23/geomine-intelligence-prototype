/* ================================================================
   GEOMINE INTELLIGENCE — DEMO APPLICATION LOGIC
   Single-file, dependency-light SPA. No backend required.
   ================================================================ */

/* ---------- ICONS (lucide-style inline svg strings) ---------- */
const ICONS = {
  dashboard:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>`,
  docs:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
  report:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  cloud:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h.79a4.5 4.5 0 1 1 0 9z"/></svg>`,
  ai:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a2 2 0 0 1 2 2v1a2 2 0 1 1-4 0V4a2 2 0 0 1 2-2z"/><path d="M12 8v3M8 21h8M9 15h6a3 3 0 0 0 3-3V9H6v3a3 3 0 0 0 3 3z"/></svg>`,
  check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>`,
  analytics:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/></svg>`,
  repo:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  trace:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  workflow:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a3 3 0 0 1 3 3v6"/></svg>`,
  settings:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  upload:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  send:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  file:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`,
};

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

/* ---------- NAV CONFIG ---------- */
const NAV = [
  {id:'dashboard', label:'Dashboard', icon:'dashboard'},
  {id:'documents', label:'Document Intelligence', icon:'docs'},
  {id:'reportgen', label:'Report Generator', icon:'report'},
  {id:'topics', label:'Word Cloud & Topics', icon:'cloud'},
  {id:'assistant', label:'AI Assistant', icon:'ai'},
  {id:'validation', label:'Validation & QC', icon:'check'},
  {id:'analytics', label:'Mining Analytics', icon:'analytics'},
  {id:'repository', label:'Repository', icon:'repo'},
  {id:'traceability', label:'Traceability', icon:'trace'},
  {id:'workflow', label:'Workflow Monitoring', icon:'workflow'},
];

function buildSidebar(){
  const nav = document.getElementById('nav-list');
  nav.innerHTML = `<div class="nav-group-label">Platform</div>` + NAV.map(n=>`
    <div class="nav-item ${n.id==='dashboard'?'active':''}" data-page="${n.id}" onclick="goPage('${n.id}')">
      <span class="nav-icon">${ICONS[n.icon]}</span>${n.label}
    </div>`).join('');
}

function enterApp(){
  document.getElementById('login-screen').style.display='none';
  document.getElementById('app').style.display='block';
  buildSidebar();
  goPage('dashboard');
  showToast('Signed in','Demo session started as R. Sharma (Geologist, CMPDI).','ok');
}

function goPage(id){
  document.querySelectorAll('.nav-item').forEach(el=>el.classList.toggle('active', el.dataset.page===id));
  const label = NAV.find(n=>n.id===id)?.label || id;
  document.getElementById('crumb-current').textContent = label;
  document.getElementById('content').innerHTML = renderPage(id);
  document.getElementById('content').scrollTop = 0;
  afterRenderHooks(id);
}

/* ---------- TOASTS ---------- */
function showToast(title, body, type='ok'){
  const wrap = document.getElementById('toast-wrap');
  const el = document.createElement('div');
  el.className = 'toast' + (type==='warn'?' warn':type==='error'?' error':'');
  el.innerHTML = `<div><div class="toast-title">${title}</div><div class="toast-body">${body}</div></div>`;
  wrap.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='opacity .3s ease'; setTimeout(()=>el.remove(),300); }, 4200);
}

/* ---------- MODAL ---------- */
function openModal(title, bodyHtml){
  document.getElementById('modal-box').innerHTML = `
    <div class="modal-head"><div class="modal-title">${title}</div><button class="modal-close" onclick="closeModal()">×</button></div>
    <div class="modal-body">${bodyHtml}</div>`;
  document.getElementById('modal-backdrop').style.display='flex';
}
function closeModal(){ document.getElementById('modal-backdrop').style.display='none'; }

function globalSearch(q){
  if(!q) return;
  goPage('repository');
  setTimeout(()=>{ const f = document.getElementById('repo-search'); if(f){ f.value=q; filterRepo(); } },50);
  showToast('Search', `Showing repository results for "${q}"`, 'ok');
}

/* ================================================================
   SVG CHART HELPERS
   ================================================================ */
function svgLineChart(data, opts={}){
  const w=opts.w||560, h=opts.h||220, pad=40;
  const max = Math.max(...data)*1.15, min=Math.min(0,Math.min(...data));
  const stepX = (w-pad*1.3)/(data.length-1);
  const pts = data.map((v,i)=>{
    const x = pad + i*stepX;
    const y = h-pad - ((v-min)/(max-min))*(h-pad*1.6);
    return [x,y];
  });
  const path = pts.map((p,i)=>(i===0?'M':'L')+p[0].toFixed(1)+','+p[1].toFixed(1)).join(' ');
  const area = path + ` L${pts[pts.length-1][0]},${h-pad} L${pts[0][0]},${h-pad} Z`;
  const gridY = [0,0.25,0.5,0.75,1].map(f=>h-pad-f*(h-pad*1.6));
  return `<svg class="chart-svg" viewBox="0 0 ${w} ${h}">
    <defs><linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0"/>
    </linearGradient></defs>
    ${gridY.map(y=>`<line x1="${pad}" y1="${y}" x2="${w-10}" y2="${y}" stroke="#1d2620" stroke-width="1"/>`).join('')}
    <path d="${area}" fill="url(#lg1)"/>
    <path d="${path}" fill="none" stroke="#34d399" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
    ${pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="3.2" fill="#0e1210" stroke="#34d399" stroke-width="2"/>`).join('')}
    ${opts.labels?opts.labels.map((l,i)=>`<text x="${pad+i*stepX}" y="${h-12}" text-anchor="middle" class="axis-label">${l}</text>`).join(''):''}
  </svg>`;
}

function svgBarChart(data, labels, opts={}){
  const w=opts.w||560, h=opts.h||220, pad=36;
  const max = Math.max(...data)*1.15;
  const bw = (w-pad*1.4)/data.length*0.6;
  const gap = (w-pad*1.4)/data.length;
  const colors = opts.colors || data.map(()=>'#1c6b48');
  return `<svg class="chart-svg" viewBox="0 0 ${w} ${h}">
    ${[0,0.25,0.5,0.75,1].map(f=>`<line x1="${pad}" y1="${h-pad-f*(h-pad*1.5)}" x2="${w-10}" y2="${h-pad-f*(h-pad*1.5)}" stroke="#1d2620" stroke-width="1"/>`).join('')}
    ${data.map((v,i)=>{
      const bh = (v/max)*(h-pad*1.5);
      const x = pad + i*gap + (gap-bw)/2;
      const y = h-pad-bh;
      return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}" rx="3" fill="${colors[i]}"/>`;
    }).join('')}
    ${labels?labels.map((l,i)=>`<text x="${pad+i*gap+gap/2}" y="${h-12}" text-anchor="middle" class="axis-label">${l}</text>`).join(''):''}
  </svg>`;
}

function svgDonut(segments, opts={}){
  const size=opts.size||160, r=size/2-14, cx=size/2, cy=size/2, sw=18;
  const total = segments.reduce((a,s)=>a+s.value,0);
  let acc=0;
  const circ = 2*Math.PI*r;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#1d2620" stroke-width="${sw}"/>
    ${segments.map(s=>{
      const frac = s.value/total;
      const dash = frac*circ;
      const el = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${s.color}" stroke-width="${sw}" stroke-dasharray="${dash.toFixed(1)} ${(circ-dash).toFixed(1)}" stroke-dashoffset="${(-acc).toFixed(1)}" transform="rotate(-90 ${cx} ${cy})" stroke-linecap="butt"/>`;
      acc += dash;
      return el;
    }).join('')}
    <text x="${cx}" y="${cy+5}" text-anchor="middle" font-family="Sora" font-weight="700" font-size="18" fill="#eef2ef">${total}</text>
  </svg>`;
}

/* ================================================================
   PAGE RENDERERS
   ================================================================ */
function renderPage(id){
  switch(id){
    case 'dashboard': return pageDashboard();
    case 'documents': return pageDocuments();
    case 'reportgen': return pageReportGen();
    case 'topics': return pageTopics();
    case 'assistant': return pageAssistant();
    case 'validation': return pageValidation();
    case 'analytics': return pageAnalytics();
    case 'repository': return pageRepository();
    case 'traceability': return pageTraceability();
    case 'workflow': return pageWorkflow();
    default: return pageDashboard();
  }
}

/* ---------- DASHBOARD ---------- */
function pageDashboard(){
  const kpis = [
    {label:'Documents Processed', value:'12,480', delta:'+6.2% this month', cls:'up'},
    {label:'Reports Generated', value:'2,840', delta:'+3.8% this month', cls:'up'},
    {label:'Extraction Accuracy', value:'96.8%', delta:'demo / estimated', cls:'warn'},
    {label:'Automation Rate', value:'82%', delta:'+11pts vs manual baseline', cls:'up'},
    {label:'Avg Report Time', value:'2.4 min', delta:'was 18 min manually', cls:'up'},
    {label:'Validation Pass Rate', value:'97.2%', delta:'demo / estimated', cls:'warn'},
  ];
  return `
  <div class="page-head">
    <div><div class="page-title">Executive Dashboard</div><div class="page-sub">Prototype-wide summary of document intelligence, automation and reporting activity across CIL subsidiaries.</div></div>
    <div style="display:flex; gap:10px;">
      <button class="btn btn-sm btn-outline" onclick="goPage('documents')">Upload documents</button>
      <button class="btn btn-sm btn-solid-green" onclick="goPage('reportgen')">Generate report</button>
    </div>
  </div>

  <div class="grid kpi-grid">
    ${kpis.map(k=>`
      <div class="card kpi-card">
        <div class="kpi-label">${k.label}</div>
        <div class="kpi-value">${k.value}</div>
        <div class="kpi-delta ${k.cls}">${k.cls==='up'?'▲':'●'} ${k.delta}</div>
      </div>`).join('')}
  </div>

  <div class="grid two-col section-gap">
    <div class="card">
      <div class="card-title-row"><div class="card-title">Documents processed — last 12 months</div><div class="card-meta">demo data</div></div>
      ${svgLineChart(DOCS_TREND, {labels:MONTHS_SHORT})}
    </div>
    <div class="card">
      <div class="card-title-row"><div class="card-title">Pipeline status mix</div><div class="card-meta">12,480 docs</div></div>
      <div style="display:flex; align-items:center; gap:22px;">
        ${svgDonut([
          {value:8420, color:'#34d399'}, {value:2140, color:'#1d3348'}, {value:1120, color:'#e8a83c'}, {value:800, color:'#e0685a'}
        ])}
        <div class="legend-row" style="flex-direction:column; gap:10px; margin-top:0;">
          <div class="legend-item"><span class="legend-swatch" style="background:#34d399"></span>Completed (8,420)</div>
          <div class="legend-item"><span class="legend-swatch" style="background:#1d3348"></span>Processing (2,140)</div>
          <div class="legend-item"><span class="legend-swatch" style="background:#e8a83c"></span>Needs Review (1,120)</div>
          <div class="legend-item"><span class="legend-swatch" style="background:#e0685a"></span>Failed / Error (800)</div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid two-col section-gap">
    <div class="card">
      <div class="card-title-row"><div class="card-title">Coal production trend — all subsidiaries (MT)</div><div class="card-meta">FY basis · demo</div></div>
      ${svgBarChart(PROD_TREND.map(p=>p.v), PROD_TREND.map(p=>p.y), {colors:['#134430','#134430','#134430','#1c6b48','#34d399']})}
    </div>
    <div class="card">
      <div class="card-title-row"><div class="card-title">Report preparation time</div><div class="card-meta">Prototype estimate</div></div>
      <div style="display:flex; justify-content:space-around; align-items:flex-end; height:180px; padding:10px 0;">
        <div style="text-align:center;">
          <div style="width:60px; height:150px; background:linear-gradient(180deg,#26332c,#1d2620); border-radius:6px 6px 0 0; display:flex; align-items:flex-start; justify-content:center; padding-top:8px; font-family:var(--font-mono); font-size:11px; color:var(--text-mid);">18h</div>
          <div style="font-size:11px; color:var(--text-dim); margin-top:8px;">Manual</div>
        </div>
        <div style="text-align:center;">
          <div style="width:60px; height:26px; background:linear-gradient(180deg,var(--emerald),var(--emerald-dim)); border-radius:6px 6px 0 0; display:flex; align-items:flex-start; justify-content:center; padding-top:6px; font-family:var(--font-mono); font-size:11px; color:#06231a; font-weight:700;">2.5h</div>
          <div style="font-size:11px; color:var(--text-dim); margin-top:8px;">AI-assisted</div>
        </div>
      </div>
      <div class="report-banner" style="margin-top:6px;">~86% potential reduction in prep time — prototype estimate, subject to field validation.</div>
    </div>
  </div>

  <div class="card section-gap">
    <div class="card-title-row"><div class="card-title">Documents → Insight pipeline</div><div class="card-meta">how GeoMine processes information</div></div>
    <div class="pipeline-row">
      ${['Documents','AI Ingestion','OCR + Parsing','Entity Extraction','Validation & QC','Reports / Analytics / AI Query'].map((s,i,arr)=>`
        <div class="pipe-step done"><div class="pipe-dot">${i+1}</div><div class="pipe-label">${s}</div></div>
        ${i<arr.length-1?'<div class="pipe-line done"></div>':''}
      `).join('')}
    </div>
  </div>

  <div class="card section-gap">
    <div class="card-title-row"><div class="card-title">Recent activity</div><div class="card-meta">live demo feed</div></div>
    <table>
      <thead><tr><th>Event</th><th>Subsidiary</th><th>User</th><th>Time</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>Report generated — Monthly Performance Report</td><td>SECL</td><td>R. Sharma</td><td>4 min ago</td><td><span class="badge badge-pass">Completed</span></td></tr>
        <tr><td>Document uploaded — Borehole_Log_BH-204_Jayant.xlsx</td><td>NCL</td><td>A. Verma</td><td>22 min ago</td><td><span class="badge badge-info">Extracted</span></td></tr>
        <tr><td>Validation flagged — Reserve figure mismatch</td><td>MCL</td><td>System</td><td>41 min ago</td><td><span class="badge badge-warn">Needs Review</span></td></tr>
        <tr><td>AI query answered — Production trend FY19–24</td><td>CCL</td><td>K. Iyer</td><td>1 hr ago</td><td><span class="badge badge-pass">Completed</span></td></tr>
        <tr><td>Report approved — Parliamentary Query Response</td><td>ECL</td><td>Supervisor</td><td>2 hr ago</td><td><span class="badge badge-pass">Approved</span></td></tr>
      </tbody>
    </table>
  </div>
  `;
}

/* ---------- DOCUMENTS ---------- */
function pageDocuments(){
  return `
  <div class="page-head">
    <div><div class="page-title">Document Intelligence</div><div class="page-sub">Upload geological, mining and production documents for AI-assisted extraction, structuring and validation.</div></div>
  </div>

  <div class="card section-gap">
    <div class="upload-zone" id="upload-zone" ondragover="event.preventDefault(); this.classList.add('drag')" ondragleave="this.classList.remove('drag')" ondrop="handleDrop(event)">
      <div class="upload-icon">${ICONS.upload}</div>
      <div class="upload-title">Drag &amp; drop documents here</div>
      <div class="upload-sub">PDF, DOCX, XLSX, CSV, JPG, PNG — scanned or digital</div>
      <button class="btn btn-sm btn-solid-green" onclick="simulateUpload()">Browse Files</button>
      <div class="filetypes">or click "Browse Files" to simulate an upload from the demo dataset</div>
    </div>
  </div>

  <div class="card">
    <div class="card-title-row">
      <div class="card-title">Uploaded documents</div>
      <div class="card-meta">${DOCS.length} documents</div>
    </div>
    <table>
      <thead><tr><th>File Name</th><th>Type</th><th>Source</th><th>Upload Date</th><th>Status</th><th>Pages</th><th>Fields</th><th>Confidence</th><th></th></tr></thead>
      <tbody id="doc-table-body">
        ${DOCS.map(d=>docRow(d)).join('')}
      </tbody>
    </table>
  </div>
  `;
}
function docRow(d){
  const confCls = d.confidence>=93?'high':d.confidence>=80?'mid':'low';
  return `<tr>
    <td><span style="font-weight:500;">${d.name}</span><br/><span class="mono">${d.id}</span></td>
    <td class="mono">${d.type}</td>
    <td>${d.source}</td>
    <td class="mono">${d.date}</td>
    <td>${statusBadge(d.status)}</td>
    <td class="mono">${d.pages}</td>
    <td class="mono">${d.fields}</td>
    <td class="confidence ${confCls}">${d.confidence}%</td>
    <td><button class="link-btn" onclick="openDocDetail('${d.id}')">View →</button></td>
  </tr>`;
}
function statusBadge(status){
  const map = {
    'Completed':'badge-pass','Validated':'badge-pass','Extracted':'badge-info',
    'Processing':'badge-warn','Needs Review':'badge-warn','Uploaded':'badge-neutral','Error':'badge-error'
  };
  return `<span class="badge ${map[status]||'badge-neutral'}">${status}</span>`;
}

function handleDrop(e){
  e.preventDefault();
  document.getElementById('upload-zone').classList.remove('drag');
  simulateUpload();
}

function simulateUpload(){
  const newDoc = {
    id:'DOC-'+pad(1000+DOCS.length+Math.floor(Math.random()*900)),
    name: pick(["Geological_Exploration_BlockE_2026.pdf","Borehole_Log_BH-312_Talcher.xlsx","Production_Statement_Aug2026_v2.xlsx","Drilling_Report_SeamVI_2026.pdf"]),
    type: pick(DOC_TYPES), source:'Scanned PDF', sub: pick(SUBSIDIARIES),
    date:'28 Aug 2026', status:'Uploaded', pages: Math.floor(rnd(6,80)), fields:0, confidence:0, seam: pick(SEAMS), tags:[pick(TOPICS).name]
  };
  DOCS.unshift(newDoc);
  document.getElementById('doc-table-body').insertAdjacentHTML('afterbegin', docRow(newDoc));
  showToast('Upload received', `${newDoc.name} queued for AI processing.`, 'ok');
  openModal('AI Document Processing — '+newDoc.name, buildPipelineModal(newDoc.id));
  runPipelineAnimation(newDoc);
}

function buildPipelineModal(docId){
  const steps = ['File received','OCR processing','Text extraction','Table extraction','Entity identification','Data normalization','Validation','Indexing'];
  return `
    <div style="font-size:12.5px; color:var(--text-mid); margin-bottom:14px;">Simulated AI pipeline — demo mode, no external API calls made.</div>
    <div id="pipe-steps">
      ${steps.map((s,i)=>`<div class="step-item" id="pstep-${i}"><div class="step-dot">${i+1}</div><div><div style="font-weight:500; font-size:13.5px;">${s}</div><div style="font-size:11.5px; color:var(--text-dim);" id="pstep-note-${i}">Pending…</div></div></div>`).join('')}
    </div>
    <div id="pipe-result" style="display:none; margin-top:18px;"></div>
  `;
}

function runPipelineAnimation(doc){
  const notes = ['Document received and queued (${doc.pages} pages)','Scanned pages rendered, OCR engine applied','Raw text extracted and cleaned','Tables and grid structures detected','Geological/mining entities tagged (seam, area, resource…)','Values normalized to standard units','Cross-checked against reporting rules','Added to searchable repository index'];
  let i=0;
  const interval = setInterval(()=>{
    const el = document.getElementById('pstep-'+i);
    if(el){
      el.classList.add('done');
      const noteEl = document.getElementById('pstep-note-'+i);
      if(noteEl) noteEl.textContent = notes[i].replace('${doc.pages}', doc.pages);
    }
    i++;
    if(i>=8){
      clearInterval(interval);
      finishPipeline(doc);
    } else {
      const nextEl = document.getElementById('pstep-'+i);
      if(nextEl) nextEl.classList.add('active');
    }
  }, 480);
  const first = document.getElementById('pstep-0'); if(first) first.classList.add('active');
}

function finishPipeline(doc){
  doc.status='Extracted'; doc.confidence = Math.floor(rnd(89,98)); doc.fields = Math.floor(rnd(14,40));
  const row = document.querySelector('#doc-table-body tr'); // first row (most recent)
  const resultBox = document.getElementById('pipe-result');
  if(resultBox){
    resultBox.style.display='block';
    resultBox.innerHTML = `
      <div class="report-banner" style="background:rgba(52,211,153,0.1); border-color:rgba(52,211,153,0.3); color:var(--emerald);">Processing complete — ${doc.fields} fields extracted at ${doc.confidence}% average confidence.</div>
      <div style="display:flex; gap:10px; margin-top:12px;">
        <button class="btn btn-sm btn-solid-green" onclick="closeModal(); openDocDetail('${doc.id}')">Review extracted data</button>
        <button class="btn btn-sm btn-outline" onclick="closeModal()">Close</button>
      </div>`;
  }
  refreshDocTable();
  showToast('Extraction complete', `${doc.name} processed at ${doc.confidence}% confidence.`, 'ok');
}

function refreshDocTable(){
  const body = document.getElementById('doc-table-body');
  if(body) body.innerHTML = DOCS.map(d=>docRow(d)).join('');
}

function openDocDetail(id){
  const d = DOCS.find(x=>x.id===id);
  if(!d) return;
  const fields = mockExtractedFields(d);
  openModal(d.name, `
    <div style="display:grid; grid-template-columns:1fr 1.1fr; gap:20px;">
      <div>
        <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-dim); margin-bottom:8px; font-weight:600;">Document Preview</div>
        <div style="background:var(--coal-900); border:1px solid var(--line); border-radius:8px; height:280px; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:10px; color:var(--text-dim);">
          <div style="width:60px; height:78px; background:var(--coal-700); border-radius:4px; border:1px solid var(--line);"></div>
          <div style="font-size:11px;">${d.pages}-page ${d.source.toLowerCase()}</div>
        </div>
        <div style="margin-top:12px; font-size:12px; color:var(--text-mid);">
          <div><b style="color:var(--text-hi)">Type:</b> ${d.type}</div>
          <div><b style="color:var(--text-hi)">Subsidiary:</b> ${d.sub||pick(SUBSIDIARIES)}</div>
          <div><b style="color:var(--text-hi)">Uploaded:</b> ${d.date}</div>
        </div>
      </div>
      <div>
        <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-dim); margin-bottom:8px; font-weight:600;">AI Extracted Information</div>
        <div style="display:flex; flex-direction:column; gap:9px;">
          ${fields.map(f=>`<div style="display:flex; justify-content:space-between; padding:8px 10px; background:var(--coal-800); border-radius:6px; border:1px solid var(--line);">
            <span style="color:var(--text-mid); font-size:12.5px;">${f.k}</span><span style="font-weight:600; font-size:12.5px;">${f.v}</span>
          </div>`).join('')}
        </div>
        <div style="margin-top:14px; display:flex; align-items:center; justify-content:space-between;">
          <span class="confidence high">Overall confidence: ${d.confidence||94}%</span>
        </div>
        <div style="display:flex; gap:10px; margin-top:16px;">
          <button class="btn btn-sm btn-solid-green" onclick="approveDoc('${d.id}')">Approve</button>
          <button class="btn btn-sm btn-outline" onclick="reviewDoc('${d.id}')">Flag for Review</button>
        </div>
      </div>
    </div>
  `);
}
function mockExtractedFields(d){
  return [
    {k:'Project', v: d.name.split('_')[1] ? d.name.split('_').slice(0,2).join(' ') : 'Block A Exploration'},
    {k:'Coal Seam', v: d.seam || pick(SEAMS)},
    {k:'Area (sq km)', v: rnd(60,220)},
    {k:'Estimated Resource (MT)', v: rnd(80,320)},
    {k:'Exploration Depth (m)', v: Math.floor(rnd(300,800))},
    {k:'Boreholes', v: Math.floor(rnd(40,180))},
    {k:'Drilling Completed', v: Math.floor(rnd(30,170))},
    {k:'Coal Quality (GCV kcal/kg)', v: Math.floor(rnd(3800,5200))},
  ];
}
function approveDoc(id){
  const d = DOCS.find(x=>x.id===id); if(d){ d.status='Validated'; refreshDocTable(); }
  closeModal(); showToast('Document approved', id+' marked as validated.', 'ok');
}
function reviewDoc(id){
  const d = DOCS.find(x=>x.id===id); if(d){ d.status='Needs Review'; refreshDocTable(); }
  closeModal(); showToast('Flagged for review', id+' sent to review queue.', 'warn');
}

/* ---------- REPORT GENERATOR ---------- */
function pageReportGen(){
  return `
  <div class="page-head">
    <div><div class="page-title">Automated Report Generator</div><div class="page-sub">Compose structured geological and mining reports from processed documents, with full source traceability.</div></div>
  </div>

  <div class="card section-gap">
    <div class="card-title-row"><div class="card-title">Report configuration</div></div>
    <div class="filter-row">
      <select class="select-f" id="rg-type">
        <option>Geological Report</option><option>Mining Report</option><option>Production Report</option>
        <option>Exploration Report</option><option>Monthly Performance Report</option><option>Annual Report</option>
        <option>Parliamentary Query Response</option><option>Administrative Query Response</option><option>Custom Report</option>
      </select>
      <select class="select-f" id="rg-sub">${SUBSIDIARIES.map(s=>`<option>${s}</option>`).join('')}</select>
      <select class="select-f" id="rg-mine">${MINES.map(m=>`<option>${m.name}</option>`).join('')}</select>
      <select class="select-f" id="rg-period">
        <option>Q1 FY 2026-27</option><option>Q2 FY 2026-27</option><option>FY 2025-26</option><option>Aug 2026</option>
      </select>
    </div>
    <button class="btn btn-sm btn-solid-green" onclick="generateReport()">Generate AI Report</button>
  </div>

  <div class="card" id="report-output-card" style="display:none;">
    <div id="report-gen-progress"></div>
    <div id="report-final" style="display:none;"></div>
  </div>

  <div class="card" id="report-placeholder">
    <div class="empty-state">
      ${ICONS.report}
      <div style="font-weight:600; color:var(--text-mid); margin-bottom:4px;">No report generated yet</div>
      <div style="font-size:12.5px;">Configure the report above and click "Generate AI Report" to see a live simulated generation.</div>
    </div>
  </div>
  `;
}
function generateReport(){
  const type = document.getElementById('rg-type').value;
  const sub = document.getElementById('rg-sub').value;
  const mine = document.getElementById('rg-mine').value;
  const period = document.getElementById('rg-period').value;
  document.getElementById('report-placeholder').style.display='none';
  const card = document.getElementById('report-output-card');
  card.style.display='block';
  document.getElementById('report-final').style.display='none';
  const steps = ['Collecting data…','Analyzing documents…','Validating figures…','Comparing historical data…','Generating report…','Running quality checks…','Finalizing…'];
  const progWrap = document.getElementById('report-gen-progress');
  progWrap.style.display='block';
  progWrap.innerHTML = `<div class="card-title" style="margin-bottom:14px;">Generating: ${type} — ${sub} / ${mine} / ${period}</div>` +
    steps.map((s,i)=>`<div class="step-item" id="rgstep-${i}"><div class="step-dot">${i+1}</div><div style="font-size:13px;">${s}</div></div>`).join('');
  let i=0;
  const iv = setInterval(()=>{
    const el = document.getElementById('rgstep-'+i);
    if(el) el.classList.add('done','active');
    i++;
    if(i>=steps.length){
      clearInterval(iv);
      setTimeout(()=>renderFinalReport(type,sub,mine,period), 400);
    }
  }, 420);
}
function renderFinalReport(type,sub,mine,period){
  document.getElementById('report-gen-progress').style.display='none';
  const box = document.getElementById('report-final');
  box.style.display='block';
  const resource = rnd(120,340), boreholes = Math.floor(rnd(80,220)), gcv = Math.floor(rnd(4200,5100));
  const prodThis = rnd(14,22), prodLast = prodThis - rnd(-1.5,2.2);
  const change = (((prodThis-prodLast)/prodLast)*100).toFixed(1);
  box.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
      <div class="card-title">${type} — ${sub}</div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-sm btn-navy" onclick="showToast('Export started','Downloading report as PDF (simulated).','ok')">Download PDF</button>
        <button class="btn btn-sm btn-outline" onclick="showToast('Export started','Exporting DOCX (simulated).','ok')">Export DOCX</button>
        <button class="btn btn-sm btn-outline" onclick="showToast('Editing enabled','Report opened in edit mode (demo).','ok')">Edit Report</button>
        <button class="btn btn-sm btn-solid-green" onclick="showToast('Report approved','Sent for authorized sign-off.','ok')">Approve</button>
      </div>
    </div>
    <div class="report-doc">
      <div class="report-banner">AI-generated draft — requires authorized review before official submission. Figures shown are prototype/demo values.</div>
      <h2>Executive Summary</h2>
      <p>This ${type.toLowerCase()} summarizes geological and mining activity for <b>${mine}</b> (${sub}) covering ${period}. Data was compiled from ${Math.floor(rnd(6,18))} source documents processed through the GeoMine AI extraction and validation pipeline, achieving an average confidence of ${rnd(91,98)}%.</p>
      <h2>Project Overview</h2>
      <p>${mine} is an active opencast project under ${sub}, situated within the regional coalfield with ongoing exploration and production activity across ${pick(SEAMS)} and adjoining seams.</p>
      <h2>Geological Information</h2>
      <p>Exploration coverage spans an estimated area of ${rnd(60,220)} sq km, with drilling extending to depths of up to ${Math.floor(rnd(400,750))} m. A total of ${boreholes} boreholes have been logged, of which ${Math.floor(boreholes*0.86)} are complete.</p>
      <h2>Resource / Reserve Data</h2>
      <table><thead><tr><th>Category</th><th>Estimated Quantity (MT)</th><th>Confidence</th></tr></thead>
      <tbody>
        <tr><td>Proved Reserve</td><td>${(resource*0.42).toFixed(1)}</td><td>96.2%</td></tr>
        <tr><td>Indicated Resource</td><td>${(resource*0.35).toFixed(1)}</td><td>91.4%</td></tr>
        <tr><td>Inferred Resource</td><td>${(resource*0.23).toFixed(1)}</td><td>84.7%</td></tr>
      </tbody></table>
      <h2>Production Statistics</h2>
      <p>Production for the current period stands at ${prodThis} MT, compared with ${prodLast.toFixed(1)} MT in the prior comparable period — a change of ${change>0?'+':''}${change}%. Coal quality assays report an average GCV of ${gcv} kcal/kg.</p>
      <h2>Key Findings</h2>
      <p>Extraction and validation surfaced no critical discrepancies in this dataset. ${Math.floor(rnd(1,4))} minor figures were flagged for manual confirmation (see Validation &amp; QC module).</p>
      <h2>Recommendations</h2>
      <p>Continue phased drilling per the current mining plan; reconcile flagged reserve figures against the latest geophysical survey before final Ministry submission.</p>
      <h2>Data Sources &amp; Validation Status</h2>
      <p>Sources: Geological Exploration Report, Borehole Logs, Production Statement, Annual Report. Overall validation pass rate for this report: ${rnd(93,99)}%.</p>
    </div>
  `;
  showToast('Report generated', `${type} for ${sub} is ready for review.`, 'ok');
}

/* ---------- TOPICS / WORD CLOUD ---------- */
function pageTopics(){
  const maxFreq = Math.max(...TOPICS.map(t=>t.freq));
  return `
  <div class="page-head">
    <div><div class="page-title">Word Cloud &amp; Topic Intelligence</div><div class="page-sub">Automatically identified themes across the processed document corpus.</div></div>
  </div>
  <div class="filter-row">
    <select class="select-f"><option>All Dates</option><option>Last 30 days</option><option>Last Quarter</option><option>FY 2025-26</option></select>
    <select class="select-f"><option>All Subsidiaries</option>${SUBSIDIARIES.map(s=>`<option>${s}</option>`).join('')}</select>
    <select class="select-f"><option>All Mines</option>${MINES.map(m=>`<option>${m.name}</option>`).join('')}</select>
    <select class="select-f"><option>All Document Types</option>${DOC_TYPES.map(t=>`<option>${t}</option>`).join('')}</select>
  </div>
  <div class="card section-gap">
    <div class="card-title-row"><div class="card-title">Topic word cloud</div><div class="card-meta">click a topic to view related documents</div></div>
    <div class="wordcloud">
      ${TOPICS.map(t=>`<span class="wc-word" style="font-size:${t.size}px; color:${pick(['#34d399','#8fb4d6','#e8a83c','#eef2ef','#1c6b48'])};" onclick="showTopicDocs('${t.name}')">${t.name}</span>`).join('')}
    </div>
  </div>
  <div class="grid two-col">
    <div class="card">
      <div class="card-title-row"><div class="card-title">Top topics by frequency</div></div>
      <table><thead><tr><th>Topic</th><th>Mentions</th><th></th></tr></thead>
      <tbody>
      ${TOPICS.slice().sort((a,b)=>b.freq-a.freq).slice(0,8).map(t=>`
        <tr><td>${t.name}</td><td class="mono">${t.freq}</td>
        <td style="width:120px;"><div class="progress-track"><div class="progress-fill" style="width:${(t.freq/maxFreq*100).toFixed(0)}%"></div></div></td></tr>
      `).join('')}
      </tbody></table>
    </div>
    <div class="card">
      <div class="card-title-row"><div class="card-title">Topic trend — "Production"</div><div class="card-meta">mentions / month</div></div>
      ${svgLineChart([62,68,74,71,80,88,92,97,101,108,114,120], {labels:MONTHS_SHORT})}
    </div>
  </div>
  <div class="card section-gap" id="topic-docs-panel" style="display:none;"></div>
  `;
}
function showTopicDocs(topic){
  const related = DOCS.filter(d=>d.tags?.includes(topic)).slice(0,6);
  const fallback = related.length ? related : DOCS.slice(0,4);
  const panel = document.getElementById('topic-docs-panel');
  panel.style.display='block';
  panel.innerHTML = `<div class="card-title-row"><div class="card-title">Documents mentioning "${topic}"</div><div class="card-meta">${fallback.length} shown</div></div>
    <div class="doc-cards">
      ${fallback.map(d=>`<div class="doc-card" onclick="openDocDetail('${d.id}')">
        <div class="doc-card-icon">${d.name.split('.').pop().toUpperCase()}</div>
        <div class="doc-card-name">${d.name}</div>
        <div class="doc-card-meta">${d.type} · ${d.date}</div>
        <div class="doc-tags"><span class="tag">${topic}</span></div>
      </div>`).join('')}
    </div>`;
  panel.scrollIntoView({behavior:'smooth', block:'nearest'});
}

/* ---------- AI ASSISTANT ---------- */
const SUGGESTED_Q = [
  "What was the production trend of CIL subsidiaries over the last 5 years?",
  "Show mines with declining production.",
  "Which geological reports mention Seam IV?",
  "Summarize exploration activity in Block A.",
  "What are the major deviations from planned production?",
  "Find all reports related to Gevra OC.",
  "Generate a summary for the Ministry of Coal.",
  "What are the major findings from historical reports?"
];
function pageAssistant(){
  return `
  <div class="page-head">
    <div><div class="page-title">Geological &amp; Mining Intelligence Assistant</div><div class="page-sub">Ask questions across reports, historical archives and operational datasets.</div></div>
  </div>
  <div class="chat-wrap">
    <div>
      <div class="card-title" style="margin-bottom:10px; font-size:12px; color:var(--text-dim); text-transform:uppercase; letter-spacing:0.06em;">Suggested questions</div>
      <div class="chat-suggested">
        ${SUGGESTED_Q.map(q=>`<button class="suggested-q" onclick="askAssistant(${JSON.stringify(q)})">${q}</button>`).join('')}
      </div>
    </div>
    <div class="chat-panel">
      <div class="chat-messages" id="chat-messages">
        <div class="msg ai">Hello, I'm the GeoMine Intelligence Assistant. Ask me anything about geological, mining or production data across your document archive — I'll answer with sources and confidence.</div>
      </div>
      <div class="chat-input-row">
        <input id="chat-input" placeholder="Ask a question about production, exploration, reserves…" onkeydown="if(event.key==='Enter')sendChat()"/>
        <button class="btn btn-sm btn-solid-green" onclick="sendChat()">Send</button>
      </div>
    </div>
  </div>
  `;
}
function sendChat(){
  const input = document.getElementById('chat-input');
  const val = input.value.trim();
  if(!val) return;
  askAssistant(val);
  input.value='';
}
function askAssistant(q){
  const wrap = document.getElementById('chat-messages');
  wrap.insertAdjacentHTML('beforeend', `<div class="msg user">${q}</div>`);
  wrap.scrollTop = wrap.scrollHeight;
  const typingId = 'typing-'+Date.now();
  wrap.insertAdjacentHTML('beforeend', `<div class="msg ai" id="${typingId}">Analyzing documents…</div>`);
  wrap.scrollTop = wrap.scrollHeight;
  setTimeout(()=>{
    const el = document.getElementById(typingId);
    const resp = mockAiAnswer(q);
    if(el){
      el.innerHTML = `${resp.text}
        <div class="msg-meta-row">
          <span class="badge badge-info">Confidence: ${resp.conf}%</span>
          <span class="badge badge-neutral">Sources: ${resp.sources.length}</span>
          ${resp.entities.map(e=>`<span class="chip">${e}</span>`).join('')}
        </div>
        ${resp.sources.map(s=>`<div class="source-card"><div class="source-card-head"><div class="source-card-title">${s.doc}</div><button class="link-btn" onclick="viewSource('${s.doc}','${s.page}')">View Source</button></div><div style="font-size:11px; color:var(--text-dim);">Page ${s.page} · ${s.sub}</div></div>`).join('')}
        <div style="display:flex; gap:8px; margin-top:10px;">
          <button class="btn btn-sm btn-outline" onclick="goPage('reportgen')">Generate Report</button>
          <button class="btn btn-sm btn-outline" onclick="showToast('Exported','Answer exported (demo).','ok')">Export Answer</button>
        </div>`;
    }
    wrap.scrollTop = wrap.scrollHeight;
  }, 1100);
}
function mockAiAnswer(q){
  const lower = q.toLowerCase();
  let text, entities;
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
  const sources = [
    {doc: pick(DOCS).name, page: Math.floor(rnd(3,60)), sub: pick(SUBSIDIARIES)},
    {doc: pick(DOCS).name, page: Math.floor(rnd(3,60)), sub: pick(SUBSIDIARIES)},
  ];
  return {text, conf: Math.floor(rnd(89,98)), sources, entities};
}
function viewSource(doc, page){
  openModal('Source Evidence', `
    <div class="source-card">
      <div class="source-card-title">${doc}</div>
      <div style="font-size:12px; color:var(--text-mid); margin-top:6px;">Referenced page: <b style="color:var(--text-hi)">${page}</b></div>
      <div style="margin-top:12px; background:var(--coal-900); border:1px solid var(--line); border-radius:8px; height:160px; display:flex; align-items:center; justify-content:center; color:var(--text-dim); font-size:12px;">Simulated document page preview</div>
    </div>
    <button class="btn btn-sm btn-outline" style="margin-top:14px;" onclick="closeModal(); goPage('traceability');">Open full traceability chain →</button>
  `);
}

/* ---------- VALIDATION ---------- */
function pageValidation(){
  return `
  <div class="page-head">
    <div><div class="page-title">Validation &amp; Quality Control</div><div class="page-sub">Extracted data checked against geological, statutory and historical reporting standards.</div></div>
  </div>
  <div class="grid three-col section-gap">
    <div class="card"><div class="kpi-label">Rules passing</div><div class="kpi-value" style="color:var(--emerald)">${VALIDATION_RULES.filter(r=>r.status==='pass').length}</div></div>
    <div class="card"><div class="kpi-label">Warnings</div><div class="kpi-value" style="color:var(--amber)">${VALIDATION_RULES.filter(r=>r.status==='warn').length}</div></div>
    <div class="card"><div class="kpi-label">Errors</div><div class="kpi-value" style="color:var(--red)">${VALIDATION_RULES.filter(r=>r.status==='error').length}</div></div>
  </div>
  <div class="card">
    <div class="filter-row">
      <select class="select-f" id="val-filter" onchange="filterValidation()">
        <option value="all">All statuses</option><option value="pass">Pass only</option><option value="warn">Warnings only</option><option value="error">Errors only</option>
      </select>
    </div>
    <table>
      <thead><tr><th>Rule</th><th>Status</th><th>Source Document</th><th>Confidence</th><th>Action</th></tr></thead>
      <tbody id="val-table-body">${VALIDATION_RULES.map(valRow).join('')}</tbody>
    </table>
  </div>
  `;
}
function valRow(r){
  const badgeCls = r.status==='pass'?'badge-pass':r.status==='warn'?'badge-warn':'badge-error';
  const label = r.status==='pass'?'PASS':r.status==='warn'?'WARNING':'ERROR';
  const confCls = r.conf>=93?'high':r.conf>=80?'mid':'low';
  const actionLabel = r.status==='pass'?'View':r.status==='warn'?'Review':'Fix';
  return `<tr data-status="${r.status}"><td>${r.rule}</td><td><span class="badge ${badgeCls}">${label}</span></td><td class="mono">${r.doc}</td><td class="confidence ${confCls}">${r.conf}%</td>
    <td><button class="link-btn" onclick="showToast('${actionLabel}', 'Opening ${r.rule.toLowerCase()} details (demo).','ok')">${actionLabel} →</button></td></tr>`;
}
function filterValidation(){
  const val = document.getElementById('val-filter').value;
  document.querySelectorAll('#val-table-body tr').forEach(tr=>{
    tr.style.display = (val==='all' || tr.dataset.status===val) ? '' : 'none';
  });
}

/* ---------- ANALYTICS ---------- */
function pageAnalytics(){
  return `
  <div class="page-head">
    <div><div class="page-title">Geological &amp; Mining Analytics</div><div class="page-sub">Production, resource and exploration analytics across active projects.</div></div>
  </div>
  <div class="grid two-col section-gap">
    <div class="card">
      <div class="card-title-row"><div class="card-title">Planned vs actual production (MT)</div></div>
      ${svgBarChart([9.2,10.1,9.8,10.6,11.0,10.4,11.3,11.8,12.0,11.6,12.4,12.9], MONTHS_SHORT, {colors:MONTHS_SHORT.map(()=>'#134430')})}
      <div class="legend-row"><div class="legend-item"><span class="legend-swatch" style="background:#134430"></span>Actual production</div></div>
    </div>
    <div class="card">
      <div class="card-title-row"><div class="card-title">Resource distribution by category</div></div>
      <div style="display:flex; align-items:center; gap:22px;">
        ${svgDonut([{value:42,color:'#34d399'},{value:35,color:'#1d3348'},{value:23,color:'#e8a83c'}])}
        <div class="legend-row" style="flex-direction:column; gap:10px; margin-top:0;">
          <div class="legend-item"><span class="legend-swatch" style="background:#34d399"></span>Proved (42%)</div>
          <div class="legend-item"><span class="legend-swatch" style="background:#1d3348"></span>Indicated (35%)</div>
          <div class="legend-item"><span class="legend-swatch" style="background:#e8a83c"></span>Inferred (23%)</div>
        </div>
      </div>
    </div>
  </div>
  <div class="card section-gap">
    <div class="card-title-row"><div class="card-title">Subsidiary comparison — production (MT, current FY)</div></div>
    ${svgBarChart(MINES.slice(0,8).map(m=>m.prod), MINES.slice(0,8).map(m=>m.sub), {colors:MINES.slice(0,8).map(m=>m.status==='warn'?'#e8a83c':'#1c6b48')})}
  </div>
  <div class="card section-gap">
    <div class="card-title-row"><div class="card-title">Mine locations</div><div class="card-meta">simulated GIS overlay — click a marker</div></div>
    <div class="mine-map" id="mine-map">
      ${MINES.map((m,i)=>{
        const x = 8 + (i*11 + (i%3)*6) % 88;
        const y = 15 + ((i*23) % 70);
        return `<div class="map-marker ${m.status==='warn'?'warn':''}" style="left:${x}%; top:${y}%;" onmouseenter="showMapTip(event,${i})" onmouseleave="hideMapTip()" onclick="openMineDetail(${i})"></div>`;
      }).join('')}
      <div class="map-tooltip" id="map-tip"></div>
      <svg style="position:absolute; inset:0; z-index:0; opacity:0.25;" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,60 Q25,50 50,60 T100,55" stroke="#26332c" fill="none" stroke-width="0.4"/>
        <path d="M0,70 Q25,62 50,70 T100,66" stroke="#26332c" fill="none" stroke-width="0.4"/>
        <path d="M0,80 Q25,74 50,80 T100,77" stroke="#26332c" fill="none" stroke-width="0.4"/>
      </svg>
    </div>
    <div class="legend-row">
      <div class="legend-item"><span class="legend-swatch" style="background:#34d399; border-radius:50%;"></span>On target</div>
      <div class="legend-item"><span class="legend-swatch" style="background:#e8a83c; border-radius:50%;"></span>Attention needed</div>
    </div>
  </div>
  `;
}
function showMapTip(e,i){
  const m = MINES[i];
  const tip = document.getElementById('map-tip');
  tip.style.display='block';
  tip.style.left = (e.target.offsetLeft+16)+'px';
  tip.style.top = (e.target.offsetTop-6)+'px';
  tip.innerHTML = `<b>${m.name}</b><br/>${m.sub} · ${m.prod} MT<br/><span style="color:${m.status==='warn'?'#e8a83c':'#34d399'}">${m.status==='warn'?'Attention needed':'On target'}</span>`;
}
function hideMapTip(){ document.getElementById('map-tip').style.display='none'; }
function openMineDetail(i){
  const m = MINES[i];
  openModal(m.name, `
    <div style="display:flex; flex-direction:column; gap:10px;">
      <div class="source-card"><b>Subsidiary:</b> ${m.sub}</div>
      <div class="source-card"><b>Current Production:</b> ${m.prod} MT</div>
      <div class="source-card"><b>Status:</b> ${m.status==='warn'?'Attention needed — below plan':'On target'}</div>
      <div class="source-card"><b>Last update:</b> 27 Aug 2026</div>
    </div>
    <button class="btn btn-sm btn-solid-green" style="margin-top:14px;" onclick="closeModal(); goPage('reportgen');">Generate report for this mine</button>
  `);
}

/* ---------- REPOSITORY ---------- */
function pageRepository(){
  return `
  <div class="page-head">
    <div><div class="page-title">Document Repository</div><div class="page-sub">Search and filter the full archive of processed geological and mining documents.</div></div>
  </div>
  <div class="filter-row">
    <input class="search-f" id="repo-search" placeholder="Search documents…" oninput="filterRepo()" style="flex:1; min-width:220px;"/>
    <select class="select-f" id="repo-type" onchange="filterRepo()"><option value="">All types</option>${DOC_TYPES.map(t=>`<option>${t}</option>`).join('')}</select>
    <select class="select-f" id="repo-status" onchange="filterRepo()"><option value="">All statuses</option><option>Completed</option><option>Validated</option><option>Needs Review</option><option>Extracted</option><option>Processing</option><option>Uploaded</option></select>
  </div>
  <div class="doc-cards" id="repo-cards">
    ${DOCS.map(repoCard).join('')}
  </div>
  `;
}
function repoCard(d){
  const confCls = d.confidence>=93?'high':d.confidence>=80?'mid':'low';
  return `<div class="doc-card" onclick="openDocDetail('${d.id}')" data-name="${d.name.toLowerCase()}" data-type="${d.type}" data-status="${d.status}">
    <div class="doc-card-icon">${d.name.split('.').pop().toUpperCase()}</div>
    <div class="doc-card-name">${d.name}</div>
    <div class="doc-card-meta">${d.type} · ${d.date}</div>
    <div class="doc-tags">
      <span class="tag">${d.status}</span>
      <span class="tag confidence ${confCls}" style="background:transparent; padding:0;">${d.confidence||'—'}%</span>
    </div>
  </div>`;
}
function filterRepo(){
  const q = (document.getElementById('repo-search').value||'').toLowerCase();
  const type = document.getElementById('repo-type').value;
  const status = document.getElementById('repo-status').value;
  document.querySelectorAll('#repo-cards .doc-card').forEach(c=>{
    const matchQ = !q || c.dataset.name.includes(q);
    const matchType = !type || c.dataset.type===type;
    const matchStatus = !status || c.dataset.status===status;
    c.style.display = (matchQ && matchType && matchStatus) ? '' : 'none';
  });
}

/* ---------- TRACEABILITY ---------- */
function pageTraceability(){
  return `
  <div class="page-head">
    <div><div class="page-title">Traceability</div><div class="page-sub">Every AI-generated statement can be traced back to its original source, page and dataset cell.</div></div>
  </div>
  <div class="card">
    <div class="card-title-row"><div class="card-title">Example trace — Production statement</div><div class="card-meta">explainable AI chain</div></div>
    <div class="trace-chain">
      <div class="trace-node">
        <div class="trace-marker">1</div>
        <div class="trace-content">
          <div class="trace-label">Generated Statement</div>
          <div class="trace-value">"Production increased by 8.4% compared with the previous financial year."</div>
        </div>
      </div>
      <div class="trace-node">
        <div class="trace-marker">2</div>
        <div class="trace-content">
          <div class="trace-label">Extracted Data</div>
          <div class="trace-value">FY2025-26 production: 762 MT · FY2024-25 production: 703 MT</div>
          <div class="trace-detail">extracted field: total_production_mt</div>
        </div>
      </div>
      <div class="trace-node">
        <div class="trace-marker">3</div>
        <div class="trace-content">
          <div class="trace-label">Source Document</div>
          <div class="trace-value">Annual_Report_2024-25_SECL.pdf</div>
          <div class="trace-detail">Document ID: DOC-1005</div>
        </div>
      </div>
      <div class="trace-node">
        <div class="trace-marker">4</div>
        <div class="trace-content">
          <div class="trace-label">Page / Section</div>
          <div class="trace-value">Page 42 — "Production Performance" table</div>
        </div>
      </div>
      <div class="trace-node">
        <div class="trace-marker">5</div>
        <div class="trace-content">
          <div class="trace-label">Original Evidence</div>
          <div class="trace-value">Production_2024_25.xlsx</div>
          <div class="trace-detail">Cell B17 · validated 27 Aug 2026 · confidence 98.1%</div>
        </div>
      </div>
    </div>
  </div>
  <div class="card section-gap">
    <div class="card-title-row"><div class="card-title">Trace another statement</div></div>
    <div class="filter-row">
      <select class="select-f" id="trace-select" style="min-width:320px;">
        <option>"Estimated resource for Seam IV is 184.6 MT."</option>
        <option>"Nigahi OC shows declining production this quarter."</option>
        <option>"97.2% of documents pass validation without manual correction."</option>
      </select>
      <button class="btn btn-sm btn-solid-green" onclick="traceCustom()">Trace</button>
    </div>
    <div id="trace-custom-result"></div>
  </div>
  `;
}
function traceCustom(){
  const stmt = document.getElementById('trace-select').value;
  const box = document.getElementById('trace-custom-result');
  box.innerHTML = `
    <div class="trace-chain" style="margin-top:16px;">
      <div class="trace-node"><div class="trace-marker">1</div><div class="trace-content"><div class="trace-label">Statement</div><div class="trace-value">${stmt}</div></div></div>
      <div class="trace-node"><div class="trace-marker">2</div><div class="trace-content"><div class="trace-label">Source Document</div><div class="trace-value">${pick(DOCS).name}</div></div></div>
      <div class="trace-node"><div class="trace-marker">3</div><div class="trace-content"><div class="trace-label">Page / Cell</div><div class="trace-value">Page ${Math.floor(rnd(5,60))} · Cell ${pick(['B12','C7','D19','A24'])}</div><div class="trace-detail">confidence ${rnd(89,99)}%</div></div></div>
    </div>`;
}

/* ---------- WORKFLOW MONITORING ---------- */
function pageWorkflow(){
  return `
  <div class="page-head">
    <div><div class="page-title">System &amp; Workflow Monitoring</div><div class="page-sub">Live status of document processing, report generation and validation jobs.</div></div>
  </div>
  <div class="grid kpi-grid" style="grid-template-columns:repeat(5,1fr);">
    <div class="card kpi-card"><div class="kpi-label">Docs in queue</div><div class="kpi-value">18</div></div>
    <div class="card kpi-card"><div class="kpi-label">Reports queued</div><div class="kpi-value">4</div></div>
    <div class="card kpi-card"><div class="kpi-label">AI jobs running</div><div class="kpi-value">7</div></div>
    <div class="card kpi-card"><div class="kpi-label">Failed jobs (24h)</div><div class="kpi-value" style="color:var(--red)">3</div></div>
    <div class="card kpi-card"><div class="kpi-label">Avg processing time</div><div class="kpi-value">42s</div></div>
  </div>
  <div class="card">
    <div class="card-title-row"><div class="card-title">Active jobs</div></div>
    <table>
      <thead><tr><th>Job ID</th><th>Type</th><th>Subsidiary</th><th>Progress</th><th>Status</th></tr></thead>
      <tbody>
        ${['Document extraction','Report generation','Validation sweep','Entity re-indexing','Table extraction','Topic modeling'].map((t,i)=>{
          const pct = Math.floor(rnd(15,98));
          const status = pct>90?'Completed':pct>40?'Running':'Queued';
          const badge = status==='Completed'?'badge-pass':status==='Running'?'badge-info':'badge-neutral';
          return `<tr><td class="mono">JOB-${8801+i}</td><td>${t}</td><td>${pick(SUBSIDIARIES)}</td>
          <td style="width:160px;"><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div></td>
          <td><span class="badge ${badge}">${status}</span></td></tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>
  `;
}

/* ---------- AFTER RENDER HOOKS ---------- */
function afterRenderHooks(id){
  // placeholder for page-specific init logic if needed later
}

/* Close sidebar on nav click for mobile */
document.addEventListener('click', function(e){
  if(e.target.closest('.nav-item') && window.innerWidth<=980){
    document.getElementById('sidebar').classList.remove('open');
  }
});