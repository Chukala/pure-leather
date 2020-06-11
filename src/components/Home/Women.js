import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Home/elements/Wrapper';
import HeroSection from '../Home/elements/HeroSection';

import WomenProductList from './WomenProductList';


const HeroImgDiv = styled.div `
    width: 100%;
    height: 100%;
    background: url("/PL_FRONTEND_REACT/img/lather-img/women_hero04.jpg");
    background-repeat: no-repeat;
    background-size: cover cover;
    background-position: center center;
    opacity: 1;
    z-index: 1;
    position: absolute;
    margin: 0px auto;
    overflow: hidden;
`;

function Women() {
        return(
            <Wrapper>
                <HeroSection> 
                    <HeroImgDiv></HeroImgDiv>
                </HeroSection>
              <WomenProductList />
        </Wrapper>
        );
   

}

export default Women;
