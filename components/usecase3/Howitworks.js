import Image from "next/image";

export default function Howitworks() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    ミツシルのシンプルな仕組み
                </h2>
                <p className="text-base text-left text-gray-700">
                    ミツシルは、施設の出入口それぞれに1つのエッジAIカメラを設置するだけで、フロア内の混雑度の見える化を可能にします。
                    分かりやすいシンプルな仕組みと、最小限の機材での見える化がミツシルの特長です。
                </p>
            </div>
            <div className="mx-auto">
                <div className="relative w-full transition-shadow duration-300">
                    <Image
                        src="/images/Usecase2/how-it-works.png" // Route of the image file
                        height={565} // Desired size with correct aspect ratio
                        width={1382} // Desired size with correct aspect ratio
                        alt="ミツシルの仕組み"
                    />
                </div>
            </div>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <p className="text-base text-left text-gray-700">
                    画像はカメラ内で処理され、データのみが外部出力されます。<br></br>画像はカメラ内で破棄され、残ることはありません。
                    そのため、施設内のお客様のプライバシーが守られます。
                </p>
            </div>
        </div>


    );
}