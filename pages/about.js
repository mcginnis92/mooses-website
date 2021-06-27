import Navigation from "./navigation";
import Head from "next/head";
import Image from "next/image";

import {H1, P} from "design-system-styled-components"
import {StyledContainer, StyledMain} from "../styles/global-styles";

const About = () => (
    <StyledContainer>
        <Head>
            <title>{'About Moose'}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <Navigation />
            <StyledMain>
                <H1>
                    {'About Me'}
                </H1>
                <div>
                    <Image alt={'Moose Snow'} height={350} src={"/../public/moose-snow.png"} width={300}/>
                </div>
                <div>
                    <div><P>{'I like playing in the snow.'}</P></div>
                    <div><P>{'I enjoy a frozen peanut butter Kong on a hot day.'}</P></div>
                    <div><P>{'I am great at fetch.'}</P></div>
                </div>
            </StyledMain>
        </div>
    </StyledContainer>
);

export default About;