import Image from "next/image";

export default function CommentEW() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-base font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary">
              お客様の声
            </p>
          </div>
          <p className="font-ud mb-3 text-gray-700">
            導入を先導頂いたキーパーソンにコメントを頂きました。
          </p>
          
          <br />
          <p className="mb-3 font-noto text-gray-800">パナソニック株式会社</p>
          <h5 className="font-noto text-gray-800 mb-3 text-2xl font-extrabold leading-none sm:text-3xl">
            Vieureka チーム 岡部様
          </h5>
          <hr className="mb-4 border-gray-300" />        
          <p className="font-ud text-gray-700">
            EW社においては、従来の「来客分析サービス」だけでは、オフィスの改修効果の測定が困難でした。ミツシルとの併用により、改修効果を正確に測定可能になることを期待しています。
          </p>
        </div>

        <div className="relative w-full min-h-[300px] sm:min-h-[384px] drop-shadow-lg">
          <Image
            className="rounded shadow-lg object-cover"
            src="/images/Usecase2/Okabe.png"
            alt="導入されたお客様"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}