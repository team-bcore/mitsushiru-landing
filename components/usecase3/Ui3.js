import Image from "next/image";

export default function Ui3() {
  return (
    <div className="bg-dots-pattern bg-no-repeat">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <h5 className="mb-4 text-4xl font-extrabold leading-none text-gray-800">
            いつでも、どこでも、

              <br className="hidden md:block" />
              {" "}
              <span className="inline-block text-deep-purple-accent-400">
              浴場内の混雑度を把握できます
              </span>
            </h5>
            <hr className="mt-5 border-gray-300" />
            <p className="pt-8 mb-6 text-gray-700">
            リアルタイムの浴場の混雑度を<br></br>分かりやすいイラスト表⽰で確認することができます。
            </p>
          </div>
          <div>
            <Image
              src="/images/Usecase3/UI_usecase_3.png" // Route of the image file
              height={400} // Desired size with correct aspect ratio
              width={660} // Desired size with correct aspect ratio
              alt="ミツシルのUI"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
