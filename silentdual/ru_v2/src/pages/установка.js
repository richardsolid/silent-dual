import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
 import  Hero from "../components/Hero"
  import Features from "../components/Features"
 import  Description from "../components/Description"
 import  ComponentsSilent from "../components/ComponentsSilent"
 import  InstallationSilent from "../components/InstallationSilent"
 import  ModelsSilent from "../components/ModelsSilent"
 import  ContactSilent from "../components/ContactSilent";
import { graphql } from "gatsby";
import video from "../video/silentdual/SilentDual_RU.mp4";
import videoBackground from "../video/silentdual/hero-silent-dual.mp4";

function IndexPage({ data }) {
  const {
    title,
    description,
    siteUrl,
    header,
    sections,
    footer,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout nav={header.nav} footer={footer}>
		<Helmet>
			<link
				rel="canonical"
        href={siteUrl}
			/>
		</Helmet>
      <SEO title={title} description={description} />
      <Hero
        title={title}
        description={description}
        data={sections.hero}
        background={data.bgHero}
        backgroundPortrait={data.bgHeroPortrait}
        video={video}
        videoBackground={videoBackground}
      />
      <InstallationSilent data={sections.installation} />
      <Description
        data={sections.description}
        background={data.bgDescription}
      />
      <Features
        data={sections.features}
        images={[data.featuresImg01, data.featuresImg02, data.featuresImg03]}
      />
      <ComponentsSilent
        data={sections.components}
        images={[
          data.componentsImg01,
          data.componentsImg02,
          data.componentsImg03,
          data.componentsImg04,
          data.componentsImg05,
        ]}
      />
      <ModelsSilent
        data={sections.models}
        background={data.bgModels}
        images={[data.modelsImg01, data.modelsImg02, data.modelsImg03]}
      />
      <ContactSilent data={sections.contact} />
    </Layout>
  );
}

export const query = graphql`
  query sitePageInstallatorsContent {
    markdownRemark {
      frontmatter {
        title
        description
        siteUrl
        header {
          nav {
            item
            route
          }
        }
        sections {
          hero {
            caret_text
          }
          description {
            text
          }
          features {
            title
            items {
              item
              body
            }
          }
          components {
            title
            hotspots {
              id
              title
              body
            }
          }
          installation {
            title
            subtitle
            titleText
            descriptionText
            btn_text
          }
          models {
            title
            items {
              item
            }
            btn_text
          }
          contact {
            title
            subtitle
            description
            portalId
            formId
            loading
          }
        }
        footer
      }
    }
    bgHero: file(relativePath: { eq: "silentdual/background_desktop.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgHeroPortrait: file(
      relativePath: { eq: "silentdual/background_mobile.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgDescription: file(
      relativePath: { eq: "silentdual/imagen_chica_background.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featuresImg01: file(
      relativePath: { eq: "silentdual/silent_feature_01.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featuresImg02: file(
      relativePath: { eq: "silentdual/silent_feature_02.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featuresImg03: file(
      relativePath: { eq: "silentdual/silent_feature_03.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    componentsImg01: file(
      relativePath: { eq: "silentdual/silent_explosionado_01.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    componentsImg02: file(
      relativePath: { eq: "silentdual/silent_explosionado_02.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    componentsImg03: file(
      relativePath: { eq: "silentdual/silent_explosionado_03.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    componentsImg04: file(
      relativePath: { eq: "silentdual/silent_explosionado_04.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    componentsImg05: file(
      relativePath: { eq: "silentdual/silent_explosionado_05.png" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    modelsImg01: file(relativePath: { eq: "silentdual/silent_model_01.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    modelsImg02: file(relativePath: { eq: "silentdual/silent_model_02.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    modelsImg03: file(relativePath: { eq: "silentdual/silent_model_03.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object,
};
