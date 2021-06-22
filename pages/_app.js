import Nav from './../components/Nav';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
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
