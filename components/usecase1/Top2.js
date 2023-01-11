import Image from "next/image";

export default function Top2() {
    return (
        <div className="bg-yamashita">
            <div className="pt-24 relative bg-opacity-70 bg-gray-900">
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
                                ミツシル導入事例　#1<br className="hidden md:block" /> 
                            </h2>
                            <p className="font-ud max-w-xl mb-4 text-base text-gray-200 md:text-2xl">
                            医療法人社団 法山会 山下診療所 大塚 様
                            </p>
                            <p className="font-ud max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                            実際にミツシルを導入されたお客様からの声をご紹介しています
                            </p>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <Image
                                    className=""
                                    src="/images/Usecase1/hospital-logo.png"
                                    height={383} // Desired size with correct aspect ratio
                                    width={1366} // Desired size with correct aspect ratio
                                    alt="logo"
                                />
                                <p className="font-ud text-gray-700 leading-relaxed">
                                    山下診療所は、医科（内科・小児科・耳鼻咽喉科）と歯科（歯科・口腔外科）が併設された大塚と自由が丘駅前に立地する都市型のクリニックです。<br></br>
                                    多数の専門医が勤務し、多角的な視点で高精度な医療をワンストップで提供しています。オンライン診療にも早くから取り組み、最新技術の導入には意欲的です。<br></br>今回はミツシルを大塚病院に導入いただきました。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}