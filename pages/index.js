import Head from 'next/head'
import Navigation from "./navigation";
import Image from "next/image";

import {H1, P} from 'design-system-styled-components';
import {StyledContainer, StyledMain} from "../styles/global-styles";

export default function Home() {
  return (
    <StyledContainer>
      <Head>
        <title>{`Moose's Website`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navigation />
        <StyledMain>
          <H1>
            {`Hi, I'm Moose`}
          </H1>
          <div>
            <Image alt={'Moose Headshot'} height={400} src={"/../public/moose.png"} width={300}/>
          </div>
          <P>{`Welcome to Moose's corner of the web.`}</P>
        </StyledMain>
      </div>
    </StyledContainer>
  )
}
