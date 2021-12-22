import Image from "next/image";

export default function Ui() {
  return (
    <div className="bg-dots-pattern bg-no-repeat">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <h5 className="mb-4 text-4xl font-extrabold leading-none text-gray-800">
              スマートフォンで
              <br className="hidden md:block" />
              誰でも{" "}
              <span className="inline-block text-deep-purple-accent-400">
                かんたんにアクセス
              </span>
            </h5>
            <hr className="mt-5 border-gray-300" />
            <p className="pt-8 mb-6 text-gray-700">
              スマートフォンや端末のブラウザでリアルタイムの混雑度を簡単に知ることができます。
              <br></br>
              来院前に混雑状況を知っているのと知らないのでは、
              患者様の安心感も違います。
            </p>
          </div>
          <div>
            <Image
              src="/images/Usecase1/use_case_UI640_330.svg" // Route of the image file
              height={330} // Desired size with correct aspect ratio
              width={640} // Desired size with correct aspect ratio
              alt="ミツシルのUI"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
