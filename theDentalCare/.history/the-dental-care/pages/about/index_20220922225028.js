import { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
`

const AboutImageContainer = styled.div`
  width: 100%;
  height: 100%;
`

const GreyMask = styled.div`
    background-color: rgba(30, 30, 30, 1.0);
`

const AboutContainer = styled.div`

`

export default function About() {
    return (
        <Fragment>
            <NavBar/>
            <AboutContainer>
                <AboutImageContainer>
                    <AboutImage src='/about_image.png' alt='about image'/>
                    <GreyMask/>
                </AboutImageContainer>
            </AboutContainer>
        </Fragment>
    );
}