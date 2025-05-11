import Image from "next/image"
import Link from "next/link"
import s from"../public/S.jpg"

interface Category {
  id: number
  title: string
  image: string
}

interface ProductGridProps {
  categories: Category[]
}

export function ProductGrid({ categories }: ProductGridProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category) => (
          <Link href="#" key={category.id} className="flex flex-col items-center justify-center text-center">
            <Image
              src={category.image || "/placeholder.svg"}
              width={80}
              height={80}
              alt={category.title}
              className="mb-2"
            />
            <span className="text-xs">{category.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

