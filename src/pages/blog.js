import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            publishedDate (formatString: "MMMM Do,YYYY")
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
          <div>
            <li>{edge.node.title}</li>
            <li>{edge.node.publishedDate}</li>
          </div>)
        })}
      </ol>
    </Layout>
  )

}
export default Blog
