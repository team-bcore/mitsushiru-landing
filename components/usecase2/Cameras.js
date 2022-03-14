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
            <span className="inline-block mb-2">オフィス内の設置状況</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <p className="w-full text-gray-700 lg:max-w-md lg:font-semibold">
        オフィスフロアへの出⼊⼝2ヶ所にAIカメラを設置して、フロア内の職員数の可視化を実施しました
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        <div>
          <Image
            className="rounded shadow-xl"
            src="/images/Usecase2/main_door_vrk.jpg" // Route of the image file
            height={3726} // Desired size with correct aspect ratio
            width={5589} // Desired size with correct aspect ratio
            alt="メインドアカメラ設置状況"
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl"></p>
          <p className="text-gray-700">メインドアのカメラ設置状況</p>
        </div>
        <div>
          <Image
            className="rounded shadow-xl"
            src="/images/Usecase2/SW-vrk.jpg" // Route of the image file
            height={1423} // Desired size with correct aspect ratio
            width={2134} // Desired size with correct aspect ratio
            alt="パナソニックのAIカメラ「ビューレカ」"
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl"></p>
          <p className="text-gray-700">パナソニックのAIカメラ「ビューレカ」</p>
        </div>
        <div>
          <Image
            className="rounded shadow-xl"
            src="/images/Usecase2/sub_door_vrk.JPG" // Route of the image file
            height={3744} // Desired size with correct aspect ratio
            width={5616} // Desired size with correct aspect ratio
            alt="サブドアのカメラ設置状況"
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl"></p>
          <p className="text-gray-700">サブドアのカメラ設置状況</p>
        </div>
       
      </div>
    </div>
  );
}
