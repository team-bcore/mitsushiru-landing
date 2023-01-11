import Image from "next/image";

export default function Ask() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary"></div>

          <h5 className="mb-4 text-4xl font-noto leading-none">
            ミツシルをもっと知りたい方へ
            <br className="hidden md:block" />{" "}
            <span className="inline-block text-deep-purple-accent-400"></span>
          </h5>
          <p className="font-ud mb-6 text-gray-700">
            ご不明な点はお気軽にお問い合わせください。さらに詳しくご説明いたします。
          </p>
          <hr className="mb-5 border-gray-300" />
        </div>
        <div className="rounded shadow-lg">
          <Image
            src="/images/Ask/ask_image.svg" // Route of the image file
            height={390} // Desired size with correct aspect ratio
            width={640} // Desired size with correct aspect ratio
            alt="お気軽にお問い合わせください"
          />
        </div>
      </div>
    </div>
  );
}
