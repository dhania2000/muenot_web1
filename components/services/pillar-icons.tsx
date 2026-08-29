import {
  Accessibility,
  BookOpenCheck,
  BrainCircuit,
  Brush,
  Captions,
  ChartBar,
  Clapperboard,
  Cog,
  Compass,
  Database,
  FileCode2,
  FileStack,
  FileText,
  Globe,
  GraduationCap,
  Languages,
  Layers,
  MicVocal,
  Palette,
  PenLine,
  PenTool,
  ScanSearch,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Maps a string icon key (stored in the DB-backed pillar content) to a Lucide
 * icon component. Editors pick from these keys in the admin panel; unknown keys
 * fall back to a neutral icon so the page never breaks.
 */
export const PILLAR_ICONS: Record<string, LucideIcon> = {
  Accessibility,
  BookOpenCheck,
  BrainCircuit,
  Brush,
  Captions,
  ChartBar,
  Clapperboard,
  Cog,
  Compass,
  Database,
  FileCode2,
  FileStack,
  FileText,
  Globe,
  GraduationCap,
  Languages,
  Layers,
  MicVocal,
  Palette,
  PenLine,
  PenTool,
  ScanSearch,
  Users,
  Workflow,
};

export function pillarIcon(key: string): LucideIcon {
  return PILLAR_ICONS[key] ?? Layers;
}
