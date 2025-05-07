import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Leaf } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = productCategories.find((cat) => cat.slug === params.category)

  if (!category) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Category not found</h1>
        <p className="mb-8">The category you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Link>
        </Button>
      </div>
    )
  }

  const categoryProducts = allProducts.filter((product) => product.category === params.category)

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container">
        <div className="mb-8">
          <Link href="/products" className="text-green-700 hover:text-green-900 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Products
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="h-64 relative">
            <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end">
              <div className="p-8">
                <h1 className="text-4xl font-bold text-white mb-2">{category.name}</h1>
                <p className="text-green-100 max-w-2xl">{category.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <Link
              key={product.name}
              href={`/products/${product.category}/${product.slug}`}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="h-56 relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Leaf className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="text-xl font-semibold text-green-800">{product.name}</h3>
                </div>
                <p className="text-sm text-gray-500 italic mb-3">{product.scientific}</p>
                <p className="text-green-600 font-medium mt-2">View Details →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// Data
const productCategories = [
  {
    name: "Organic Herbs",
    slug: "herbs",
    image: "/images/herbs-category.jpg",
    description: "Fresh and dried herbs with medicinal properties and therapeutic benefits.",
  },
  {
    name: "Organic Spices",
    slug: "spices",
    image: "/images/spices-category.jpg",
    description: "Premium quality spices for flavor and numerous health benefits.",
  },
  {
    name: "Medicinal Seeds",
    slug: "seeds",
    image: "/images/seeds-category.jpg",
    description: "Nutrient-rich seeds with therapeutic properties and health benefits.",
  },
  {
    name: "Medicinal Flowers",
    slug: "flowers",
    image: "/images/flowers-category.jpg",
    description: "Dried flowers with various health benefits and therapeutic properties.",
  },
]

const allProducts = [
  {
    name: "Tulsi Leaves",
    slug: "tulsi-leaves",
    scientific: "Ocimum Sactum",
    category: "herbs",
    image: "/images/tulsi.png",
  },
  {
    name: "Ashwagandha",
    slug: "ashwagandha",
    scientific: "Withania somnifera",
    category: "herbs",
    image: "/images/ashwagandha.jpg",
  },
  {
    name: "Stevia Leaves",
    slug: "stevia-leaves",
    scientific: "Stevia rebaudiana",
    category: "herbs",
    image: "/images/stevia.png",
  },
  {
    name: "Lemon Grass",
    slug: "lemon-grass",
    scientific: "Cymbopogon",
    category: "herbs",
    image: "/images/lemongrass.png",
  },
  {
    name: "Giloy/Guduchi",
    slug: "giloy",
    scientific: "Tinospora cordifolia",
    category: "herbs",
    image: "/images/giloy.jpg",
  },
  {
    name: "Brahmi/Gotu kola",
    slug: "brahmi",
    scientific: "Centella asiatica",
    category: "herbs",
    image: "/images/brahmi.jpg",
  },
  {
    name: "Turmeric",
    slug: "turmeric",
    scientific: "Curcuma longa",
    category: "spices",
    image: "/images/turmeric.jpg",
  },
  {
    name: "Cumin Seeds",
    slug: "cumin-seeds",
    scientific: "Cuminum cyminum",
    category: "spices",
    image: "/images/cumin.png",
  },
  {
    name: "Black Pepper",
    slug: "black-pepper",
    scientific: "Piper nigrum",
    category: "spices",
    image: "/images/black-pepper.jpg",
  },
  {
    name: "Cinnamon",
    slug: "cinnamon",
    scientific: "Cinnamomum verum",
    category: "spices",
    image: "/images/cinnamon.png",
  },
  {
    name: "Cardamom",
    slug: "cardamom",
    scientific: "Elettaria cardamomum",
    category: "spices",
    image: "/images/cardamom.jpeg",
  },
  {
    name: "Chia Seeds",
    slug: "chia-seeds",
    scientific: "Salvia hispanica",
    category: "seeds",
    image: "/images/chia.jpeg",
  },
  {
    name: "Basil/Sabja Seeds",
    slug: "sabja-seeds",
    scientific: "Ocimum basilicum",
    category: "seeds",
    image: "/images/sabja.jpg",
  },
  {
    name: "Flax Seeds",
    slug: "flax-seeds",
    scientific: "Linum usitatissimum",
    category: "seeds",
    image: "/images/flax-seed.jpg",
  },
  {
    name: "Pumpkin Seeds",
    slug: "pumpkin-seeds",
    scientific: "Cucurbita pepo",
    category: "seeds",
    image: "/images/pumpkin-seeds.jpg",
  },
  {
    name: "Hibiscus",
    slug: "hibiscus",
    scientific: "Hibiscus sabdariffa",
    category: "flowers",
    image: "/images/hibiscus.png",
  },
  {
    name: "Rose Petals",
    slug: "rose-petals",
    scientific: "Rosa Centifolia",
    category: "flowers",
    image: "/images/rose.jpg",
  },
  {
    name: "Chamomile",
    slug: "chamomile",
    scientific: "Matricaria chamomilla",
    category: "flowers",
    image: "/images/chamomile.jpg",
  },
  {
    name: "Calendula",
    slug: "calendula",
    scientific: "Calendula officinalis",
    category: "flowers",
    image: "/images/calendula.jpg",
  },
]
