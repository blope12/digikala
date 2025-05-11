import Image from "next/image"
import Link from "next/link"

const categories = [
  { id: 1, name: "موبایل", icon: "/placeholder.svg?height=60&width=60" },
  { id: 2, name: "لپ تاپ", icon: "/placeholder.svg?height=60&width=60" },
  { id: 3, name: "لوازم خانگی", icon: "/placeholder.svg?height=60&width=60" },
  { id: 4, name: "زیبایی و سلامت", icon: "/placeholder.svg?height=60&width=60" },
  { id: 5, name: "مد و پوشاک", icon: "/placeholder.svg?height=60&width=60" },
  { id: 6, name: "کودک و نوزاد", icon: "/placeholder.svg?height=60&width=60" },
  { id: 7, name: "سوپرمارکت", icon: "/placeholder.svg?height=60&width=60" },
  { id: 8, name: "کتاب و لوازم تحریر", icon: "/placeholder.svg?height=60&width=60" },
  { id: 9, name: "اسباب بازی", icon: "/placeholder.svg?height=60&width=60" },
  { id: 10, name: "ورزش و سفر", icon: "/placeholder.svg?height=60&width=60" },
  { id: 11, name: "خودرو و موتورسیکلت", icon: "/placeholder.svg?height=60&width=60" },
  { id: 12, name: "ابزار", icon: "/placeholder.svg?height=60&width=60" },
]

export function CategoryIcons() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
        {categories.map((category) => (
          <Link href="#" key={category.id} className="flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2 overflow-hidden">
              <Image
                src={category.icon || "/placeholder.svg"}
                width={60}
                height={60}
                alt={category.name}
                className="object-cover"
              />
            </div>
            <span className="text-xs md:text-sm">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

