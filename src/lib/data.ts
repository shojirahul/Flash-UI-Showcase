export interface Snippet {
    id: string;
    prompt: string;
    type: string;
    html: string;
    thumbnail?: string;
}

export const SAMPLE_SNIPPETS: Snippet[] = [
    {
        id: "tectonic-assembly",
        prompt: "isometric photo with label viewer",
        type: "Tectonic Interface",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link rel="preconnect" href="https://fonts.googleapis.com">
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;800&family=JetBrains+Mono:wght@300;500&display=swap" rel="stylesheet">
 <style>
 :root {
 --bg: #0c0c0e;
 --plate-surface: #1a1a1e;
 --plate-edge: #2a2a2f;
 --accent: #00f2ff;
 --text-main: #e0e0e6;
 --text-dim: #6b6b7a;
 --shadow-deep: 0 50px 100px -20px rgba(0,0,0,0.7);
 --transition-smooth: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
 }

 * { margin: 0; padding: 0; box-sizing: border-box; }

 body {
 background-color: var(--bg);
 color: var(--text-main);
 font-family: 'Inter', sans-serif;
 height: 100vh;
 overflow: hidden;
 display: flex;
 align-items: center;
 justify-content: center;
 perspective: 2000px;
 }

 /* Tectonic Base Assembly */
 .stage {
 position: relative;
 width: 900px;
 height: 600px;
 transform-style: preserve-3d;
 animation: stageEntry 1.5s ease-out forwards;
 }

 @keyframes stageEntry {
 from { opacity: 0; transform: translateY(100px) rotateX(20deg); }
 to { opacity: 1; transform: translateY(0) rotateX(15deg); }
 }

 .bas-relief-slab {
 position: absolute;
 width: 100%;
 height: 100%;
 background: var(--plate-surface);
 transform: rotateX(55deg) rotateZ(-35deg);
 box-shadow: 
 -1px 1px 0px var(--plate-edge),
 -2px 2px 0px var(--plate-edge),
 -10px 10px 40px rgba(0,0,0,0.5);
 border: 1px solid rgba(255,255,255,0.05);
 display: flex;
 align-items: center;
 justify-content: center;
 overflow: hidden;
 }

 .isometric-photo-wrapper {
 position: relative;
 width: 85%;
 height: 85%;
 transform: translateZ(20px);
 background: #000;
 overflow: hidden;
 }

 .isometric-photo-wrapper img {
 width: 100%;
 height: 100%;
 object-fit: cover;
 filter: grayscale(0.4) contrast(1.1) brightness(0.8);
 transition: var(--transition-smooth);
 }

 .isometric-photo-wrapper:hover img {
 filter: grayscale(0) contrast(1.1) brightness(1);
 transform: scale(1.05);
 }

 /* Label Markers */
 .pin {
 position: absolute;
 width: 12px;
 height: 12px;
 background: var(--accent);
 border-radius: 50%;
 transform: translateZ(40px);
 cursor: pointer;
 z-index: 10;
 }

 .pin::before {
 content: '';
 position: absolute;
 top: 50%; left: 50%;
 width: 100%; height: 100%;
 background: var(--accent);
 border-radius: 50%;
 transform: translate(-50%, -50%);
 animation: pulse 2s infinite;
 }

 @keyframes pulse {
 0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
 100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
 }

 /* Label UI Plate */
 .label-plate {
 position: absolute;
 background: rgba(26, 26, 30, 0.95);
 backdrop-filter: blur(20px);
 border-left: 3px solid var(--accent);
 padding: 20px;
 width: 280px;
 transform: translateZ(80px) rotateX(-15deg) rotateY(15deg);
 opacity: 0;
 pointer-events: none;
 transition: var(--transition-smooth);
 box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
 }

 .pin:hover + .label-plate {
 opacity: 1;
 transform: translateZ(100px) rotateX(-15deg) rotateY(15deg);
 pointer-events: auto;
 }

 /* Typography */
 .label-plate h2 {
 font-size: 0.75rem;
 text-transform: uppercase;
 letter-spacing: 0.2em;
 color: var(--text-dim);
 margin-bottom: 8px;
 font-weight: 800;
 }

 .label-plate p {
 font-size: 1.1rem;
 font-weight: 300;
 line-height: 1.4;
 margin-bottom: 15px;
 }

 .data-stream {
 font-family: 'JetBrains Mono', monospace;
 font-size: 0.7rem;
 color: var(--accent);
 display: flex;
 flex-direction: column;
 gap: 4px;
 }
 </style>
</head>
<body>

 <div class="stage">
 <div class="bas-relief-slab">
 <div class="isometric-photo-wrapper">
 <!-- Using a high-quality abstract architectural photo placeholder -->
 <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" alt="Isometric Structure">
 
 <!-- Interaction Node 1 -->
 <div class="pin" style="top: 30%; left: 40%;"></div>
 <div class="label-plate" style="top: 10%; left: 45%;">
 <h2>Structural Node</h2>
 <p>Primary load-bearing cantilever assembly.</p>
 <div class="data-stream">
 <span>LAT: 34.02 // LNG: -118.49</span>
 <span>STRESS: 44.2kN</span>
 <span>STATUS: OPTIMAL</span>
 </div>
 </div>

 <!-- Interaction Node 2 -->
 <div class="pin" style="top: 60%; left: 70%;"></div>
 <div class="label-plate" style="top: 40%; left: 75%;">
 <h2>Thermal Vent</h2>
 <p>Passive cooling duct with carbon-fiber mesh.</p>
 <div class="data-stream">
 <span>TEMP: 22.4Â°C</span>
 <span>FLOW: 12m/s</span>
 <span>EFFICIENCY: 94%</span>
 </div>
 </div>

 <!-- Interaction Node 3 -->
 <div class="pin" style="top: 20%; left: 15%;"></div>
 <div class="label-plate" style="top: 5%; left: 20%;">
 <h2>Glazing System</h2>
 <p>Triple-layered monolithic glass facade.</p>
 <div class="data-stream">
 <span>UV_FILTER: 99.8%</span>
 <span>OPACITY: VAR_DYNAMIC</span>
 <span>REFRACT: 1.52</span>
 </div>
 </div>

 </div>
 </div>
 </div>

 <script>
 // Subtle tilt interaction
 const stage = document.querySelector('.stage');
 document.addEventListener('mousemove', (e) => {
 const x = (window.innerWidth / 2 - e.pageX) / 50;
 const y = (window.innerHeight / 2 - e.pageY) / 50;
 stage.style.transform = \`rotateX(\${15 + y}deg) rotateY(\${x}deg)\`;
 });

 // Add depth to pins on scroll or interaction
 const pins = document.querySelectorAll('.pin');
 pins.forEach(pin => {
 pin.addEventListener('mouseenter', () => {
 document.querySelector('.isometric-photo-wrapper img').style.opacity = '0.5';
 });
 pin.addEventListener('mouseleave', () => {
 document.querySelector('.isometric-photo-wrapper img').style.opacity = '1';
 });
 });
 </script>
</body>
</html>`
    },
    {
        id: "luminous-vellum",
        prompt: "isometric photo with label viewer",
        type: "Luminous Glass",
        html: `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Luminous Vellum Isometric Viewer</title> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"> <style> :root { --bg: #030407; --vellum-bg: rgba(255, 255, 255, 0.03); --vellum-border: rgba(255, 255, 255, 0.12); --luminous-cyan: #00f2ff; --luminous-glow: rgba(0, 242, 255, 0.4); --accent-purple: #9d00ff; --font-sans: 'Inter', system-ui, -apple-system, sans-serif; --font-mono: 'JetBrains Mono', monospace; --iso-rotation: rotateX(54deg) rotateZ(-45deg); } * { margin: 0; padding: 0; box-sizing: border-box; -webkit-font-smoothing: antialiased; } body { background-color: var(--bg); background-image: radial-gradient(circle at 50% 50%, rgba(20, 25, 40, 1) 0%, rgba(3, 4, 7, 1) 100%), url("https://www.transparenttextures.com/patterns/stardust.png"); color: #fff; font-family: var(--font-sans); height: 100vh; overflow: hidden; display: flex; align-items: center; justify-content: center; } /* The Stage */ .scene { position: relative; width: 1000px; height: 700px; perspective: 2000px; display: flex; align-items: center; justify-content: center; } /* Isometric Container */ .iso-stack { position: relative; transform-style: preserve-3d; transform: var(--iso-rotation); transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); } .scene:hover .iso-stack { transform: rotateX(50deg) rotateZ(-40deg) translateY(-20px); } /* Luminous Vellum Base */ .vellum-surface { position: relative; width: 450px; height: 300px; background: var(--vellum-bg); backdrop-filter: blur(12px) saturate(180%); border: 1px solid var(--vellum-border); box-shadow: 0 0 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.05); padding: 10px; transform-style: preserve-3d; } .vellum-surface::after { content: ''; position: absolute; inset: -1px; background: linear-gradient(135deg, var(--luminous-cyan), transparent, var(--accent-purple)); z-index: -1; opacity: 0.3; filter: blur(2px); } /* The Image */ .photo-layer { width: 100%; height: 100%; background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000'); background-size: cover; background-position: center; filter: grayscale(0.2) contrast(1.1); position: relative; overflow: hidden; } .photo-layer::before { content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent); animation: sweep 4s infinite linear; } @keyframes sweep { 0% { left: -100%; } 100% { left: 200%; } } /* Floating Label Points */ .label-point { position: absolute; width: 12px; height: 12px; background: var(--luminous-cyan); border-radius: 50%; transform-style: preserve-3d; box-shadow: 0 0 15px var(--luminous-cyan); cursor: pointer; z-index: 10; } .label-point::after { content: ''; position: absolute; width: 1px; background: linear-gradient(to top, var(--luminous-cyan), transparent); bottom: 6px; left: 50%; height: 120px; transform: rotateX(-90deg); transform-origin: bottom; } /* Suspended Label Cards */ .floating-label { position: absolute; bottom: 140px; left: -80px; width: 200px; background: rgba(10, 10, 15, 0.85); backdrop-filter: blur(8px); border-left: 3px solid var(--luminous-cyan); padding: 12px; transform: rotateX(-90deg) rotateY(45deg); /* Counter-rotate to face camera */ transform-origin: bottom left; opacity: 0; transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); pointer-events: none; } .label-point:hover .floating-label { opacity: 1; transform: rotateX(-90deg) rotateY(45deg) translateY(-10px); } .label-point:nth-child(2) .floating-label { border-left-color: var(--accent-purple); } .label-point:nth-child(2) { background: var(--accent-purple); box-shadow: 0 0 15px var(--accent-purple); } .label-point:nth-child(2)::after { background: linear-gradient(to top, var(--accent-purple), transparent); } /* Typography */ .label-header { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--luminous-cyan); margin-bottom: 4px; font-weight: 700; } .label-point:nth-child(2) .label-header { color: var(--accent-purple); } .label-title { font-family: var(--font-mono); font-size: 0.85rem; color: #fff; margin-bottom: 8px; } .label-stats { display: flex; gap: 10px; font-family: var(--font-mono); font-size: 0.65rem; color: rgba(255, 255, 255, 0.5); } .stat-val { color: #fff; } /* UI Decorative Elements */ .ui-decoration { position: absolute; font-family: var(--font-mono); font-size: 10px; color: rgba(255, 255, 255, 0.2); text-transform: uppercase; letter-spacing: 2px; } .coord-top { top: -40px; left: 0; } .coord-right { top: 0; right: -60px; transform: rotate(90deg); } .scanline { position: absolute; width: 100%; height: 1px; background: rgba(0, 242, 255, 0.2); box-shadow: 0 0 8px var(--luminous-cyan); top: 0; animation: scan 6s infinite ease-in-out; } @keyframes scan { 0% { top: 0%; opacity: 0; } 5% { opacity: 1; } 95% { opacity: 1; } 100% { top: 100%; opacity: 0; } } /* Title Mask */ .main-header { position: absolute; bottom: 60px; left: 60px; z-index: 100; } .main-header h1 { font-size: 4rem; font-weight: 700; line-height: 0.9; letter-spacing: -0.04em; background: linear-gradient(to bottom, #fff, rgba(255,255,255,0.3)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; } .main-header p { font-family: var(--font-mono); color: var(--luminous-cyan); margin-top: 10px; font-size: 0.9rem; opacity: 0.8; } </style> </head> <body> <div class="main-header"> <h1>VELLUM<br>SPACE</h1> <p>// ISOMETRIC_PROJECTION_V4.02</p> </div> <div class="scene"> <div class="iso-stack"> <!-- Labels (Anchored to the 3D space) --> <div class="label-point" style="top: 20%; left: 30%;"> <div class="floating-label"> <div class="label-header">Structure Node</div> <div class="label-title">LUMINESCENT_ARCH</div> <div class="label-stats"> <div>Z-AXIS <span class="stat-val">442px</span></div> <div>OPAC <span class="stat-val">0.12</span></div> </div> </div> </div> <div class="label-point" style="bottom: 25%; right: 25%;"> <div class="floating-label"> <div class="label-header">Spectral Analysis</div> <div class="label-title">NEBULOUS_CORE</div> <div class="label-stats"> <div>FREQ <span class="stat-val">840THz</span></div> <div>TEMP <span class="stat-val">12K</span></div> </div> </div> </div> <!-- The Photo Frame --> <div class="vellum-surface"> <div class="ui-decoration coord-top">MTX_REF_0029 // 45.0001</div> <div class="ui-decoration coord-right">ALTITUDE_LOCK</div> <div class="photo-layer"> <div class="scanline"></div> </div> </div> <!-- Lower decorative plane --> <div class="vellum-surface" style="transform: translateZ(-40px); opacity: 0.3; background: transparent; border: 1px dashed var(--luminous-cyan);"></div> </div> </div> <script> // Subtle Mouse Interaction const scene = document.querySelector('.scene'); const stack = document.querySelector('.iso-stack'); scene.addEventListener('mousemove', (e) => { const { clientX, clientY } = e; const { innerWidth, innerHeight } = window; const moveX = (clientX - innerWidth / 2) / 40; const moveY = (clientY - innerHeight / 2) / 40; stack.style.transform = \`rotateX(\${54 - moveY}deg) rotateZ(\${-45 + moveX}deg)\`; }); scene.addEventListener('mouseleave', () => { stack.style.transform = \`rotateX(54deg) rotateZ(-45deg)\`; }); </script> </body> </html>`
    },
    {
        id: "zen-about",
        prompt: "zen minimalist about page",
        type: "Zen Vellum",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zen About Us â€” Vellum Concept</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Mono&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #f5f4f0;
            --vellum: rgba(255, 255, 255, 0.45);
            --ink: #1a1a1a;
            --accent: #5e635e;
            --grain: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
        }

        body {
            background-color: var(--bg);
            color: var(--ink);
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
            line-height: 1.4;
        }

        /* Paper Texture Overlay */
        body::before {
            content: "";
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: var(--grain);
            opacity: 0.04;
            pointer-events: none;
            z-index: 9999;
        }

        .vellum-layer {
            background: var(--vellum);
            backdrop-filter: blur(12px) saturate(110%);
            -webkit-backdrop-filter: blur(12px) saturate(110%);
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.02);
            transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        header {
            height: 100vh;
            display: flex;
            align-items: center;
            padding: 0 8vw;
            position: relative;
        }

        .hero-title {
            font-size: clamp(4rem, 12vw, 14rem);
            font-weight: 800;
            letter-spacing: -0.04em;
            line-height: 0.85;
            z-index: 1;
            mix-blend-mode: multiply;
        }

        .mono {
            font-family: 'Space Mono', monospace;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-size: 0.75rem;
        }

        .hero-image-container {
            position: absolute;
            right: 8vw;
            top: 20%;
            width: 40vw;
            height: 60vh;
            background: #e0e0dc;
            overflow: hidden;
            z-index: 0;
        }

        .hero-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(100%) contrast(1.1);
            opacity: 0.8;
        }

        .hero-vellum-block {
            position: absolute;
            right: 12vw;
            bottom: 15vh;
            padding: 3rem;
            max-width: 400px;
            z-index: 2;
        }

        section.about-grid {
            padding: 15vh 8vw;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 2rem;
            position: relative;
        }

        .floating-text {
            grid-column: 2 / span 5;
            font-size: 2rem;
            font-weight: 300;
            padding-bottom: 20vh;
        }

        .value-card {
            grid-column: 7 / span 5;
            padding: 4rem;
            margin-top: -10vh;
            z-index: 3;
        }

        .overlap-row {
            grid-column: 1 / span 12;
            display: flex;
            gap: 1rem;
            align-items: flex-end;
            margin-top: 10vh;
        }

        .image-card {
            width: 300px;
            height: 400px;
            background: #ddd;
            flex-shrink: 0;
        }

        .vellum-overlay-text {
            width: 450px;
            padding: 4rem;
            margin-left: -100px;
            margin-bottom: -50px;
            position: relative;
            z-index: 5;
        }

        .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        .line {
            width: 60px;
            height: 1px;
            background: var(--ink);
            margin: 2rem 0;
        }

        footer {
            padding: 10vh 8vw;
            border-top: 1px solid rgba(0,0,0,0.05);
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        .cursor-blob {
            position: fixed;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
            pointer-events: none;
            z-index: -1;
            transform: translate(-50%, -50%);
            transition: top 0.1s ease-out, left 0.1s ease-out;
        }

        @media (max-width: 900px) {
            header { padding-top: 10vh; align-items: flex-start; }
            .hero-image-container { width: 80vw; height: 40vh; top: 40vh; }
            .hero-vellum-block { right: 8vw; bottom: 5vh; }
            .floating-text, .value-card { grid-column: 1 / span 12; margin-top: 0; }
            .overlap-row { flex-direction: column; align-items: flex-start; }
            .vellum-overlay-text { width: 100%; margin-left: 0; margin-bottom: 0; }
        }
    </style>
</head>
<body>

    <div class="cursor-blob" id="blob"></div>

    <header>
        <div class="hero-image-container">
            <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=2067" alt="Zen Interior">
        </div>
        <h1 class="hero-title reveal">PURE<br>ESSENCE</h1>
        
        <div class="vellum-layer hero-vellum-block reveal">
            <p class="mono">Studio / 01</p>
            <div class="line"></div>
            <p>We craft environments that breathe. Minimalist forms meeting the warmth of organic materiality.</p>
        </div>
    </header>

    <section class="about-grid">
        <div class="floating-text reveal">
            We believe that space is the ultimate luxury. By stripping away the noise, we reveal the quiet soul of the object.
        </div>

        <div class="vellum-layer value-card reveal">
            <p class="mono" style="color: var(--accent);">Our Philosophy</p>
            <h2 style="font-size: 2.5rem; margin: 1.5rem 0; font-weight: 500;">Less, but better.</h2>
            <p style="color: #666; font-size: 1.1rem;">Drawing inspiration from the translucent layers of traditional parchment, we design with transparency and depth in mind. Every line is intentional. Every void is purposeful.</p>
        </div>

        <div class="overlap-row">
            <div class="image-card reveal">
                <img src="https://images.unsplash.com/photo-1518005020480-1090c13706a0?auto=format&fit=crop&q=80&w=1000" alt="Detail" style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(1);">
            </div>
            <div class="vellum-layer vellum-overlay-text reveal">
                <p class="mono">Craftsmanship</p>
                <div class="line"></div>
                <p style="font-size: 1.25rem;">Our process is a slow dialogue between the material and the maker. We honor the grain, the texture, and the imperfections that make things human.</p>
            </div>
        </div>
    </section>

    <footer>
        <div>
            <p class="mono">Since 2024</p>
            <p style="margin-top: 1rem;">Based in the Silence.</p>
        </div>
        <div style="text-align: right;">
            <p class="mono">Contact</p>
            <p style="font-size: 1.5rem; margin-top: 0.5rem; text-decoration: underline;">hello@zen-studio.ui</p>
        </div>
    </footer>

    <script>
        // Reveal on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Parallax Effect for Vellum Layers
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const layers = document.querySelectorAll('.vellum-layer');
            
            layers.forEach((layer, index) => {
                const speed = (index + 1) * 0.05;
                layer.style.transform = \`translateY(\${scrolled * speed}px)\`;
            });
        });

        // Subtle Cursor Blob
        const blob = document.getElementById('blob');
        window.addEventListener('mousemove', (e) => {
            blob.style.left = e.clientX + 'px';
            blob.style.top = e.clientY + 'px';
        });
    </script>
</body>
</html>`
    },
    {
        id: "phosphor-vision",
        prompt: "digital cohesion manifesto",
        type: "Ionized Vapor Suspension",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About | Phosphor Vision</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&family=JetBrains+Mono:wght@300;500&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-deep: #020408;
            --phosphor-cyan: #00f2ff;
            --phosphor-purple: #7000ff;
            --vapor-white: rgba(255, 255, 255, 0.85);
            --mono-font: 'JetBrains Mono', monospace;
            --sans-font: 'Inter', sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--bg-deep);
            color: var(--vapor-white);
            font-family: var(--sans-font);
            overflow-x: hidden;
            height: 100vh;
        }

        /* --- PHOSPHORESCENT VAPOR STAGE --- */
        .stage {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 0;
            filter: blur(60px) contrast(25);
            background: var(--bg-deep);
            overflow: hidden;
            pointer-events: none;
        }

        .blob {
            position: absolute;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: var(--phosphor-cyan);
            opacity: 0.6;
            mix-blend-mode: screen;
            animation: move 25s infinite alternate ease-in-out;
        }

        .blob:nth-child(2) {
            background: var(--phosphor-purple);
            width: 500px;
            height: 500px;
            left: 30%;
            top: 20%;
            animation-duration: 35s;
            animation-delay: -5s;
        }

        .blob:nth-child(3) {
            background: #0055ff;
            width: 350px;
            height: 350px;
            right: 10%;
            bottom: 10%;
            animation-duration: 30s;
            animation-delay: -10s;
        }

        @keyframes move {
            from { transform: translate(-20%, -20%) scale(1); }
            to { transform: translate(40%, 40%) scale(1.2) rotate(180deg); }
        }

        /* --- CONTENT LAYER --- */
        .ui-overlay {
            position: relative;
            z-index: 10;
            width: 100%;
            min-height: 100vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 4rem;
            align-items: center;
        }

        .nav-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 2rem 4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 100;
        }

        .logo {
            font-family: var(--mono-font);
            font-weight: 500;
            letter-spacing: -1px;
            text-transform: uppercase;
            font-size: 0.9rem;
        }

        .menu-dot {
            width: 12px;
            height: 12px;
            background: var(--phosphor-cyan);
            box-shadow: 0 0 15px var(--phosphor-cyan);
            border-radius: 50%;
        }

        .hero-text-block {
            max-width: 600px;
        }

        .label {
            font-family: var(--mono-font);
            font-size: 0.75rem;
            text-transform: uppercase;
            color: var(--phosphor-cyan);
            letter-spacing: 4px;
            margin-bottom: 1.5rem;
            display: block;
            opacity: 0;
            transform: translateY(20px);
            animation: reveal 1s forwards 0.2s;
        }

        h1 {
            font-size: clamp(4rem, 8vw, 10rem);
            font-weight: 900;
            line-height: 0.85;
            letter-spacing: -0.04em;
            margin-bottom: 2rem;
            opacity: 0;
            transform: translateY(40px);
            animation: reveal 1s forwards 0.4s;
        }

        .description {
            font-size: 1.1rem;
            line-height: 1.6;
            color: rgba(255,255,255,0.6);
            max-width: 400px;
            opacity: 0;
            transform: translateY(30px);
            animation: reveal 1s forwards 0.6s;
        }

        /* --- STATS ASYMMETRY --- */
        .stats-grid {
            justify-self: end;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 4rem;
            padding-right: 4rem;
        }

        .stat-item {
            border-left: 1px solid rgba(255,255,255,0.1);
            padding-left: 1.5rem;
            opacity: 0;
            animation: reveal 1s forwards 0.8s;
        }

        .stat-value {
            font-family: var(--mono-font);
            font-size: 2.5rem;
            display: block;
            margin-bottom: 0.5rem;
        }

        .stat-label {
            font-family: var(--mono-font);
            font-size: 0.7rem;
            text-transform: uppercase;
            opacity: 0.4;
            letter-spacing: 2px;
        }

        @keyframes reveal {
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- GLASS INTERACTIVE ELEMENTS --- */
        .cta-button {
            margin-top: 3rem;
            display: inline-flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 2rem;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            color: white;
            text-decoration: none;
            font-family: var(--mono-font);
            font-size: 0.8rem;
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            overflow: hidden;
            position: relative;
        }

        .cta-button:hover {
            border-color: var(--phosphor-cyan);
            color: var(--bg-deep);
            background: var(--phosphor-cyan);
            box-shadow: 0 0 30px rgba(0, 242, 255, 0.4);
        }

        /* Grain texture overlay */
        .grain {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url("https://grainy-gradients.vercel.app/noise.svg");
            opacity: 0.04;
            pointer-events: none;
            z-index: 5;
            mix-blend-mode: overlay;
        }

        @media (max-width: 900px) {
            .ui-overlay {
                grid-template-columns: 1fr;
                padding: 2rem;
                gap: 4rem;
            }
            .stats-grid {
                justify-self: start;
                padding-right: 0;
            }
        }
    </style>
</head>
<body>

    <div class="grain"></div>

    <div class="stage">
        <div class="blob" id="blob-1"></div>
        <div class="blob" id="blob-2"></div>
        <div class="blob" id="blob-3"></div>
    </div>

    <header class="nav-header">
        <div class="logo">P.Vision // LABS</div>
        <div class="menu-dot"></div>
    </header>

    <main class="ui-overlay">
        <section class="hero-text-block">
            <span class="label">Manifesto 01.</span>
            <h1>DIGITAL<br>COHESION</h1>
            <p class="description">
                We engineer phosphorescent digital experiences where vaporous logic meets surgical precision. Our philosophy is rooted in fluid cohesionâ€”blurring the line between user and interface.
            </p>
            <a href="#" class="cta-button">
                INITIATE CONTACT
                <span>â†’</span>
            </a>
        </section>

        <section class="stats-grid">
            <div class="stat-item" style="animation-delay: 0.8s;">
                <span class="stat-value">124+</span>
                <span class="stat-label">Deployments</span>
            </div>
            <div class="stat-item" style="animation-delay: 0.9s;">
                <span class="stat-value">0.02</span>
                <span class="stat-label">Latency ms</span>
            </div>
            <div class="stat-item" style="animation-delay: 1.0s;">
                <span class="stat-value">99%</span>
                <span class="stat-label">Cohesion</span>
            </div>
            <div class="stat-item" style="animation-delay: 1.1s;">
                <span class="stat-value">6k</span>
                <span class="stat-label">Neurons</span>
            </div>
        </section>
    </main>

    <script>
        const blobs = document.querySelectorAll('.blob');
        
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const xPct = (clientX / window.innerWidth - 0.5) * 50;
            const yPct = (clientY / window.innerHeight - 0.5) * 50;

            blobs.forEach((blob, index) => {
                const factor = (index + 1) * 0.2;
                blob.style.transform = \`translate(\${xPct * factor}px, \${yPct * factor}px)\`;
            });
        });

        // Add random slight movement to simulate vapor drift
        function drift() {
            blobs.forEach((blob) => {
                const driftX = (Math.random() - 0.5) * 20;
                const driftY = (Math.random() - 0.5) * 20;
                blob.style.transition = 'transform 10s ease-in-out';
            });
        }
        setInterval(drift, 10000);
    </script>
</body>
</html>`
    },
    {
        id: "bioluminescent-slider",
        prompt: "kinetic anodized overlap",
        type: "Vitreous Prismatic Laminate",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bioluminescent Membrane Slider</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;800&family=Space+Mono&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #030305;
            --membrane-glow: rgba(0, 255, 221, 0.15);
            --membrane-edge: rgba(0, 255, 221, 0.4);
            --accent-primary: #00ffd5;
            --accent-secondary: #7000ff;
            --font-main: 'Inter', sans-serif;
            --font-mono: 'Space Mono', monospace;
            --transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
        }

        body {
            background-color: var(--bg);
            color: #fff;
            font-family: var(--font-main);
            height: 100vh;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Organic Background Noise */
        body::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 50% 50%, rgba(112, 0, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(0, 255, 221, 0.03) 0%, transparent 40%);
            pointer-events: none;
        }

        .stage {
            position: relative;
            width: 100vw;
            height: 80vh;
            perspective: 2000px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .slider-container {
            position: relative;
            width: 600px;
            height: 400px;
            transform-style: preserve-3d;
        }

        .membrane-card {
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
            backdrop-filter: blur(20px) saturate(150%);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 40px 100px 40px 100px; /* Tensioned organic shape */
            padding: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: var(--transition);
            box-shadow: 
                0 0 40px rgba(0, 0, 0, 0.5),
                inset 0 0 20px var(--membrane-glow);
            opacity: 0;
            pointer-events: none;
            transform: translateZ(-200px) rotateY(15deg);
        }

        /* The Bioluminescent Pulse */
        .membrane-card::after {
            content: "";
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border-radius: inherit;
            background: linear-gradient(45deg, transparent, var(--membrane-edge), transparent);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            opacity: 0.5;
            animation: pulse 4s infinite alternate ease-in-out;
        }

        @keyframes pulse {
            0% { opacity: 0.3; filter: brightness(1); }
            100% { opacity: 0.8; filter: brightness(1.5) drop-shadow(0 0 10px var(--accent-primary)); }
        }

        .membrane-card.active {
            opacity: 1;
            pointer-events: all;
            transform: translateZ(0) rotateY(0);
            z-index: 10;
        }

        .membrane-card.prev {
            opacity: 0.4;
            transform: translateX(-60%) translateZ(-300px) rotateY(45deg);
        }

        .membrane-card.next {
            opacity: 0.4;
            transform: translateX(60%) translateZ(-300px) rotateY(-45deg);
        }

        .card-data {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            color: var(--accent-primary);
            text-transform: uppercase;
            letter-spacing: 4px;
            margin-bottom: 1rem;
        }

        .card-title {
            font-size: 4rem;
            font-weight: 800;
            line-height: 0.9;
            background: linear-gradient(to right, #fff, rgba(255,255,255,0.4));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 2rem;
        }

        .card-description {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.6);
            max-width: 80%;
            line-height: 1.6;
        }

        .controls {
            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 2rem;
            z-index: 100;
        }

        .nav-btn {
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            cursor: pointer;
            font-family: var(--font-mono);
            transition: var(--transition);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
        }

        .nav-btn:hover {
            border-color: var(--accent-primary);
            color: var(--accent-primary);
            box-shadow: 0 0 20px var(--membrane-glow);
            transform: scale(1.1);
        }

        .nav-btn::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: var(--accent-primary);
            opacity: 0;
            transition: var(--transition);
            z-index: -1;
        }

        .nav-btn:active {
            transform: scale(0.9);
        }

        .indicators {
            position: absolute;
            right: 5%;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .dot {
            width: 4px;
            height: 20px;
            background: rgba(255, 255, 255, 0.1);
            transition: var(--transition);
            border-radius: 2px;
        }

        .dot.active {
            background: var(--accent-primary);
            height: 40px;
            box-shadow: 0 0 15px var(--accent-primary);
        }

        .deco-circle {
            position: absolute;
            width: 500px;
            height: 500px;
            border: 1px solid rgba(0, 255, 221, 0.05);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
        }

        .deco-circle-1 { top: -10%; left: -10%; animation: float 20s infinite linear; }
        .deco-circle-2 { bottom: -10%; right: -5%; animation: float 25s infinite linear reverse; }

        @keyframes float {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
        }

    </style>
</head>
<body>

    <div class="deco-circle deco-circle-1"></div>
    <div class="deco-circle deco-circle-2"></div>

    <div class="stage">
        <div class="slider-container" id="slider">
            <!-- Card 01 -->
            <div class="membrane-card active">
                <div class="card-content">
                    <div class="card-data">Protocol // 001</div>
                    <h2 class="card-title">ASTRAL<br>FLUIDS</h2>
                    <p class="card-description">Synchronized molecular alignment through tensioned membrane dynamics. Achieving 98% bioluminescent efficiency.</p>
                </div>
                <div class="card-data" style="margin:0">01 / 04</div>
            </div>

            <!-- Card 02 -->
            <div class="membrane-card next">
                <div class="card-content">
                    <div class="card-data">Protocol // 002</div>
                    <h2 class="card-title">NEURAL<br>MESH</h2>
                    <p class="card-description">Interconnected synaptic layers woven into the substrate. Real-time data visualization through fiber-optic veins.</p>
                </div>
                <div class="card-data" style="margin:0">02 / 04</div>
            </div>

            <!-- Card 03 -->
            <div class="membrane-card">
                <div class="card-content">
                    <div class="card-data">Protocol // 003</div>
                    <h2 class="card-title">VOID<br>CORE</h2>
                    <p class="card-description">Dark matter containment within pressurized elastic boundaries. Zero-point energy harvesting initiated.</p>
                </div>
                <div class="card-data" style="margin:0">03 / 04</div>
            </div>

            <!-- Card 04 -->
            <div class="membrane-card">
                <div class="card-content">
                    <div class="card-data">Protocol // 004</div>
                    <h2 class="card-title">PHASE<br>SHIFT</h2>
                    <p class="card-description">Dimensional oscillation at the perimeter of the tensioned surface. Stability confirmed at 440Hz.</p>
                </div>
                <div class="card-data" style="margin:0">04 / 04</div>
            </div>
        </div>
    </div>

    <div class="indicators" id="indicators">
        <div class="dot active"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>

    <div class="controls">
        <button class="nav-btn" id="prevBtn">&lt;</button>
        <button class="nav-btn" id="nextBtn">&gt;</button>
    </div>

    <script>
        const cards = document.querySelectorAll('.membrane-card');
        const dots = document.querySelectorAll('.dot');
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        const slider = document.getElementById('slider');
        
        let currentIndex = 0;

        function updateSlider() {
            cards.forEach((card, index) => {
                card.classList.remove('active', 'prev', 'next');
                dots[index].classList.remove('active');

                if (index === currentIndex) {
                    card.classList.add('active');
                    dots[index].classList.add('active');
                } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
                    card.classList.add('prev');
                } else if (index === (currentIndex + 1) % cards.length) {
                    card.classList.add('next');
                }
            });
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            updateSlider();
        });

        // Parallax tension effect
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            slider.style.transform = \`rotateY(\${xAxis}deg) rotateX(\${yAxis}deg)\`;
        });

        // Initial setup
        updateSlider();

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if(e.key === "ArrowRight") nextBtn.click();
            if(e.key === "ArrowLeft") prevBtn.click();
        });
    </script>
</body>
</html>`
    },
    {
        id: "liquid-metal",
        prompt: "poured aggregate geometry",
        type: "Oxidized Structural Scaffolding",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liquid Metal | About Us</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #050505;
            --chrome-1: #ffffff;
            --chrome-2: #8a8a8a;
            --chrome-3: #222222;
            --accent: #00f0ff;
            --font-sans: 'Inter', sans-serif;
            --font-mono: 'JetBrains Mono', monospace;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            cursor: none;
        }

        body {
            background-color: var(--bg);
            color: var(--chrome-1);
            font-family: var(--font-sans);
            overflow-x: hidden;
            height: 100vh;
        }

        /* --- LIQUID METAL BACKGROUND --- */
        .stage {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            filter: url(#gooey) contrast(150%) brightness(120%);
            background: radial-gradient(circle at 50% 50%, #111, #000);
        }

        .blob {
            position: absolute;
            background: linear-gradient(135deg, var(--chrome-1) 0%, var(--chrome-2) 40%, var(--chrome-3) 70%, var(--chrome-2) 100%);
            border-radius: 50%;
            filter: blur(20px);
            opacity: 0.8;
            box-shadow: inset 0 0 50px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.2);
        }

        /* --- CONTENT LAYOUT --- */
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 4rem;
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            position: relative;
            z-index: 10;
        }

        .hero-text {
            mix-blend-mode: difference;
        }

        .hero-text h1 {
            font-size: clamp(4rem, 10vw, 12rem);
            font-weight: 900;
            line-height: 0.85;
            letter-spacing: -0.05em;
            text-transform: uppercase;
        }

        .hero-text p {
            margin-top: 2rem;
            max-width: 400px;
            font-size: 1.1rem;
            line-height: 1.6;
            color: rgba(255,255,255,0.7);
        }

        .data-panel {
            justify-self: end;
            border-left: 1px solid rgba(255,255,255,0.1);
            padding-left: 3rem;
        }

        .data-point {
            margin-bottom: 4rem;
            opacity: 0;
            transform: translateY(30px);
            animation: reveal 1s cubic-bezier(0.2, 1, 0.3, 1) forwards;
        }

        .data-point:nth-child(1) { animation-delay: 0.2s; }
        .data-point:nth-child(2) { animation-delay: 0.4s; }
        .data-point:nth-child(3) { animation-delay: 0.6s; }

        .label {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            color: var(--chrome-2);
            display: block;
            margin-bottom: 0.5rem;
        }

        .value {
            font-size: 2.5rem;
            font-weight: 300;
            letter-spacing: -0.02em;
        }

        /* --- CUSTOM CURSOR --- */
        #cursor {
            width: 40px;
            height: 40px;
            border: 1px solid rgba(255,255,255,0.5);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease, background 0.3s ease;
            mix-blend-mode: difference;
        }

        /* --- INTERFACE ELEMENTS --- */
        nav {
            position: fixed;
            top: 3rem;
            left: 4rem;
            right: 4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 100;
        }

        .logo {
            font-family: var(--font-mono);
            font-weight: 700;
            letter-spacing: -1px;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-links a {
            font-family: var(--font-mono);
            text-decoration: none;
            color: var(--chrome-1);
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            opacity: 0.5;
            transition: opacity 0.3s;
        }

        .nav-links a:hover { opacity: 1; }

        @keyframes reveal {
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- NOISE GRAIN --- */
        .grain {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 50;
            pointer-events: none;
            opacity: 0.04;
        }

        @media (max-width: 968px) {
            .container { grid-template-columns: 1fr; padding-top: 10rem; }
            .data-panel { justify-self: start; border-left: none; padding-left: 0; margin-top: 4rem; }
            nav { left: 2rem; right: 2rem; top: 2rem; }
        }
    </style>
</head>
<body>

    <div id="cursor"></div>

    <svg class="grain">
        <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>

    <nav>
        <div class="logo">META//FORGE</div>
        <div class="nav-links">
            <a href="#">Vision</a>
            <a href="#">Collective</a>
            <a href="#">Contact</a>
        </div>
    </nav>

    <main class="container">
        <section class="hero-text">
            <h1>PURE<br>TENSION</h1>
            <p>A digital alchemy studio crafting high-fidelity interfaces where liquid aesthetics meet industrial performance.</p>
        </section>

        <section class="data-panel">
            <div class="data-point">
                <span class="label">Stability Index</span>
                <span class="value">99.997%</span>
            </div>
            <div class="data-point">
                <span class="label">Fluid Dynamics</span>
                <span class="value">Reactive</span>
            </div>
            <div class="data-point">
                <span class="label">Core Latency</span>
                <span class="value">0.002ms</span>
            </div>
        </section>
    </main>

    <div class="stage" id="stage">
        <!-- Blobs generated by JS -->
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none">
        <defs>
            <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -25" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
        </defs>
    </svg>

    <script>
        const stage = document.getElementById('stage');
        const blobCount = 6;
        const blobs = [];

        // Create random chrome blobs
        for (let i = 0; i < blobCount; i++) {
            const blob = document.createElement('div');
            blob.className = 'blob';
            const size = Math.random() * 300 + 200;
            blob.style.width = \`\${size}px\`;
            blob.style.height = \`\${size}px\`;
            
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            
            blobs.push({
                el: blob,
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                size: size
            });
            
            stage.appendChild(blob);
        }

        function animate() {
            blobs.forEach(b => {
                b.x += b.vx;
                b.y += b.vy;

                if (b.x < -b.size) b.x = window.innerWidth;
                if (b.x > window.innerWidth) b.x = -b.size;
                if (b.y < -b.size) b.y = window.innerHeight;
                if (b.y > window.innerHeight) b.y = -b.size;

                b.el.style.transform = \`translate(\${b.x}px, \${b.y}px)\`;
            });
            requestAnimationFrame(animate);
        }

        // Custom cursor tracking
        const cursor = document.getElementById('cursor');
        window.addEventListener('mousemove', (e) => {
            cursor.style.transform = \`translate(\${e.clientX - 20}px, \${e.clientY - 20}px)\`;
            
            // Subtle attraction to mouse for one blob
            blobs[0].vx += (e.clientX - blobs[0].x - blobs[0].size/2) * 0.0001;
            blobs[0].vy += (e.clientY - blobs[0].y - blobs[0].size/2) * 0.0001;
        });

        // Click interaction
        window.addEventListener('mousedown', () => {
            cursor.style.transform += \` scale(0.8)\`;
            cursor.style.background = 'white';
        });

        window.addEventListener('mouseup', () => {
            cursor.style.background = 'transparent';
        });

        animate();
    </script>
</body>
</html>`
    },
    {
        id: "obscured-chromatic-drifting",
        prompt: "tactile matte liquefaction",
        type: "Viscous Subsurface Convection",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obscured Chromatic Drifting | About Us</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&family=Space+Grotesk:wght@300;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #08080a;
            --lava-1: #ff3e00;
            --lava-2: #7000ff;
            --lava-3: #00d1ff;
            --glass-bg: rgba(255, 255, 255, 0.03);
            --glass-border: rgba(255, 255, 255, 0.08);
            --text-primary: #ffffff;
            --text-secondary: rgba(255, 255, 255, 0.6);
            --font-main: 'Space Grotesk', sans-serif;
            --font-mono: 'IBM Plex Mono', monospace;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-primary);
            font-family: var(--font-main);
            overflow-x: hidden;
            min-height: 100vh;
        }

        /* --- LAVA LAMP BACKGROUND --- */
        .lava-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            filter: url(#goo);
            overflow: hidden;
            background: radial-gradient(circle at center, #1a1a2e 0%, #08080a 100%);
        }

        .blob {
            position: absolute;
            background: var(--lava-1);
            border-radius: 50%;
            opacity: 0.6;
            filter: blur(40px);
            animation: drift var(--duration) ease-in-out infinite alternate;
        }

        .blob:nth-child(2) { background: var(--lava-2); --duration: 25s; width: 400px; height: 400px; top: 10%; left: 20%; }
        .blob:nth-child(3) { background: var(--lava-3); --duration: 30s; width: 500px; height: 500px; bottom: 10%; right: 10%; }
        .blob:nth-child(1) { background: var(--lava-1); --duration: 20s; width: 350px; height: 350px; top: 50%; left: 50%; }

        @keyframes drift {
            from { transform: translate(-20%, -20%) scale(1); }
            to { transform: translate(20%, 20%) scale(1.2); }
        }

        /* --- LAYOUT --- */
        .page-wrapper {
            max-width: 1400px;
            margin: 0 auto;
            padding: 80px 40px;
            position: relative;
        }

        header {
            margin-bottom: 120px;
        }

        .label {
            font-family: var(--font-mono);
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            color: var(--lava-3);
            margin-bottom: 20px;
            display: block;
        }

        h1 {
            font-size: clamp(3rem, 10vw, 8rem);
            font-weight: 700;
            line-height: 0.9;
            letter-spacing: -0.04em;
            max-width: 900px;
        }

        /* --- FROSTED PANELS --- */
        .glass-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 24px;
        }

        .panel {
            backdrop-filter: blur(24px) saturate(150%);
            -webkit-backdrop-filter: blur(24px) saturate(150%);
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            padding: 40px;
            border-radius: 2px;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
            position: relative;
            overflow: hidden;
        }

        .panel::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
            pointer-events: none;
        }

        .panel:hover {
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-8px);
            background: rgba(255, 255, 255, 0.05);
        }

        .panel-hero {
            grid-column: 1 / 8;
            grid-row: span 2;
        }

        .panel-stat {
            grid-column: 8 / 13;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        .panel-feature {
            grid-column: span 4;
        }

        /* --- TYPOGRAPHY DETAILS --- */
        .panel-title {
            font-size: 2rem;
            margin-bottom: 24px;
            font-weight: 300;
        }

        .panel-body {
            color: var(--text-secondary);
            line-height: 1.6;
            font-size: 1.1rem;
            max-width: 500px;
        }

        .big-number {
            font-family: var(--font-mono);
            font-size: 5rem;
            display: block;
            line-height: 1;
            margin-bottom: 8px;
            background: linear-gradient(to bottom, #fff, rgba(255,255,255,0.3));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .stat-label {
            font-family: var(--font-mono);
            text-transform: uppercase;
            font-size: 0.8rem;
            opacity: 0.5;
        }

        /* --- DECORATIVE ELEMENTS --- */
        .noise {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: url('https://grainy-gradients.vercel.app/noise.svg');
            opacity: 0.04;
            pointer-events: none;
            z-index: 10;
        }

        .scroll-indicator {
            position: absolute;
            right: 40px;
            top: 50%;
            transform: translateY(-50%) rotate(90deg);
            font-family: var(--font-mono);
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.5em;
            opacity: 0.4;
        }

        @media (max-width: 1024px) {
            .glass-grid { grid-template-columns: 1fr; }
            .panel { grid-column: span 1 !important; }
            h1 { font-size: 4rem; }
        }
    </style>
</head>
<body>

    <div class="noise"></div>
    
    <div class="lava-container">
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
    </div>

    <!-- Gooey Filter definition -->
    <svg style="display:none;">
        <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
        </defs>
    </svg>

    <div class="scroll-indicator">Shift Perception — 2024</div>

    <main class="page-wrapper">
        <header>
            <span class="label">Manifesto // 01</span>
            <h1>Obscured<br>Chromatic<br>Drifting</h1>
        </header>

        <section class="glass-grid">
            <div class="panel panel-hero">
                <h2 class="panel-title">Fluid Architecture</h2>
                <p class="panel-body">
                    We inhabit the space between the solid and the ethereal. Our methodology treats data like viscous fluid—constantly reshaping, merging, and evolving through the lens of human experience. We don't build boxes; we craft environments.
                </p>
                <div style="margin-top: 60px;">
                    <span class="label">Core Essence</span>
                    <p style="font-family: var(--font-mono); font-size: 0.9rem; margin-top: 10px; color: var(--lava-1);">
                        REFRACTION_RATE: 0.94<br>
                        VISCOSITY_LEVEL: DELTA_4<br>
                        CHROMATIC_OFFSET: TRUE
                    </p>
                </div>
            </div>

            <div class="panel panel-stat">
                <span class="big-number">84%</span>
                <span class="stat-label">Diffusion Efficiency</span>
            </div>

            <div class="panel panel-stat" style="background: rgba(112, 0, 255, 0.05);">
                <span class="big-number">12ms</span>
                <span class="stat-label">Neural Latency</span>
            </div>

            <div class="panel panel-feature">
                <span class="label">02</span>
                <h3 style="margin: 15px 0; font-size: 1.5rem;">Prism Logic</h3>
                <p class="panel-body" style="font-size: 0.9rem;">Breaking down complex interactions into spectra of intuitive movement and light.</p>
            </div>

            <div class="panel panel-feature">
                <span class="label">03</span>
                <h3 style="margin: 15px 0; font-size: 1.5rem;">Thermal Flow</h3>
                <p class="panel-body" style="font-size: 0.9rem;">Interfaces that react to engagement heat, cooling down when idle, intensifying with use.</p>
            </div>

            <div class="panel panel-feature">
                <span class="label">04</span>
                <h3 style="margin: 15px 0; font-size: 1.5rem;">Soft Focus</h3>
                <p class="panel-body" style="font-size: 0.9rem;">Eliminating the harsh edges of digital existence through frosted occlusion and depth.</p>
            </div>
        </section>

        <footer style="margin-top: 100px; padding: 40px 0; border-top: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: flex-end;">
            <div>
                <p style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">COORD: 34.0522° N, 118.2437° W</p>
                <p style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);">EST: PHASE_SHIFT_01</p>
            </div>
            <div style="text-align: right;">
                <p style="font-size: 0.9rem; text-decoration: underline; cursor: pointer;">Connect with the Flow —&gt;</p>
            </div>
        </footer>
    </main>

    <script>
        // Subtle Mouse Interaction for Lava
        const blobs = document.querySelectorAll('.blob');
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 50;
            const y = (clientY / window.innerHeight - 0.5) * 50;
            
            blobs.forEach((blob, index) => {
                const factor = (index + 1) * 0.2;
                blob.style.transform = \`translate(\${x * factor}px, \${y * factor}px)\`;
            });
        });

        // Entry Reveal Animation
        const panels = document.querySelectorAll('.panel');
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        panels.forEach((panel, i) => {
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(40px)';
            panel.style.transitionDelay = \`\${i * 0.1}s\`;
            observer.observe(panel);
        });
    </script>
</body>
    <head>
    <meta charset="UTF-8" >
    <meta name="viewport" content = "width=device-width, initial-scale=1.0" >
    <title>Obscured Chromatic Drifting | About Us </title>
    < link rel = "preconnect" href = "https://fonts.googleapis.com" >
    <link rel="preconnect" href = "https://fonts.gstatic.com" crossorigin >
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&family=Space+Grotesk:wght@300;700&display=swap" rel = "stylesheet" >
    <style>
        :root {
    --bg - color: #08080a;
    --lava - 1: #ff3e00;
    --lava - 2: #7000ff;
    --lava - 3: #00d1ff;
    --glass - bg: rgba(255, 255, 255, 0.03);
    --glass - border: rgba(255, 255, 255, 0.08);
    --text - primary: #ffffff;
    --text - secondary: rgba(255, 255, 255, 0.6);
    --font - main: 'Space Grotesk', sans - serif;
    --font - mono: 'IBM Plex Mono', monospace;
}

        * {
    margin: 0;
    padding: 0;
    box- sizing: border - box;
-webkit - font - smoothing: antialiased;
        }

        body {
    background - color: var(--bg - color);
    color: var(--text - primary);
    font - family: var(--font - main);
    overflow - x: hidden;
    min - height: 100vh;
}

        /* --- LAVA LAMP BACKGROUND --- */
        .lava - container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100 %;
    height: 100 %;
    z - index: -1;
    filter: url(#goo);
    overflow: hidden;
    background: radial - gradient(circle at center, #1a1a2e 0 %, #08080a 100 %);
}

        .blob {
    position: absolute;
    background: var(--lava - 1);
    border - radius: 50 %;
    opacity: 0.6;
    filter: blur(40px);
    animation: drift var(--duration) ease -in -out infinite alternate;
}

        .blob: nth - child(2) { background: var(--lava - 2); --duration: 25s; width: 400px; height: 400px; top: 10 %; left: 20 %; }
        .blob: nth - child(3) { background: var(--lava - 3); --duration: 30s; width: 500px; height: 500px; bottom: 10 %; right: 10 %; }
        .blob: nth - child(1) { background: var(--lava - 1); --duration: 20s; width: 350px; height: 350px; top: 50 %; left: 50 %; }

@keyframes drift {
            from { transform: translate(-20 %, -20 %) scale(1); }
            to { transform: translate(20 %, 20 %) scale(1.2); }
}

        /* --- LAYOUT --- */
        .page - wrapper {
    max - width: 1400px;
    margin: 0 auto;
    padding: 80px 40px;
    position: relative;
}

        header {
    margin - bottom: 120px;
}

        .label {
    font - family: var(--font - mono);
    font - size: 0.75rem;
    text - transform: uppercase;
    letter - spacing: 0.3em;
    color: var(--lava - 3);
    margin - bottom: 20px;
    display: block;
}

        h1 {
    font - size: clamp(3rem, 10vw, 8rem);
    font - weight: 700;
    line - height: 0.9;
    letter - spacing: -0.04em;
    max - width: 900px;
}

        /* --- FROSTED PANELS --- */
        .glass - grid {
    display: grid;
    grid - template - columns: repeat(12, 1fr);
    gap: 24px;
}

        .panel {
    backdrop - filter: blur(24px) saturate(150 %);
    -webkit - backdrop - filter: blur(24px) saturate(150 %);
    background: var(--glass - bg);
    border: 1px solid var(--glass - border);
    padding: 40px;
    border - radius: 2px;
    transition: all 0.6s cubic - bezier(0.23, 1, 0.32, 1);
    position: relative;
    overflow: hidden;
}

        .panel::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100 %; height: 100 %;
    background: linear - gradient(135deg, rgba(255, 255, 255, 0.05) 0 %, transparent 100 %);
    pointer - events: none;
}

        .panel:hover {
    border - color: rgba(255, 255, 255, 0.2);
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.05);
}

        .panel - hero {
    grid - column: 1 / 8;
    grid - row: span 2;
}

        .panel - stat {
    grid - column: 8 / 13;
    display: flex;
    flex - direction: column;
    justify - content: flex - end;
}

        .panel - feature {
    grid - column: span 4;
}

        /* --- TYPOGRAPHY DETAILS --- */
        .panel - title {
    font - size: 2rem;
    margin - bottom: 24px;
    font - weight: 300;
}

        .panel - body {
    color: var(--text - secondary);
    line - height: 1.6;
    font - size: 1.1rem;
    max - width: 500px;
}

        .big - number {
    font - family: var(--font - mono);
    font - size: 5rem;
    display: block;
    line - height: 1;
    margin - bottom: 8px;
    background: linear - gradient(to bottom, #fff, rgba(255, 255, 255, 0.3));
    -webkit - background - clip: text;
    -webkit - text - fill - color: transparent;
}

        .stat - label {
    font - family: var(--font - mono);
    text - transform: uppercase;
    font - size: 0.8rem;
    opacity: 0.5;
}

        /* --- DECORATIVE ELEMENTS --- */
        .noise {
    position: fixed;
    top: 0; left: 0; width: 100 %; height: 100 %;
    background: url('https://grainy-gradients.vercel.app/noise.svg');
    opacity: 0.04;
    pointer - events: none;
    z - index: 10;
}

        .scroll - indicator {
    position: absolute;
    right: 40px;
    top: 50 %;
    transform: translateY(-50 %) rotate(90deg);
    font - family: var(--font - mono);
    font - size: 0.7rem;
    text - transform: uppercase;
    letter - spacing: 0.5em;
    opacity: 0.4;
}

@media(max - width: 1024px) {
            .glass - grid { grid - template - columns: 1fr; }
            .panel { grid - column: span 1!important; }
            h1 { font - size: 4rem; }
}
</style>
    </head>
    < body >

    <div class="noise" > </div>

        < div class="lava-container" >
            <div class="blob" > </div>
                < div class="blob" > </div>
                    < div class="blob" > </div>
                        </div>

                        < !--Gooey Filter definition-- >
                            <svg style="display:none;" >
                                <defs>
                                <filter id="goo" >
                                    <feGaussianBlur in="SourceGraphic" stdDeviation = "30" result = "blur" />
                                        <feColorMatrix in="blur" mode = "matrix" values = "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15" result = "goo" />
                                            <feComposite in="SourceGraphic" in2 = "goo" operator = "atop" />
                                                </filter>
                                                </defs>
                                                </svg>

                                                < div class="scroll-indicator" > Shift Perception — 2024 </div>

                                                    < main class="page-wrapper" >
                                                        <header>
                                                        <span class="label" > Manifesto // 01</span>
                                                            < h1 > Obscured < br > Chromatic < br > Drifting </h1>
                                                            </header>

                                                            < section class="glass-grid" >
                                                                <div class="panel panel-hero" >
                                                                    <h2 class="panel-title" > Fluid Architecture </h2>
                                                                        < p class="panel-body" >
                                                                            We inhabit the space between the solid and the ethereal.Our methodology treats data like viscous fluid—constantly reshaping, merging, and evolving through the lens of human experience.We don't build boxes; we craft environments.
                                                                                </p>
                                                                                < div style = "margin-top: 60px;" >
                                                                                    <span class="label" > Core Essence </span>
                                                                                        < p style = "font-family: var(--font-mono); font-size: 0.9rem; margin-top: 10px; color: var(--lava-1);" >
                                                                                            REFRACTION_RATE: 0.94<br>
VISCOSITY_LEVEL: DELTA_4<br>
CHROMATIC_OFFSET: TRUE
    </p>
    </div>
    </div>

    < div class="panel panel-stat" >
        <span class="big-number" > 84 % </span>
            < span class="stat-label" > Diffusion Efficiency </span>
                </div>

                < div class="panel panel-stat" style = "background: rgba(112, 0, 255, 0.05);" >
                    <span class="big-number" > 12ms </span>
                        < span class="stat-label" > Neural Latency </span>
                            </div>

                            < div class="panel panel-feature" >
                                <span class="label" >02 </span>
                                    < h3 style = "margin: 15px 0; font-size: 1.5rem;" > Prism Logic </h3>
                                        < p class="panel-body" style = "font-size: 0.9rem;" > Breaking down complex interactions into spectra of intuitive movement and light.</p>
                                            </div>

                                            < div class="panel panel-feature" >
                                                <span class="label" >03 </span>
                                                    < h3 style = "margin: 15px 0; font-size: 1.5rem;" > Thermal Flow </h3>
                                                        < p class="panel-body" style = "font-size: 0.9rem;" > Interfaces that react to engagement heat, cooling down when idle, intensifying with use.</p>
                                                        </div>

                                                        < div class="panel panel-feature" >
                                                            <span class="label" >04 </span>
                                                                < h3 style = "margin: 15px 0; font-size: 1.5rem;" > Soft Focus </h3>
                                                                    < p class="panel-body" style = "font-size: 0.9rem;" > Eliminating the harsh edges of digital existence through frosted occlusion and depth.</p>
                                                                        </div>
                                                                        </section>

                                                                        < footer style = "margin-top: 100px; padding: 40px 0; border-top: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: flex-end;" >
                                                                            <div>
                                                                            <p style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);" > COORD: 34.0522° N, 118.2437° W </p>
                                                                                < p style = "font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary);" > EST: PHASE_SHIFT_01 </p>
                                                                                    </div>
                                                                                    < div style = "text-align: right;" >
                                                                                        <p style="font-size: 0.9rem; text-decoration: underline; cursor: pointer;" > Connect with the Flow —& gt; </p>
                                                                                            </div>
                                                                                            </footer>
                                                                                            </main>

                                                                                            <script>
// Subtle Mouse Interaction for Lava
const blobs = document.querySelectorAll('.blob');
window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 50;
    const y = (clientY / window.innerHeight - 0.5) * 50;

    blobs.forEach((blob, index) => {
        const factor = (index + 1) * 0.2;
        blob.style.transform = \`translate(\${x * factor}px, \${y * factor}px)\`;
            });
        });

        // Entry Reveal Animation
        const panels = document.querySelectorAll('.panel');
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        panels.forEach((panel, i) => {
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(40px)';
            panel.style.transitionDelay = \`\${i * 0.1}s\`;
            observer.observe(panel);
        });
    </script>
</body>
</html>`
    },
    {
        id: "prismatic-caustic-scaffolding",
        prompt: "prismatic structural lattice",
        type: "Prismatic Caustic Scaffolding",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prismatic Caustic Scaffolding</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #030304;
            --prism-1: rgba(0, 255, 255, 0.4);
            --prism-2: rgba(255, 0, 255, 0.4);
            --prism-3: rgba(255, 255, 0, 0.4);
            --glass: rgba(255, 255, 255, 0.05);
            --border: rgba(255, 255, 255, 0.1);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            background-color: var(--bg);
            color: white;
            font-family: 'Space Mono', monospace;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            perspective: 800px;
        }

        .scene {
            position: relative;
            transform-style: preserve-3d;
            width: 400px;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .scaffold-ring {
            position: absolute;
            border: 1px solid var(--border);
            border-radius: 50%;
            transform-style: preserve-3d;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.05);
            transition: transform 0.1s ease-out;
        }

        .ring-1 { width: 300px; height: 300px; border-color: var(--prism-1); animation: spin 20s linear infinite; }
        .ring-2 { width: 200px; height: 200px; border-color: var(--prism-2); animation: spin-rev 15s linear infinite; }
        .ring-3 { width: 100px; height: 100px; border-color: var(--prism-3); animation: spin 10s linear infinite; }

        .prism-core {
            width: 80px;
            height: 80px;
            background: var(--glass);
            backdrop-filter: blur(10px);
            transform: rotateX(45deg) rotateZ(45deg);
            border: 1px solid rgba(255,255,255,0.3);
            box-shadow: 
                0 0 30px var(--prism-1),
                inset 0 0 20px var(--prism-2);
            transition: all 0.5s ease;
        }

        .prism-core:hover {
            transform: rotateX(225deg) rotateZ(225deg) scale(1.5);
            box-shadow: 
                0 0 50px var(--prism-1),
                inset 0 0 30px var(--prism-3);
            background: rgba(255,255,255,0.1);
        }

        .info-panel {
            position: absolute;
            bottom: 20px;
            left: 20px;
            font-size: 10px;
            color: rgba(255,255,255,0.5);
            pointer-events: none;
        }

        /* Chromatic Aberration Text */
        h1 {
            position: absolute;
            top: 20%;
            width: 100%;
            text-align: center;
            font-size: 24px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            mix-blend-mode: exclusion;
        }

        h1::before, h1::after {
            content: "SCAFFOLDING";
            position: absolute;
            top: 0; left: 0; width: 100%;
            opacity: 0.8;
        }

        h1::before { color: cyan; transform: translate(-2px, -2px); mix-blend-mode: screen; }
        h1::after { color: magenta; transform: translate(2px, 2px); mix-blend-mode: screen; }

        /* Ray beams */
        .beam {
            position: absolute;
            width: 2px;
            height: 100vh;
            background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent);
            top: -50vh;
            left: 50%;
            transform-origin: bottom center;
            opacity: 0.1;
            pointer-events: none;
        }

        @keyframes spin { from { transform: rotateX(60deg) rotateZ(0deg); } to { transform: rotateX(60deg) rotateZ(360deg); } }
        @keyframes spin-rev { from { transform: rotateX(-60deg) rotateZ(360deg); } to { transform: rotateX(-60deg) rotateZ(0deg); } }

    </style>
</head>
<body>

    <div class="scene" id="scene">
        <h1>Scaffolding</h1>
        <div class="scaffold-ring ring-1"></div>
        <div class="scaffold-ring ring-2"></div>
        <div class="scaffold-ring ring-3"></div>
        <div class="prism-core"></div>
        
        <div class="beam" style="transform: rotate(45deg);"></div>
        <div class="beam" style="transform: rotate(-45deg);"></div>
    </div>

    <div class="info-panel">
        STATUS: STABLE<br>
        LATTICE: HEX_4<br>
        REFRACTION: 1.45
    </div>

    <script>
        const scene = document.getElementById('scene');
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 20;
            const y = (window.innerHeight / 2 - e.pageY) / 20;
            scene.style.transform = \`rotateY(\${x}deg) rotateX(\${y}deg)\`;
        });
    </script>
</body>
</html>`
    },
    {
        id: "refractive-caustic-dilation",
        prompt: "refractive caustic interface",
        type: "Refractive Caustic Dilation",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Refractive Caustic Dilation</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&family=JetBrains+Mono:wght@300;500&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #050505;
            --glass: rgba(255, 255, 255, 0.03);
            --border: rgba(255, 255, 255, 0.12);
            --accent: #ffffff;
            --caustic-1: rgba(0, 180, 255, 0.2);
            --caustic-2: rgba(255, 0, 150, 0.15);
            --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
        }

        body {
            background-color: var(--bg);
            color: var(--accent);
            font-family: 'Inter', sans-serif;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        /* Ambient Background Light */
        .caustic-blob {
            position: absolute;
            width: 60vw;
            height: 60vw;
            background: radial-gradient(circle, var(--caustic-1) 0%, transparent 70%);
            filter: blur(80px);
            opacity: 0.4;
            pointer-events: none;
            z-index: 0;
            animation: drift 20s infinite alternate ease-in-out;
        }

        .caustic-blob.alt {
            background: radial-gradient(circle, var(--caustic-2) 0%, transparent 70%);
            right: 0;
            bottom: 0;
            animation-delay: -5s;
        }

        @keyframes drift {
            from { transform: translate(-10%, -10%) scale(1); }
            to { transform: translate(10%, 10%) scale(1.2); }
        }

        /* The Lens (Container) */
        .stage {
            position: relative;
            z-index: 10;
            perspective: 1000px;
        }

        /* Card Component */
        .glass-card {
            position: relative;
            width: 280px;
            height: 380px;
            background: var(--glass);
            border: 1px solid var(--border);
            backdrop-filter: blur(25px) saturate(180%);
            -webkit-backdrop-filter: blur(25px) saturate(180%);
            border-radius: 12px;
            cursor: pointer;
            overflow: hidden;
            transition: 
                width 0.8s var(--ease-out-expo), 
                height 0.8s var(--ease-out-expo),
                transform 0.5s var(--ease-out-expo),
                box-shadow 0.5s var(--ease-out-expo);
            display: flex;
            flex-direction: column;
            padding: 32px;
            box-shadow: 0 40px 100px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05);
        }

        .glass-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(
                from 0deg,
                transparent,
                rgba(255, 255, 255, 0.1) 10%,
                transparent 20%,
                transparent 50%,
                rgba(255, 255, 255, 0.15) 70%,
                transparent 80%
            );
            animation: rotate-caustics 12s linear infinite;
            pointer-events: none;
            opacity: 0.5;
        }

        @keyframes rotate-caustics {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .glass-card.expanded {
            width: 800px;
            height: 500px;
            cursor: default;
        }

        /* Content Styles */
        .label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.4);
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .label::before {
            content: '';
            width: 6px;
            height: 6px;
            background: var(--accent);
            border-radius: 50%;
            box-shadow: 0 0 10px var(--accent);
        }

        .title {
            font-size: 24px;
            font-weight: 900;
            letter-spacing: -0.02em;
            margin-bottom: 24px;
            transition: font-size 0.8s var(--ease-out-expo);
        }

        .expanded .title {
            font-size: 48px;
        }

        .content-block {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s var(--ease-out-expo);
            pointer-events: none;
            font-size: 14px;
            line-height: 1.6;
            color: rgba(255,255,255,0.7);
            max-width: 400px;
        }

        .expanded .content-block {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
            transition-delay: 0.3s;
        }

        .meta-grid {
            margin-top: auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            font-family: 'JetBrains Mono', monospace;
        }

        .meta-item {
            border-top: 1px solid var(--border);
            padding-top: 12px;
        }

        .meta-key {
            font-size: 9px;
            color: rgba(255,255,255,0.3);
            text-transform: uppercase;
        }

        .meta-val {
            font-size: 12px;
            margin-top: 4px;
        }

        /* Interactive Elements */
        .close-btn {
            position: absolute;
            top: 32px;
            right: 32px;
            background: none;
            border: none;
            color: white;
            opacity: 0;
            cursor: pointer;
            transition: 0.3s;
            z-index: 20;
        }

        .expanded .close-btn {
            opacity: 0.5;
        }

        .expanded .close-btn:hover {
            opacity: 1;
        }

        /* Grain Overlay */
        .grain {
            position: absolute;
            inset: 0;
            z-index: 5;
            opacity: 0.05;
            pointer-events: none;
        }

        /* Noise SVG Filter */
        svg[height="0"] { position: absolute; }
    </style>
</head>
<body>

    <div class="caustic-blob"></div>
    <div class="caustic-blob alt"></div>

    <div class="stage">
        <div class="glass-card" id="card" onclick="expandCard()">
            <div class="grain">
                <svg width="100%" height="100%">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                        <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>

            <button class="close-btn" onclick="event.stopPropagation(); shrinkCard()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>

            <div class="label">Spectral Core</div>
            <div class="title">REFRACTIVE<br>INDEX</div>
            
            <div class="content-block">
                The dilation of visual space through synthetic caustics allows for a multi-layered information hierarchy. This interface utilizes sub-surface light dispersion algorithms to simulate physical depth within a digital medium. 
                <br><br>
                High-fidelity refraction mimics the behavior of borosilicate glass under polarized light, creating a tactile sense of interaction.
            </div>

            <div class="meta-grid">
                <div class="meta-item">
                    <div class="meta-key">Dispersion</div>
                    <div class="meta-val">0.042λ</div>
                </div>
                <div class="meta-item">
                    <div class="meta-key">Focus</div>
                    <div class="meta-val">INF // AUTO</div>
                </div>
                <div class="meta-item">
                    <div class="meta-key">Coordinates</div>
                    <div class="meta-val">40.7128° N</div>
                </div>
                <div class="meta-item">
                    <div class="meta-key">Status</div>
                    <div class="meta-val">COHERENT</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Hidden SVG for refractive distortion effects -->
    <svg height="0">
        <filter id="refraction-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
    </svg>

    <script>
        const card = document.getElementById('card');
        let isExpanded = false;

        function expandCard() {
            if (isExpanded) return;
            card.classList.add('expanded');
            isExpanded = true;
        }

        function shrinkCard() {
            card.classList.remove('expanded');
            isExpanded = false;
        }

        // Mouse Parallax Effect
        document.addEventListener('mousemove', (e) => {
            if(isExpanded) return;
            
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            card.style.transform = \`rotateY(\${xAxis}deg) rotateX(\${yAxis}deg)\`;
        });

        // Reset rotation on mouse leave
        document.addEventListener('mouseleave', () => {
            if(!isExpanded) {
                card.style.transform = \`rotateY(0deg) rotateX(0deg)\`;
            }
        });
    </script>
</body>
</html>`
    },
    {
        id: "pneumatic-vitreous-expansion",
        prompt: "pneumatic glass expansion",
        type: "Pneumatic Vitreous Expansion",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pneumatic Vitreous Expansion</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;800&family=JetBrains+Mono:wght@300;500&display=swap');

        :root {
            --bg: #05070a;
            --glass: rgba(255, 255, 255, 0.03);
            --border: rgba(255, 255, 255, 0.12);
            --accent: #00f2ff;
            --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
            --font-mono: 'JetBrains Mono', monospace;
            --ease-pneumatic: cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
        }

        body {
            background-color: var(--bg);
            background-image: 
                radial-gradient(circle at 50% -20%, #1a1f35 0%, transparent 50%),
                radial-gradient(circle at 0% 100%, #0d1117 0%, transparent 40%);
            color: #fff;
            font-family: var(--font-sans);
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .stage {
            position: relative;
            width: 100%;
            max-width: 1200px;
            padding: 40px;
            display: flex;
            gap: 24px;
            perspective: 1000px;
        }

        .vitreous-card {
            position: relative;
            width: 320px;
            height: 480px;
            background: var(--glass);
            backdrop-filter: blur(24px) saturate(150%);
            -webkit-backdrop-filter: blur(24px) saturate(150%);
            border: 1px solid var(--border);
            border-radius: 24px;
            padding: 32px;
            cursor: pointer;
            overflow: hidden;
            transition: 
                width 0.7s var(--ease-pneumatic),
                height 0.7s var(--ease-pneumatic),
                transform 0.5s ease,
                box-shadow 0.5s ease;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 
                0 10px 30px rgba(0,0,0,0.5),
                inset 0 1px 1px rgba(255,255,255,0.1);
        }

        .vitreous-card:hover {
            transform: translateY(-8px);
            border-color: rgba(255, 255, 255, 0.25);
            box-shadow: 
                0 20px 40px rgba(0,0,0,0.6),
                inset 0 1px 2px rgba(255,255,255,0.2),
                0 0 20px rgba(0, 242, 255, 0.05);
        }

        .vitreous-card.expanded {
            width: 680px;
            cursor: default;
        }

        /* Pneumatic Glint Effect */
        .vitreous-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.5s ease;
            pointer-events: none;
        }

        .vitreous-card:hover::before {
            opacity: 1;
        }

        /* Typography Hierarchy */
        .meta {
            font-family: var(--font-mono);
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            color: rgba(255,255,255,0.4);
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .meta::before {
            content: '';
            display: block;
            width: 30px;
            height: 1px;
            background: var(--accent);
            opacity: 0.5;
        }

        .title {
            font-size: 32px;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 16px;
            background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.6) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .expanded-content {
            opacity: 0;
            transform: translateX(20px);
            transition: all 0.5s ease;
            pointer-events: none;
            max-width: 320px;
            position: absolute;
            right: 40px;
            top: 40px;
            bottom: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-left: 1px solid var(--border);
            padding-left: 40px;
        }

        .expanded .expanded-content {
            opacity: 1;
            transform: translateX(0);
            pointer-events: all;
            transition-delay: 0.2s;
        }

        .data-row {
            margin-bottom: 24px;
        }

        .label {
            font-family: var(--font-mono);
            font-size: 9px;
            color: var(--accent);
            text-transform: uppercase;
            margin-bottom: 4px;
        }

        .value {
            font-size: 14px;
            color: rgba(255,255,255,0.8);
            line-height: 1.6;
        }

        .visual-element {
            position: relative;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: rgba(255,255,255,0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: auto;
            border: 1px solid var(--border);
            transition: all 0.5s var(--ease-pneumatic);
        }

        .expanded .visual-element {
            transform: scale(1.5);
            border-color: var(--accent);
            box-shadow: 0 0 30px rgba(0, 242, 255, 0.2);
        }

        .btn-expand {
            position: absolute;
            bottom: 32px;
            right: 32px;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: rgba(255,255,255,0.05);
            border: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .expanded .btn-expand {
            transform: rotate(45deg);
            background: rgba(255, 255, 255, 0.1);
        }

        /* Pneumatic "Pressure" Indicator */
        .pressure-gauge {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            background: var(--accent);
            width: 0%;
            transition: width 0.7s var(--ease-pneumatic);
            box-shadow: 0 0 10px var(--accent);
        }

        .expanded .pressure-gauge {
            width: 100%;
        }

        /* Background Noise Overlay */
        .noise {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
            opacity: 0.03;
            z-index: 100;
        }
    </style>
</head>
<body>

    <svg class="noise">
        <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)"/>
    </svg>

    <div class="stage">
        <div class="vitreous-card" onclick="this.classList.toggle('expanded')">
            <div class="top-section">
                <div class="meta">System_Core v.4.0</div>
                <h1 class="title">Atmospheric<br>Resonance</h1>
                <div class="value" style="font-size: 12px; color: rgba(255,255,255,0.4); max-width: 200px;">
                    Experimental pneumatic interface for high-density vitreous data environments.
                </div>
            </div>

            <div class="expanded-content">
                <div class="data-row">
                    <div class="label">Pneumatic Status</div>
                    <div class="value">Expansion Nominal. Internal pressure at 4.2 Bar. Vitreous clarity optimized for retinal interface.</div>
                </div>
                <div class="data-row">
                    <div class="label">Metrics // 001</div>
                    <div class="value" style="font-family: var(--font-mono);">
                        Lat: 51.5074° N<br>
                        Long: 0.1278° W<br>
                        Alt: 1,420m MSL
                    </div>
                </div>
                <div class="data-row">
                    <div class="label">Architecture</div>
                    <div class="value">Modular glass layers with interstitial argon-purged thermal buffers.</div>
                </div>
            </div>

            <div class="visual-element">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="12" r="9" stroke-dasharray="2 4" />
                    <path d="M12 8v4l3 3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            <div class="btn-expand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M12 5v14M5 12h14" stroke-linecap="round"/>
                </svg>
            </div>

            <div class="pressure-gauge"></div>
        </div>

        <div class="vitreous-card" onclick="this.classList.toggle('expanded')" style="background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));">
            <div class="top-section">
                <div class="meta">Core_Aux s.0.2</div>
                <h1 class="title">Vitreous<br>Refraction</h1>
                <div class="value" style="font-size: 12px; color: rgba(255,255,255,0.4); max-width: 200px;">
                    Multi-layered refraction mapping for deep-space UI modules.
                </div>
            </div>

            <div class="expanded-content">
                <div class="data-row">
                    <div class="label">Optic Density</div>
                    <div class="value">Vitreous coefficient set to 1.52n. Edge diffraction minimized via CSS-pneumatic dampening.</div>
                </div>
                <div class="data-row">
                    <div class="label">Spectroscopy</div>
                    <div class="value" style="font-family: var(--font-mono);">
                        CH4: 0.04%<br>
                        O2: 20.9%<br>
                        N2: 78.1%
                    </div>
                </div>
                <div class="data-row">
                    <div class="label">Protocol</div>
                    <div class="value">High-fidelity material layering with sub-pixel alignment active.</div>
                </div>
            </div>

            <div class="visual-element">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
            </div>

            <div class="btn-expand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M12 5v14M5 12h14" stroke-linecap="round"/>
                </svg>
            </div>

            <div class="pressure-gauge" style="background: #ff007a; box-shadow: 0 0 10px #ff007a;"></div>
        </div>
    </div>

    <script>
        document.querySelectorAll('.vitreous-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const xc = rect.width / 2;
                const yc = rect.height / 2;
                
                const dx = x - xc;
                const dy = y - yc;
                
                if(!card.classList.contains('expanded')) {
                    card.style.transform = \`translateY(-8px) rotateX(\${dy/-20}deg) rotateY(\${dx/20}deg)\`;
                }
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    </script>
</body>
</html>`
    }
];
