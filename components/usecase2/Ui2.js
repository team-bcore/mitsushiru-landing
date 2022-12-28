import Image from "next/image";

export default function Ui2() {
  return (
    <div className="bg-dots-pattern bg-no-repeat">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <h5 className="mb-4 text-4xl font-noto leading-none text-gray-800">
            いつでも、どこでも、

              <br className="hidden md:block" />
              {" "}
              <span className="inline-block text-deep-purple-accent-400">
              オフィスの在籍数を把握
              </span>
            </h5>
            <hr className="mt-5 border-gray-300" />
            <p className="font-ud pt-8 mb-6 text-gray-700">
            世の中の状況にあわせて、企業側が設定したフロア内最大人数に対して、現在の混雑度を分かりやすいイラスト表示で確認することができます。
            </p>
          </div>
          <div>
            <Image
              src="/images/Usecase2/UI-sample.png" // Route of the image file
              height={290} // Desired size with correct aspect ratio
              width={802} // Desired size with correct aspect ratio
              alt="ミツシルのUI"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
