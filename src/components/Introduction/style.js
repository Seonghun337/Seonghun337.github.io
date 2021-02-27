import Image from "gatsby-image"
import styled from 'styled-components';


export const ProfileImage = styled(Image)`
    min-width: 134px;
    height: 178px;
    margin:0 50px;
`

export const ProfileText = styled.div`
    max-width: 400px;
    font-size: 13px;
    font-weight: 200;
    line-height: 19px;
    margin: 40px;
`

export const Wrapper = styled.div`
    margin: 45px 0;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: auto 20px;

    @media (max-width: 480px){
        flex-direction:column;
    }
`