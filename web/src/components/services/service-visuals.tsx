import type { CSSProperties } from "react";

/**
 * Visual graphic 01: Multi-tiered Enterprise Architecture Stack
 * Tiers: BUSINESS, DATA, PLATFORM, AI
 */
export function ArchitectureStackVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[160px] drop-shadow-sm"
      >
        <defs>
          <linearGradient id="stackGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F65D01" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FF8C42" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="tierGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F65D01" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#EA4800" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="tierGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFF0E6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFE0CC" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="tierGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F4F2ED" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#E8E5DD" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="tierGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E212B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2A2E3D" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Ambient subtle glow */}
        <ellipse cx="160" cy="95" rx="100" ry="38" fill="url(#stackGlow)" opacity="0.15" />

        {/* Layer 1: BUSINESS (Top tier) */}
        <g transform="translate(0, 14)">
          <path
            d="M80 32 L160 16 L240 32 L160 48 Z"
            fill="url(#tierGrad1)"
            stroke="#1E212B"
            strokeWidth="1.2"
          />
          <path
            d="M80 32 L160 48 L160 56 L80 40 Z"
            fill="#161820"
            stroke="#1E212B"
            strokeWidth="0.8"
          />
          <path
            d="M240 32 L160 48 L160 56 L240 40 Z"
            fill="#0E0F15"
            stroke="#1E212B"
            strokeWidth="0.8"
          />
          <text
            x="160"
            y="35"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="9"
            fontWeight="700"
            letterSpacing="1.5"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            BUSINESS
          </text>
        </g>

        {/* Layer 2: DATA */}
        <g transform="translate(0, 44)">
          <path
            d="M68 36 L160 18 L252 36 L160 54 Z"
            fill="url(#tierGrad2)"
            stroke="#D8D4CB"
            strokeWidth="1.2"
          />
          <path
            d="M68 36 L160 54 L160 62 L68 44 Z"
            fill="#D0CBC0"
            stroke="#D8D4CB"
            strokeWidth="0.8"
          />
          <path
            d="M252 36 L160 54 L160 62 L252 44 Z"
            fill="#BEB8AA"
            stroke="#D8D4CB"
            strokeWidth="0.8"
          />
          <text
            x="160"
            y="39"
            textAnchor="middle"
            fill="#1E212B"
            fontSize="9.5"
            fontWeight="700"
            letterSpacing="1.5"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            DATA
          </text>
        </g>

        {/* Layer 3: PLATFORM */}
        <g transform="translate(0, 74)">
          <path
            d="M56 40 L160 20 L264 40 L160 60 Z"
            fill="url(#tierGrad3)"
            stroke="#F65D01"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
          <path
            d="M56 40 L160 60 L160 68 L56 48 Z"
            fill="#FFD4B3"
            stroke="#F65D01"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
          <path
            d="M264 40 L160 60 L160 68 L264 48 Z"
            fill="#FFBF94"
            stroke="#F65D01"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
          <text
            x="160"
            y="43"
            textAnchor="middle"
            fill="#B84200"
            fontSize="10"
            fontWeight="800"
            letterSpacing="1.5"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            PLATFORM
          </text>
        </g>

        {/* Layer 4: AI (Base foundation & intelligence) */}
        <g transform="translate(0, 104)">
          <path
            d="M44 44 L160 22 L276 44 L160 66 Z"
            fill="url(#tierGrad4)"
            stroke="#F65D01"
            strokeWidth="1.5"
          />
          <path
            d="M44 44 L160 66 L160 76 L44 54 Z"
            fill="#D94E00"
            stroke="#F65D01"
            strokeWidth="0.8"
          />
          <path
            d="M276 44 L160 66 L160 76 L276 54 Z"
            fill="#B84200"
            stroke="#F65D01"
            strokeWidth="0.8"
          />
          <text
            x="160"
            y="47"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="11"
            fontWeight="800"
            letterSpacing="2.5"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            AI
          </text>
        </g>
      </svg>
    </div>
  );
}

/**
 * Visual graphic 02: Enterprise AI & Agentic Systems Network
 * Central node AI AGENTS connected to peripheral nodes
 */
export function AgenticNetworkVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="agentPulse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F65D01" />
            <stop offset="100%" stopColor="#FF9556" />
          </linearGradient>
        </defs>

        {/* Connecting lines */}
        <line x1="60" y1="60" x2="25" y2="35" stroke="#F65D01" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 2" />
        <line x1="60" y1="60" x2="95" y2="35" stroke="#F65D01" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 2" />
        <line x1="60" y1="60" x2="20" y2="75" stroke="#F65D01" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 2" />
        <line x1="60" y1="60" x2="100" y2="75" stroke="#F65D01" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 2" />
        <line x1="60" y1="60" x2="60" y2="100" stroke="#F65D01" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 2" />

        {/* Outer nodes */}
        <circle cx="25" cy="35" r="9" fill="#1E212B" stroke="#363A4A" strokeWidth="1.5" />
        <circle cx="25" cy="35" r="3.5" fill="#3D7EB8" />

        <circle cx="95" cy="35" r="9" fill="#1E212B" stroke="#363A4A" strokeWidth="1.5" />
        <circle cx="95" cy="35" r="3.5" fill="#3D7EB8" />

        <circle cx="20" cy="75" r="9" fill="#1E212B" stroke="#363A4A" strokeWidth="1.5" />
        <circle cx="20" cy="75" r="3.5" fill="#3D7EB8" />

        <circle cx="100" cy="75" r="9" fill="#1E212B" stroke="#363A4A" strokeWidth="1.5" />
        <circle cx="100" cy="75" r="3.5" fill="#3D7EB8" />

        <circle cx="60" cy="100" r="8" fill="#1E212B" stroke="#363A4A" strokeWidth="1.5" />
        <circle cx="60" cy="100" r="3" fill="#3D7EB8" />

        {/* Center node glow */}
        <circle cx="60" cy="60" r="24" fill="#F65D01" fillOpacity="0.12" />

        {/* Center node */}
        <circle cx="60" cy="60" r="18" fill="url(#agentPulse)" stroke="#FFFFFF" strokeWidth="1.8" />
        <text
          x="60"
          y="58"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="6.5"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.4"
        >
          AI
        </text>
        <text
          x="60"
          y="66"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="6"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.4"
        >
          AGENTS
        </text>
      </svg>
    </div>
  );
}

/**
 * Visual graphic 03: AI Governance & Architecture Assurance Shield
 * Shield emblem: TRUST, CONTROL, RESPONSIBLE AI
 */
export function GovernanceShieldVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F65D01" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1E212B" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Outer shield perimeter */}
        <path
          d="M60 18 L94 30 V62 C94 82 79 99 60 106 C41 99 26 82 26 62 V30 L60 18 Z"
          fill="url(#shieldGrad)"
          stroke="#F65D01"
          strokeWidth="1.8"
        />

        {/* Inner shield border */}
        <path
          d="M60 26 L86 36 V62 C86 77 75 91 60 97 C45 91 34 77 34 62 V36 L60 26 Z"
          stroke="#F65D01"
          strokeWidth="1"
          strokeOpacity="0.5"
          strokeDasharray="3 2"
        />

        {/* Center divider spine */}
        <line x1="60" y1="28" x2="60" y2="92" stroke="#F65D01" strokeWidth="1.2" strokeOpacity="0.6" />

        {/* Horizontal crossbar */}
        <line x1="42" y1="58" x2="78" y2="58" stroke="#F65D01" strokeWidth="1.2" strokeOpacity="0.4" />

        {/* Trust / Control text indicators */}
        <text
          x="46"
          y="48"
          textAnchor="middle"
          fill="#1E212B"
          fontSize="6"
          fontWeight="800"
          letterSpacing="0.8"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          TRUST
        </text>
        <text
          x="74"
          y="48"
          textAnchor="middle"
          fill="#1E212B"
          fontSize="6"
          fontWeight="800"
          letterSpacing="0.8"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          CONTROL
        </text>

        {/* Center checkmark / emblem badge */}
        <circle cx="60" cy="58" r="9" fill="#F65D01" />
        <path
          d="M56 58 L59 61 L65 55"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bottom banner: RESPONSIBLE AI */}
        <rect x="30" y="74" width="60" height="12" rx="6" fill="#1E212B" />
        <text
          x="60"
          y="82.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="5"
          fontWeight="700"
          letterSpacing="0.6"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          RESPONSIBLE AI
        </text>
      </svg>
    </div>
  );
}

/**
 * Visual graphic 04: Transformation Advisory Ascending Trajectory
 * Milestones: ASSESS -> DESIGN -> EXECUTE -> SCALE
 */
export function TransformationCurveVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 320 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="transCurveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3D7EB8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#3D7EB8" />
            <stop offset="100%" stopColor="#F65D01" />
          </linearGradient>
          <linearGradient id="transAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F65D01" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#3D7EB8" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Grid lines in dark theme */}
        <line x1="30" y1="125" x2="290" y2="125" stroke="#2A2E3D" strokeWidth="0.8" strokeDasharray="3 3" />
        <line x1="30" y1="85" x2="290" y2="85" stroke="#2A2E3D" strokeWidth="0.8" strokeDasharray="3 3" />
        <line x1="30" y1="45" x2="290" y2="45" stroke="#2A2E3D" strokeWidth="0.8" strokeDasharray="3 3" />

        {/* Fill area beneath curve */}
        <path
          d="M 40 120 C 100 120, 150 105, 190 70 C 230 35, 260 22, 280 18 L 280 135 L 40 135 Z"
          fill="url(#transAreaGrad)"
        />

        {/* Trajectory curve */}
        <path
          d="M 40 120 C 100 120, 150 105, 190 70 C 230 35, 260 22, 280 18"
          stroke="url(#transCurveGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Arrowhead at peak */}
        <polygon points="278,14 286,18 280,24" fill="#F65D01" />

        {/* Stage 1: ASSESS */}
        <circle cx="50" cy="120" r="5" fill="#1E212B" stroke="#3D7EB8" strokeWidth="2" />
        <circle cx="50" cy="120" r="2" fill="#3D7EB8" />
        <text x="50" y="142" textAnchor="middle" fill="#8B909A" fontSize="7.5" fontWeight="700" letterSpacing="0.8">
          ASSESS
        </text>

        {/* Stage 2: DESIGN */}
        <circle cx="120" cy="112" r="5" fill="#1E212B" stroke="#3D7EB8" strokeWidth="2" />
        <circle cx="120" cy="112" r="2" fill="#3D7EB8" />
        <text x="120" y="134" textAnchor="middle" fill="#8B909A" fontSize="7.5" fontWeight="700" letterSpacing="0.8">
          DESIGN
        </text>

        {/* Stage 3: EXECUTE */}
        <circle cx="200" cy="62" r="5" fill="#1E212B" stroke="#FF7A2E" strokeWidth="2" />
        <circle cx="200" cy="62" r="2.5" fill="#FF7A2E" />
        <text x="200" y="50" textAnchor="middle" fill="#FF9556" fontSize="7.5" fontWeight="700" letterSpacing="0.8">
          EXECUTE
        </text>

        {/* Stage 4: SCALE */}
        <circle cx="270" cy="22" r="6" fill="#F65D01" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="270" cy="22" r="2.5" fill="#FFFFFF" />
        <text x="270" y="12" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800" letterSpacing="1">
          SCALE
        </text>
      </svg>
    </div>
  );
}

/**
 * Subtle star watermark for the background like in sample image
 */
export function SubtleStarWatermark({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute select-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M 50 0 C 50 25, 75 50, 100 50 C 75 50, 50 75, 50 100 C 50 75, 25 50, 0 50 C 25 50, 50 25, 50 0 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Visual graphic: Isometric Architecture Grid Matrix with central orange core
 * Mirrors the eleken.co UI reference illustration with wireframe cubes and glowing sphere
 */
export function IsometricMatrixVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full max-w-[420px] aspect-[4/3] flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 380 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          <radialGradient id="sphereOrangeGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFA066" />
            <stop offset="55%" stopColor="#F65D01" />
            <stop offset="100%" stopColor="#B84200" />
          </radialGradient>
          <filter id="sphereShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#F65D01" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* ── Background Wireframe Cubes ── */}
        {/* Cube Back Left */}
        <g stroke="#1E212B" strokeOpacity="0.32" strokeWidth="1.2" strokeDasharray="3 2.5">
          <path d="M90 70 L125 50 L160 70 L125 90 Z" fill="#FAF9F7" fillOpacity="0.6" />
          <path d="M90 70 L90 105 L125 125 L125 90 Z" fill="#F4F2ED" fillOpacity="0.4" />
          <path d="M160 70 L160 105 L125 125 L125 90 Z" fill="#E8E5DD" fillOpacity="0.3" />
        </g>

        {/* Cube Back Center */}
        <g stroke="#1E212B" strokeOpacity="0.32" strokeWidth="1.2" strokeDasharray="3 2.5">
          <path d="M150 45 L185 25 L220 45 L185 65 Z" fill="#FAF9F7" fillOpacity="0.6" />
          <path d="M150 45 L150 80 L185 100 L185 65 Z" fill="#F4F2ED" fillOpacity="0.4" />
          <path d="M220 45 L220 80 L185 100 L185 65 Z" fill="#E8E5DD" fillOpacity="0.3" />
        </g>

        {/* Cube Back Right */}
        <g stroke="#1E212B" strokeOpacity="0.32" strokeWidth="1.2" strokeDasharray="3 2.5">
          <path d="M210 65 L245 45 L280 65 L245 85 Z" fill="#FAF9F7" fillOpacity="0.6" />
          <path d="M210 65 L210 100 L245 120 L245 85 Z" fill="#F4F2ED" fillOpacity="0.4" />
          <path d="M280 65 L280 100 L245 120 L245 85 Z" fill="#E8E5DD" fillOpacity="0.3" />
        </g>

        {/* Cube Mid Far Left */}
        <g stroke="#1E212B" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="3 2.5">
          <path d="M45 125 L80 105 L115 125 L80 145 Z" fill="#FAF9F7" fillOpacity="0.7" />
          <path d="M45 125 L45 160 L80 180 L80 145 Z" fill="#F4F2ED" fillOpacity="0.5" />
          <path d="M115 125 L115 160 L80 180 L80 145 Z" fill="#E8E5DD" fillOpacity="0.4" />
        </g>

        {/* Cube Mid Left */}
        <g stroke="#1E212B" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="3 2.5">
          <path d="M105 105 L140 85 L175 105 L140 125 Z" fill="#FAF9F7" fillOpacity="0.7" />
          <path d="M105 105 L105 140 L140 160 L140 125 Z" fill="#F4F2ED" fillOpacity="0.5" />
          <path d="M175 105 L175 140 L140 160 L140 125 Z" fill="#E8E5DD" fillOpacity="0.4" />
        </g>

        {/* Cube Mid Right (behind sphere) */}
        <g stroke="#1E212B" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="3 2.5">
          <path d="M225 100 L260 80 L295 100 L260 120 Z" fill="#FAF9F7" fillOpacity="0.7" />
          <path d="M225 100 L225 135 L260 155 L260 120 Z" fill="#F4F2ED" fillOpacity="0.5" />
          <path d="M295 100 L295 135 L260 155 L260 120 Z" fill="#E8E5DD" fillOpacity="0.4" />
        </g>

        {/* Cube Mid Far Right */}
        <g stroke="#1E212B" strokeOpacity="0.32" strokeWidth="1.2" strokeDasharray="3 2.5">
          <path d="M275 125 L310 105 L345 125 L310 145 Z" fill="#FAF9F7" fillOpacity="0.6" />
          <path d="M275 125 L275 160 L310 180 L310 145 Z" fill="#F4F2ED" fillOpacity="0.4" />
          <path d="M345 125 L345 160 L310 180 L310 145 Z" fill="#E8E5DD" fillOpacity="0.3" />
        </g>

        {/* ── Central Glowing Core Sphere ── */}
        <ellipse cx="195" cy="180" rx="34" ry="14" fill="#F65D01" fillOpacity="0.16" />
        <circle
          cx="195"
          cy="165"
          r="26"
          fill="url(#sphereOrangeGrad)"
          filter="url(#sphereShadow)"
        />

        {/* ── Foreground Wireframe Cubes ── */}
        {/* Cube Front Bottom Left */}
        <g stroke="#1E212B" strokeOpacity="0.38" strokeWidth="1.2" strokeDasharray="3 2.5">
          <path d="M48 185 L83 165 L118 185 L83 205 Z" fill="#FAF9F7" fillOpacity="0.8" />
          <path d="M48 185 L48 220 L83 240 L83 205 Z" fill="#F4F2ED" fillOpacity="0.6" />
          <path d="M118 185 L118 220 L83 240 L83 205 Z" fill="#E8E5DD" fillOpacity="0.5" />
        </g>

        {/* Cube Front Left */}
        <g stroke="#1E212B" strokeOpacity="0.38" strokeWidth="1.2" strokeDasharray="3 2.5">
          <path d="M102 165 L137 145 L172 165 L137 185 Z" fill="#FAF9F7" fillOpacity="0.85" />
          <path d="M102 165 L102 200 L137 220 L137 185 Z" fill="#F4F2ED" fillOpacity="0.65" />
          <path d="M172 165 L172 200 L137 220 L137 185 Z" fill="#E8E5DD" fillOpacity="0.5" />
        </g>

        {/* Cube Front Center Bottom */}
        <g stroke="#1E212B" strokeOpacity="0.38" strokeWidth="1.2" strokeDasharray="3 2.5">
          <path d="M135 205 L170 185 L205 205 L170 225 Z" fill="#FAF9F7" fillOpacity="0.8" />
          <path d="M135 205 L135 240 L170 260 L170 225 Z" fill="#F4F2ED" fillOpacity="0.6" />
          <path d="M205 205 L205 240 L170 260 L170 225 Z" fill="#E8E5DD" fillOpacity="0.5" />
        </g>

        {/* Cube Front Right of Sphere */}
        <g stroke="#1E212B" strokeOpacity="0.38" strokeWidth="1.2" strokeDasharray="3 2.5">
          <path d="M200 168 L235 148 L270 168 L235 188 Z" fill="#FAF9F7" fillOpacity="0.85" />
          <path d="M200 168 L200 203 L235 223 L235 188 Z" fill="#F4F2ED" fillOpacity="0.65" />
          <path d="M270 168 L270 203 L235 223 L235 188 Z" fill="#E8E5DD" fillOpacity="0.5" />
        </g>

        {/* Cube Front Far Right */}
        <g stroke="#1E212B" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="3 2.5">
          <path d="M255 190 L290 170 L325 190 L290 210 Z" fill="#FAF9F7" fillOpacity="0.8" />
          <path d="M255 190 L255 225 L290 245 L290 210 Z" fill="#F4F2ED" fillOpacity="0.6" />
          <path d="M325 190 L325 225 L290 245 L290 210 Z" fill="#E8E5DD" fillOpacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

