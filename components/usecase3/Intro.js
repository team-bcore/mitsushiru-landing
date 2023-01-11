import Image from "next/image";

export default function Intro() {
    return (
        <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
                    <p className="font-ud mb-6 text-gray-700 leading-relaxed">
                        下田東急ホテルは、和歌の浦と赤根島が望めるお風呂が自慢のホテルでもあります。<br></br>
                        人が少ない時間にゆっくりとお風呂を楽しみたいお客様や、
                        混雑が気になるお客様に安心してご入浴いただけるようミツシルを運用されています。
                    </p>
                </div>
            </div>
        </div>
    );
}
