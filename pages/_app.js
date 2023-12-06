import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import '../styles/globals.css'
import Layout from "@/layout/layout"
import { ToastContainer } from 'react-toastify';


export default function App({ Component, pageProps }) {
  return( 
      <Layout > 
        <ToastContainer />
   <Component {...pageProps} />
   </Layout>
  )
}
