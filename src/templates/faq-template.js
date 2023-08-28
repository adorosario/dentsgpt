import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import FAQComponent from '../components/faq';

const FaqTemplate = ({ data }) => {
    const { html, frontmatter } = data.markdownRemark;
  return (
    <Layout title={frontmatter.title}>
      <FAQWrapper>
        <FAQComponent></FAQComponent>
      </FAQWrapper>
    </Layout>
  );
};

export default FaqTemplate;

const FAQWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   height: 100%;
//   width: 100%;
  }
`;


export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        profile_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: PNG, height: 400)
          }
        }
      }
    }
  }
`;
