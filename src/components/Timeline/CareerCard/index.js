import React, { Component } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';


const Wrapper = styled.div`
    width:50%;
    box-sizing: border-box;
    padding: 20px;


    @media screen and (max-width: ${({theme}) => theme.size.validWidth}px){
        width:80%;
        margin:0 auto;
        padding: 20px 0 0 80px;
    }

`

const Date = styled.div`
    width:146px;
    height: 17px;
    border-radius: 9px;
    border: 1px solid ${({theme}) => theme.colors.mainColor1};

    display:flex;
    justify-content:center;
    align-items: center;
    font-size: 11px;
    color: ${({theme}) => theme.colors.fontColorLight};

    @media screen and (min-width: ${({theme}) => theme.size.validWidth}px){
        ${props => {
            if(props.isLeft){
                return `
                    margin: auto 0 auto auto;
                `;
            }
        }};
    }
`

const Title = styled.div`
    margin: 8px auto;
    font-size: 16px;

    @media screen and (min-width: ${({theme}) => theme.size.validWidth}px){
        ${props => {
            if(props.isLeft){
                return `
                    text-align: right;
                    clear: both;
                `
            }
        }};
    }
`

const Desc = styled.div`
    margin: 12px auto;
    font-size: 12px;

    @media screen and (min-width: ${({theme}) => theme.size.validWidth}px){
        ${props => {
            if(props.isLeft){
                return `
                    text-align: right;
                `;
            }
        }};
    }
`


const CareerCard = (props) => {

    return(
        <Wrapper isBlank={props.isBlank}>
            {
            props.isLeft
            ? (<Date isLeft={true}>{props.startDate}</Date>)
            : (<Date>{props.startDate} - {props.endDate}</Date>)
            }
            <Title isLeft={props.isLeft}>
                {props.title}   
            </Title> 
            <Desc isLeft={props.isLeft}>
                {props.desc}
            </Desc>

        </Wrapper>
    );
    
}


export default CareerCard;
