import Image from "next/image";

export default function Merit() {
  return (
    <div className="bg-primary px-2 pt-20 pb-5 sm:px-8">
      <div className="">
        <p className="text-3xl text-center font-bold text-gray-900 md:text-4xl ">
          🟨 ミツシルを導入するメリット
        </p>
      </div>
      <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-6">
        <div className="lg:col-start-2 lg:col-end-4">
          <Image
            src="/images/Merit/Merit-1.svg" // Route of the image file
            height={210} // Desired size with correct aspect ratio
            width={640} // Desired size with correct aspect ratio
            alt="密を作らない安心できる空間の提供"
          />

          <div className="shadow-md rounded-md bg-white md:h-60">
            <p className="p-8 text-gray-700 lg:p-6 xl:p-10">
              訪問前に「どうせ混んでいるから 行かない」・施設を訪問後に
              「混んでいたから帰ろう」という利用者
              心理により、機会損失が日々発生しています。<br></br>
              ミツシルで、利用者が事前に密を確認することで、安心して来訪いただけます。
            </p>
          </div>
        </div>
        <div className="lg:col-end-6 lg:col-span-2">
          <Image
            src="/images/Merit/Merit-2_1.svg" // Route of the image file
            height={210} // Desired size with correct aspect ratio
            width={640} // Desired size with correct aspect ratio
            alt="現場スタッフの労力を軽減"
          />

          <div className="shadow-md rounded-md bg-white md:h-60">
            <p className="p-8 text-gray-700 lg:p-6 xl:p-10">
              混雑状況のお問い合わせのたび に、スタッフが密を都度確認する
              負担は、本来業務を圧迫していま す。<br></br>
              <br></br>
              ミツシルなら、スタッフの代わり に24時間見守り、利用者に混雑
              情報をお届けします。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
