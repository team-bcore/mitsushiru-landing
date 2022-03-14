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
            パナソニック株式会社
            <br className="hidden md:block" />
            エレクトリックワークス社{" "}
            <span className="inline-block text-deep-purple-accent-400"></span>
          </h5>
          <hr className="mb-5 border-gray-300" />
          <p className="mb-6 text-gray-700 leading-relaxed">
        働き⽅改⾰を推進するための施策として、オフィス環境の改善や働き⽅の⾒直しをはじめとしたオフィス改⾰に積極的に取り組む企業が増えています。
        ⼈起点の働き⽅改⾰の実現には、オフィス改修後にも、実際の利⽤状況に合わせて継続的なアップデートが必須です。<br></br>
        住宅、オフィス、ホテル、商業施設、スポーツ施設など社会を構成するあらゆる“くらしの空間”で事業を展開する パナソニックエレクトリックワークス社（以下、EW社）では、オフィス改⾰の効果分析のためにVieurekaの店舗向けソリューション「来客分析サービス」を活⽤されています。
          </p>
        </div>
        <div className="xl:py-12">
          <Image
            className="rounded"
            src="/images/Usecase2/EW-entrance.jpg" // Route of the image file
            height={2268} // Desired size with correct aspect ratio
            width={4032} // Desired size with correct aspect ratio
            alt="エレクトリックワークス社"
          />
        </div>
      </div>
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
          <p className="mb-6 text-gray-700 leading-relaxed">
          オフィスの改修エリアに「来客分析サービス」を設置し、利⽤⼈数の変化を測定することで、オフィス改⾰を継続的に実施しています。<br></br>
          しかし、コロナ下においては、出社制限などでオフィス全体の在室⼈数が著しく変化するため、改修効果の測定が困難。<br></br>
          そこで、当社のVieurekaソリューション「ミツシル」を導⼊頂き、フロアに通じる出⼊⼝にAIカメラを設置することで、オフィス全体の在室⼈数の把握に活⽤頂いています。
          分かりやすいシンプルな仕組みと、最⼩限の機材での可視化実現が「ミツシル」の特徴であり、「ミツシル」と「来客分析サービス」の併⽤により、より定期的なオフィス改修効果の⾒える化実現を期待されています。
          </p>
        </div>      
      </div>
    </div>
  );
}
