
export const SEO_CONFIG = {
  siteName: "Noeveka",
  defaultTitle: "Noeveka | Independent Enterprise Data & AI Advisory",
  titleTemplate: "%s | Noeveka",
  defaultDescription:
    "Independent enterprise data & AI advisory firm — built by architects who have shipped real systems at global scale. Fabric, Databricks, and Azure-native platform strategy.",

  pages: {
    landing: {
      title: "Enterprise Data & AI Advisory",
      description:
        "Architect-led target designs, bootcamps, and advisory for Microsoft Fabric, Databricks Lakehouse & GenAI pipelines. Independent, practical, and vendor-unbiased.",
    },
    about: {
      title: "About Us",
      description:
        "Meet Noeveka — an independent enterprise data & AI advisory firm built by architects who have shipped real systems at global scale.",
    },
    notFound: {
      title: "Page Not Found",
      description:
        "The page you are looking for doesn't exist or has been moved.",
    },
  },
} as const;
