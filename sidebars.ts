import type { SidebarsConfig } from "@docusaurus/plugin-content-docs"

const sidebars: SidebarsConfig = {
  docs: [
    "docs-intro",
    {
      type: "category",
      label: "Usage",
      items: ["usage/getting-started", "usage/decoupled-storage"],
    },
    {
      type: "category",
      label: "Architecture",
      items: [
        "architecture/overview",
        "architecture/checkpoints",
        "architecture/recovery",
        "architecture/buffering",
        "architecture/concurrency",
        "architecture/row-level-concurrency",
        "architecture/fsm",
      ],
    },
    {
      type: "category",
      label: "Contributing",
      items: [
        "contributing/code-structure",
        "contributing/local-builds",
        "contributing/docker-builds",
      ],
    },
  ],
}

export default sidebars
