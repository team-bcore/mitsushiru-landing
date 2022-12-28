import Image from "next/image";

export default function Top2() {
    return (
        <div className="bg-ewc bg-cover">
            <div className="pt-24 relative bg-opacity-50 bg-gray-800">
                <svg
                    className="absolute inset-x-0 -bottom-1 text-white"
                    viewBox="0 0 1160 163"
                >
                    <path
                        fill="currentColor"
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="inline-block px-5 py-1  bg-primary max-w-lg mb-6 text-3xl font-noto tracking-wide rounded-full text-teal-900 sm:text-3xl sm:leading-none">
                                ミツシル導入事例　#2<br className="hidden md:block" /> 
                            </h2>
                            <p className="font-ud max-w-xl mb-4 text-base text-gray-200 md:text-2xl">
                            パナソニック株式会社　エレクトリックワークス社
                            </p>
                            <p className="font-ud max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                            実際にミツシルを導入されたお客様からの声をご紹介しています
                            </p>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <Image
                                    className=""
                                    src="/images/Usecase2/usecase2_logo.png"
                                    height={383} // Desired size with correct aspect ratio
                                    width={1366} // Desired size with correct aspect ratio
                                    alt="logo"
                                />
                                <p className="font-ud text-gray-700 leading-relaxed">
                                オフィス環境の改善や働き方の見直しに積極的に取り組む企業が増えています。 人起点の働き方改革の実現には、オフィス改修後も実際の利用状況に合わせて継続的なアップデートが必須です。<br></br>住宅、オフィス、ホテル、商業施設、スポーツ施設など社会を構成するあらゆる“くらしの空間”で事業を展開する パナソニックエレクトリックワークス社（以下、EW社）では、オフィス改革の効果分析のためにVieurekaの店舗向けソリューション「来客分析サービス」を活用されています。

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}