import { type LucideProps } from "lucide-react";

import { isDevelopmentEnv } from "@/lib/env-type-helpers";

import { type IconName, iconMap } from "./lucide-config";

interface IconProps extends LucideProps {
  name: IconName;
}

export function LucideIcon({ name, size = 16, ...props }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    if (isDevelopmentEnv()) {
      console.warn(`Icon "${name}" not found in iconMap.`);
    }
    return null;
  }
  return <IconComponent size={size} {...props} />;
}
