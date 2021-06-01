import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import indexstyle from '../styles/indexstyle.module.scss'
import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            publishedDate (formatString: "MMMM Do,YYYY")
            slug
            heading
            headerImage {
              resize (width:500,height:300) {
                src
              }
            }
            tag {
              tag
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ol>
        {data.allContentfulBlogPost.edges.map(edge => {
          return(
            <li className={indexstyle.container}>
              <Link to={`/${edge.node.slug}`}>
                <div className={indexstyle.flex}>
                  <img src={edge.node.headerImage.resize.src} className={indexstyle.img}/>
                  <div className={indexstyle.blogbody}>
                    <div className={indexstyle.link} className={indexstyle.date}>{edge.node.publishedDate}</div>
                    <div className={indexstyle.link} className={indexstyle.title}>{edge.node.title}</div>
                    <div className={indexstyle.heading}>{edge.node.heading}</div>
                    <div className={indexstyle.read}>Read more &#62;&#62;</div>
                  </div>
                </div>
              </Link>
            </li>)
        })}
      </ol>
    </Layout>
  )

}
export default IndexPage
