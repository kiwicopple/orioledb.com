import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"

export default function HomepageSections(): JSX.Element {
  return (
    <>
      <section>
        <div className="container margin-vert--xl">
          <div className="text--center">
            <Heading as="h2">Scalability</Heading>
            <p>
              The novel design of OrioleDB removes major DBMS scalability
              bottlenecks. OrioleDB unleashes the power of modern hardware
              achieving extraordinary performance.
            </p>
          </div>
          <div className="row">
            <div className="col col--6">
              <img
                src="/img/site/read-only-results-amazon.png"
                alt="Scalability"
              />
            </div>
            <div className="col col--6">
              <img
                src="/img/site/read-only-results-amazon.png"
                alt="Scalability"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container margin-vert--xl">
          <div className="text--center">
            <Heading as="h2">Efficiency</Heading>
            <p>
              OrioleDB’s architecture dramatically reduces the resources used
              for transaction processing. .
            </p>
          </div>
          <div className="row">
            <div className="col col--6">
              <img src="/img/site/juno-read-iops.png" alt="Scalability" />
            </div>
            <div className="col col--6">
              <img src="/img/site/juno-write-iops.png" alt="Scalability" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
