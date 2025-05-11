import Image from "next/image"
import Link from "next/link"

const brands = [
  { id: 1, name: "Brand 1", logo: "/placeholder.svg?height=40&width=80" },
  { id: 2, name: "Brand 2", logo: "/placeholder.svg?height=40&width=80" },
  { id: 3, name: "Brand 3", logo: "/placeholder.svg?height=40&width=80" },
  { id: 4, name: "Brand 4", logo: "/placeholder.svg?height=40&width=80" },
  { id: 5, name: "Brand 5", logo: "/placeholder.svg?height=40&width=80" },
  { id: 6, name: "Brand 6", logo: "/placeholder.svg?height=40&width=80" },
  { id: 7, name: "Brand 7", logo: "/placeholder.svg?height=40&width=80" },
]

export function BrandLogos() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-bold mb-4">برندهای محبوب</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {brands.map((brand) => (
          <Link href="#" key={brand.id} className="flex items-center justify-center">
            <Image
              src={brand.logo || "/placeholder.svg"}
              width={80}
              height={40}
              alt={brand.name}
              className="object-contain grayscale hover:grayscale-0 transition-all"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

