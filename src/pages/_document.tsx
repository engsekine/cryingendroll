import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja' prefix='og: http://ogp.me/ns#'>
        <Head>
          <meta property='og:locale' content='ja_JP' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='robots' content='max-image-preview:large' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content={process.env.NEXT_PUBLIC_TWITTER_SITE} />
          <meta property='fb:app_id' content={process.env.NEXT_PUBLIC_FACEBOOK_APPID} />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=DotGothic16&family=Noto+Sans+JP:wght@400;700&display=swap' rel='stylesheet' />
        </Head>
        <body id='body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
