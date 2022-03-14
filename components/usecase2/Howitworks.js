import Image from "next/image";

export default function Howitworks() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    
                ミツシルのシンプルな仕組み
                </h2>
                <p className="text-base text-left text-gray-700">
                    ⼤企業の広⼤なオフィスフロアを監視カメラで⿃瞰して、フロア内の職員数をカウントするには、たくさんのカメラを設置する必要があります。<br></br>
                    ミツシルを利⽤すれば、フロアに通じる出⼊⼝（今回は2ヶ所）それぞれに１つのAIカメラを設置するだけで、フロア内の混雑度の可視化が可能となります。
                    分かりやすいシンプルな仕組みと、最⼩限の機材での可視化実現がミツシルの特徴です。
                </p>
            </div>
            <div className="mx-auto">
                <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                    <img
                        src="/images/Usecase2/how-it-works.png" // Route of the image file
                        height={866} // Desired size with correct aspect ratio
                        width={1382} // Desired size with correct aspect ratio
                        alt="ミツシルの仕組み"
                    />
                </div>
            </div>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <p className="text-base text-left text-gray-700">
                    サーバーに蓄積されたデータはCSVファイル形式で ダウンロードすることも可能なため、このデータを⽤いた、独⾃ソリューションの開発にも利⽤できないか検討されているようです。
                </p>
            </div>
        </div>


    );
}