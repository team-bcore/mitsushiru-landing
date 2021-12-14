export default function Price() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute hidden w-full bg-gray-50 lg:block h-96" />
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-green-600 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
              <span className="relative">料金プラン</span>
            </span>{" "}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            ミツシルは月額10,000円からご利用できます。<br></br>
            機材は購入かレンタルをお選びいただけます。
          </p>
        </div>
        <div className="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
          <div>
            <div className="p-8 bg-primary rounded">
              <div className="mb-4 text-center">
                <p className="text-xl font-medium tracking-wide text-white">
                  機材購入プラン
                </p>
                <div className="flex items-center justify-center">
                  <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                    ¥10,000
                  </p>
                  <p className="text-lg text-gray-700">/ 月</p>
                </div>
              </div>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <div className="mr-3"></div>
                  <p className="font-medium text-gray-700"></p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3"></div>
                  <p className="font-medium text-gray-700">税抜価格</p>
                </li>
                <li className="flex items-center">
                  <p className="font-medium text-gray-700">
                    ※月次単位でご解約可能です。（月途中のご解約申し出は、月末付けで対応します）
                  </p>
                </li>
              </ul>
              <div>
                <a
                  href="#contact-us"
                  className="bg-gray-800 inline-flex items-center w-full justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                >
                  今すぐ申し込む
                </a>
              </div>
            </div>
            <div className="w-11/12 h-2 mx-auto bg-primary rounded-b opacity-75" />
            <div className="w-10/12 h-2 mx-auto bg-primary rounded-b opacity-50" />
            <div className="w-9/12 h-2 mx-auto bg-primary rounded-b opacity-25" />
          </div>
          <div>
            <div className="p-8 bg-primary rounded">
              <div className="mb-4 text-center">
                <p className="text-xl font-medium tracking-wide text-white">
                  機材レンタルプラン
                </p>
                <div className="flex items-center justify-center">
                  <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                    ¥20,000
                  </p>
                  <p className="text-lg text-gray-700">/ 月</p>
                </div>
              </div>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <div className="mr-3"></div>
                  <p className="font-medium text-gray-700">税抜価格</p>
                </li>
                <li className="flex items-center">
                  <div className="mr-3"></div>
                  <p className="font-medium text-gray-700">
                    ※ご利用1年未満でご解約の場合、解約違約金が発生します。（レンタル機材はご返却頂きます）
                  </p>
                </li>
              </ul>
              <div>
                <a
                  href="#contact-us"
                  className="bg-gray-800 inline-flex items-center w-full justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                >
                  今すぐ申し込む
                </a>
              </div>
            </div>
            <div className="w-11/12 h-2 mx-auto bg-primary rounded-b opacity-75" />
            <div className="w-10/12 h-2 mx-auto bg-primary rounded-b opacity-50" />
            <div className="w-9/12 h-2 mx-auto bg-primary rounded-b opacity-25" />
          </div>
        </div>
      </div>
    </div>
  );
}
