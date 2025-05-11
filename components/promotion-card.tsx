import Image from "next/image"
import Link from "next/link"

interface PromotionCardProps {
  image: string
  title: string
  bgColor: string
}

export function PromotionCard({ image, title, bgColor }: PromotionCardProps) {
  return (
    <Link href="#" className={`${bgColor} rounded-lg p-4 flex flex-col items-center justify-center text-center h-40`}>
      <Image src={image || "/placeholder.svg"} width={100} height={100} alt={title} className="mb-2" />
      <h3 className="text-sm font-bold">{title}</h3>
    </Link>
  )
}

