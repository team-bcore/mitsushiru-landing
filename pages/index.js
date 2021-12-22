import Link from "next/link";
import Head from "next/head";
import Navbar from "components/Navbar";
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
import Contact from "components/Contact";
import Testimonials1 from "components/Testimonials1";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="">
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
        <Merit />
        <Recommend />
        <Features />
        <Price />
        <Steps />
        <Support />
        <Testimonials1 />
        <Faq />
        <Contact />
        <Ask />
        <Footer />
      </div>
    </div>
  );
}
