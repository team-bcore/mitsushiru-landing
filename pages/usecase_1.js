import Link from "next/link";
import Navbar from "components/Navbar";
import Top from "components/usecase1/Top";
import Intro from "components/usecase1/Intro";
import Cameras from "components/usecase1/Cameras";
import Data from "components/usecase1/Data";
import Ui from "components/usecase1/Ui";
import Comment1 from "components/usecase1/Comment1";
import Comment2 from "components/usecase1/Comment2";
import Ask from "components/Ask";
import Contact from "components/Contact";
import Footer from "components/Footer";
import { NextSeo } from 'next-seo';
import Head from "next/head";

export default function Usecase1() {
  return (
    <div className="selection:bg-lime-300">
      <NextSeo
        title="ミツシル導入事例1"
        description="医療法人社団 法山会 山下診療所 大塚 様の導入事例を紹介しています。"
        canonical="https://www.mitsushiru.tech/usecase_1/"
        openGraph={{
          url: "https://www.mitsushiru.tech/usecase_1/",
          title: "ミツシル導入事例1",
          description:
            "医療法人社団 法山会 山下診療所 大塚 様の導入事例を紹介しています。",
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
        <Top />
        <Intro />
        <Cameras />
        <Data />
        <Ui />
        <Comment1 />
        <Comment2 />
        <Ask />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
