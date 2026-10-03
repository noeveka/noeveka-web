import { motion } from "framer-motion";
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";
import { RESOURCES_CONFIG } from "@/config/resources.config";
import { fadeUp } from "@/lib/motion";
import { ResourceCoverGraphic } from "./resource-cover";
import type { ResourceItem, ResourceSectionCopy } from "./resource.types";

export interface ResourceCardProps {
  resource: ResourceItem;
  index: number;
  featured?: boolean;
  onDownload: (resourceItem: ResourceItem) => void;
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
      {...fadeUp(0.05 * (index % 6))}
      viewport={{ once: true, amount: 0.12 }}
      onClick={() => onDownload(resource)}
      className={`resource-card group ${featured ? "flex-col lg:flex-row" : "flex-col"}`}
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
        <h3
          className={`resource-card-title ${
            featured ? "text-[1.3rem] lg:text-[1.55rem]" : "text-[15.5px] sm:text-[16.5px]"
          }`}
        >
          {resource.title}
        </h3>

        <p
          className={`resource-card-desc ${
            featured ? "text-[14px] lg:text-[15px]" : "text-[13.5px]"
          }`}
        >
          {resource.description}
        </p>

        <div className="resource-card-footer">
          {/* Author */}
          <div className="flex items-center gap-2">
            <img
              src={authorAvatar}
              alt={authorName}
              className="h-5 w-5 rounded-full object-cover ring-1 ring-black/10"
            />
            <span className="resource-card-author-name">{authorName}</span>
          </div>

          {/* CTA */}
          <div className="resource-card-cta">
            <span>{downloadCtaText}</span>
            <LucideIcon
              name={lucideIconRegistry.ArrowRight}
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
