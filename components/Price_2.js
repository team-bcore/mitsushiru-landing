export default function Price_2() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-base font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary">
                        Pricing
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">料金プラン</span>
                    </span>
                </h2>
                <p className="font-ud text-base text-gray-700 md:text-lg">
                    ミツシルは月額10,000円からご利用できます。<br></br>
                    機材は購入かレンタルをお選びいただけます。
                </p>
            </div>
            <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-2 xl:max-w-screen-lg sm:mx-auto">
                <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                    <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                        <div className="inline-block px-3 py-1 text-lg font-ud tracking-wider text-teal-900 uppercase rounded bg-primary">
                            機材購入プラン
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mt-2">
                            <div className="mr-1 text-5xl font-bold">¥10000</div>
                            <p className="font-ud text-lg text-gray-700">/ 月</p>
                        </div>
                        <div className="mt-6 space-y-3">
                            <div className="font-ud text-gray-700">税抜価格</div>
                            <div className="font-ud text-gray-700">※月次単位でご解約可能です。</div>
                            <div className="font-ud text-gray-700">（月途中のご解約申し出は、月末付けで対応します）</div>
                        </div>
                    </div>
                    <div>
                        <a
                            href="#contact-us"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-ud tracking-wide text-white transition duration-200 bg-gray-700 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                        >
                            機材購入プランを申し込む
                        </a>
                    </div>
                </div>
                <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
                    <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                        <div className="inline-block px-3 py-1 text-lg font-ud tracking-wider text-teal-900 uppercase rounded bg-primary">
                            機材レンタルプラン
                        </div>
                    </div>
                    <div className="text-center">

                        <div className="flex items-center justify-center mt-2">
                            <div className="mr-1 text-5xl font-bold">¥20000</div>
                            <p className="font-ud text-lg text-gray-700">/ 月</p>
                        </div>
                        <div className="mt-6 space-y-3">
                            <div className="font-ud text-gray-700">税抜価格</div>
                            <div className="font-ud text-gray-700">※ご利用1年未満でご解約の場合、解約違約金が発生します。</div>
                            <div className="font-ud text-gray-700">（レンタル機材はご返却頂きます）</div>
                        </div>
                    </div>
                    <div>
                        <a
                            href="#contact-us"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-ud tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                        >
                            機材レンタルプランを申し込む
                        </a>
                    </div>
                </div>

            </div>
        </div>

    );
}