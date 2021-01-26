import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Specs from "../components/specs";
import Modelos from "../components/modelos";
import InstallSection from "../components/installSection";
import DiscoverSection from "../components/discoverSection";
import FormSection from "../components/formSection";
import Lead from "../components/lead";

const IndexPage = ({data}) => {
  console.log(data.site.siteMetadata)
  return(
  <Layout className="layout" style={{ width: "100vw" }}>
		<Helmet>
      <meta name="format-detection" content="telephone=no"/>

      {/* HTML Meta Tags */}
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description}/>
      
      {/* Google / Search Engine Tags */}
      <meta itemprop="name" content={data.site.siteMetadata.title}/>
      <meta itemprop="description" content={data.site.siteMetadata.description}/>
      <meta itemprop="image" content={`${data.site.siteMetadata.siteUrl}/rrss.jpg`}/>
      
      {/* Facebook Meta Tags */}
      <meta property="og:url" content={data.site.siteMetadata.siteUrl}/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={data.site.siteMetadata.title}/>
      <meta property="og:description" content={data.site.siteMetadata.description}/>
      <meta property="og:image" content={`${data.site.siteMetadata.siteUrl}/rrss.jpg`}/>
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={data.site.siteMetadata.title}/>
      <meta name="twitter:description" content={data.site.siteMetadata.description}/>
      <meta name="twitter:image" content={`${data.site.siteMetadata.siteUrl}/rrss.jpg`}/>
    </Helmet>
    <Hero />
    <Lead />
    <Specs />
    <DiscoverSection />
    <InstallSection />
    <Modelos />
    <FormSection />
  </Layout>
  )
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`
