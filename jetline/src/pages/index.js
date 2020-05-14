import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import Lead from "../components/Lead";
import Description from "../components/Description";
import DiscoverComponents from "../components/DiscoverComponents";
import Installation from "../components/Installation";
import Models from "../components/Models";
import Contact from "../components/Contact";
import { graphql } from "gatsby";
import video from "../video/Jetline_Video_EN.mp4";

function IndexPage({ data }) {

  const {
    title,
    description,
    header,
    sections,
    footer
  } = data.markdownRemark.frontmatter;

  return (
    <Layout nav={header.nav} footer={footer}>
      <SEO title={title} description={description}/>
      <Hero
        title={title}
        description={description}
        data={sections.hero}
        background={data.bgHero}
        video={video}
        videoBackground={video}
      />
      <Lead data={sections.lead} background={data.bgLead}/>
      <Description
        data={sections.description}
        images={[ data.descriptionImg01, data.descriptionImg02, data.descriptionImg03 ]}
      />
      <DiscoverComponents data={sections.discover}/>
      <Installation
        data={sections.installation}
        images={[ data.installationImg01, data.installationImg02, data.installationImg03 ]}
      />
      <Models
        data={sections.models}
        background={data.bgModels}
        images={[ data.modelsImg01, data.modelsImg02 ]}
      />
      <Contact data={sections.contact}/>
    </Layout>
  );
}

export const query = graphql`
  query pageContent {
    markdownRemark{
      frontmatter{
        title
        description
        header{
          nav{
            item
            route
          }
        }
        sections{
          hero{
            caret_text
          }
          lead{
            text
          }
          description{
            title
            items{
              item
              body
            }
          }
          discover{
            title
            hotspots{
              id
              title
              body
            }
          }
          installation{
            title
            items{
              item
              body
            }
            btn
          }
          models{
            title
            items{
              item
            }
            downloads{
              btn
            }
          }
          contact{
            title
            subtitle
          }
        }
        footer
      }
    }
    bgHero: file(relativePath:{eq: "bg-hero.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:1440){
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgLead: file(relativePath:{eq: "bg-lead.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:1440){
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgModels: file(relativePath:{eq: "bg-models.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:1440){
          ...GatsbyImageSharpFluid
        }
      }
    }
    descriptionImg01: file(relativePath:{eq: "description-01.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:768){
          ...GatsbyImageSharpFluid
        }
      }
    }
    descriptionImg02: file(relativePath:{eq: "description-02.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:768){
          ...GatsbyImageSharpFluid
        }
      }
    }
    descriptionImg03: file(relativePath:{eq: "description-03.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:768){
          ...GatsbyImageSharpFluid
        }
      }
    }
    installationImg01: file(relativePath:{eq: "installation-01.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:768){
          ...GatsbyImageSharpFluid
        }
      }
    }
    installationImg02: file(relativePath:{eq: "installation-02.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:768){
          ...GatsbyImageSharpFluid
        }
      }
    }
    installationImg03: file(relativePath:{eq: "installation-03.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:768){
          ...GatsbyImageSharpFluid
        }
      }
    }
    modelsImg01: file(relativePath:{eq: "models-01.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:768){
          ...GatsbyImageSharpFluid
        }
      }
    }
    modelsImg02: file(relativePath:{eq: "models-02.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:768){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object,
};