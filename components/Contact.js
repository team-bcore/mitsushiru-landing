import { useRouter } from "next/router";
import React, { useState } from "react";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    お名前: "",
    会社名: "",
    email: "",
    お問い合わせ内容: "",
    ご相談内容: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formState.お名前) newErrors.お名前 = "お名前は必須です";
    if (!formState.email) {
      newErrors.email = "メールアドレスは必須です";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }
    if (!formState.お問い合わせ内容 || formState.お問い合わせ内容 === "選択してください") {
      newErrors.お問い合わせ内容 = "お問い合わせ内容を選択してください";
    }
    if (!isPrivacyAccepted) {
      newErrors.privacy = "プライバシーポリシーへの同意が必要です";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    // エラーをクリア
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // バリデーション
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const form = e.target;
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...formState,
        }),
      });
      
      // 成功時
      router.push(form.getAttribute("action"));
    } catch (error) {
      console.error("Form submission error:", error);
      alert("送信中にエラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const ErrorMessage = ({ message }) => (
    message ? <p className="text-red-500 text-sm mt-1">{message}</p> : null
  );

  return (
    <form
      className="container px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      method="POST"
      name="contact-form"
      action="/thank"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don't fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>

      <div id="contact-us"></div>
      <div className="py-12 mx-auto">
        <p className="font-ud text-3xl font-bold text-center md:text-4xl leading-none tracking-tight text-gray-900 sm:text-4xl">
          お申し込み・お問い合わせ
        </p>
        <p className="font-ud mt-2 pt-8 text-lg text-gray-800 md:text-center">
          ミツシルのお申し込み・お問い合わせは、こちらのコンタクトフォームから承っております。
          <br />
          改めてメールにてご連絡をさせていただきます。
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid md:grid-cols-8">
          <div className="md:col-start-3 col-span-4 space-y-6">
            {/* お名前 */}
            <label className="block">
              <span className="font-ud text-gray-800">
                お名前 <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                  errors.お名前 ? "border-red-500" : ""
                }`}
                name="お名前"
                value={formState.お名前}
                placeholder="密知　太郎"
                onChange={handleChange}
              />
              <ErrorMessage message={errors.お名前} />
            </label>

            {/* 会社名 */}
            <label className="block">
              <span className="font-ud text-gray-800">会社名</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="会社名"
                value={formState.会社名}
                placeholder="〇〇株式会社"
                onChange={handleChange}
              />
            </label>

            {/* メールアドレス */}
            <label className="block">
              <span className="font-ud text-gray-800">
                メールアドレス <span className="text-red-500">*</span>
              </span>
              <input
                type="email"
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                  errors.email ? "border-red-500" : ""
                }`}
                name="email"
                value={formState.email}
                placeholder="example@example.com"
                onChange={handleChange}
              />
              <ErrorMessage message={errors.email} />
            </label>

            {/* お問い合わせ内容 */}
            <label className="block">
              <span className="font-ud text-gray-800">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </span>
              <select
                className={`block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                  errors.お問い合わせ内容 ? "border-red-500" : ""
                }`}
                name="お問い合わせ内容"
                value={formState.お問い合わせ内容}
                onChange={handleChange}
              >
                <option>選択してください</option>
                <option>機材購入プランを申し込みたい</option>
                <option>機材レンタルプランを申し込みたい</option>
                <option>その他のお問い合わせ</option>
              </select>
              <ErrorMessage message={errors.お問い合わせ内容} />
            </label>

            {/* ご相談内容 */}
            <label className="block">
              <span className="font-ud text-gray-800">ご相談内容・その他</span>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="6"
                name="ご相談内容"
                value={formState.ご相談内容}
                onChange={handleChange}
              />
            </label>

            {/* プライバシーポリシー */}
            <div className="font-ud">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={isPrivacyAccepted}
                  onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <span className="ml-2">
                  弊社の
                  <a
                    href="https://www.bcore.biz/privacy-policy"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    プライバシーポリシー
                  </a>
                  に同意します
                </span>
              </label>
              <ErrorMessage message={errors.privacy} />
            </div>

            {/* 送信ボタン */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 font-ud text-white rounded-md transition duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {isSubmitting ? "送信中..." : "送信"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}