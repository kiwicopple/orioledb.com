import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import HomepageSections from "@site/src/components/HomepageSections"
import CTA from "@site/src/components/CTA"
import Heading from "@theme/Heading"

import styles from "./index.module.css"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6 padding--lg">
            <Heading as="h2" className="hero__title">
              {siteConfig.tagline}
            </Heading>
            <p className="hero__subtitle">
              OrioleDB is a PostgreSQL extension that combines the advantages of
              both on-disk and in-memory engines. Increase your database
              performance and cut costs.
            </p>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/docs">
                Read the docs
              </Link>
              <Link
                className={clsx(
                  "secondary-button button button--secondary button--outline button--lg",
                  styles.secondaryButton
                )}
                to="https://github.com/orioledb/orioledb"
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="col col--6 padding-top--lg">
            <img
              className={styles.heroImage}
              src="/img/banner.png"
              alt="OrioleDB"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="OrioleDB is a PostgreSQL extension that combines the advantages of both on-disk and in-memory engines."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageSections />
        <CTA />
      </main>
    </Layout>
  )
}
