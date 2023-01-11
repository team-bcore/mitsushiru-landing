import { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export default function Faq() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="font-ud inline-block px-3 py-px mb-4 text-base font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              密集度モニターシステム　密 ミツシルの導入に関する
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-green-600 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="232db96b-4aa2-422f-9086-5a77996d1df1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative"></span>
            </span>{" "}
            よくあるご質問
          </h2>
          <p className="font-ud text-base text-gray-700 md:text-lg ">
            ミツシルについて、お客様からよくいただくご質問とご回答をまとめております。
          </p>
        </div>
        <div className="font-ud space-y-4">
          <Item title="出入口が複数ある場合でも、導入できますか？">
            可能です。室内の人数をシンプルに表示できます。オプションで各扉（カメラ）ごとの入退室履歴をCSV形式でダウンロードも可能です。
          </Item>
          <Item title="利用開始までどのくらいの日数がかかりますか?">
            お申し込みから、約2週間〜1か月でご利用開始できます。
          </Item>
          <Item title="カメラの設置を自分でできるか不安です。">
            事前にお客様と、設置イメージ等をヒアリング・共有し、設置マニュアル・機器一式を送付いたします。
            <br></br>
            <br></br>
            ①カメラを指定位置に設置<br></br>
            ②ミツシルBOX(カメラ以外の機材一式をコンパクトにまとめたボックス）を目立たない場所に設置し、AC電源接続
            <br></br>
            ③カメラとミツシルBOXをLANケーブルで接続<br></br>
            ④QRコードで専用サイトにアクセスして動作確認<br></br>
            <br></br>
            以上4ステップで完了です。
          </Item>
          <Item title="設置前に必要な資料はどのようなものでしょうか？">
            対象となる設置場所の図面（簡易図面でもOK)があれば、スムーズにご回答可能です。
          </Item>
          <Item title="通信はどのような形ですか？">
            通信料込のプランが標準となります。お客様のLANを利用する場合も対応は可能です。
          </Item>
        </div>
      </div>
    </div>
  );
}
