import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  title: string
  price: string
  discount: string
  image: string
}

interface ProductRowProps {
  title: string
  products: Product[]
}

export function ProductRow({ title, products }: ProductRowProps) {
  return (
    <Card>
      <div className="p-4 border-b">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {products.map((product) => (
            <Link href="#" key={product.id} className="group">
              <div className="bg-white rounded-lg p-2 transition-all group-hover:shadow-md">
                <div className="relative mb-2">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    width={150}
                    height={150}
                    alt={product.title}
                    className="mx-auto"
                  />
                  <Badge className="absolute top-0 right-0 bg-red-500">{product.discount}</Badge>
                </div>
                <h3 className="text-sm mb-1 truncate">{product.title}</h3>
                <p className="text-red-500 font-bold text-sm">{product.price} تومان</p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

