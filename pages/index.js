import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Hero from "components/Hero";
import Merit from "components/Merit";
import Recommend from "components/Recommend";
import Features from "components/Features";
import Steps from "components/Steps";
import Support from "components/Support";
import Faq from "components/Faq";
import Price from "components/Price";
import Ask from "components/Ask";
import Footer from "components/Footer";

import Hero2 from "components/Hero2";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>ミツシル</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <Hero2 />
        <Merit />
        <Recommend />
        <Features />
        <Steps />
        <Support />
        <Faq />
        <Price />
        <Ask />
        <Footer />
      </div>

    </div>
  );
}
