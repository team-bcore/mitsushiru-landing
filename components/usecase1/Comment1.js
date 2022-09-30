import Image from "next/image";

export default function Comment1() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <Image
            className="rounded"
            src="/images/Usecase1/Yamashita_Iwao_portrait.jpeg" // Route of the image file
            height={1280} // Desired size with correct aspect ratio
            width={1280} // Desired size with correct aspect ratio
            alt="山下 巌 先生"
          />
           
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:px-8 lg:pl-12 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary">
              お客様の声
            </p>
          </div>
          <p className="mb-3 font-extrabold text-gray-800">
            医療法人社団 法山会 理事長
          </p>
          <h5 className="text-gray-800 mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            山下 巌 先生
          </h5>
          <p className="mb-5 text-gray-700 leading-relaxed">
            当院では受付を挟んで医科と⻭科で待合スペースを分離しています。
            また、待合室にいる時間を最⼩限にするために予約システムを導入し、外出してもスマホで診察の進み具合が⾒られる仕組みとなっています。
            それでも、待ち時間が長くなってしまうことがあり、密対策という面からも何か良い方法がないか悩んでいました。
            今回のミツシルの導⼊により、待合室のリアルな混雑度を患者様がスマホで知ることができるので、密を避けて安⼼して受診できるようになると期待しています。
            <br></br>
            クリニックがミツシルによって取得できる混雑度の累積データも有⽤です。
            今まで感覚的に捉えていた待合室の混雑の推移が⾒やすいグラフで提供されるので、スタッフの配置や予約枠の最適化に繋げることも可能です。
          </p>
        </div>
      </div>
    </div>
  );
}
