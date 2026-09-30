import AzureSvg from "../svgs/Azure-svg";
import DatabricksSvg from "../svgs/databricks-svg";
import MicrosoftSvg from "../svgs/microsoft-svg";
import PowerBISvg from "../svgs/powerbi-svg";
import SnowflakeSvg from "../svgs/snowflake-svg";

const LOGOS = [
  { name: "Microsoft", Logo: MicrosoftSvg },
  { name: "Databricks", Logo: DatabricksSvg },
  { name: "Snowflake", Logo: SnowflakeSvg },
  { name: "Azure", Logo: AzureSvg },
  { name: "Power BI", Logo: PowerBISvg },
];

export default function TrustCompanyLogoBar() {
  return (
    <section
      className="flex justify-center border-y"
      style={{
        background: "var(--color-bg-surface)",
        borderColor: "var(--color-stroke-default)",
      }}
    >
      <div className="lp-container lp-px py-8">
        <div className="text-center mb-5">
          <p
            className="text-[14px] sm:text-[15px] font-bold tracking-tight mb-1"
            style={{ color: "var(--color-text-primary)" }}
          >
            Experience across leading enterprise platforms
          </p>
          <p
            className="text-[12px] sm:text-[12.5px]"
            style={{ color: "var(--color-text-muted)" }}
          >
            Technology choices guided by enterprise fit, not vendor preference.
          </p>
        </div>
        <div
          className="grid grid-cols-5 divide-x py-2"
          style={{ borderColor: "var(--color-stroke-default)" }}
        >
          {LOGOS.map(({ name, Logo }) => (
            <div
              key={name}
              className="flex items-center justify-center gap-2.5 px-4 py-2"
              style={{ borderColor: "var(--color-stroke-default)" }}
            >
              <Logo />
              <span
                className="hidden text-[13px] font-semibold sm:block"
                style={{ color: "var(--color-text-primary)" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

