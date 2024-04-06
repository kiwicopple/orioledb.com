import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "Scalability",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        The novel design of OrioleDB avoids typical bottlenecks of database
        engines.
      </>
    ),
  },
  {
    title: "IO-Reduction",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Write transactions produce noticeably less IO thanks to logical WAL and
        non-persistent undo log.
      </>
    ),
  },
  {
    title: "Data Compression",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Page-level data compression reduces typical database size in 4-5 times.
      </>
    ),
  },
  {
    title: "Bloat Reduction",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Less bloat thanks to efficiently handled in-place update.</>,
  },
  {
    title: "Less Maintenance",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>Lower maintenance required resulting in less operational costs.</>
    ),
  },
  {
    title: "High Transaction Throughput",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>Efficient transactional processing leads to high throughput.</>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
