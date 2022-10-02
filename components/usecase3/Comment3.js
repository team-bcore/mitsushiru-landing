import Image from "next/image";

export default function Comment3() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2 pt-16">
          <Image
            className="rounded"
            src="/images/Usecase3/usecase-manager-2.jpg" // Route of the image file
            height={3339} // Desired size with correct aspect ratio
            width={2580} // Desired size with correct aspect ratio
            alt="山下 巌 先生"
          />

        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:px-8 lg:pl-12 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary">
              お客様の声
            </p>
          </div>
          <p className="mb-3 font-extrabold text-gray-800">
            下⽥東急ホテル 管理⽀配⼈
          </p>
          <h5 className="text-gray-800 mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            飯岡 史晴 様
          </h5>
          <p className="mb-5 text-gray-700 leading-relaxed">
            当ホテルは温暖な気候に恵まれた南伊⾖下⽥の海抜５６メートルの⾼台に⽴地しています。⼤浴場には露天⾵呂を備えており、眼下には太平洋を⼀望でき、晴れた⽇には⽔平線に浮かぶ伊⾖諸島の美しいパノラマがご覧いただけます。
            GW連休や夏休み、年末年始の繁忙期には特にたくさんのお客様が来館され、⼣⾷時間前には⼤浴場にお客様が集中し、混雑する傾向があります。また、マリンシーズンには海⽔浴を楽しまれたお客様が⼤浴場に直⾏されることも多く、⼣⾷前以外の時間帯でも⼤浴場が混雑するピークが不規則に発⽣していました。<br></br>退館される際に、「浴室が混雑していたよ」との声を頂くこともあったので、⼤浴場の混雑度緩和に役⽴つ良い
            ツールがないかと探していました。
            今回のミツシルの導⼊により、リアルタイムの⼤浴場の混雑度をスマホを通じてお客様にお知らせすることが可能になりました。
            これにより、お客様が密を避けた時間帯に、安⼼・リラックスして⼊浴を楽しんで頂けることの⼀助になればと期待しています。
            <br></br>また、管理者⽤のデータを活⽤することにより、
            今まではスタッフが感覚的に捉えていた⼤浴場の混雑推移はグラフで⾒える化されるようになりました。
            季節毎、週毎、時間帯毎の混雑傾向が把握できるので、スタッフによる清掃や点検作業の効率化にも繋げていけるのではと期待しています。
          </p>
        </div>
      </div>
    </div>
  );
}
