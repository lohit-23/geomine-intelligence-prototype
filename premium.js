// premium.js - Adds premium interactive elements

document.addEventListener("DOMContentLoaded", () => {
    // 1. Cursor glow effect
    const cursorGlow = document.createElement('div');
    cursorGlow.id = 'cursor-glow';
    Object.assign(cursorGlow.style, {
        position: 'fixed',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(52, 211, 153, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        transition: 'width 0.2s, height 0.2s',
        display: 'none'
    });
    document.body.appendChild(cursorGlow);

    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    let moveTimeout;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorGlow.style.display = 'block';
        cursorGlow.style.left = mouseX + 'px';
        cursorGlow.style.top = mouseY + 'px';
        
        isMouseMoving = true;
        clearTimeout(moveTimeout);
        
        // Expand slightly when moving fast
        cursorGlow.style.width = '60px';
        cursorGlow.style.height = '60px';

        moveTimeout = setTimeout(() => {
            isMouseMoving = false;
            cursorGlow.style.width = '30px';
            cursorGlow.style.height = '30px';
        }, 150);
    });

    document.addEventListener('mouseleave', () => {
        cursorGlow.style.display = 'none';
    });

    document.addEventListener('mousedown', () => {
        cursorGlow.style.background = 'radial-gradient(circle, rgba(52, 211, 153, 0.25) 0%, rgba(0, 0, 0, 0) 70%)';
        cursorGlow.style.transform = 'translate(-50%, -50%) scale(0.9)';
    });

    document.addEventListener('mouseup', () => {
        cursorGlow.style.background = 'radial-gradient(circle, rgba(52, 211, 153, 0.15) 0%, rgba(0, 0, 0, 0) 70%)';
        cursorGlow.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // 2. Add click ripple effect to buttons
    const addRipple = (e) => {
        const btn = e.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${e.clientY - btn.getBoundingClientRect().top - radius}px`;
        circle.style.position = 'absolute';
        circle.style.borderRadius = '50%';
        circle.style.background = 'rgba(255, 255, 255, 0.3)';
        circle.style.transform = 'scale(0)';
        circle.style.animation = 'ripple 600ms linear';
        circle.style.pointerEvents = 'none';

        const ripple = btn.querySelector(".ripple-span");
        if (ripple) {
            ripple.remove();
        }

        circle.classList.add("ripple-span");
        btn.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 600);
    };

    // We must ensure buttons have relative positioning and overflow hidden for the ripple
    const styleRipple = document.createElement('style');
    styleRipple.innerHTML = `
        .btn, .nav-item { position: relative; overflow: hidden; }
        @keyframes ripple {
            to { transform: scale(4); opacity: 0; }
        }
    `;
    document.head.appendChild(styleRipple);

    // Delegate ripple event to document since buttons are generated dynamically
    document.addEventListener('mousedown', (e) => {
        const btn = e.target.closest('.btn, .nav-item');
        if(btn) addRipple({ currentTarget: btn, clientX: e.clientX, clientY: e.clientY });
    });
});
