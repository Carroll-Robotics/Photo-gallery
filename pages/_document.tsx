import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures Carroll Robotics"
          />
          <meta property="og:site_name" content="photos.team7110.com" />
          <meta
            property="og:description"
            content="See pictures Carroll Robotics"
          />
          <meta property="og:title" content="Carroll Robotics Images" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Carroll Robotics Images" />
          <meta
            name="twitter:description"
            content="See pictures Carroll Robotics"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
