import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {ReactComponent as SvgDotPatternIcon} from "../../images/dot-pattern.svg"
import{ init, send } from 'emailjs-com';
init("user_NZEDOgb3a455bJ8JPxZCn");
const templateId = 'template_3002e6j';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`

export default () => {

const [fields, setFields] = useState({
  name: '',
  email: "",
  message: ""
});


const handleChange = (e) => {
  setFields({...fields, [e.target.name]: e.target.value});
}

const sendFeedback = (templateId, variables)  => {
	send(
  	'service_rcx1oq7', templateId,
  	variables
  	).then(res => {
    	alert('Email envoyé avec succès');
      setFields({
        name: '',
        email: "",
        message: ""
      })
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    sendFeedback(templateId, {message: fields.message, name: fields.name, reply_to: fields.email});
  }
  return (
    <Container id="contact">
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Une question ? Contactez-nous</h2>
            <form action="#" onSubmit={handleSubmit}>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Nom *</Label>
                    <Input onChange={handleChange} value={fields.name} required id="name-input" type="text" name="name" placeholder="John Doe" />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Adresse email *</Label>
                    <Input onChange={handleChange} value={fields.email} required id="email-input" type="email" name="email" placeholder="john@mail.com" />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Message *</Label>
                    <TextArea onChange={handleChange} value={fields.message} required id="message-input" name="message" placeholder="Message"/>
                  </InputContainer>
                </Column>
              </TwoColumn>

              <div style={{textAlign: 'right'}}>
                <SubmitButton type="submit" value="Submit">Envoyer</SubmitButton>
              </div>

            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
