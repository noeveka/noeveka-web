export function isDevelopmentEnv(): boolean {
  return import.meta.env.MODE === "development";
}

export function isProductionEnv(): boolean {
  return import.meta.env.MODE === "production";
}
