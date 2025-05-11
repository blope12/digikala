import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoryIcons } from "@/components/category-icons"
import { ProductRow } from "@/components/product-row"
import { PromoBanner } from "@/components/promo-banner"
import { BrandLogos } from "@/components/brand-logos"
import { ProductGrid } from "@/components/product-grid"
import { PromotionCard } from "@/components/promotion-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-10">
      <Header />

      <div className="container mx-auto px-4 space-y-6 mt-4">
        <HeroSection />

        <CategoryIcons />

        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="col-span-1 md:col-span-5">
            <ProductRow
              title="پیشنهادات ویژه"
              products={[
                {
                  id: 1,
                  title: "شامپو",
                  price: "۱۲۰,۰۰۰",
                  discount: "۲۰٪",
                  image: "/placeholder.svg?height=150&width=150",
                },
                {
                  id: 2,
                  title: "پوشک",
                  price: "۲۵۰,۰۰۰",
                  discount: "۱۵٪",
                  image: "/placeholder.svg?height=150&width=150",
                },
                {
                  id: 3,
                  title: "مایع ظرفشویی",
                  price: "۸۰,۰۰۰",
                  discount: "۱۰٪",
                  image: "/placeholder.svg?height=150&width=150",
                },
                {
                  id: 4,
                  title: "شوینده",
                  price: "۹۵,۰۰۰",
                  discount: "۲۵٪",
                  image: "/placeholder.svg?height=150&width=150",
                },
                {
                  id: 5,
                  title: "مایع دستشویی",
                  price: "۷۵,۰۰۰",
                  discount: "۳۰٪",
                  image: "/placeholder.svg?height=150&width=150",
                },
              ]}
            />
          </div>
          <div className="col-span-1 md:col-span-2 bg-red-100 rounded-lg flex flex-col items-center justify-center p-4 text-center">
            <div className="text-red-600 font-bold text-lg mb-2">پیشنهاد شگفت انگیز</div>
            <div className="text-red-600 font-bold text-lg mb-4">تخفیف های ویژه</div>
            <Image
              src="/placeholder.svg?height=80&width=80"
              width={80}
              height={80}
              alt="Special offer"
              className="mb-4"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">مشاهده همه</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PromoBanner bgColor="bg-purple-100" title="محصولات زیبایی" image="/placeholder.svg?height=120&width=120" />
          <PromoBanner bgColor="bg-yellow-100" title="محصولات خانگی" image="/placeholder.svg?height=120&width=120" />
          <PromoBanner bgColor="bg-green-100" title="محصولات بهداشتی" image="/placeholder.svg?height=120&width=120" />
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">محصولات پرفروش</h2>
          <Link href="#" className="text-green-600 text-sm">
            مشاهده همه
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <PromotionCard image="/placeholder.svg?height=100&width=100" title="لوازم الکترونیکی" bgColor="bg-red-100" />
          <PromotionCard image="/placeholder.svg?height=100&width=100" title="محصولات شوینده" bgColor="bg-blue-100" />
          <PromotionCard image="/placeholder.svg?height=100&width=100" title="لوازم خانگی" bgColor="bg-green-100" />
          <PromotionCard image="/placeholder.svg?height=100&width=100" title="لوازم آرایشی" bgColor="bg-purple-100" />
          <PromotionCard image="/placeholder.svg?height=100&width=100" title="لوازم دیجیتال" bgColor="bg-yellow-100" />
        </div>

        <h2 className="text-lg font-bold">دسته بندی محصولات</h2>

        <ProductGrid
          categories={[
            { id: 1, title: "موبایل", image: "/placeholder.svg?height=80&width=80" },
            { id: 2, title: "لپ تاپ", image: "/placeholder.svg?height=80&width=80" },
            { id: 3, title: "ساعت هوشمند", image: "/placeholder.svg?height=80&width=80" },
            { id: 4, title: "هدفون", image: "/placeholder.svg?height=80&width=80" },
            { id: 5, title: "دوربین", image: "/placeholder.svg?height=80&width=80" },
            { id: 6, title: "کنسول بازی", image: "/placeholder.svg?height=80&width=80" },
            { id: 7, title: "لوازم خانگی", image: "/placeholder.svg?height=80&width=80" },
            { id: 8, title: "لوازم آشپزخانه", image: "/placeholder.svg?height=80&width=80" },
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-yellow-100 rounded-lg p-6 flex items-center">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">تخفیف ویژه</h3>
              <p className="text-sm mb-4">تا ۷۰٪ تخفیف محصولات منتخب</p>
              <button className="bg-white text-black px-4 py-1 rounded-lg text-sm">مشاهده</button>
            </div>
            <Image src="/placeholder.svg?height=120&width=120" width={120} height={120} alt="Special offer" />
          </div>
          <div className="bg-blue-100 rounded-lg p-6 flex items-center">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">محصولات کودک</h3>
              <p className="text-sm mb-4">تا ۲۰٪ تخفیف محصولات کودک</p>
              <button className="bg-white text-black px-4 py-1 rounded-lg text-sm">مشاهده</button>
            </div>
            <Image src="/placeholder.svg?height=120&width=120" width={120} height={120} alt="Kids products" />
          </div>
        </div>

        <BrandLogos />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black rounded-lg p-6 flex items-center">
            <div className="flex-1 text-white">
              <h3 className="text-lg font-bold mb-2">محصولات مراقبت شخصی</h3>
              <p className="text-sm mb-4">تا ۳۰٪ تخفیف محصولات منتخب</p>
              <button className="bg-white text-black px-4 py-1 rounded-lg text-sm">مشاهده</button>
            </div>
            <Image src="/placeholder.svg?height=120&width=120" width={120} height={120} alt="Personal care" />
          </div>
          <div className="bg-green-100 rounded-lg p-6 flex items-center">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">محصولات شوینده</h3>
              <p className="text-sm mb-4">تا ۱۵٪ تخفیف محصولات شوینده</p>
              <button className="bg-white text-black px-4 py-1 rounded-lg text-sm">مشاهده</button>
            </div>
            <Image src="/placeholder.svg?height=120&width=120" width={120} height={120} alt="Cleaning products" />
          </div>
        </div>

        <div className="bg-teal-100 rounded-lg p-6 flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">محصولات بهداشتی</h3>
            <p className="text-sm mb-4">تا ۵۰٪ تخفیف محصولات منتخب</p>
            <button className="bg-white text-black px-4 py-1 rounded-lg text-sm">مشاهده</button>
          </div>
          <Image src="/placeholder.svg?height=120&width=120" width={120} height={120} alt="Health products" />
        </div>

        <h2 className="text-lg font-bold">پرفروش ترین محصولات</h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-2 shadow-sm">
              <Image
                src="/placeholder.svg?height=100&width=100"
                width={100}
                height={100}
                alt={`Product ${i + 1}`}
                className="mx-auto mb-2"
              />
              <p className="text-xs text-center truncate">محصول {i + 1}</p>
              <p className="text-xs text-center text-red-500 font-bold">۱۲۰,۰۰۰ تومان</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

