export default function Contac() {
    return (
        <form name="contact" method="POST" data-netlify="true" action="thank" data-netlify-honeypot="bot-field">
            <div id="contact-us">
                <p className="text-3xl font-bold text-center md:text-4xl leading-none tracking-tight text-gray-900 sm:text-4xl">
                    🟨 CONTACT
                </p>
            </div>
            <div className="grid grid-cols-1 justify-items-center">
                <div className="py-8 px-2">
                    <p className="mt-2 text-lg text-gray-600 md:text-center">ミツシルのご利用申し込み、ご質問などはこちらのフォームから承ります。<br></br>改めてメールにてご連絡をさせていただきます。</p>
                    <div className="mt-4 max-w-md mx-auto">
                        <div className="grid grid-cols-1 gap-6 md:grid md:grid-cols-6">
                            <div className="pt-8 block md:col-start-1 col-span-6">
                                <span className="text-gray-700">会社名</span>
                                <input type="text" class="mt-1 block w-full" placeholder="" />
                            </div>
                            <div className="pt-8 block md:col-start-1 col-span-6">
                                <span className="text-gray-700">お名前</span>
                                <input type="text" class="mt-1 block w-full" placeholder="" />
                            </div>
                            <div className="pt-8 block md:col-start-1 col-span-6">
                                <span className="text-gray-700">Email アドレス</span>
                                <input type="email" class="mt-1 block w-full" placeholder="john@example.com" />
                            </div>
                            <div className="pt-8 block md:col-start-1 col-span-6">
                                <span className="text-gray-700">お問い合わせ内容</span>
                                <select className="block w-full mt-1">
                                    <option>機材購入プランを申し込みたい</option>
                                    <option>機材レンタルプランを申し込みたい</option>
                                    <option>その他のお問い合わせ</option>
                                </select>
                            </div>
                            <div className="pt-8 block md:col-start-1 col-span-6">
                                <span className="text-gray-700">ご相談内容・その他</span>
                                <textarea className="mt-1 block w-full" rows="6"></textarea>
                            </div>
                            <div className="block md:col-start-1 col-span-6 text-center">
                                <div class="mt-2">
                                    <div>
                                        <div className="inline-flex items-center">
                                            <input type="checkbox" unchecked />
                                            <span class="ml-2">
                                                弊社の
                                                <a
                                                    href="https://www.colorbit.jp/privacy-policy"
                                                    className="text-blue-600 underline">
                                                    プライバシーポリシー
                                                </a>
                                                に同意します。</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8 block mx-auto md:col-start-3 col-span-2">
                                <button type="submit">
                                    <a

                                        className="bg-gray-800 inline-flex items-center w-full justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                                    >
                                        送信
                                    </a>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}