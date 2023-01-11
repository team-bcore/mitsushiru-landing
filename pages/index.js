import Link from "next/link";
import Head from "next/head";
import Navbar from "components/Navbar";
import Merit_new from "components/Merit_new";
import Recommend_2 from "components/Recommend_2";
import Features from "components/Features";
import Steps from "components/Steps";
import Support from "components/Support";
import Faq from "components/Faq";
import Price_2 from "components/Price_2";
import Ask from "components/Ask";
import Footer from "components/Footer";
import Hero2 from "components/Hero2";
import Intro from "components/Intro";
import Contact from "components/Contact";
import Testimonials_2 from "components/Testimonials_2"
import Howitworks from "components/usecase3/Howitworks";

import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="selection:bg-lime-300">
      <NextSeo
        title="密集度モニターシステム・密 ミツシル"
        description="IoTカメラで店舗や施設のリアルタイムの密集度を見える化するサービス・ミツシル。スマートフォンやインターネットから混雑情報へ簡単アクセス"
        canonical="https://www.mitsushiru.tech/"
        openGraph={{
          url: "https://www.mitsushiru.tech/",
          title: "密集度モニターシステム・密 ミツシル",
          description:
            "IoTカメラで店舗や施設のリアルタイムの密集度を見える化するサービス・ミツシル。スマートフォンやインターネットから混雑情報へ簡単アクセス",
          images: [
            {
              url: "https://www.mitsushiru.tech/images/Seo/card-image.png",
              width: 800,
              height: 600,
              alt: "密集度モニターシステム・密 ミツシル",
              type: "image/png",
            },
            {
              url: "https://www.mitsushiru.tech/images/Seo/card-image2.png",
              width: 900,
              height: 800,
              alt: "密集度モニターシステム・密 ミツシル",
              type: "large_image/png",
            },
          ],
          site_name: "密集度モニターシステム・密 ミツシル",
        }}
        twitter={{
          handle: "colorbit_bcore",
          site: "https://twitter.com/colorbit_bcore",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Navbar />
        <Hero2 />
        <Intro />
        <Merit_new />
        <Recommend_2 />
        <Howitworks />
        <Features />
        <Testimonials_2 />
        <Steps />
        <Support />
        <Faq />
        <Price_2 />
        <Contact />
        <Ask />
        <Footer />
      </div>
    </div>
  );
}
