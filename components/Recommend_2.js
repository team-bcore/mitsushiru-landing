import Image from "next/image";

export default function Recommend_2() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="px-2">
                <p className="font-noto text-3xl text-center font-bold text-gray-900 md:text-4xl">
                    このような場所におすすめします
                </p>
                <p className="font-ud text-center pt-4 text-gray-800 md:mx-24">
                    病院、大浴場やスポーツジム、飲食店など、不特定多数が集まる、入口と出口が明確な場所が適しています。
                </p>
            </div>
            <div className="pt-12 grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-5">
                <div className="text-center">
                    <div className="flex items-center justify-center w-28 h-28 mx-auto mb-4 sm:w-40 sm:h-40">
                        <Image
                            src="/images/Recommend/hospital.png" // Route of the image file
                            height={800} // Desired size with correct aspect ratio
                            width={800} // Desired size with correct aspect ratio
                            alt="病院待合室"
                        />
                    </div>
                    <h6 className="mb-2 text-lg font-ud leading-5 tracking-wider uppercase">
                        病院
                    </h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-28 h-28 mx-auto mb-4 sm:w-40 sm:h-40">
                        <Image
                            src="/images/Recommend/office.png" // Route of the image file
                            height={800} // Desired size with correct aspect ratio
                            width={800} // Desired size with correct aspect ratio
                            alt="オフィス"
                        />
                    </div>
                    <h6 className="mb-2 text-lg font-ud leading-5 tracking-wider uppercase">
                        オフィス
                    </h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-28 h-28 mx-auto mb-4 sm:w-40 sm:h-40">
                        <Image
                            src="/images/Recommend/onsen.png" // Route of the image file
                            height={800} // Desired size with correct aspect ratio
                            width={800} // Desired size with correct aspect ratio
                            alt="温泉"
                        />
                    </div>
                    <h6 className="mb-2 text-lg font-ud leading-5 tracking-wider uppercase">
                        大浴場
                    </h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-28 h-28 mx-auto mb-4 sm:w-40 sm:h-40">
                        <Image
                            src="/images/Recommend/restaurant.png" // Route of the image file
                            height={800} // Desired size with correct aspect ratio
                            width={800} // Desired size with correct aspect ratio
                            alt="飲食店"
                        />
                    </div>
                    <h6 className="mb-2 text-lg font-ud leading-5 tracking-wider uppercase">
                        飲食店
                    </h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-28 h-28 mx-auto mb-4 sm:w-40 sm:h-40">
                        <Image
                            src="/images/Recommend/gym.png" // Route of the image file
                            height={800} // Desired size with correct aspect ratio
                            width={800} // Desired size with correct aspect ratio
                            alt="ジム"
                        />
                    </div>
                    <h6 className="mb-2 text-lg font-ud leading-5 tracking-wider uppercase">
                        ジム
                    </h6>
                </div>

            </div>
        </div>

    );
}