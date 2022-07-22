// pages/_app.js
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }) => {
  usePageViews();

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
};

export default App;