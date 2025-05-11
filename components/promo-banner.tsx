import Image from "next/image"
import Link from "next/link"

interface PromoBannerProps {
  bgColor: string
  title: string
  image: string
}

export function PromoBanner({ bgColor, title, image }: PromoBannerProps) {
  return (
    <Link href="#" className={`${bgColor} rounded-lg p-4 flex items-center justify-between`}>
      <div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm">تا ۳۰٪ تخفیف</p>
      </div>
      <Image src={image || "/placeholder.svg"} width={120} height={120} alt={title} className="object-contain" />
    </Link>
  )
}

