import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";
import { RESOURCES_CONFIG } from "@/config/resources.config";
import { ResourceCoverGraphic } from "./resource-cover";
import type { ResourceItem, ResourceSectionCopy } from "./resource.types";

interface ResourceCardProps {
  resource: ResourceItem;
  index: number;
  featured?: boolean;
  onDownload: (r: ResourceItem) => void;
  copy?: ResourceSectionCopy;
}

export function ResourceCard({
  resource,
  index,
  featured = false,
  onDownload,
  copy = RESOURCES_CONFIG.section,
}: ResourceCardProps) {
  const authorName = copy.authorName ?? RESOURCES_CONFIG.section.authorName;
  const authorAvatar = copy.authorAvatar ?? RESOURCES_CONFIG.section.authorAvatar;
  const downloadCtaText = copy.downloadCtaText ?? RESOURCES_CONFIG.section.downloadCtaText;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: 0.05 * (index % 6) }}
      onClick={() => onDownload(resource)}
      className={`group relative flex cursor-pointer overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:scale-[1.015] hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300 ${
        featured ? "flex-col lg:flex-row" : "flex-col"
      }`}
      style={{
        border: "1.5px solid #e8e5dd",
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
      }}
    >
      {/* Cover Graphic / Image Banner */}
      <div className={`relative overflow-hidden ${featured ? "lg:w-[48%] lg:shrink-0" : "w-full"}`}>
        <ResourceCoverGraphic
          title={resource.title}
          category={resource.category}
          tech={resource.tech}
          thumbnailUrl={resource.thumbnailUrl}
          thumbnailAlt={resource.thumbnailAlt}
          pageCount={resource.pageCount}
          isFeatured={resource.isFeatured}
          pageLabelSingular={copy.pageLabelSingular}
          pageLabelPlural={copy.pageLabelPlural}
          downloadHoverText={copy.downloadHoverText}
        />
      </div>

      {/* Content Body */}
      <div className={`flex flex-1 flex-col gap-3.5 p-6 pt-7 sm:px-7 sm:py-7 ${featured ? "lg:p-8 lg:pt-9" : ""}`}>
        {/* Main Title */}
        <h3
          className={`font-extrabold leading-snug text-neutral-900 transition-colors group-hover:text-(--color-brand) ${
            featured ? "text-[1.3rem] lg:text-[1.55rem]" : "text-[15.5px] sm:text-[16.5px]"
          }`}
        >
          {resource.title}
        </h3>

        {/* Body Description */}
        <p
          className={`flex-1 text-neutral-700 font-normal leading-relaxed ${
            featured ? "text-[14px] lg:text-[15px]" : "text-[13.5px]"
          }`}
        >
          {resource.description}
        </p>

        {/* Footer Row Flexbox Layout */}
        <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4">
          {/* Author Unit */}
          <div className="flex items-center gap-2">
            <img
              src={authorAvatar}
              alt={authorName}
              className="h-5 w-5 rounded-full object-cover ring-1 ring-black/10"
            />
            <span className="text-[11px] font-extrabold text-neutral-700">{authorName}</span>
          </div>

          {/* Action CTA Link */}
          <div
            className="flex items-center gap-1.5 text-[13px] font-extrabold transition-all duration-200"
            style={{ color: "var(--color-brand)" }}
          >
            <span>{downloadCtaText}</span>
            <LucideIcon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
