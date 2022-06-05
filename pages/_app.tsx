import React, { ReactElement } from 'react';
import Head from 'next/head'

import Nav from './../components/NavigationBar';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) : ReactElement {
  return(
    <>
      <Head>
        {/* /public is excluded in the path*/}
        <link rel={"shortcut icon"} href={"./../assets/logo.ico"} />
        <title> Portfolio </title>
      </Head>
      <Nav/>
      <Component { ... pageProps} />
    </>
    
  ) 
}

export default MyApp
