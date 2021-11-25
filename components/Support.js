import Image from "next/image";

export default function Features() {
    return (
    
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="">
                <p className="p-8 text-2xl text-center font-bold md:text-3xl ">
                    🟨 安心のサポート体制
                </p>
            </div>         
        <div className="grid gap-8 row-gap-5 md:grid-cols-2">
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm">
            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
              <div className="mb-6 mr-6 lg:mb-0">
                <div className="flex items-center justify-center">
                <Image
                        src="/images/Support/shikatu.svg" // Route of the image file
                        height={251} // Desired size with correct aspect ratio
                        width={351} // Desired size with correct aspect ratio
                        alt="密を作らない安心できる空間の提供"
                    />
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                  カメラの管理は、私たちビーコアにお任せください
                  </h6>
                  <p className="mb-2 text-sm text-gray-900">
                  カメラは、パナソニックの提供する遠隔監視プラットフォームで管理されているので、迅速にトラブル対応します。<br></br>ほとんど全ての維持管理はビーコアが遠隔で行います。
                  </p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm ">
            
            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
              <div className="mb-6 mr-6 lg:mb-0">
                <div className="flex items-center justify-center ">
                <Image
                        src="/images/Support/privacy-mark.png" // Route of the image file
                        height={251} // Desired size with correct aspect ratio
                        width={351} // Desired size with correct aspect ratio
                        alt="プライバシーマーク"
                    />
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                  Pマークを取得しています
                  </h6>
                  <p className="mb-2 text-sm text-gray-900">
                  プライバシーマークは、一定の要件を満たした事業者などの団体に対し、一般財団法人日本情報経済社会推進協会（JIDEC）が使用を許諾する登録商標です。
                  個人情報を適切に取り扱っていると評価された事業者だけが使用できます。
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }