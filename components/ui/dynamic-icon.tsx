import {
  Accessibility,
  Award,
  BrainCircuit,
  Captions,
  CheckCircle,
  ClipboardCheck,
  Clock,
  Database,
  Globe,
  GraduationCap,
  Heart,
  Languages,
  Lightbulb,
  Mail,
  MapPin,
  Mic2,
  PenTool,
  Phone,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

/**
 * Maps the string icon names stored in the editable content store to lucide
 * icon components. Names are matched case-insensitively so admin-entered values
 * like "phone", "Phone", or "map" all resolve. Falls back to a neutral icon.
 */
const ICONS: Record<string, LucideIcon> = {
  accessibility: Accessibility,
  award: Award,
  braincircuit: BrainCircuit,
  captions: Captions,
  checkcircle: CheckCircle,
  clipboardcheck: ClipboardCheck,
  clock: Clock,
  database: Database,
  globe: Globe,
  graduationcap: GraduationCap,
  heart: Heart,
  languages: Languages,
  lightbulb: Lightbulb,
  mail: Mail,
  map: MapPin,
  mappin: MapPin,
  mic2: Mic2,
  pentool: PenTool,
  phone: Phone,
  shield: Shield,
  sparkles: Sparkles,
}

export function DynamicIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = ICONS[(name || "").toLowerCase()] ?? Sparkles
  return <Icon className={className} aria-hidden="true" />
}
