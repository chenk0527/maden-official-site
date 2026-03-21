/**
 * Maden SVG Icon System
 * 品牌图标库 — 工装美式复古风格，极简线条
 */

interface IconProps {
  size?: number
  color?: string
  strokeWidth?: number
}

/* ─── Social Icons ─── */

export function IconDouyin({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.138-.965c-.849-.973-1.166-1.96-1.28-2.658h.004C16.368 1.275 16.419 1 16.419 1H12.85v14.812c0 .2 0 .396-.008.59 0 .02-.002.04-.003.063v.006c-.063 1.072-.69 2.017-1.626 2.527a3.152 3.152 0 0 1-1.519.394c-1.74 0-3.15-1.414-3.15-3.16 0-1.744 1.41-3.16 3.15-3.16.33 0 .647.052.944.147l.005-3.637a6.922 6.922 0 0 0-.95-.065C5.68 9.517 2.5 12.71 2.5 16.643 2.5 20.576 5.68 23.77 9.694 23.77c4.013 0 7.193-3.194 7.193-7.128V8.906c1.485 1.066 3.307 1.694 5.113 1.694V7.048c-1.027 0-2.025-.34-2.679-.845v-.64Z"
        fill={color}
      />
    </svg>
  )
}

export function IconXiaohongshu({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 小红书 — 简化"小红书"文字书本图标 */}
      <rect x="3" y="3" width="18" height="18" rx="4" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M8 8h3.5M8 12h8M8 16h6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="16.5" cy="8" r="2" fill={color}/>
    </svg>
  )
}

export function IconWeixin({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.5 4C5.358 4 2 6.91 2 10.5c0 2.05 1.1 3.876 2.824 5.092L4 18l2.618-1.31C7.333 16.88 8.393 17 9.5 17c.343 0 .682-.02 1.015-.058C10.187 16.34 10 15.688 10 15c0-3.314 3.134-6 7-6 .344 0 .683.02 1.015.059C17.467 6.635 13.836 4 9.5 4Z"
        stroke={color} strokeWidth="1.5" fill="none" strokeLinejoin="round"
      />
      <path
        d="M17 11c-2.761 0-5 1.79-5 4s2.239 4 5 4c.677 0 1.32-.12 1.909-.337L22 20l-.691-2.073C22.384 17.176 23 16.146 23 15c0-2.21-2.239-4-6-4Z"
        stroke={color} strokeWidth="1.5" fill="none" strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconWeibo({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.098 20c-4.475 0-8.098-2.44-8.098-5.452 0-1.67.994-3.56 2.726-5.05C6.55 7.89 8.622 7 10.333 7c.442 0 .854.052 1.232.15-.15-.477-.231-.99-.231-1.525C11.334 3.075 13.408 1.5 16 1.5"
        stroke={color} strokeWidth="1.5" strokeLinecap="round"
      />
      <path
        d="M10 20c4.418 0 8-2.239 8-5s-3.582-5-8-5-8 2.239-8 5 3.582 5 8 5Z"
        stroke={color} strokeWidth="1.5" fill="none"
      />
      <circle cx="8.5" cy="15.5" r="1" fill={color}/>
      <circle cx="11.5" cy="14" r="1.5" fill={color}/>
      <path d="M18 5c.667 0 2 .4 2 2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

/* ─── Brand Value Icons — 工装风格 ─── */

// 坚韧 — 锤子（工匠精神）
export function IconHammer({ size = 48, color = 'currentColor', strokeWidth = 1.2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="18" width="20" height="10" rx="2" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M24 21h8l4-4v-4l-4-2h-8" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
      <path d="M14 28l-6 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M18 28l6 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  )
}

// 复古 — 怀旧指南针
export function IconCompass({ size = 48, color = 'currentColor', strokeWidth = 1.2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" stroke={color} strokeWidth={strokeWidth}/>
      <circle cx="24" cy="24" r="2" fill={color}/>
      <path d="M24 6v4M24 38v4M6 24h4M38 24h4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M24 22l-6 6 6-16 6 16-6-6Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

// 自在 — 飞鸟（自由）
export function IconBird({ size = 48, color = 'currentColor', strokeWidth = 1.2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 28c4-8 10-12 16-12s10 4 16 4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M8 28c4-4 8-4 12 0" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M28 22c4 0 8 2 12 2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M20 28c0 4 2 8 4 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  )
}

/* ─── Utility Icons ─── */

export function IconPin({ size = 20, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2a6 6 0 0 1 6 6c0 4-6 10-6 10S4 12 4 8a6 6 0 0 1 6-6Z" stroke={color} strokeWidth={strokeWidth}/>
      <circle cx="10" cy="8" r="2" stroke={color} strokeWidth={strokeWidth}/>
    </svg>
  )
}

export function IconMail({ size = 20, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M2 7l8 5 8-5" stroke={color} strokeWidth={strokeWidth}/>
    </svg>
  )
}

export function IconPhone({ size = 20, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 2h3l1.5 4-2 1.5a11 11 0 0 0 4.5 4.5L14 10l4 1.5v3A1.5 1.5 0 0 1 16.5 16 14.5 14.5 0 0 1 3 3.5 1.5 1.5 0 0 1 4.5 2h1Z"
        stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconArrowRight({ size = 20, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10h12M11 5l5 5-5 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function IconExternalLink({ size = 14, color = 'currentColor', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M8 2h4v4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 2L7 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  )
}

// 招聘岗位图标
export function IconChart({ size = 32, color = 'currentColor', strokeWidth = 1.2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="20" width="5" height="9" rx="1" stroke={color} strokeWidth={strokeWidth}/>
      <rect x="10" y="14" width="5" height="15" rx="1" stroke={color} strokeWidth={strokeWidth}/>
      <rect x="17" y="8" width="5" height="21" rx="1" stroke={color} strokeWidth={strokeWidth}/>
      <rect x="24" y="3" width="5" height="26" rx="1" stroke={color} strokeWidth={strokeWidth}/>
    </svg>
  )
}

export function IconPen({ size = 32, color = 'currentColor', strokeWidth = 1.2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 27l3-9L22 4l6 6L14 24l-9 3Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
      <path d="M19 7l6 6" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M5 27l3-3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  )
}

export function IconCode({ size = 32, color = 'currentColor', strokeWidth = 1.2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10L4 16l6 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 10l6 6-6 6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 6l-4 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  )
}

export function IconStar({ size = 32, color = 'currentColor', strokeWidth = 1.2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3l3.5 8.5L29 13l-7 6.5 2 9.5-8-4.5L8 29l2-9.5L3 13l9.5-1.5L16 3Z"
        stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
    </svg>
  )
}

export function IconBriefcase({ size = 32, color = 'currentColor', strokeWidth = 1.2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="10" width="26" height="18" rx="2" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M11 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M3 19h26" stroke={color} strokeWidth={strokeWidth}/>
    </svg>
  )
}

export function IconGlobe({ size = 32, color = 'currentColor', strokeWidth = 1.2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="13" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M16 3c-4 4-6 8-6 13s2 9 6 13" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M16 3c4 4 6 8 6 13s-2 9-6 13" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M3 16h26" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M4 10h24M4 22h24" stroke={color} strokeWidth={strokeWidth}/>
    </svg>
  )
}
