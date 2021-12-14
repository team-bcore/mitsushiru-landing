import Image from "next/image";

export default function Features() {
  return (
    <div className="bg-secondary pt-20 pb-16">
      <div className="">
        <p className="text-3xl text-center font-bold text-gray-900 md:text-4xl ">
          🟨 ミツシルの3つの特徴
        </p>
      </div>
      <div className="pt-6 grid grid-cols-1 md:grid-cols-11 gap-6">
        <div className="md:col-start-2 col-span-3">
          <div className="p-4 text-center">
            <Image
              src="/images/Features/NO1.svg" // Route of the image file
              height={80} // Desired size with correct aspect ratio
              width={80} // Desired size with correct aspect ratio
              alt="NO1"
            />
            <h5 className="p-1 text-center text-2xl font-semibold text-gray-900 mb-2 md:text-lg">
              シンプルな仕組み
            </h5>
            <Image
              src="/images/Features/feature_1.svg" // Route of the image file
              height={229} // Desired size with correct aspect ratio
              width={395} // Desired size with correct aspect ratio
              alt="QRコードを読み取るだけで混雑度を確認できます"
            />

            <div className="">
              <p class="mb-4 text-left text-gray-700">
                施設利用者は、QRコード読み取りやURLから混雑情報へアクセスします。
                <br></br>
                スマートフォンや端末のブラウザでリアルタイムの混雑度を簡単に知ることができます。
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-start-5 col-span-3">
          <div class="p-4 text-center">
            <Image
              src="/images/Features/NO2.svg" // Route of the image file
              height={80} // Desired size with correct aspect ratio
              width={80} // Desired size with correct aspect ratio
              alt="NO2"
            />
            <h5 className="p-1 text-center text-2xl font-semibold mb-2 text-gray-900 md:text-lg">
              低コスト
            </h5>
            <Image
              src="/images/Features/feature_2.svg" // Route of the image file
              height={229} // Desired size with correct aspect ratio
              width={395} // Desired size with correct aspect ratio
              alt="料金プラン"
            />

            <div className="">
              <p class="mb-4 text-left text-gray-700">
                月額1万円からサービスを利用できるので、コストを抑えながら、お客様に安心して施設を利用していただけます。
                <br></br>
                カメラは、購入かレンタルをお選びいただけます。
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-start-8 col-span-3">
          <div className="p-4 text-center">
            <Image
              src="/images/Features/NO3.svg" // Route of the image file
              height={80} // Desired size with correct aspect ratio
              width={80} // Desired size with correct aspect ratio
              alt="NO3"
            />
            <h5 className="p-1 text-center text-2xl font-semibold mb-2 text-gray-900 md:text-lg">
              プライバシー保護
            </h5>
            <Image
              src="/images/Features/feature_3.svg" // Route of the image file
              height={229} // Desired size with correct aspect ratio
              width={395} // Desired size with correct aspect ratio
              alt="画像データは保存しません"
            />

            <div className="">
              <p className="mb-4 text-left text-gray-700">
                IoTカメラ内で画像処理され、データのみが外部出力されます。
                画像はカメラ内で破棄され、残ることはありません。<br></br>
                そのため、施設内のお客様のプライバシーが守られます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
