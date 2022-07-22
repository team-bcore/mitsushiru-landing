import Link from "next/link";
import Navbar from "components/Navbar";
import Top from "components/usecase2/Top";
import Intro from "components/usecase2/Intro";
import Cameras from "components/usecase2/Cameras";
import Howitworks from "components/usecase2/Howitworks";
import Ui2 from "components/usecase2/Ui2";
import CommentEW from "components/usecase2/CommentEW";
import Ask from "components/Ask";
import Contact from "components/Contact";
import Footer from "components/Footer";
import { NextSeo } from 'next-seo';

export default function Usecase2() {
  return (
    <div className="selection:bg-lime-300">
      <NextSeo
        title="ミツシル導入事例2"
        description=""
        canonical="https://www.mitsushiru.tech/usecase1/"
        openGraph={{
          url: "https://www.mitsushiru.tech/usecase1/",
          title: "ミツシル導入事例2",
          description:
            "パナソニックエレクトリックワークス社　様の導入事例を紹介しています。",
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
        <Howitworks />
        <Ui2 />
        <CommentEW />
        <Ask />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
