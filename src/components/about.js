import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <div id="about" style={{marginTop:"3vh"}}>

    <AboutHeader>About DentDiagnosisGPT</AboutHeader>

    
    <AboutWrapper >
        <AboutSection>
          
          <AboutText>
            <p>
              DentDiagnosisGPT was developed by{" "}
              <a
                href="https://www.linkedin.com/in/aldendorosario/"
                target="_blank"
              >
                Alden Do Rosario
              </a>{" "}
              using{" "}
              <a href="https://customgpt.ai/" target="_blank">
                CustomGPT
              </a>
              , a ChatGPT-powered platform that lets businesses build chatbots
              with their own data. It has been trained on research articles and
              top medical information on the diagnosis of Dent's disease.
            </p>
            <p>
              <strong>Disclaimer</strong>: This tool is intended for
              informational purposes only and does not constitute medical
              advice, diagnosis, or treatment. Always seek the advice of a
              healthcare professional for any health concerns. While we strive
              to provide accurate information, we make no guarantees about the
              accuracy or completeness of any suggestions or information
              provided by this tool. Do not ignore professional medical advice
              or delay seeking treatment because of something you have read or
              interpreted through this tool. If you are experiencing a medical
              emergency, call your doctor or your local emergency service
              immediately.
            </p>
          </AboutText>
        </AboutSection>
      <div class="col-md-6">
        <ul class="list-group">
          <AboutListItem>
            <p>
              <strong>Developed by:</strong>
            </p>
            <p>Alden Do Rosario</p>
          </AboutListItem>
          <AboutListItem>
            <p>
              <strong>Training Model:</strong>
            </p>
            <p>CustomGPT + ChatGPT</p>
          </AboutListItem>
          <AboutListItem>
            <p>
              <strong>Training Data:</strong>
            </p>
            <p>277 research papers + 224 webpages</p>
          </AboutListItem>
          <AboutListItem>
            <p>
              <strong>Email:</strong>
            </p>
            <p>adorosario [at] gmail [dot] com</p>
          </AboutListItem>
        </ul>
      </div>
    </AboutWrapper>
    </div>
  );
};
const AboutHeader = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
`;
const AboutWrapper = styled.div`
  display: flex;
  align-items: top;
  height: 100%;
  justify-content: space-around;
  margin-top: 1rem;
  padding-bottom: 1rem;

  & > * {
    flex: 1;
  }

  @media screen and (max-width: 1000px) {
    & {
      flex-direction: column;
      justify-content: flex-start;
    }

    & > * {
      margin-top: 2rem;
      flex: 0;
      width: 100%;
    }
  }
`;


const AboutListItem = styled.li`
  display: flex;
  padding: 1.5rem;
  border-radius: 8px;
  position: relative;
  flex-direction: row;
  transition: all 0.3s ease-out;

  p:first-child {
    margin-right: 1rem; /* Add space between the two p blocks */
  }

  body.light-mode & {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.3);
  }

  body.light-mode &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  body.dark-mode & {
    background-color: #3b3b3c;
    border: 1px solid #515151;
  }

  @media screen and (max-width: 500px) {
    & {
      margin-top: var(--size-600);
    }
  }
`;

const AboutSection = styled.div`
  text-align: center;
  margin-top: 3vh;  
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 4rem;

  p {
    margin-bottom: 1rem;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    font-weight: bold;
  }
`;
export default About;
