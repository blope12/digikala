import Image from "next/image"
import { Button } from "@/components/ui/button"
import s from"../public/S.jpg"
export function HeroSection() {
  return (
    <div className="relative bg-gray-200 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-transparent z-10"></div>
      <div className="relative z-20 flex flex-col md:flex-row items-center">
        <div className="p-6 md:p-10 md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">تویوتا RAV4</h1>
          <p className="text-sm md:text-base mb-6">خودرویی مناسب برای خانواده با امکانات فوق العاده</p>
          <div className="bg-red-500 text-white inline-block px-4 py-2 rounded-lg mb-2">
            <span className="font-bold">۲۰٪ تخفیف</span>
          </div>
          <div className="block mb-4">
            <span className="text-red-500 font-bold">فقط تا پایان هفته</span>
          </div>
          <Button className="bg-red-500 hover:bg-red-600 text-white">مشاهده جزئیات</Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src={s}
            width={500}
            height={300}
            alt="Toyota RAV4"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

