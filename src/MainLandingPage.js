import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";
import tw from "twin.macro";
import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";

import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import heroScreenshotImageSrc from "images/homeMeetroChat.png";
import logoFull from "images/logo-full.png";

import ListMetroView from './components/listMetro'

/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-4 lg:pt-8 pb-16 max-w-screen-2xl mx-auto flex-wrap mt-10`;

const Column = tw.div`flex-1`;
const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
const ActionButton = tw(
  AnchorLink
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)``;
const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-1/2 justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full`;

const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionHeading = tw(HeadingBase)`text-primary-900`;
const SectionDescription = tw(DescriptionBase)`text-center mx-auto text-gray-600 max-w-4xl`;

const PreviewCards = tw.div`flex flex-wrap mt-4`;

export default ({
  features = null,
  primaryButtonUrl = "#landingPageDemos",
  primaryButtonText = "Lignes de métro",
  buttonRoundedCss = "",
  heading = "Ne vous sentez plus jamais seul pendant vos trajets.",
  description = "Communiquez facilement et rapidement avec des personnes qui partagent vos ligne de métro du quotidien."
}) => {


  features = features || [
    'Plus de 4 millions de passagers',
    `De nombreux sujets`,
    `Tout le monde peut participer`,
    "Toutes les lignes de métro",
    "Utilisation de discord",
    "Et c'est GRATUIT"
  ];

  return (
    <AnimationRevealPage disabled>
      <Container tw="bg-white -mx-8 -mt-8 pt-6 px-8">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/">
              <img src={logoFull} alt="" />
            </LogoLink>
            <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
              <div tw="md:hidden flex-100 h-0"></div>
              <PrimaryNavLink  href="#contact">
                Nous Contactez
              </PrimaryNavLink>
            </div>
          </NavRow>
          <HeroRow>
            <TextColumn>
              <Heading as="h1">{heading}</Heading>
              <Description>{description}</Description>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
              <Actions>
                <PrimaryButton href={primaryButtonUrl} css={buttonRoundedCss}>
                  {primaryButtonText}
                </PrimaryButton>
              </Actions>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={heroScreenshotImageSrc} />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>
          <SectionContainer id="landingPageDemos">
            <SectionHeading>Liste des métros</SectionHeading>
            <SectionDescription>
              Rejoignez directement votre ligne de métro en un clic seulement :D
            </SectionDescription>
            <PreviewCards>
              <ListMetroView />
            </PreviewCards>
          </SectionContainer>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};


