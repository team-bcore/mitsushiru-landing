import Image from "next/image";

export default function Intro() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10">
                    <a className="inline-block mb-5">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary"></div>
                    </a>
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        下田東急ホテル　様
                    </h5>
                    <hr className="mb-5 border-gray-300" />
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        ⼤浦湾を⼀望する下⽥東急ホテルは、2022年に開業60周年を迎える歴史と格式のあるリゾートホテルです。<br></br>
                        夏は海を望むガーデンプールや、すぐそばにある鍋⽥浜ビー
                        チで海⽔浴ができ、多くのお客様に親しまれています。
                        今回は、⼤浴場を利⽤されるお客様へのサービスのひとつとして、ミツシルを導⼊していただきました。
                    </p>
                </div>
                <div className="xl:py-12">
                    <Image
                        className="rounded"
                        src="/images/Usecase3/hotel_sky.jpeg" // Route of the image file
                        height={2025} // Desired size with correct aspect ratio
                        width={3600} // Desired size with correct aspect ratio
                        alt="上空から見た東急ホテル"
                    />
                </div>
            </div>
            <div className="py-16 grid gap-10 lg:grid-cols-2">
                <div className="">
                    <Image
                        className="rounded"
                        src="/images/Usecase3/bath.jpeg" // Route of the image file
                        height={588} // Desired size with correct aspect ratio
                        width={1196} // Desired size with correct aspect ratio
                        alt="東急ホテル浴場"
                    />
                </div>
                <div className="lg:pr-10 pt-12">
                    <p className="mb-6 text-gray-700 leading-relaxed">
                        下⽥東急ホテルは、和歌の浦と⾚根島が望めるお⾵呂が⾃慢のホテルでもあります。<br></br>
                        ⼈が少ない時間にゆっくりとお⾵呂を楽しみたいお客様や、
                        混雑が気になるお客様に安⼼してご⼊浴いただけるようミツシル
                        を運⽤されています。
                    </p>
                </div>
            </div>
        </div>
    );
}
