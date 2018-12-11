import Head from 'next/head'
import Footer from './Footer'
import ProgressBar from './ProgressBar'
import NavBar from './NavBar/Index'
import DrawerLeft from './NavBar/DrawerLeft'
import Header from './Header'

export default ({children}) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/*language=SCSS*/}
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Space+Mono|Work+Sans');
        //font-family: 'Space Mono', monospace;
        //font-family: 'Work Sans', sans-serif;

        body {
          font-size: 1.2rem;
          line-height: 1.6rem;
          //font-family: 'Source Sans Pro', sans-serif;
          font-family: 'Work Sans', sans-serif;
          margin: 0px;
          color: #111;
          background-color: #fff !important;
        }

        img {
          max-width: 100%;
        }

        a {
          color: #111;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
        rel="stylesheet"
      />
      <ProgressBar />
      <Header />
      {/*<NavBar />*/}
      {/*<DrawerLeft/>*/}
      {children}
      <Footer />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-117911945-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-117911945-1');
          `
        }}
      />
    </div>
  )
}