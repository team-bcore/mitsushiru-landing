import Image from "next/image";

export default function Hero() {
    return (
        <div className="bg-hero-pattern bg-no-repeat bg-cover">
            <div className="container mx-auto h-screen flex flex-col justify-evenly">
                <div className="">
                    <h1 className="text-center text-3xl font-bold md:text-5xl md: xl:text-6xl">
                        密になりにくい<br></br>安心な空間に変えていく
                    </h1>
                </div>
                <div className="">
                    <p className="text-center p-4 leading-relaxed sm:mx-10 md:mx-46 md:px-40 lg:mx-32 xl:mx-80 2xl:mx-96">
                        新型コロナウイルスの感染が拡大する中で<br></br>「密を避けて利用をしたい」<br></br>「密な施設には行かない」<br></br>という施設利用者の意識が高まっています。<br></br><br></br>ミツシルは施設を利用する側と管理する側<br></br>両方の課題を解決するツールです。
                    </p>
                </div>
                <div className="flex place-content-center">

                    <button className="
                        bg-yellow-300 
                        text-white 
                        active:bg-purple-600
                        font-bold
                        uppercase
                        text-sm
                        px-6
                        py-3
                        rounded-full
                        shadow
                        hover:shadow-lg
                        outline-none
                        focus:outline-none
                        mr-1
                        mb-1
                        ease-linear
                        transition-all
                        duration-150 "
                        type="button"
                    >
                        {" "}ミツシルをはじめる{" "}
                    </button>
                </div>
            </div>

            <div className="px-2 grid grid-cols-1  lg:grid-cols-6">
                <div className="lg:col-start-2 lg:col-end-4">
                    <p className="text-2xl font-bold md:text-3xl ">
                        🟨 混雑しやすい場所に行く前に、簡単に密を確認できます
                    </p>
                    <p className="pt-8 pb-8 leading-relaxed ">
                        IoTカメラを出入り口に設置し、店舗や施設の密集度を5段階で見える化します。<br></br>
                        AI技術と画像認識技術により、IoTカメラは人を検知、
                        リアルタイムで通過した人数をカウントします。<br></br>
                        施設の利用者は、スマートフォンやインターネットから、
                        現在の混雑度を簡単に知ることができます。
                    </p>
                </div>
                <div className="lg:col-end-6 lg:col-span-2">
                    <Image
                        src="/images/Hero/iphone-301.png" // Route of the image file
                        height={1347} // Desired size with correct aspect ratio
                        width={1827} // Desired size with correct aspect ratio
                        alt="ミツシルのUIとパナソニックのIoTカメラVRK301"
                    />
                </div>
            </div>
        </div>
    );
}
