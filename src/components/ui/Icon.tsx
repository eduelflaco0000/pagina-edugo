import {
  CalendarClock,
  FileCheck2,
  LayoutDashboard,
  LayoutGrid,
  MonitorSmartphone,
  Rocket,
  Workflow,
  type LucideProps,
} from "lucide-react";

/** Iconos disponibles para servicios y pasos del proceso. */
export const iconMap = {
  monitor: MonitorSmartphone,
  dashboard: LayoutDashboard,
  catalog: LayoutGrid,
  workflow: Workflow,
  calendar: CalendarClock,
  proposal: FileCheck2,
  rocket: Rocket,
} as const;

export type IconName = keyof typeof iconMap;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = iconMap[name];
  return <Cmp aria-hidden strokeWidth={1.5} {...props} />;
}
