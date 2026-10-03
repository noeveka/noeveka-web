import AzureSvg from "../svgs/Azure-svg";
import DatabricksSvg from "../svgs/databricks-svg";
import MicrosoftFabricSvg from "../svgs/microsoft-fabric-svg";
import PowerBISvg from "../svgs/powerbi-svg";
import SnowflakeSvg from "../svgs/snowflake-svg";

const LOGOS = [
  { name: "Microsoft Fabric", Logo: MicrosoftFabricSvg },
  { name: "Databricks", Logo: DatabricksSvg },
  { name: "Snowflake", Logo: SnowflakeSvg },
  { name: "Azure", Logo: AzureSvg },
  { name: "Power BI", Logo: PowerBISvg },
];

export default function TrustCompanyLogoBar() {
  return (
    <section className="lp-section lp-section-surface lp-section-border-y">
      <div className="lp-container lp-px py-8">
        <div className="mb-5 text-center">
          <p className="logo-bar-title">Experience across leading enterprise platforms</p>
          <p className="logo-bar-sub">
            Technology choices guided by enterprise fit, not vendor preference.
          </p>
        </div>
        <div className="grid grid-cols-5 divide-x divide-stroke-default py-2">
          {LOGOS.map(({ name, Logo }) => (
            <div
              key={name}
              className="flex items-center justify-center gap-2.5 px-4 py-2"
            >
              <Logo />
              <span className="logo-bar-title hidden sm:block">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
