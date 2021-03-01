import React, { Component } from 'react'
import styled from 'styled-components';
import * as I from 'react-bootstrap-icons';

const Icon = (props) => {
    // alert(props.name)
    if (props.name == "Globe"){
        return (
            <I.Globe
                width = {props.width}
                height = {props.height}
            />
        );
    }
    else if(props.name == "ChevronRight"){
        return(
            <I.ChevronRight
                width = {props.width}
                height = {props.height}
            />
        )
    }
    else{
        return(
            <div>invalid icon...</div>
        )
    }

}

export default Icon