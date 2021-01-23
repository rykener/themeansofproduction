import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const yamlPosts = data.allProductsYaml.edges

  return (
    <Layout location={location} title={siteTitle} description={data.site.siteMetadata.description}>
      <SEO title="All posts" />
      {yamlPosts.map(post => {
        const title = post.node.name

        return (
          <Link to={post.node.link} key={post.node.name} target="_blank" itemProp="url" css={css`
            width: 33%;
            min-width: 240px;
            text-align: center;
            text-decoration: none;
            color: #444;
            margin: 0 20px 40px 20px;
          `}>
          <div>
              <img src={post.node.tile} />
              {title}
          </div>
          </Link>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allProductsYaml {
      edges {
        node {
          name
          tile
          link
        }
      }
    }
  }
`
