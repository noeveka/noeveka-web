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
 * Visual graphic 02: Enterprise AI & Agentic Systems
 * Dark hardware/AI tile with glowing robot core, cloud badge, metrics pill, and node graph
 */
export function AgenticNetworkVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[160px] drop-shadow-sm"
      >
        <defs>
          <filter id="robotGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#F65D01" floodOpacity="0.45" />
          </filter>
          <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.08" />
          </filter>
          <linearGradient id="robotCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA066" />
            <stop offset="40%" stopColor="#F65D01" />
            <stop offset="100%" stopColor="#EA4800" />
          </linearGradient>
          <linearGradient id="tileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E3240" />
            <stop offset="100%" stopColor="#1E212B" />
          </linearGradient>
        </defs>

        {/* Ambient subtle warm waves */}
        <circle cx="100" cy="85" r="75" stroke="#F65D01" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="4 4" />
        <circle cx="100" cy="85" r="55" stroke="#F65D01" strokeWidth="1" strokeOpacity="0.18" />

        {/* Main dark agentic tile */}
        <rect
          x="60"
          y="45"
          width="80"
          height="80"
          rx="18"
          fill="url(#tileGrad)"
          stroke="#3C4152"
          strokeWidth="1.5"
          filter="url(#badgeShadow)"
        />

        {/* Corner rivets */}
        <circle cx="70" cy="55" r="2" fill="#50566B" />
        <circle cx="130" cy="55" r="2" fill="#50566B" />
        <circle cx="70" cy="115" r="2" fill="#50566B" />
        <circle cx="130" cy="115" r="2" fill="#50566B" />

        {/* Glowing orange central robot button */}
        <circle
          cx="100"
          cy="85"
          r="23"
          fill="url(#robotCoreGrad)"
          filter="url(#robotGlow)"
        />

        {/* Robot face inside */}
        {/* Antenna */}
        <line x1="100" y1="74" x2="100" y2="71" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="100" cy="70" r="1.5" fill="#FFFFFF" />
        {/* Head */}
        <rect x="91" y="75" width="18" height="15" rx="3.5" fill="#FFFFFF" />
        {/* Ears */}
        <rect x="89.5" y="79" width="1.5" height="4" rx="0.75" fill="#FFFFFF" />
        <rect x="109" y="79" width="1.5" height="4" rx="0.75" fill="#FFFFFF" />
        {/* Eyes */}
        <circle cx="96" cy="81" r="1.5" fill="#F65D01" />
        <circle cx="104" cy="81" r="1.5" fill="#F65D01" />
        {/* Smile */}
        <path d="M96 85.5 Q100 88 104 85.5" stroke="#F65D01" strokeWidth="1.2" strokeLinecap="round" fill="none" />

        {/* ── Floating Badge 1: Top-Right Orange Cloud ── */}
        <g filter="url(#badgeShadow)">
          <circle cx="148" cy="42" r="15" fill="#F65D01" />
          {/* Cloud icon */}
          <path
            d="M142 44.5 C140.5 44.5 139 43.5 139 42 C139 40.5 140.2 39.5 141.5 39.5 C141.8 38 143.2 37 145 37 C147 37 148.5 38.2 148.8 39.8 C149.2 39.6 149.6 39.5 150 39.5 C151.4 39.5 152.5 40.6 152.5 42 C152.5 43.4 151.4 44.5 150 44.5 Z"
            fill="#FFFFFF"
          />
        </g>

        {/* ── Floating Badge 2: Right-Side Analytics Pill ── */}
        <g filter="url(#badgeShadow)">
          <rect x="144" y="80" width="22" height="26" rx="8" fill="#FFFFFF" stroke="#F0ECE4" strokeWidth="1" />
          {/* 3 orange bars */}
          <rect x="148" y="94" width="3" height="7" rx="1.5" fill="#F65D01" />
          <rect x="153.5" y="89" width="3" height="12" rx="1.5" fill="#F65D01" />
          <rect x="159" y="85" width="3" height="16" rx="1.5" fill="#F65D01" />
        </g>

        {/* ── Floating Badge 3: Bottom-Left Interconnected Nodes ── */}
        <g filter="url(#badgeShadow)">
          <circle cx="52" cy="115" r="14" fill="#FFFFFF" stroke="#F0ECE4" strokeWidth="1" />
          {/* 3 interconnected nodes */}
          <circle cx="47" cy="118" r="2.5" fill="#F65D01" />
          <circle cx="57" cy="118" r="2.5" fill="#F65D01" />
          <circle cx="52" cy="110" r="2.5" fill="#F65D01" />
          <line x1="47" y1="118" x2="57" y2="118" stroke="#F65D01" strokeWidth="1" />
          <line x1="47" y1="118" x2="52" y2="110" stroke="#F65D01" strokeWidth="1" />
          <line x1="57" y1="118" x2="52" y2="110" stroke="#F65D01" strokeWidth="1" />
        </g>
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
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[160px] drop-shadow-sm"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4ED" />
            <stop offset="50%" stopColor="#FFE4D3" />
            <stop offset="100%" stopColor="#FFD4B8" />
          </linearGradient>
          <filter id="shieldShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#F65D01" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Ambient subtle glow ring */}
        <circle cx="80" cy="80" r="68" stroke="#F65D01" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="3 3" />

        {/* Outer shield perimeter */}
        <path
          d="M80 24 L122 40 V82 C122 108 103 130 80 138 C57 130 38 108 38 82 V40 L80 24 Z"
          fill="url(#shieldGrad)"
          stroke="#F65D01"
          strokeWidth="2.2"
          filter="url(#shieldShadow)"
        />

        {/* Inner shield dashed line */}
        <path
          d="M80 34 L112 47 V82 C112 102 96 119 80 126 C64 119 48 102 48 82 V47 L80 34 Z"
          stroke="#F65D01"
          strokeWidth="1.2"
          strokeOpacity="0.5"
          strokeDasharray="3 2.5"
        />

        {/* Center divider spine */}
        <line x1="80" y1="36" x2="80" y2="120" stroke="#F65D01" strokeWidth="1.2" strokeOpacity="0.4" />

        {/* Horizontal crossbar */}
        <line x1="58" y1="74" x2="102" y2="74" stroke="#F65D01" strokeWidth="1.2" strokeOpacity="0.3" />

        {/* Trust / Control text indicators */}
        <text
          x="62"
          y="62"
          textAnchor="middle"
          fill="#1E212B"
          fontSize="7.5"
          fontWeight="800"
          letterSpacing="1"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          TRUST
        </text>
        <text
          x="98"
          y="62"
          textAnchor="middle"
          fill="#1E212B"
          fontSize="7.5"
          fontWeight="800"
          letterSpacing="1"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          CONTROL
        </text>

        {/* Center checkmark badge */}
        <circle cx="80" cy="74" r="11" fill="#F65D01" />
        <path
          d="M75 74 L78.5 77.5 L85.5 70.5"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bottom banner: RESPONSIBLE AI */}
        <rect x="44" y="94" width="72" height="15" rx="7.5" fill="#1E212B" />
        <text
          x="80"
          y="104.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="6.5"
          fontWeight="800"
          letterSpacing="0.8"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          RESPONSIBLE AI
        </text>
      </svg>
    </div>
  );
}

/**
 * Visual graphic 04: Data & AI Transformation Advisory
 * Trajectory curve with STRATEGY -> EXECUTION badge matching reference screenshot
 */
export function TransformationCurveVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 220 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[160px] drop-shadow-sm"
      >
        <defs>
          <linearGradient id="transCurveGradLight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFA066" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#F65D01" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#F65D01" />
          </linearGradient>
          <linearGradient id="transAreaGradLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F65D01" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#F65D01" stopOpacity="0.01" />
          </linearGradient>
          <filter id="pillShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Ambient subtle horizontal grid */}
        <line x1="20" y1="115" x2="200" y2="115" stroke="#EBE7DE" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="20" y1="80" x2="200" y2="80" stroke="#EBE7DE" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="20" y1="45" x2="200" y2="45" stroke="#EBE7DE" strokeWidth="1" strokeDasharray="3 3" />

        {/* Fill area beneath curve */}
        <path
          d="M 35 115 C 80 115, 120 95, 155 60 C 175 42, 185 36, 195 32 L 195 125 L 35 125 Z"
          fill="url(#transAreaGradLight)"
        />

        {/* Trajectory curve */}
        <path
          d="M 35 115 C 80 115, 120 95, 155 60 C 175 42, 185 36, 195 32"
          stroke="url(#transCurveGradLight)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Milestone Node 1: Start */}
        <circle cx="45" cy="115" r="4.5" fill="#FFFFFF" stroke="#F65D01" strokeWidth="2" />
        <circle cx="45" cy="115" r="2" fill="#F65D01" />

        {/* Milestone Node 2: Mid */}
        <circle cx="115" cy="98" r="4.5" fill="#FFFFFF" stroke="#F65D01" strokeWidth="2" />
        <circle cx="115" cy="98" r="2" fill="#F65D01" />

        {/* Milestone Node 3: Growth */}
        <circle cx="160" cy="55" r="5" fill="#F65D01" stroke="#FFFFFF" strokeWidth="2" />

        {/* Milestone Node 4: Target Peak */}
        <circle cx="195" cy="32" r="6" fill="#F65D01" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="195" cy="32" r="2.5" fill="#FFFFFF" />

        {/* ── Badge Pill: STRATEGY → EXECUTION ── */}
        <g filter="url(#pillShadow)">
          <rect x="95" y="124" width="112" height="22" rx="11" fill="#FFFFFF" stroke="#EFECE5" strokeWidth="1" />
          <text
            x="151"
            y="138.5"
            textAnchor="middle"
            fill="#757780"
            fontSize="7.5"
            fontWeight="700"
            letterSpacing="0.8"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            STRATEGY  →  EXECUTION
          </text>
        </g>
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

