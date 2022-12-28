import Image from "next/image";

export default function Intro() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="py-16 grid gap-10 lg:grid-cols-2">
        <div className="">
          <Image
            className="rounded"
            src="/images/Usecase2/EW-image-vrk.png" // Route of the image file
            height={280} // Desired size with correct aspect ratio
            width={600} // Desired size with correct aspect ratio
            alt="エレクトリックワークス社"
          />
        </div>
        <div className="lg:pr-10">
          <p className="pt-4 font-ud mb-6 text-gray-700 leading-relaxed">
            オフィスの改修エリアに「来客分析サービス」を設置し、利用人数の変化を測定することで、オフィス改革を継続的に実施しています。<br></br>
            しかし、コロナ下においては、出社制限などでオフィス全体の在室人数が著しく変化するため、改修効果の測定が困難。<br></br>
            そこで、当社のVieurekaソリューション「ミツシル」を導入頂き、フロアに通じる出入口にAIカメラを設置することで、オフィス全体の在室人数の把握に活用頂いています。
            分かりやすいシンプルな仕組みと、最小限の機材での可視化実現が「ミツシル」の特徴であり、「ミツシル」と「来客分析サービス」の併用により、より定期的なオフィス改修効果の見える化実現を期待されています。
          </p>
        </div>
      </div>
    </div>
  );
}
