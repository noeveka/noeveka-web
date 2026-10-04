import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESOURCES_CONFIG } from "@/config/resources.config";
import { ResourceCard } from "./resource-card";
import { DownloadModal } from "./download-modal";
import type { ResourceItem, DownloadModalState, ResourceSectionCopy } from "./resource.types";

export type { ResourceItem } from "./resource.types";

export interface ResourceGridProps {
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

  const defaultCategory = RESOURCES_CONFIG.allCategoryLabel || "All";
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory);
  const [modal, setModal] = useState<DownloadModalState>({ open: false, resource: null });

  const openModal = useCallback((resource: ResourceItem) => setModal({ open: true, resource }), []);
  const closeModal = useCallback(() => setModal({ open: false, resource: null }), []);

  const filtered =
    activeCategory === defaultCategory
      ? items
      : items.filter((resourceItem) => resourceItem.category === activeCategory);

  const isSingleItem = filtered.length === 1;
  const featuredItem = isSingleItem ? filtered[0] : filtered.find((resourceItem) => resourceItem.isFeatured);
  const restItems = isSingleItem ? [] : filtered.filter((resourceItem) => resourceItem !== featuredItem);

  const rawCategories =
    copy?.categories && copy.categories.length > 0
      ? copy.categories
      : (RESOURCES_CONFIG.categories as unknown as string[]);

  const categoriesList = rawCategories.includes(defaultCategory)
    ? rawCategories
    : [defaultCategory, ...rawCategories];

  return (
    <section id="resources" className="resource-grid-section">
      {/* Section Header */}
      <div className="resource-grid-header">
        <div className="lp-container lp-px py-12 lg:py-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="resource-grid-heading">{sectionCopy.heading}</h2>
            <p className="resource-grid-subtext lg:text-right">{sectionCopy.subtext}</p>
          </div>

          {/* Category filter pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categoriesList.map((categoryName) => (
              <button
                key={categoryName}
                onClick={() => setActiveCategory(categoryName)}
                className={`resource-filter-pill ${categoryName === activeCategory ? "resource-filter-pill-active" : ""}`}
              >
                {categoryName}
              </button>
            ))}
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
                <div className="resource-grid-empty">
                  <p>{sectionCopy.emptyStateText}</p>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {featuredItem && (
                    <ResourceCard
                      resource={featuredItem}
                      index={0}
                      featured
                      onDownload={openModal}
                      copy={sectionCopy}
                    />
                  )}
                  {restItems.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {restItems.map((resourceItem, resourceIndex) => (
                        <ResourceCard
                          key={resourceItem._id}
                          resource={resourceItem}
                          index={resourceIndex + 1}
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
