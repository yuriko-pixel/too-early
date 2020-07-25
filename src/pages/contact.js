import React from 'react'
import Layout from '../components/layout'
import Post from '../images/post.jpg'
import contactstyle from '../styles/contactstyle.module.scss'

const Contact = ()=> {
  return (
    <Layout>
      <div className={contactstyle.container}>
        <h2 className={contactstyle.title}>Contact Page</h2>
        <img src={Post} className={contactstyle.img}/>
        <div className={contactstyle.text}>
          <p>Please email us for any inquiry.</p>
          <p>お問い合わせについては以下からご連絡ください。</p>
          <p>tooearlyblog@gmail.com</p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact