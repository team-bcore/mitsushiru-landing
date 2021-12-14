import Image from "next/image";

export default function Features() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span class="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-green-600 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="232db96b-4aa2-422f-9086-5a77996d1df1"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                width="52"
                height="24"
              />
            </svg>
            <span class="relative">安心のサポート体制</span>
          </span>{" "}
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          導入してからも、ビーコアがしっかりサポートしますので、<br></br>
          安心してサービスをご利用いただけます。
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 md:grid-cols-2">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm">
          <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
            <div className="mb-6 mr-6 lg:mb-0">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/Support/shikatu.svg" // Route of the image file
                  height={251} // Desired size with correct aspect ratio
                  width={351} // Desired size with correct aspect ratio
                  alt="密を作らない安心できる空間の提供"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  カメラの管理は、私たちビーコアにお任せください
                </h6>
                <p className="mb-2 text-sm text-gray-900">
                  カメラは、パナソニックの提供する遠隔監視プラットフォームで管理されているので、迅速にトラブル対応します。
                  <br></br>ほとんど全ての維持管理はビーコアが遠隔で行います。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm ">
          <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
            <div className="mb-6 mr-6 lg:mb-0">
              <div className="flex items-center justify-center">
                <a href="https://privacymark.jp/">
                  <Image
                    src="/images/Support/privacy-mark.png" // Route of the image file
                    height={251} // Desired size with correct aspect ratio
                    width={351} // Desired size with correct aspect ratio
                    alt="プライバシーマーク"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h6 className="mb-2 font-semibold leading-5">
                  Pマークを取得しています
                </h6>
                <p className="mb-2 text-sm text-gray-900">
                  プライバシーマークは、一定の要件を満たした事業者などの団体に対し、一般財団法人日本情報経済社会推進協会（JIDEC）が使用を許諾する登録商標です。
                  個人情報を適切に取り扱っていると評価された事業者だけが使用できます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
