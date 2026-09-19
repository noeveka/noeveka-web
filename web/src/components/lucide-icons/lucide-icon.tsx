import { type LucideProps } from "lucide-react";

import { isDevelopmentEnv } from "@/lib/env-type-helpers";

import { type IconName, iconMap, lucideIconRegistry } from "./lucide-config";

export interface IconProps extends LucideProps {
  name: IconName | keyof typeof lucideIconRegistry | (string & {});
  fallback?: IconName;
}

export function LucideIcon({ name, size = 16, fallback, ...props }: IconProps) {
  let IconComponent = iconMap[name as IconName];

  if (!IconComponent && name in lucideIconRegistry) {
    const mappedKey = lucideIconRegistry[name as keyof typeof lucideIconRegistry];
    IconComponent = iconMap[mappedKey];
  }

  if (!IconComponent && fallback) {
    IconComponent = iconMap[fallback];
  }

  if (!IconComponent) {
    if (isDevelopmentEnv()) {
      console.warn(`Icon "${name}" not found in iconMap.`);
    }
    return null;
  }
  return <IconComponent size={size} {...props} />;
}
