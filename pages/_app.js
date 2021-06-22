import Nav from './../components/Nav';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Nav/>
      <Component {...pageProps} />
    </>
    
  ) 
}

export default MyApp
