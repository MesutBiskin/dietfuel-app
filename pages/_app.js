import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import '../styles/globals.css'
import Layout from "@/layout/layout"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }) {
  return( 
      <Layout > 
        <ToastContainer />
   <Component {...pageProps} />
   </Layout>
  )
}
