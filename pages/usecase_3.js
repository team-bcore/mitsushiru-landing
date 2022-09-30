import Link from "next/link";
import Navbar from "components/Navbar";
import Top from "components/usecase3/Top";
import Intro from "components/usecase3/Intro";
import Cameras from "components/usecase3/Cameras";
import Leaflet from "components/usecase3/Leaflet";
import Howitworks from "components/usecase3/Howitworks";
import Ui3 from "components/usecase3/Ui3";
import Comment3 from "components/usecase3/Comment3";
import Ask from "components/Ask";
import Contact from "components/Contact";
import Footer from "components/Footer";
import { NextSeo } from 'next-seo';
import Head from "next/head";

export default function Usecase3() {
    return (
        <div className="selection:bg-lime-300">
      <NextSeo
        title="ミツシル導入事例3"
        description="下田東急ホテル様の導入事例を紹介しています。"
        canonical="https://www.mitsushiru.tech/usecase_3/"
        openGraph={{
          url: "https://www.mitsushiru.tech/usecase_3/",
          title: "ミツシル導入事例3",
          description:
            "下田東急ホテル様の導入事例を紹介しています。",
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
        <Leaflet />
        <Howitworks />
        <Ui3 />
        <Comment3 />
        <Ask />
        <Contact />
        <Footer />
      </div>
    </div>

    );
}