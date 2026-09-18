import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  Code,
  Download,
  ExternalLink,
  Eye,
  EyeOff,
  GitBranch,
  Home,
  Key,
  LayoutDashboard,
  Mail,
  Menu,
  Moon,
  Plus,
  Search,
  Settings,
  Shield,
  Sparkles,
  Star,
  Sun,
  User,
  X,
  Zap,
} from "lucide-react";

// Icon map
// One place to add, remove, or swap icons across the entire app.
// To change an icon globally — update it here. No component changes needed.

export const iconMap = {
  // navigation
  "arrow-right": ArrowRight,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  "external-link": ExternalLink,
  menu: Menu,
  close: X,

  // actions
  search: Search,
  settings: Settings,
  plus: Plus,
  check: Check,
  download: Download,
  key: Key,
  eye: Eye,
  "eye-off": EyeOff,

  // navigation items
  home: Home,
  mail: Mail,
  star: Star,

  // dashboard features — matches design system icon spec
  dashboard: LayoutDashboard,
  sessions: Clock,
  analytics: Star,
  code: Code,
  "git-branch": GitBranch,
  shield: Shield,
  sparkles: Sparkles,
  user: User,
  zap: Zap,

  // theme
  sun: Sun,
  moon: Moon,
} as const;

export const lucideIconRegistry = {
  ArrowRight: "arrow-right",
  ChevronDown: "chevron-down",
  ChevronLeft: "chevron-left",
  ChevronRight: "chevron-right",
  Close: "close",
  Dashboard: "dashboard",
  Sessions: "sessions",
  Search: "search",
  Settings: "settings",
  Sparkles: "sparkles",
  GitBranch: "git-branch",
  Shield: "shield",
  User: "user",
  Mail: "mail",
  Sun: "sun",
  Moon: "moon",
  Eye: "eye",
  EyeOff: "eye-off",
  Check: "check",
} as const satisfies Record<string, IconName>;

// Types
export type IconName = keyof typeof iconMap;
