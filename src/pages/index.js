import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <div>
      <StaticImage
        src="../images/gatsby-icon.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
        backgroundColor="white"
        placeholder="blurred"
      />
      <h1>GoingSunny</h1>
      <p className={styles.intro}>
        Cảm ơn các bạn đã đồng hành cùng GoingSunny trong thời gian vừa qua. Rất
        tiếc phải thông báo rằng Goingsunny phải dừng lại ở đây.
      </p>
      <p className={styles.intro}>
        Chúng tôi xin với thiệu với các bạn một người đồng hành mới mà
        GoingSunny rất ngưỡng mộ -
        <a href="https://tuhocielts.dolenglish.vn/" target="_blank">
          https://tuhocielts.dolenglish.vn/
        </a>
        . Hy vọng DolEnglish sẽ đồng hành cùng các bạn trong thời gian tới. Chúc
        các bạn thành công và sớm đạt được mục tiêu của mình.
      </p>
      <p className={styles.intro}>
        Cảm ơn các bạn,
        <br />
        Thân ái!
      </p>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
