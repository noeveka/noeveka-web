import AzureSvg from "../svgs/Azure-svg";
import DatabricksSvg from "../svgs/databricks-svg";
import MicrosoftFabricSvg from "../svgs/microsoft-fabric-svg";
import PowerBISvg from "../svgs/powerbi-svg";
import SnowflakeSvg from "../svgs/snowflake-svg";
import { TRUST_COMPANY_LOGO_BAR_CONFIG } from "@/config/landing/trust-company-logo-bar.config";

const PLATFORM_LOGOS = [
  { name: "Microsoft Fabric", LogoComponent: MicrosoftFabricSvg },
  { name: "Databricks", LogoComponent: DatabricksSvg },
  { name: "Snowflake", LogoComponent: SnowflakeSvg },
  { name: "Azure", LogoComponent: AzureSvg },
  { name: "Power BI", LogoComponent: PowerBISvg },
];

export interface TrustCompanyLogoBarProps {
  title?: string;
  subtitle?: string;
}

export default function TrustCompanyLogoBar({
  title = TRUST_COMPANY_LOGO_BAR_CONFIG.title,
  subtitle = TRUST_COMPANY_LOGO_BAR_CONFIG.subtitle,
}: TrustCompanyLogoBarProps) {
  return (
    <section className="lp-section lp-section-surface lp-section-border-y">
      <div className="lp-container lp-px py-8">
        <div className="mb-5 text-center">
          <p className="logo-bar-title">{title}</p>
          <p className="logo-bar-sub">{subtitle}</p>
        </div>
        <div className="grid grid-cols-5 divide-x divide-stroke-default py-2">
          {PLATFORM_LOGOS.map(({ name, LogoComponent }) => (
            <div
              key={name}
              className="flex items-center justify-center gap-2.5 px-4 py-2"
            >
              <LogoComponent />
              <span className="logo-bar-title hidden sm:block">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

