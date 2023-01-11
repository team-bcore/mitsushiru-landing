import Image from "next/image";

export default function Intro() {
  return (  
      <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
        <div className="md:px-3 lg:col-start-2 lg:col-end-4 2xl:pt-24">
          <p className="pt-8 font-noto text-2xl font-bold text-gray-900 md:text-4xl ">
            混雑しやすい場所に行く前に、簡単に密を確認できます
          </p>
          <p className="font-ud text-base pt-8 pb-8 leading-relaxed text-gray-800">
            AIエッジカメラを出入り口に設置し、店舗や施設の密集度を5段階で見える化します。
            <br></br>
            AI技術と画像認識技術により、カメラは人を検知、
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
  );
}
