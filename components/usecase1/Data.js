import Image from "next/image";
import GraphLine from "components/usecase1/GraphLine";

export default function Data() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
        <h2 className="mb-6 font-sans text-3xl font-bold leading-none  text-gray-900 sm:text-4xl md:mx-auto">
          ミツシルで、時間帯ごとの混雑度合いを把握、対策へと繋げる
        </h2>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
        <div className="transition duration-300 transform bg-white rounded md:text-center">
          <div className="relative">
            <Image
              src="/images/Usecase1/data-yamashita-weekly.png" // Route of the image file
              height={548} // Desired size with correct aspect ratio
              width={877} // Desired size with correct aspect ratio
              alt="一週間の集計グラフ"
            />
            <div className="absolute inset-0 bg-gray-700 bg-opacity-25" />
          </div>
          <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
            <h5 className="mb-2 text-lg leading-none">
              歯科待合室 1週間の時系列 人数推移（11/29～12/4）
            </h5>
          </div>
        </div>
        <div className="transition duration-300 transform bg-white rounded shadow-sm md:text-center">
          <div className="relative">
            <Image
              src="/images/Usecase1/data-yamashita-daily.png" // Route of the image file
              height={548} // Desired size with correct aspect ratio
              width={877} // Desired size with correct aspect ratio
              alt="一日の集計グラフ"
            />
            <div className="absolute inset-0 bg-gray-700 bg-opacity-25" />
          </div>
          <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
            <h5 className="mb-2 text-lg leading-none">
              歯科待合室 1日の時系列 人数推移（8時～20時）
            </h5>
          </div>
        </div>
      </div>
      <p className="text-gray-700 mx-auto pt-12 grid lg:grid-cols-1 lg:px-24 xl:grid-cols-1 xl:px-48">
        クリニックの管理者権限で、各カメラが取得したデータをグラフで閲覧することができます。山下診療所では歯科待合室、医科待合室それぞれの時系列データを病院運営に活用しています。
        なお、サーバーに蓄積されたデータはCSVファイル形式で
        ダウンロードすることも可能です。CSVデータを利用すれば、さらに詳細な人数推移や患者様の来院傾向などのデータ分析にご活用いただけます。
      </p>
    </div>
  );
}
