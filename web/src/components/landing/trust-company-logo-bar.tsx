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
      <div
        className="lp-container lp-px grid grid-cols-5 divide-x py-5"
        style={{ borderColor: "var(--color-stroke-default)" }}
      >
        {LOGOS.map(({ name, Logo }) => (
          <div
            key={name}
            className="flex items-center justify-center gap-2.5 px-4 py-3"
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
    </section>
  );
}

