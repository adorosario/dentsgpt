import React, { useState } from 'react';
import styled from 'styled-components';

const FaqSection = styled.section`
  /* Add your section styles here */
`;

const FaqContainer = styled.div`
  /* Add your container styles here */
`;

const Title = styled.h2`
  /* Add your title styles here */
  &.text-center {
    text-align: center;
  }
`;



const FAQComponent = () => {
    const accordionSections = [
        {
            title: 'What is DentDiagnosisGPT?',
            cards: [

                    <div>

                    
                        <p>DentDiagnosisGPT is an AI chatbot that uses CustomGPT + ChatGPT technology to answer questions about the diagnosis of Dent's disease. It is trained on 277 research papers about Dent's plus 224 top webpages related to the diagnosis of Dent's diseases. </p>

                        <p><strong>Disclaimer</strong>: This tool is intended for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of a healthcare professional for any health concerns. While we strive to provide accurate information, we make no guarantees about the accuracy or completeness of any suggestions or information provided by this tool. Do not ignore professional medical advice or delay seeking treatment because of something you have read or interpreted through this tool. If you are experiencing a medical emergency, call your doctor or your local emergency service immediately.</p>
                        </div>
            ],
        },
        {
            title: ' I have more questions. Who should I contact?',
            cards: [

                <div class="card-body">
                    Please contact the <a href="https://www.dentdisease.org/" target="_blank">Dent's Disease Foundation</a>
                </div>

            ],
        },
        // ... other sections ...
    ];
    return (
        <FaqSection id="faq">
            <FaqContainer className="container">
                <Title className="text-center">Frequently Asked Questions</Title>
                <Accordion sections={accordionSections} />
            </FaqContainer>
        </FaqSection>
    );
};






const AccordionContainer = styled.div`
    margin-top: 3vh;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const AccordionSection = styled.div`
  border-top: 1px solid #ccc;
  padding: 16px;
  cursor: pointer;
  background-color: ${props => (props.active ? '#FFC0CB' : 'transparent')};
`;

const AccordionContent = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  padding: 16px;
`;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 8px;
  background-color:#D3D3D3;
  div{
    margin-bottom: 8px;
    }
    p{
        margin-bottom: 8px;
    }
  
`;

const Accordion = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSection = index => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <AccordionContainer>
            {sections.map((section, index) => (
                <div key={index}>
                    <AccordionSection
                        active={activeIndex === index}
                        onClick={() => toggleSection(index)}
                    >
                        {section.title}
                    </AccordionSection>
                    <AccordionContent active={activeIndex === index}>
                        {section.cards.map((card, cardIndex) => (
                            <CardContainer key={cardIndex}>
                                {/* Render custom HTML content */}
                                {card}
                            </CardContainer>
                        ))}
                    </AccordionContent>
                </div>
            ))}
        </AccordionContainer>
    );
};


export default FAQComponent;
