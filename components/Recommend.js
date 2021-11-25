import Image from "next/image";

export default function Recommend() {
    return(

        <div className="bg-primary pt-16 pb-16">
            <div className="px-2">
                <p className="text-2xl text-center font-bold md:text-3xl">
                    🟨 このような場所におすすめします
                </p>
                <p className="text-center pt-12 md:mx-24">
                病院、大浴場やスポーツジム、飲食店など、不特定多数が集まる、入口と出口が明確な場所が適しています。
                </p>
                <div className="grid grid-cols-1 justify-items-center pt-9 md:grid md:grid-cols-6">
                 <div className="md:col-start-2 md:col-span-4 lg:px-16">  
                <Image
                        src="/images/Recommend/recommend-image.svg" // Route of the image file
                        height={367} // Desired size with correct aspect ratio
                        width={640} // Desired size with correct aspect ratio
                        alt="このような場所におすすめします"
                    />
                </div>
                </div>
            </div>
        </div>
    );
}