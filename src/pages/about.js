import React from 'react'
import Layout from '../components/layout'
import img from '../images/record.jpg'
import aboutstyle from '../styles/aboutstyle.module.scss'
import {Link} from 'gatsby'

const About = ()=> {
  return (
    <Layout>
      <div className={aboutstyle.container}>
        <h2 className={aboutstyle.title}>Too Early?</h2>
        <img src={img} className={aboutstyle.img} />
        <p className={aboutstyle.text}>
          Too Early?は「見つけるのが、早すぎた？」をコンセプトに、まだ世にあまり知られていない新人アーティストのインタビューをお届けする音楽ブログです。bell(翻訳)とpshandy(その他もろもろ)でまったり運営中。ご意見、ご感想、お問い合わせ等は、当サイトの<Link to="https://twitter.com/2E_media" target="_blank">Twitter<i class="fa fa-twitter"></i></Link>まで宜しくお願いします。
        </p>
      </div>
    </Layout>

  )
}

export default About