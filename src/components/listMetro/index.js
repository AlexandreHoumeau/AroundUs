import React from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import {LIST_METRO} from '../../helpers/dataMetro'
const PreviewCardContainer = tw.div`mt-2 mx-auto md:mx-0 max-w-lg   w-full sm:w-3/6 md:w-4/12 lg:w-3/12`;
const PreviewCard = tw(motion.a)`block rounded-lg shadow-raised m-2`;
const PreviewCardImageContainer = tw.div`rounded-t-lg border-0 border-b-0`;
const PreviewCardImage = styled(motion.div)`
  ${props => css`background-image: url('${props.src}'); height: 12rem; background-position: center; background-repeat: no-repeat`}
`;
const PreviewButton = tw(PrimaryButtonBase)`w-full rounded-b-lg rounded-t-none py-5 font-semibold`;
const PreviewTitle = tw.div`rounded-b-lg rounded-t-none py-5 font-semibold`;

const ListMetro = () => {

  return (
    <>
    {LIST_METRO && LIST_METRO.map(l => (
        <PreviewCardContainer style={{position: 'relative'}} key={l.id}>
        <PreviewCard initial="rest" animate="rest" whileHover="hover" href={l.url} target="_blank">
          <PreviewCardImageContainer style={{border: '3px solid ' + l.color}}>
            <PreviewCardImage
              transition={{ type: "tween" }}
              color={l.color}
              src={l.src}
            />
          </PreviewCardImageContainer>
          <PreviewButton style={{backgroundColor: l.color}} >C'est parti</PreviewButton>
        </PreviewCard>
      </PreviewCardContainer>
    ))}
    </>
  )
}

export default ListMetro