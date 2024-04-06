import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"

export default function HomepageSections(): JSX.Element {
  return (
    <>
      <section>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <div className="text--center">
                <Heading as="h2" className="text--uppercase">
                  Scalability
                </Heading>
                <p>
                  OrioleDB utilizes the{" "}
                  <strong>power of modern hardware</strong> to achieve
                  extraordinary performance.
                </p>
              </div>
            </div>
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
            <Heading as="h2" className="text--uppercase">
              Efficiency
            </Heading>

            <p>
              OrioleDB’s architecture dramatically{" "}
              <strong>reduces resources</strong> used for transaction
              processing.
            </p>
          </div>
          <div className="row">
            <div className="col col--6">
              <div className="card__image">
                <img src="/img/site/juno-read-iops.png" alt="Scalability" />
              </div>
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
