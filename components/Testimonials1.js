import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
  return (
    <div
      className="bg-gray-50 
        "
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center ">
          お客様の声
        </p>
        <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
          <div className="mb-4">
            <a className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl">
              患者様に安心していただける<br></br>空間を提供したい
            </a>
          </div>
          <p className="text-base text-gray-700 md:text-lg">
          ミツシルの導⼊により、患者様は待合室のリアルな混雑度をスマホで知ることが出来るので、密を避けてより安⼼して受診できるようになることを期待しています。
          </p>
        </div>
        <div className="mb-10 sm:text-center">
        <Link href="/usecase_1">
          <a className="inline-block mb-1">
            <Image
              className="object-cover w-15 h-10 rounded-full shadow-sm"
              src="/images/Usecase1/Yamashita_Iwao_portrait.jpeg" // Route of the image file
              height={120} // Desired size with correct aspect ratio
              width={120} // Desired size with correct aspect ratio
              alt="山下 巌 先生"
            />
          </a>
          </Link> 
          <div>
            <a className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700">
              山下 巌 先生
            </a>
            <p className="text-sm font-medium leading-4 text-gray-600">
              医療法人社団 法山会 理事長
            </p>
          </div>
        </div>
        <div className="sm:text-center">
          <Link href="/usecase_1">
            <a className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-lime-500">
              Read more
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
