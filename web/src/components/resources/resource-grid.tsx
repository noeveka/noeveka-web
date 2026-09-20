import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESOURCES_CONFIG } from "@/config/resources.config";
import { ResourceCard } from "./resource-card";
import { DownloadModal } from "./download-modal";
import type { ResourceItem, DownloadModalState, ResourceSectionCopy } from "./resource.types";

export type { ResourceItem } from "./resource.types";

interface ResourceGridProps {
  resources?: ResourceItem[];
  copy?: ResourceSectionCopy;
}

export default function ResourceGrid({ resources, copy }: ResourceGridProps) {
  const items: ResourceItem[] =
    resources && resources.length > 0
      ? resources
      : (RESOURCES_CONFIG.fallbackResources as unknown as ResourceItem[]);

  const sectionCopy: ResourceSectionCopy = {
    eyebrow: copy?.eyebrow || RESOURCES_CONFIG.section.eyebrow,
    heading: copy?.heading || RESOURCES_CONFIG.section.heading,
    subtext: copy?.subtext || RESOURCES_CONFIG.section.subtext,
    emptyStateText: copy?.emptyStateText || RESOURCES_CONFIG.section.emptyStateText,
    downloadCtaText: copy?.downloadCtaText || RESOURCES_CONFIG.section.downloadCtaText,
    downloadHoverText: copy?.downloadHoverText || RESOURCES_CONFIG.section.downloadHoverText,
    authorName: copy?.authorName || RESOURCES_CONFIG.section.authorName,
    authorAvatar: copy?.authorAvatar || RESOURCES_CONFIG.section.authorAvatar,
    pageLabelSingular: copy?.pageLabelSingular || RESOURCES_CONFIG.section.pageLabelSingular,
    pageLabelPlural: copy?.pageLabelPlural || RESOURCES_CONFIG.section.pageLabelPlural,
    formatLabel: copy?.formatLabel || RESOURCES_CONFIG.section.formatLabel,
  };

  const [activeCategory, setActiveCategory] = useState("All");
  const [modal, setModal] = useState<DownloadModalState>({ open: false, resource: null });

  const openModal = useCallback((resource: ResourceItem) => setModal({ open: true, resource }), []);
  const closeModal = useCallback(() => setModal({ open: false, resource: null }), []);

  const filtered =
    activeCategory === "All" ? items : items.filter((r) => r.category === activeCategory);

  // Dynamic Layout Logic:
  // If a category tab has exactly 1 item, render it full-width (featured style) to avoid empty grid space.
  // If more than 1 item, render the featured item (if any) full-width, and the remaining items in a 3-col responsive grid.
  const isSingleItem = filtered.length === 1;
  const featuredItem = isSingleItem
    ? filtered[0]
    : filtered.find((r) => r.isFeatured);
  const restItems = isSingleItem
    ? []
    : filtered.filter((r) => r !== featuredItem);

  const rawCategories = copy?.categories && copy.categories.length > 0
    ? copy.categories
    : (RESOURCES_CONFIG.categories as unknown as string[]);

  const categoriesList = rawCategories.includes("All")
    ? rawCategories
    : ["All", ...rawCategories];

  return (
    <section
      id="resources"
      style={{ background: "#faf9f7", borderTop: "1px solid #e8e5dd" }}
    >
      {/* Section Header */}
      <div className="flex justify-center border-b" style={{ borderColor: "#e8e5dd" }}>
        <div className="lp-container lp-px py-12 lg:py-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-display font-extrabold leading-tight text-neutral-900 sm:text-[2.5rem]">
                {sectionCopy.heading}
              </h2>
            </div>
            <p className="max-w-[400px] text-[14px] leading-relaxed text-neutral-500 lg:text-right">
              {sectionCopy.subtext}
            </p>
          </div>

          {/* Category filter pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categoriesList.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="rounded-full px-4 py-1.5 text-[12.5px] font-bold transition-all duration-150"
                  style={{
                    background: isActive ? "var(--color-brand)" : "#ffffff",
                    color: isActive ? "#fff" : "#5a5f6b",
                    border: isActive
                      ? "1.5px solid var(--color-brand)"
                      : "1.5px solid #e8e5dd",
                    boxShadow: isActive ? "0 3px 12px rgba(246,93,1,0.25)" : "none",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Resource Cards */}
      <div className="flex justify-center">
        <div className="lp-container lp-px py-10 lg:py-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.length === 0 ? (
                <div className="py-20 text-center">
                  <p className="text-[15px] text-neutral-400">
                    {sectionCopy.emptyStateText}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {/* Single item or featured item — full width horizontal card */}
                  {featuredItem && (
                    <ResourceCard
                      resource={featuredItem}
                      index={0}
                      featured
                      onDownload={openModal}
                      copy={sectionCopy}
                    />
                  )}

                  {/* Multiple items — 3 Column Grid */}
                  {restItems.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {restItems.map((resource, i) => (
                        <ResourceCard
                          key={resource._id}
                          resource={resource}
                          index={i + 1}
                          onDownload={openModal}
                          copy={sectionCopy}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Download Gate Modal */}
      <AnimatePresence>
        {modal.open && modal.resource && (
          <DownloadModal resource={modal.resource} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}
