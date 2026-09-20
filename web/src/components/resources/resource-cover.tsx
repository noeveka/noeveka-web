import { LucideIcon } from "@/components/lucide-icons";
import { RESOURCES_CONFIG } from "@/config/resources.config";
import {
  PowerBISvg,
  FabricSvg,
  DatabricksSvg,
  AzureSvg,
  GenAISvg,
  GovernanceSvg,
} from "@/components/svgs/tech-svgs";

interface ResourceCoverProps {
  title: string;
  category?: string;
  tech?: string;
  thumbnailUrl?: string | null;
  thumbnailAlt?: string | null;
  pageCount?: number;
  isFeatured?: boolean;
  pageLabelSingular?: string;
  pageLabelPlural?: string;
  downloadHoverText?: string;
}

export function ResourceCoverGraphic({
  title,
  category,
  tech,
  thumbnailUrl,
  thumbnailAlt,
  pageCount,
  isFeatured,
  pageLabelSingular = RESOURCES_CONFIG.section.pageLabelSingular,
  pageLabelPlural = RESOURCES_CONFIG.section.pageLabelPlural,
  downloadHoverText = RESOURCES_CONFIG.section.downloadHoverText,
}: ResourceCoverProps) {
  // Match tech keyword
  const t = (tech || title).toLowerCase();
  let SvgIcon = GovernanceSvg;
  let bgGradient = "linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fef3c7 100%)";

  if (t.includes("power bi") || t.includes("powerbi")) {
    SvgIcon = PowerBISvg;
    bgGradient = "linear-gradient(135deg, #fefce8 0%, #fef08a 40%, #fde047 100%)";
  } else if (t.includes("fabric")) {
    SvgIcon = FabricSvg;
    bgGradient = "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)";
  } else if (t.includes("databricks")) {
    SvgIcon = DatabricksSvg;
    bgGradient = "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 50%, #fecdd3 100%)";
  } else if (t.includes("azure")) {
    SvgIcon = AzureSvg;
    bgGradient = "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)";
  } else if (t.includes("genai") || t.includes("ai") || t.includes("openai")) {
    SvgIcon = GenAISvg;
    bgGradient = "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)";
  }

  const pageText = pageCount
    ? `${pageCount} ${pageCount > 1 ? pageLabelPlural : pageLabelSingular}`
    : null;

  return (
    <div className="relative aspect-video w-full overflow-hidden">
      {thumbnailUrl ? (
        <div className="relative h-full w-full">
          <img
            src={thumbnailUrl}
            alt={thumbnailAlt ?? title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(15,17,23,0.45) 0%, transparent 40%)",
            }}
          />
        </div>
      ) : (
        /* Graphic Cover Art */
        <div
          className="relative h-full w-full p-5 flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ background: bgGradient }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="pointer-events-none absolute -bottom-6 -right-6 opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            <SvgIcon className="h-36 w-36" />
          </div>

          <div className="relative z-10 mt-auto pt-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/90 shadow-sm backdrop-blur-sm">
                <SvgIcon className="h-4 w-4" />
              </div>
            </div>
            <h4
              className="text-[14.5px] font-extrabold leading-[1.18] tracking-[-0.02em] text-neutral-900"
              style={{ fontFamily: "'Plus Jakarta Sans', var(--font-primary), sans-serif" }}
            >
              {title}
            </h4>
          </div>
        </div>
      )}

      {/* Top Metadata Overlay Bar */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5 drop-shadow-xs">
          {isFeatured && (
            <LucideIcon
              name="star"
              className="h-3.5 w-3.5 fill-[#ffc107] text-[#ffc107]"
            />
          )}
          {category && (
            <span
              className={`text-[11px] font-extrabold tracking-[0.18em] uppercase ${
                thumbnailUrl ? "text-white/95" : "text-neutral-900/90"
              }`}
            >
              {category}
            </span>
          )}
        </div>

        {pageText && (
          <div className="drop-shadow-xs">
            <span
              className={`text-[10.5px] font-extrabold tracking-[0.14em] uppercase ${
                thumbnailUrl ? "text-white/80" : "text-neutral-700/80"
              }`}
            >
              {pageText}
            </span>
          </div>
        )}
      </div>

      {/* Hover Action Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-extrabold text-neutral-900 shadow-xl transition-transform duration-300 group-hover:scale-105">
          <LucideIcon name="download" className="h-4 w-4" style={{ color: "var(--color-brand)" }} />
          <span>{downloadHoverText}</span>
        </div>
      </div>
    </div>
  );
}
