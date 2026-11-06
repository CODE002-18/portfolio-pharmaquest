/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Fullscreen Interactive Hero Canvas supporting 4 visual modes inspired by Axevia:
 * 1. PARTICLES - Full-screen interactive point cloud & particle constellation with mouse/touch reaction
 * 2. CRT - Digital oscilloscope scanlines with fluid audio-wave synthesis lines
 * 3. MOLECULE - Chemical molecular bond lattice for Pharmaceutical Sciences
 * 4. ORBIT - Planetary & atomic electron orbitals
 */

import React, { useEffect, useRef } from 'react';

export type CanvasMode = 'particles' | 'crt' | 'atom' | 'solarsystem';

interface InteractiveHeroCanvasProps {
  mode: CanvasMode;
  isDark?: boolean;
}

export const InteractiveHeroCanvas: React.FC<InteractiveHeroCanvasProps> = ({
  mode,
  isDark = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse & Touch coordinates
    const mouse = {
      x: window.innerWidth * 0.6,
      y: window.innerHeight * 0.45,
      targetX: window.innerWidth * 0.6,
      targetY: window.innerHeight * 0.45,
      isHovered: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.isHovered = true;
      }
    };

    const handleLeave = () => {
      mouse.isHovered = false;
      const parent = canvas.parentElement;
      mouse.targetX = (parent ? parent.clientWidth : window.innerWidth) * 0.55;
      mouse.targetY = (parent ? parent.clientHeight : window.innerHeight) * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleLeave);

    // High contrast color configuration for Dark and Light themes
    const primaryColor = isDark ? 'rgba(255, 255, 255, ' : 'rgba(15, 23, 42, ';
    const accentColor = isDark ? 'rgba(34, 211, 238, ' : 'rgba(8, 145, 178, '; // Cyan / Teal

    const getWidth = () => (canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth);
    const getHeight = () => (canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight);

    const initW = getWidth();
    const initH = getHeight();

    // Mode 1: PARTICLES - Full-Canvas Widespread Interactive Constellation Network
    const spreadParticleCount = Math.min(260, Math.max(120, Math.floor((initW * initH) / 3800)));
    const spreadParticles: Array<{
      x: number;
      y: number;
      originX: number;
      originY: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      isAccent: boolean;
      phase: number;
    }> = [];

    for (let i = 0; i < spreadParticleCount; i++) {
      // Distribute evenly across the full width and height with pleasant organic randomness
      const ox = Math.random() * initW;
      const oy = Math.random() * initH;

      spreadParticles.push({
        x: ox,
        y: oy,
        originX: ox,
        originY: oy,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2.4 + 1.0,
        baseAlpha: isDark ? (Math.random() * 0.55 + 0.35) : (Math.random() * 0.5 + 0.3),
        isAccent: Math.random() < 0.25,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Mode 3: ATOM - 3D Quantum Mechanical Atomic Model (Nucleus + Orbital Wave Shells)
    // Nucleon cluster (Protons & Neutrons bound by strong nuclear force)
    const nucleons: Array<{
      x: number;
      y: number;
      z: number;
      isProton: boolean;
      radius: number;
      phase: number;
    }> = [];
    const nucleonCount = 18;
    for (let i = 0; i < nucleonCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const nr = Math.cbrt(Math.random()) * 26; // 26px tight nucleus radius
      nucleons.push({
        x: nr * Math.sin(phi) * Math.cos(theta),
        y: nr * Math.sin(phi) * Math.sin(theta),
        z: nr * Math.cos(phi),
        isProton: i % 2 === 0,
        radius: 6.5 + Math.random() * 2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Quantum probability cloud dots (|Ψ|² electron density)
    const quantumDots: Array<{
      x: number;
      y: number;
      z: number;
      alpha: number;
      size: number;
    }> = [];
    const qDotCount = 130;
    const qCloudW = Math.max(initW * 0.55, 480);
    const qCloudH = Math.max(initH * 0.45, 320);
    for (let i = 0; i < qDotCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.pow(Math.random(), 0.6) * qCloudW * 0.5;
      const zAngle = Math.random() * Math.PI * 2;
      quantumDots.push({
        x: Math.cos(angle) * r,
        y: (Math.sin(angle) * r * (qCloudH / qCloudW)) + (Math.sin(zAngle) * 40),
        z: Math.cos(zAngle) * 120,
        alpha: Math.random() * 0.35 + 0.1,
        size: Math.random() * 1.8 + 0.8,
      });
    }

    // Mode 4: SOLAR SYSTEM - Main Asteroid Belt (between Mars and Jupiter)
    const asteroidBelt: Array<{
      rFrac: number;
      theta: number;
      speed: number;
      size: number;
      alpha: number;
      yOffset: number;
    }> = [];
    const astCount = 95;
    for (let i = 0; i < astCount; i++) {
      asteroidBelt.push({
        rFrac: 0.60 + Math.random() * 0.08, // Between Mars (0.50) and Jupiter (0.74)
        theta: Math.random() * Math.PI * 2,
        speed: 0.35 + Math.random() * 0.15,
        size: Math.random() * 1.6 + 0.6,
        alpha: Math.random() * 0.4 + 0.25,
        yOffset: (Math.random() - 0.5) * 12,
      });
    }

    let time = 0;

    // Render loop
    const render = () => {
      time += 0.018;
      const width = getWidth();
      const height = getHeight();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      if (mode === 'particles') {
        // Widespread interactive constellation spanning the entire home screen
        for (let i = 0; i < spreadParticles.length; i++) {
          const p = spreadParticles[i];

          // Mouse interaction: fluid repulsion aura
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 160;

          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 3.8;
            p.x -= (dx / dist) * force * 2.5;
            p.y -= (dy / dist) * force * 2.5;
          }

          // Gentle ambient float & return to origin across the full screen
          p.x += (p.originX - p.x) * 0.035 + Math.sin(time * 0.8 + p.phase) * 0.45;
          p.y += (p.originY - p.y) * 0.035 + Math.cos(time * 0.8 + p.phase) * 0.45;

          // Twinkle pulse
          const twinkle = Math.sin(time * 2.2 + p.phase) * 0.25 + 0.75;
          const currentAlpha = Math.min(1, p.baseAlpha * twinkle);

          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.isAccent 
            ? `${accentColor}${currentAlpha * 1.3})` 
            : `${primaryColor}${currentAlpha})`;
          ctx.fill();

          // Connect to mouse cursor with interactive cyan beam
          if (dist < 135) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `${accentColor}${(1 - dist / 135) * (isDark ? 0.38 : 0.48)})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }

          // Connect nearby particles across the screen with plexus constellation lines
          for (let j = i + 1; j < spreadParticles.length; j++) {
            const p2 = spreadParticles[j];
            const djx = p.x - p2.x;
            const djy = p.y - p2.y;
            const distance = Math.sqrt(djx * djx + djy * djy);

            if (distance < 82) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              const lineStrength = 1 - distance / 82;
              ctx.strokeStyle = (p.isAccent || p2.isAccent)
                ? `${accentColor}${lineStrength * (isDark ? 0.3 : 0.38)})`
                : `${primaryColor}${lineStrength * (isDark ? 0.16 : 0.22)})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      } else if (mode === 'crt') {
        // Fullscreen CRT Oscilloscope & Frequency Waves across full viewport
        const lines = 14;
        const cy = height * 0.5;

        for (let l = 0; l < lines; l++) {
          ctx.beginPath();
          const freq = 0.008 + l * 0.0015;
          const amp = 35 + l * 7;
          const phase = time * (1 + l * 0.15);

          for (let x = 0; x <= width; x += 6) {
            const distToMouse = Math.abs(x - mouse.x);
            const mouseLift = distToMouse < 180 ? (1 - distToMouse / 180) * 55 : 0;
            const y = cy + Math.sin(x * freq + phase) * amp + (l - lines / 2) * (height * 0.035) - mouseLift;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }

          if (l === 6 || l === 7) {
            ctx.strokeStyle = `${accentColor}0.95)`;
            ctx.lineWidth = 2;
          } else {
            ctx.strokeStyle = `${primaryColor}${isDark ? 0.08 + l * 0.025 : 0.12 + l * 0.03})`;
            ctx.lineWidth = 1;
          }
          ctx.stroke();
        }

        // Horizontal sweeping scanline beam
        const scanY = (time * 70) % height;
        ctx.fillStyle = isDark ? `${primaryColor}0.03)` : `${primaryColor}0.02)`;
        ctx.fillRect(0, scanY - 20, width, 40);
      } else if (mode === 'atom') {
        // High-Fidelity 3D Quantum Mechanical Atom (Calm, majestic speeds)
        const cx = width > 1024 ? width * 0.58 : width * 0.5;
        const cy = height * 0.48;
        const rotY = time * 0.16 + (mouse.x - cx) * 0.0025;
        const rotX = Math.sin(time * 0.10) * 0.28 + (mouse.y - cy) * 0.0025;

        const baseW = Math.max(width * 0.68, 560);
        const baseH = Math.max(height * 0.44, 280);

        // 1. Quantum Probability Cloud (|Ψ|² electron density points)
        quantumDots.forEach((dot, idx) => {
          const cosY = Math.cos(rotY * 0.5);
          const sinY = Math.sin(rotY * 0.5);
          const x1 = dot.x * cosY + dot.z * sinY;
          const z1 = -dot.x * sinY + dot.z * cosY;
          const y2 = dot.y * Math.cos(rotX * 0.5) - z1 * Math.sin(rotX * 0.5);

          const flicker = Math.sin(time * 1.4 + idx * 0.5) * 0.12 + 0.88;
          ctx.beginPath();
          ctx.arc(cx + x1, cy + y2, dot.size, 0, Math.PI * 2);
          ctx.fillStyle = idx % 3 === 0 
            ? `${accentColor}${dot.alpha * flicker * 0.8})` 
            : `${primaryColor}${dot.alpha * flicker * 0.5})`;
          ctx.fill();
        });

        // 2. 4 Interlocking 3D Quantum Orbital Shells with Reduced Electron Velocity
        const atomicShells = [
          { rx: baseW * 0.38, ry: baseH * 0.22, tilt: 0.95, yaw: 0.35, speed: 0.65, electrons: 2, label: '1s²' },
          { rx: baseW * 0.62, ry: baseH * 0.35, tilt: -0.92, yaw: -0.42, speed: -0.48, electrons: 2, label: '2s²' },
          { rx: baseW * 0.95, ry: baseH * 0.52, tilt: 0.18, yaw: 0.85, speed: 0.36, electrons: 3, label: '2px' },
          { rx: baseW * 1.35, ry: baseH * 0.72, tilt: -0.32, yaw: -0.88, speed: -0.28, electrons: 3, label: '2py' },
        ];

        atomicShells.forEach((shell, sIdx) => {
          // Calculate 3D normal tilt and yaw
          const shellRot = time * 0.05 * (sIdx % 2 === 0 ? 1 : -1);
          const totalTilt = shell.tilt + rotX * 0.4;
          const totalYaw = shell.yaw + shellRot + rotY * 0.4;

          // Draw orbital ring with sinusoidal De Broglie matter wave
          ctx.save();
          ctx.beginPath();
          const stepCount = 90;
          for (let step = 0; step <= stepCount; step++) {
            const theta = (step / stepCount) * Math.PI * 2;
            // De Broglie wave modulation (calm standing wave harmonic)
            const waveHarmonic = Math.sin(theta * 6 - time * 1.5 * shell.speed) * (4 + sIdx * 1.5);
            const rModX = shell.rx + waveHarmonic;
            const rModY = shell.ry + waveHarmonic * 0.6;

            // 3D elliptical transform
            const x0 = rModX * Math.cos(theta);
            const y0 = rModY * Math.sin(theta);

            // Rotate by yaw & tilt
            const x1 = x0 * Math.cos(totalYaw) - y0 * Math.sin(totalYaw) * Math.cos(totalTilt);
            const y1 = x0 * Math.sin(totalYaw) + y0 * Math.cos(totalYaw) * Math.cos(totalTilt);

            if (step === 0) ctx.moveTo(cx + x1, cy + y1);
            else ctx.lineTo(cx + x1, cy + y1);
          }

          ctx.strokeStyle = sIdx === 0 || sIdx === 2
            ? `${accentColor}${isDark ? 0.55 : 0.65})`
            : `${primaryColor}${isDark ? 0.22 + sIdx * 0.05 : 0.28 + sIdx * 0.06})`;
          ctx.lineWidth = sIdx === 0 ? 1.8 : 1.2;
          ctx.stroke();
          ctx.restore();

          // Relativistic orbiting electrons with luminescent photon trails
          for (let e = 0; e < shell.electrons; e++) {
            const eAngle = time * shell.speed + (e * (Math.PI * 2)) / shell.electrons;

            // Compute electron coordinate
            const ex0 = shell.rx * Math.cos(eAngle);
            const ey0 = shell.ry * Math.sin(eAngle);
            const ex = cx + ex0 * Math.cos(totalYaw) - ey0 * Math.sin(totalYaw) * Math.cos(totalTilt);
            const ey = cy + ex0 * Math.sin(totalYaw) + ey0 * Math.cos(totalYaw) * Math.cos(totalTilt);

            // Electron trailing photon aura
            ctx.beginPath();
            ctx.arc(ex, ey, 14, 0, Math.PI * 2);
            ctx.fillStyle = `${accentColor}0.2)`;
            ctx.fill();

            // Solid electron particle
            ctx.beginPath();
            ctx.arc(ex, ey, 6.5, 0, Math.PI * 2);
            ctx.fillStyle = e === 0 ? `${accentColor}1)` : `${primaryColor}0.95)`;
            ctx.fill();

            // Inner quantum core
            ctx.beginPath();
            ctx.arc(ex, ey, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = isDark ? '#ffffff' : '#0f172a';
            ctx.fill();

            // Quantum shell tag
            if (e === 0 && (sIdx === 0 || sIdx === 2)) {
              ctx.font = '9px monospace';
              ctx.fillStyle = `${accentColor}0.85)`;
              ctx.fillText(`e⁻ [${shell.label}]`, ex + 9, ey - 6);
            }
          }
        });

        // 3. Dense 3D Nucleus (Protons & Neutrons bound by Strong Nuclear Force)
        // Calmer pulsing nuclear energy field
        const nPulse = Math.sin(time * 1.6) * 2;
        ctx.beginPath();
        ctx.arc(cx, cy, 38 + nPulse, 0, Math.PI * 2);
        ctx.fillStyle = `${accentColor}0.12)`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, cy, 28 + nPulse * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `${accentColor}0.2)`;
        ctx.fill();

        // Project and sort nucleons by 3D depth (Z-buffer)
        const projectedNucleons = nucleons.map((n, idx) => {
          // Calmer nuclear strong force vibrational jiggle
          const jx = n.x + Math.sin(time * 2.2 + n.phase) * 1.2;
          const jy = n.y + Math.cos(time * 2.2 + n.phase) * 1.2;
          const jz = n.z + Math.sin(time * 2.0 + idx) * 1.0;

          const x1 = jx * Math.cos(rotY) + jz * Math.sin(rotY);
          const z1 = -jx * Math.sin(rotY) + jz * Math.cos(rotY);
          const y2 = jy * Math.cos(rotX) - z1 * Math.sin(rotX);
          const z2 = jy * Math.sin(rotX) + z1 * Math.cos(rotX);

          return {
            x: cx + x1,
            y: cy + y2,
            z: z2,
            isProton: n.isProton,
            radius: n.radius,
          };
        }).sort((a, b) => a.z - b.z);

        // Render sorted nucleons with realistic spherical shading and specular highlights
        projectedNucleons.forEach((n) => {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          if (n.isProton) {
            // Proton: High-tech Cyan/Teal
            ctx.fillStyle = `${accentColor}0.95)`;
          } else {
            // Neutron: Neutral high-contrast slate/white
            ctx.fillStyle = isDark ? 'rgba(226, 232, 240, 0.9)' : 'rgba(71, 85, 105, 0.9)';
          }
          ctx.fill();

          // Specular rim
          ctx.beginPath();
          ctx.arc(n.x - n.radius * 0.3, n.y - n.radius * 0.3, n.radius * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
          ctx.fill();
        });

        // Nucleus HUD Technical Tag
        ctx.font = '10px monospace';
        ctx.fillStyle = `${primaryColor}0.85)`;
        ctx.fillText('ATOM // [C-12] NUCLEUS', cx + 32, cy - 18);
        ctx.font = '9px monospace';
        ctx.fillStyle = `${accentColor}0.75)`;
        ctx.fillText('6p⁺ + 6n⁰ · QUANTUM DYNAMICS', cx + 32, cy - 6);
      } else if (mode === 'solarsystem') {
        // High-Fidelity Heliocentric Solar System Simulation (8 Planets + Rings + Belts + Comet)
        const cx = width > 1024 ? width * 0.58 : width * 0.5;
        const cy = height * 0.48;
        const baseW = Math.max(width * 0.76, 620);
        const baseH = Math.max(height * 0.46, 280);

        const tilt = 0.34 + (mouse.y - cy) * 0.0005;
        const yaw = (mouse.x - cx) * 0.0005;

        // 1. Central Star: The Sun (Sol)
        // Coronal outer pulse aura
        const sPulse = Math.sin(time * 3) * 3;
        ctx.beginPath();
        ctx.arc(cx, cy, 38 + sPulse, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(251, 191, 36, 0.12)' : 'rgba(217, 119, 6, 0.12)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, cy, 26 + sPulse * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(251, 191, 36, 0.28)' : 'rgba(245, 158, 11, 0.25)';
        ctx.fill();

        // Photosphere sphere
        ctx.beginPath();
        ctx.arc(cx, cy, 17, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? '#fef08a' : '#d97706';
        ctx.fill();

        // Inner white-hot fusion core
        ctx.beginPath();
        ctx.arc(cx, cy, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        // Solar HUD label
        ctx.font = '10px monospace';
        ctx.fillStyle = `${primaryColor}0.85)`;
        ctx.fillText('SOL // 1.0 M☉ [G2V]', cx + 24, cy - 16);

        // 2. Planets Specification Configuration (Reduced speeds for majestic, smooth orbital motion)
        const planets = [
          { name: 'MERCURY', rFrac: 0.15, size: 3.5, color: '#94a3b8', speed: 0.85 },
          { name: 'VENUS', rFrac: 0.25, size: 5.2, color: '#f59e0b', speed: 0.58 },
          { name: 'EARTH', rFrac: 0.38, size: 6.2, color: '#06b6d4', speed: 0.42, hasMoon: true },
          { name: 'MARS', rFrac: 0.51, size: 4.8, color: '#f87171', speed: 0.30 },
          { name: 'JUPITER', rFrac: 0.76, size: 14.0, color: '#fbbf24', speed: 0.18, hasBands: true },
          { name: 'SATURN', rFrac: 1.06, size: 11.2, color: '#fde047', speed: 0.12, hasRings: true },
          { name: 'URANUS', rFrac: 1.45, size: 7.8, color: '#38bdf8', speed: 0.08 },
          { name: 'NEPTUNE', rFrac: 1.88, size: 7.8, color: '#3b82f6', speed: 0.05 },
        ];

        // 3. Draw Planetary Orbital Traces
        planets.forEach((p, idx) => {
          const rx = baseW * p.rFrac * 0.5;
          const ry = baseH * p.rFrac * 0.5;

          ctx.save();
          ctx.beginPath();
          ctx.ellipse(cx, cy, rx, ry, yaw, 0, Math.PI * 2);
          ctx.strokeStyle = `${primaryColor}${isDark ? 0.12 + (idx % 2) * 0.04 : 0.16 + (idx % 2) * 0.05})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        });

        // 4. Main Asteroid Belt (reduced drift speed for smooth cosmic motion)
        asteroidBelt.forEach((ast) => {
          ast.theta += ast.speed * 0.005;
          const rx = baseW * ast.rFrac * 0.5;
          const ry = baseH * ast.rFrac * 0.5;

          const ax0 = rx * Math.cos(ast.theta);
          const ay0 = ry * Math.sin(ast.theta) + ast.yOffset;
          const ax = cx + ax0 * Math.cos(yaw) - ay0 * Math.sin(tilt);
          const ay = cy + ax0 * Math.sin(yaw) + ay0 * Math.cos(tilt);

          ctx.beginPath();
          ctx.arc(ax, ay, ast.size, 0, Math.PI * 2);
          ctx.fillStyle = `${primaryColor}${ast.alpha})`;
          ctx.fill();
        });

        // 5. Draw Orbiting Planets & Moons & Saturn Rings
        planets.forEach((planet, idx) => {
          const rx = baseW * planet.rFrac * 0.5;
          const ry = baseH * planet.rFrac * 0.5;

          // Planetary position on tilted Keplerian ellipse
          const theta = time * planet.speed + idx * 1.8;
          const px0 = rx * Math.cos(theta);
          const py0 = ry * Math.sin(theta);

          const px = cx + px0 * Math.cos(yaw) - py0 * Math.sin(tilt);
          const py = cy + px0 * Math.sin(yaw) + py0 * Math.cos(tilt);

          // Atmospheric / Illumination glow
          ctx.beginPath();
          ctx.arc(px, py, planet.size * 1.4, 0, Math.PI * 2);
          ctx.fillStyle = `${planet.color}25`;
          ctx.fill();

          // Planet main body
          ctx.beginPath();
          ctx.arc(px, py, planet.size, 0, Math.PI * 2);
          ctx.fillStyle = planet.color;
          ctx.fill();

          // Day/Night terminator shading (illuminated from central Sol)
          const sunDx = px - cx;
          const sunDy = py - cy;
          const sunDist = Math.sqrt(sunDx * sunDx + sunDy * sunDy);
          if (sunDist > 0) {
            const litAngle = Math.atan2(sunDy, sunDx) + Math.PI;
            ctx.beginPath();
            ctx.arc(px, py, planet.size, litAngle - Math.PI / 2, litAngle + Math.PI / 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
            ctx.fill();
          }

          // Special Feature: Earth's Moon (Luna) with calm orbital speed
          if (planet.hasMoon) {
            const moonTheta = time * 2.2;
            const moonDist = 14;
            const mx = px + Math.cos(moonTheta) * moonDist;
            const my = py + Math.sin(moonTheta) * moonDist * 0.6;
            ctx.beginPath();
            ctx.arc(mx, my, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = isDark ? '#e2e8f0' : '#475569';
            ctx.fill();
          }

          // Special Feature: Jupiter Cloud Bands
          if (planet.hasBands) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(px, py, planet.size, 0, Math.PI * 2);
            ctx.clip();
            ctx.fillStyle = 'rgba(180, 83, 9, 0.5)';
            ctx.fillRect(px - planet.size, py - 4, planet.size * 2, 2.5);
            ctx.fillRect(px - planet.size, py + 2, planet.size * 2, 2.5);
            ctx.restore();
          }

          // Special Feature: Saturn's Magnificent Rings
          if (planet.hasRings) {
            ctx.save();
            ctx.beginPath();
            ctx.ellipse(px, py, planet.size * 2.3, planet.size * 0.7, 0.45, 0, Math.PI * 2);
            ctx.strokeStyle = isDark ? 'rgba(253, 224, 71, 0.75)' : 'rgba(202, 138, 4, 0.75)';
            ctx.lineWidth = 3.5;
            ctx.stroke();

            ctx.beginPath();
            ctx.ellipse(px, py, planet.size * 2.7, planet.size * 0.85, 0.45, 0, Math.PI * 2);
            ctx.strokeStyle = isDark ? 'rgba(253, 224, 71, 0.45)' : 'rgba(202, 138, 4, 0.4)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.restore();
          }

          // Planet label tag for key worlds
          if (idx === 2 || idx === 4 || idx === 5) {
            ctx.font = '9px monospace';
            ctx.fillStyle = `${primaryColor}0.8)`;
            ctx.fillText(planet.name, px + planet.size + 4, py - 2);
          }
        });

        // 6. Periodic Comet with Glowing Ion Tail (relaxed orbital sweep)
        const cometAngle = time * 0.12;
        const cEccX = baseW * 0.85 * Math.cos(cometAngle);
        const cEccY = baseH * 0.38 * Math.sin(cometAngle) * 0.7;
        const cometX = cx + cEccX * Math.cos(yaw) - cEccY * Math.sin(tilt);
        const cometY = cy + cEccX * Math.sin(yaw) + cEccY * Math.cos(tilt);

        // Ion tail points directly away from Sun
        const cDx = cometX - cx;
        const cDy = cometY - cy;
        const cDist = Math.sqrt(cDx * cDx + cDy * cDy);
        if (cDist > 0) {
          const tailLen = Math.max(35, 120 * (1 - cDist / (baseW * 0.9)));
          const tailX = cometX + (cDx / cDist) * tailLen;
          const tailY = cometY + (cDy / cDist) * tailLen;

          const tailGrad = ctx.createLinearGradient(cometX, cometY, tailX, tailY);
          tailGrad.addColorStop(0, `${accentColor}0.9)`);
          tailGrad.addColorStop(1, `${accentColor}0)`);

          ctx.beginPath();
          ctx.moveTo(cometX - 2, cometY);
          ctx.lineTo(tailX, tailY);
          ctx.lineTo(cometX + 2, cometY);
          ctx.closePath();
          ctx.fillStyle = tailGrad;
          ctx.fill();

          // Comet nucleus head
          ctx.beginPath();
          ctx.arc(cometX, cometY, 2.8, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();

          ctx.font = '8px monospace';
          ctx.fillStyle = `${accentColor}0.8)`;
          ctx.fillText('COMET C/2026', cometX + 7, cometY - 4);
        }

        // 7. Axevia Tech HUD Telemetry positioned cleanly below the Sun
        ctx.font = '10px monospace';
        ctx.fillStyle = `${primaryColor}0.9)`;
        ctx.fillText('HELIOCENTRIC // SOLAR SYSTEM', cx + 24, cy + 24);
        ctx.font = '9px monospace';
        ctx.fillStyle = `${accentColor}0.85)`;
        ctx.fillText('8 PLANETS · ASTEROID BELT · KEPLER MECHANICS', cx + 24, cy + 36);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode, isDark]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
};
