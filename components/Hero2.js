import Image from "next/image";

export default function Hero2() {
  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover">
      <div className="px-4 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="bg-white/90 rounded py-6 my-11 flex flex-col mb-16 sm:text-center sm:mb-0">
            <p className="font-ud text-teal-800 text-xl">
              密集度モニターシステム
            </p>
            <a className="mb-2 sm:mx-auto">
              <div className="flex items-center justify-center w-60 h-40">
                <Image
                  src="/images/Hero/mitsushiru-logo-small.png" // Route of the image file
                  height={193} // Desired size with correct aspect ratio
                  width={400} // Desired size with correct aspect ratio
                  alt="密集度モニターシステム密ミツシル"
                />
              </div>
            </a>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h1 className="font-noto max-w-lg mb-12 text-5xl font-bold leading-none text-gray-900 sm:text-6xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative">密になりにくい</span>
                </span>{" "}
                <br></br>
                安全な空間に変えていく
              </h1>
              <p className="font-ud text-base text-gray-800 md:text-xl">
                コロナ禍以降、混雑や密集に対する意識は大きく変わりました。<br></br>「密を避けて施設を利用をしたい」<br></br>「密な施設にはあまり行きたくない」<br></br>というライフスタイルは多くの人々に定着することになりました。<br></br>
                密集度モニターシステム「密 ミツシル」は、施設を利用する側と管理する側、両方の課題を解決します。
              </p>
            </div>
            <div>
              <a
                href="#contact-us"
                className="bg-primary inline-flex items-center justify-center h-12 px-6 font-noto text-lg tracking-wide text-teal-900 transition duration-200 rounded shadow-lg shadow-gray-300/50 hover:text-white focus:shadow-outline focus:outline-none"
              >
                ミツシルを始める
              </a>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}
