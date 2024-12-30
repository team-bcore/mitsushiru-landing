import Link from "next/link";

export default function Thank() {
  return (
    (<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary"></div>

        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Thank you!
        </h2>
        <p className="text-base text-gray-700 md:text-lg sm:px-4">
          メッセージは送信されました。折り返しメールにてご連絡差し上げます。
        </p>
        <hr className="w-full my-8 border-gray-300" />
        <Link href="/">
          戻る
        </Link>
      </div>
    </div>)
  );
}
