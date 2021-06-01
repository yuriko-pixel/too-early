import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import blogtem from '../styles/blogtem.module.scss'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate (formatString: "MMMM Do, YYYY")
      tag {
        tag
      }
      headerImage {
        resize(width: 500, height: 300) {
          src
        }
      }
      body {
        body
      }
    } 
  }
`;

const Blog = (props) => {
const options = {
  renderNode: {
    "embedded-asset-block": (node)=> {
      const alt = node.data.target.fields.title['en-US']
      const src = node.data.target.fields.file['en-US'].url
      return <img alt={alt} src={src} className={blogtem.img}/>
    }
  }
}
  console.log(props.data.contentfulBlogPost.blogtag)
    return (
        <Layout>
          <div className={blogtem.container}>
              <ol className={blogtem.tagcontainer}>
                <div className={blogtem.flex}>
                  {/* {props.data.contentfulBlogPost.blogtag.tag.map(i=><li className={blogtem.blogtag}>{i}</li>)} */}
                </div>
              </ol>
              <div className={blogtem.title}>{props.data.contentfulBlogPost.title}</div>
              <div className={blogtem.date}>{props.data.contentfulBlogPost.publishedDate}</div>
                <img className={blogtem.headerimg} src={props.data.contentfulBlogPost.headerImage.resize.src} />
              {/* {documentToReactComponents(props.data.contentfulBlogPost.childContentfulBlogPostBlogTextTextNode.childMarkdownRemark.html, options)} */}
              <div
                className={blogtem.body}
                dangerouslySetInnerHTML={{
                  __html: props.data.contentfulBlogPost.body.body,
                }}
              />
              <Link to="/"  className={blogtem.goback}>TOPに戻る</Link>
          </div>
          
        </Layout>
    )
}

export default Blog