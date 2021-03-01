import React, { Component } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import CardContent from './CardContent';


const Wrapper = styled.div`
    width: 100%;

    position: relative;
    display:flex;
    justify-content:center;
    padding: auto;
`


const TimeDot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1.5px solid ${({theme}) => theme.colors.mainColor3};
    background-color: ${({theme}) => theme.colors.white};


    position: absolute;
    z-index: 2;
    top:22px;
    transform:translateX(-50%);
    left:20%;
    @media screen and (min-width: ${({theme}) => theme.size.validWidth}px){
        left:50%;
    }

    
`

const Blank = styled.div`
    width:50%;
    height:auto;


    @media screen and (max-width: ${({theme}) => theme.size.validWidth}px){
        display:none;
    }
`


const CareerCard = (props) => {

    return(
        <Wrapper>
            {
                props.isLeft
                ? (
                    <>
                        <CardContent
                            isLeft={true}
                            title={props.title}
                            desc={props.desc}
                            startDate={props.startDate}
                            endDate={props.endDate}
                        />
                        <TimeDot/>
                        <Blank/>
                    </>
                )
                : (
                    <>
                        <Blank/>
                        <TimeDot/>
                        <CardContent
                            title={props.title}
                            desc={props.desc}
                            startDate={props.startDate}
                            endDate={props.endDate}
                        />
                    </>
                )
            }
        </Wrapper>
    );
    
}


export default CareerCard;
