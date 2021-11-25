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

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>ミツシル</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <Hero />
        <Merit />
        <Recommend />
        <Features />
        <Steps />
        <Support />
        <Faq />
      </div>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image
            src="/vercel.svg"
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Vercel"
            className="logo"
          />
        </a>
      </footer>
    </div>
  );
}
