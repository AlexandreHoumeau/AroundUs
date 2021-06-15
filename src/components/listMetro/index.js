import React from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import {LIST_METRO} from '../../helpers/dataMetro'
const PreviewCardContainer = tw.div`mt-2 mx-auto md:mx-0 max-w-lg w-full md:w-4/12 lg:w-3/12`;
const PreviewCard = tw(motion.a)`block rounded-lg shadow-raised m-2`;
const PreviewCardImageContainer = tw.div`rounded-t-lg border-0 border-b-0`;
const PreviewCardImage = styled(motion.div)`
  ${props => css`background-color: ${props.color}; height: 12rem`}
`;
const PreviewButton = tw(PrimaryButtonBase)`w-full rounded-b-lg rounded-t-none py-5 font-semibold`;
const PreviewTitle = tw.div`rounded-b-lg rounded-t-none py-5 font-semibold`;

const ListMetro = () => {

  return (
    <>
    {LIST_METRO && LIST_METRO.map(l => (
        <PreviewCardContainer style={{position: 'relative'}} key={l.id}>
        <PreviewCard initial="rest" animate="rest" whileHover="hover" href={l.url} target="_blank">
          <PreviewCardImageContainer>
            <PreviewCardImage
              transition={{ type: "tween" }}
              color={l.color}
            />
          </PreviewCardImageContainer>
          <PreviewTitle style={{
            position: 'absolute',
            top: '4em',
            left: 0,
            right: 0,
            margin: 'auto'
            }} >
              <p style={{color: 'white', fontSize: '32px', textAlign: 'center'}}>{l.name}</p>
            </PreviewTitle>
          <PreviewButton color={l.color}>C'est partis</PreviewButton>
        </PreviewCard>
      </PreviewCardContainer>
    ))}
    </>
  )
}

export default ListMetro