import Image from "next/image";

export default function Leaflet() {
    return (
        <div className="bg-lime-100">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="lg:pr-10">
                        <h5 className="font-noto pt-12 mb-4 text-4xl font-extrabold leading-none text-gray-800">
                            お客様へ安心安全をお届けする
                        </h5>
                        <hr className="mt-5 border-gray-300" />
                        <p className="font-ud pt-8 mb-6 text-gray-700">
                            客室やフロントに、男女浴場の混雑度をチェックできるQRコードが表示されたリーフレットやカードを設置しています。
                            お客様は、QRコードをスマートフォンで読み取ると、お部屋にいながら浴場のリアルタイムの混雑状況を知ることができます。
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/images/Usecase3/leaflet.png" // Route of the image file
                            height={920} // Desired size with correct aspect ratio
                            width={1864} // Desired size with correct aspect ratio
                            alt="リーフレット"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}