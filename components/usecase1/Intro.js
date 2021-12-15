import Image from "next/image";

export default function Intro() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="pt-16 max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          密 ミツシル　事例紹介 1
        </h2>
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <a className="inline-block mb-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary"></div>
          </a>
          <h5 className="mb-4 text-4xl font-extrabold leading-none">
            医療法人社団 法山会
            <br className="hidden md:block" />
            山下診療所　大塚{" "}
            <span className="inline-block text-deep-purple-accent-400"></span>
          </h5>
          <hr className="mb-5 border-gray-300" />
          <p className="mb-6 text-gray-700 leading-relaxed">
            山下診療所は、医科（内科・小児科・耳鼻咽喉科）と歯科（歯科・口腔外科）が併設された大塚と自由が丘駅前に立地する都市型のクリニックです。
            多数の専門医が勤務し、多角的な視点で高精度な医療をワンストップで提供しています。オンライン診療にも早くから取り組み、最新技術の導入には意欲
            的です。今回はミツシルを大塚病院に導入いただきました。
          </p>
        </div>
        <div className="">
          <Image
            className="rounded"
            src="/images/Usecase1/1.jpeg" // Route of the image file
            height={400} // Desired size with correct aspect ratio
            width={600} // Desired size with correct aspect ratio
            alt="山下診療所大塚"
          />
        </div>
      </div>
    </div>
  );
}
