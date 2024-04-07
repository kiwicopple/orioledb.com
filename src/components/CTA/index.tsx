import clsx from "clsx"
import Link from "@docusaurus/Link"
import { Slider } from "../ui/slider"

import styles from "./styles.module.css"

export default function HomepageSections(): JSX.Element {
  return (
    <div className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 padding--lg">
            <p className="hero__subtitle">
              OrioleDB is a PostgreSQL extension that combines the advantages of
              both on-disk and in-memory engines. Increase your database
              performance and cut costs.
            </p>
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
          <div className="col col--4 padding--lg">
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg button--block"
                to="https://github.com/orioledb/orioledb"
              >
                Follow us on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
