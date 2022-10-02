import Image from "next/image";

export default function Cameras() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <a className="mr-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary"></div>
          </a>
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block mb-2">ホテル内のカメラ設置状況</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <p className="w-full text-gray-700 lg:max-w-md lg:font-semibold">
        各⼤浴場の出⼊⼝2ヶ所にエッジAIカメラを設置して、浴場内の混雑度の⾒える化を実施しました。
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        <div>
          <Image
            className="rounded shadow-xl"
            src="/images/Usecase3/Male-bath-camera.jpg" // Route of the image file
            height={3024} // Desired size with correct aspect ratio
            width={4032} // Desired size with correct aspect ratio
            alt="男性浴場前カメラ"
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl"></p>
          <p className="text-gray-700">男性浴場のカメラ設置状況</p>
        </div>
        <div>
          <Image
            className="rounded shadow-xl"
            src="/images/Usecase3/center-camera.jpg" // Route of the image file
            height={3024} // Desired size with correct aspect ratio
            width={4032} // Desired size with correct aspect ratio
            alt="エッジAIカメラ「ビューレカ」"
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl"></p>
          <p className="text-gray-700">エッジAIカメラ「ビューレカ」</p>
        </div>
        <div>
          <Image
            className="rounded shadow-xl"
            src="/images/Usecase3/female-bath-camera.jpg" // Route of the image file
            height={3024} // Desired size with correct aspect ratio
            width={4032} // Desired size with correct aspect ratio
            alt="女性浴場のカメラ設置状況"
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl"></p>
          <p className="text-gray-700">女性浴場のカメラ設置状況</p>
        </div>
       
      </div>
    </div>
  );
}
