import React, { Component } from 'react'
import Slider from 'react-slick'
import Helmet from 'react-helmet';
import styled from 'styled-components';
import * as Icon from 'react-bootstrap-icons';
import './__slick.css';
import './__slick-theme.css';

const StyledSlider = styled(Slider)`
    width: 90%;
    height: 370px;
    margin: 30px auto;

    *:focus, *:active, *:visited{
        outline: none;
    }

    .slick-dots li button:before{
        color: ${({theme}) => theme.colors.mainColor1};
    }

    .slick-dots li.slick-active button:before
    {
        color: ${({theme}) => theme.colors.mainColor2};
    }


    @media screen and (max-width: ${({theme}) => theme.size.validWidth}px){
        .slick-prev:before, .slick-next:before{
            display:none;
        }
    }

`

class Carousel extends Component{
    
    render(){
        
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            slideToShow: 1,
            slideToScroll: 1
        }
        return(
            <>
                <StyledSlider {...settings}>
                    {this.props.children}
                </StyledSlider>
            </>
        );
    }
}

export default Carousel;