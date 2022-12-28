import Image from "next/image";

export default function Merit_new() {
    return (
        <div className="bg-merit-bg bg-cover opacity-0.5">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-base font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-primary">
                            Merit
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">ミツシルを導入するメリット</span>
                        </span>{' '}

                    </h2>
                </div>
                <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
                    <div className="max-w-md sm:mx-auto sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary sm:mx-auto sm:w-24 sm:h-24">
                        </div>
                        <h6 className="mb-6 text-3xl font-noto">密を作らない安心できる<br></br>空間の提供</h6>
                        <p className="font-ud mb-3 text-base text-gray-900">
                            訪問前に「どうせ混んでいるから 行かない」・施設を訪問後に
                            「混んでいたから帰ろう」という利用者
                            心理により、機会損失が日々発生しています。
                            ミツシルで、利用者が事前に密を確認することで、安心して来訪いただけます。
                        </p>
                    </div>
                    <div className="max-w-md sm:mx-auto sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary sm:mx-auto sm:w-24 sm:h-24">
                        </div>
                        <h6 className="mb-5 text-3xl font-bold">現場スタッフの<br></br>労力を軽減</h6>
                        <p className="font-ud mb-3 text-base text-gray-900">
                            混雑状況のお問い合わせのたびに、スタッフが密を都度確認する負担は、本来業務を圧迫しています。<br></br>
                            ミツシルなら、スタッフの代わりに24時間見守り、利用者に混雑
                            情報をお届けします。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}