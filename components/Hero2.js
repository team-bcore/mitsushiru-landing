import Image from "next/image";

export default function Hero2() {
  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-40 h-40 rounded-full bg-teal-accent-400">
                <Image
                  src="/images/Hero/logo-green.svg" // Route of the image file
                  height={200} // Desired size with correct aspect ratio
                  width={200} // Desired size with correct aspect ratio
                  alt="密集度モニターシステム密ミツシル"
                />
              </div>
            </a>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative">密になりにくい</span>
                </span>{" "}
                <br></br>
                安全な空間に変えていく
              </h1>
              <p className="text-base text-gray-700 md:text-lg">
                新型コロナウイルスの感染が拡大する中で、<br></br>
                「密を避けて利用をしたい」 「密な施設には行かない」<br></br>
                という施設利用者の意識が高まっています。<br></br>
                密集度モニターシステム「密 ミツシル」は<br></br>
                施設を利用する側と管理する側、両方の課題を解決します。
              </p>
            </div>
            <div>
              <a
                href="#contact-us"
                className="bg-yellow-300 inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-lg shadow-yellow-300/50 hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
              >
                ミツシルを始める
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
        <div className="md:px-3 lg:col-start-2 lg:col-end-4 2xl:pt-24">
          <p className="text-2xl font-bold text-gray-900 md:text-3xl ">
            🟨 混雑しやすい場所に行く前に、簡単に密を確認できます
          </p>
          <p className="pt-8 pb-8 leading-relaxed text-gray-700">
            IoTカメラを出入り口に設置し、店舗や施設の密集度を5段階で見える化します。
            <br></br>
            AI技術と画像認識技術により、IoTカメラは人を検知、
            リアルタイムで通過した人数をカウントします。<br></br>
            施設の利用者は、スマートフォンやインターネットから、
            現在の混雑度を簡単に知ることができます。
          </p>
        </div>
        <div className="lg:col-end-6 lg:col-span-2">
          <Image
            src="/images/Hero/iphone-301.png" // Route of the image file
            height={1347} // Desired size with correct aspect ratio
            width={1827} // Desired size with correct aspect ratio
            alt="ミツシルのUIとパナソニックのIoTカメラVRK301"
          />
        </div>
      </div>
    </div>
  );
}
