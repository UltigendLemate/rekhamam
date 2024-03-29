import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Kanit&family=Molengo&family=Tangerine&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-[#510000]'>
        
      
        <Main />
         
        <NextScript />
      </body>
    </Html>
  )
}
