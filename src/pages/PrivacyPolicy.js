import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import { SectionHeading } from "components/misc/Headings";
import { LogoLink } from "components/headers/light.js";
import logoFull from "images/logo-full.png";

const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;

const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const HeadingRow = tw.h1`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ headingText = "Mentions Légales" }) => {
  return (
    <AnimationRevealPage>
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
           <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>

            <h2>Responsabilité</h2>
            <p>
              meetro.herokuapp.com<br/>
              Le directeur de la publication est l'équipe Meetro Chat
              <br/><br/>
              Le site meetro.herokuapp.com est réalisé et édité par : Meetro Chat
              <br/><br/>
              Le site meetro.herokuapp.com est hébergé par : HEROKU
              <br/><br/>
              Nous nous engageons à respecter l’ensemble des lois concernant la mise en place et l’activité d’un site internet.
            </p>
         

            <h2>Propriété intellectuelle</h2>
            <p>
            Ce site est l'entière propriété de Meetro Chat. Toute reproduction, même partielle, de ce site est strictement interdite sauf autorisation expresse du responsable de la publication. Les documents ne peuvent faire l’objet de copies qu’à titre d’information, la copie étant réservée au seul usage privé.
            </p>
            <h2>Protection des données personnelles</h2>
            <p>
            Vous pouvez consulter ce site sans révéler votre identité ou donner la moindre information vous concernant.
            <br/><br/>
            Le site meetro.herokuapp.com n’utilise pas de procédés qui lui permettraient de collecter de manière invisible des données nominatives.
            <br/><br/>
            Les informations que vous avez ou allez saisir sur le site meetro.herokuapp.com ou que vous allez nous transmettre, pourront être enregistrées pour leur traitement exclusif par meetro.herokuapp.com.
            <br/><br/>
            Vous disposez d’un droit d’accès, de modification, de rectification et de suppression concernant les données collectées sur ce site, dans les conditions prévues par la loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés.<br/>
            Pour exercer ce droit, veuillez nous adresser un courriel à : contact@meetrochat.com
            </p>

            <h2>Liens hypertextes</h2>
            <p>
            Meetro.herokuapp.com n'est pas responsable des liens hypertextes pointant vers le présent site. Les liens hypertextes établis en direction d'autres sites à partir de l’adresse meetro.herokuapp.com ne sauraient, en aucun cas, engager la responsabilité de meetro.herokuapp.com   
           </p>


            <h2>Informations techniques</h2>
            <p>
            Il est rappelé que le secret des correspondances n’est pas garanti sur le réseau Internet et qu’il appartient à chaque utilisateur d’Internet de prendre toutes les mesures appropriées de façon à protéger ses propres données et/ou logiciels de la contamination d’éventuels virus circulant sur Internet.
            <br/><br/>
            Le présent site est accessible 24 heures sur 24 et 7 jours sur 7, à l'exception des cas de force majeure, difficultés informatiques, difficultés liées à la structure des réseaux de communication ou difficultés d'ordre technique.
            <br/><br/>
            Recommandations pour la visualisation :<br/>
            Le site est optimisé pour un affichage sur tous les formats d'écran.
            </p>
         
            <h2>Application de la loi Française</h2>
            <p>
            Conformément à l’article 17 de la Loi pour la Confiance dans l’Economie Numérique, le droit français est applicable au présent site.
            </p>

          </Text>
        </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
  );
};
