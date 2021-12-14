import Image from "next/image";

export default function Comment2() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary">
              お客様の声
            </p>
          </div>
          <p className="mb-3 font-extrabold text-gray-800">山下診療所　大塚 </p>
          <h5 className="text-gray-800 mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            スタッフの皆様
          </h5>
          <hr className="mb-5 border-gray-300" />
          <ul className="list-disc px-2">
            <li className="text-gray-700">
              受付スタッフの目から見た印象ですが、
              <a className="underline decoration-lime-500 decoration-2">
                以前より待合室の混雑度は一定レベル以下に なってきた気がします。
              </a>
              段々とミツシルをご利用する患者様が増えてきたのかもしれません。
              患者様用混雑度ページへご案内するQRコードは、院内のポスターと
              受付に名刺サイズでお知らせしています。
            </li>
            <li className="text-gray-700">
              人気の先生を希望されている患者様にとっては、来院のタイミングをご本人で調整できるので、
              <a className="underline decoration-lime-500 decoration-2">
                リアルタイムで空いている時間帯が分かるのは有益な情報のようです。
              </a>
            </li>
            <li className="text-gray-700">
              カメラは小さく目立たないので、監視されているというイメージを患者様に与えないのがいいですね。
              <a className="underline decoration-lime-500 decoration-2">
                プライバシーにも配慮し、映像を録画していない
              </a>
              というのも好印象です。
            </li>
            <li className="text-gray-700">
              混雑度のデータを長期的に蓄積して、予約枠の平準化にも活用していきたいです。
            </li>
          </ul>
        </div>
        <div className="drop-shadow-lg">
          <Image
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="/images/Usecase1/staffs.jpeg" // Route of the image file
            height={712} // Desired size with correct aspect ratio
            width={1072} // Desired size with correct aspect ratio
            alt="山下診療所大塚のスタッフの皆様"
          />
        </div>
      </div>
    </div>
  );
}
