import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Description from "../components/Description";
import Components from "../components/Components";
import Installation from "../components/Installation";
import Models from "../components/Models";
import Contact from "../components/Contact";
import { graphql } from "gatsby";
import video from "../video/Video_Jetline_nov2020.mp4";
import videoBackground from "../video/videoBackground.mp4";

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
        backgroundPortrait={data.bgHeroPortrait}
        video={video}
        videoBackground={videoBackground}
      />
      <Description data={sections.description} background={data.bgDescription}/>
      <Features
        data={sections.features}
        images={[ data.featuresImg01, data.featuresImg02, data.featuresImg03 ]}
      />
      <Components
        data={sections.components}
        images={[ data.componentsImg01, data.componentsImg02, data.componentsImg03, data.componentsImg04 ]}
      />
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
          description{
            text
          }
          features{
            title
            items{
              item
              body
            }
          }
          components{
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
            btn_text
            btn_file
          }
          models{
            title
            items{
              item
              btn_text
              btn_file
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
    bgHeroPortrait: file(relativePath:{eq: "bg-hero-portrait.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:1440){
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgDescription: file(relativePath:{eq: "bg-description.jpg"}){
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
    featuresImg01: file(relativePath:{eq: "features-01.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:768){
          ...GatsbyImageSharpFluid
        }
      }
    }
    featuresImg02: file(relativePath:{eq: "features-02.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:768){
          ...GatsbyImageSharpFluid
        }
      }
    }
    featuresImg03: file(relativePath:{eq: "features-03.jpg"}){
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
    componentsImg01: file(relativePath:{eq: "element1.png"}){
      childImageSharp{
        fluid(quality:90, maxWidth:1440){
          ...GatsbyImageSharpFluid
        }
      }
    }
    componentsImg02: file(relativePath:{eq: "element2.png"}){
      childImageSharp{
        fluid(quality:90, maxWidth:1440){
          ...GatsbyImageSharpFluid
        }
      }
    }
    componentsImg03: file(relativePath:{eq: "element3.png"}){
      childImageSharp{
        fluid(quality:90, maxWidth:1440){
          ...GatsbyImageSharpFluid
        }
      }
    }
    componentsImg04: file(relativePath:{eq: "element4.png"}){
      childImageSharp{
        fluid(quality:90, maxWidth:1440){
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
