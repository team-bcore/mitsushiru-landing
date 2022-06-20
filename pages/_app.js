import "tailwindcss/tailwind.css";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <div className="container">      
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BBD59JYM23"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BBD59JYM23');
        `}
      </Script>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
