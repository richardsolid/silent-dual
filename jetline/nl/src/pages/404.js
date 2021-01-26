import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

function NotFoundPage({ data }) {

  const { header, footer } = data.markdownRemark.frontmatter;

  return(
    <Layout nav={header.nav} footer={footer}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const query = graphql`
  query navContent {
    markdownRemark{
      frontmatter{
        header{
          nav{
            item
            route
          }
        }
        footer
      }
    }
  }
`

NotFoundPage.propTypes = {
  data: PropTypes.object,
};

export default NotFoundPage