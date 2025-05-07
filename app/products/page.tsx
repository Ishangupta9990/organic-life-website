import Image from "next/image"
import Link from "next/link"
import { Leaf } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of organic products, carefully sourced and processed to maintain their
            natural goodness.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {productCategories.map((category) => (
            <Link
              key={category.name}
              href={`/products/${category.slug}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-2">
                    <Leaf className="w-5 h-5 text-green-600 mr-2" />
                    <h2 className="text-2xl font-semibold text-green-800">{category.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {category.items.slice(0, 6).map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-green-600 mt-4 font-medium">View all {category.items.length} products →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All Products List */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">All Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <Link
                key={product.name}
                href={`/products/${product.category}/${product.slug}`}
                className="group p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all"
              >
                <div className="h-40 relative mb-3 overflow-hidden rounded-md">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-green-800 group-hover:text-green-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 italic">{product.scientific}</p>
              </Link>
            ))}
          </div>
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
    items: [
      "Tulsi Leaves",
      "Ashwagandha",
      "Stevia Leaves",
      "Lemon Grass",
      "Giloy/Guduchi",
      "Brahmi/Gotu kola",
      "Bacopa monnieri",
      "Moringa Leaves",
      "Senna Leaves",
      "Neem Leaves",
      "Anantamul",
      "Akarkara Roots",
    ],
  },
  {
    name: "Organic Spices",
    slug: "spices",
    image: "/images/spices-category.jpg",
    description: "Premium quality spices for flavor and numerous health benefits.",
    items: [
      "Cumin Seeds",
      "Turmeric",
      "Dried Ginger",
      "Black Pepper",
      "Cinnamon",
      "Cardamom",
      "Cloves",
      "Nutmeg",
      "Coriander Seeds",
      "Fenugreek Seeds",
      "Mustard Seeds",
      "Star Anise",
    ],
  },
  {
    name: "Medicinal Seeds",
    slug: "seeds",
    image: "/images/seeds-category.jpg",
    description: "Nutrient-rich seeds with therapeutic properties and health benefits.",
    items: [
      "Chia Seeds",
      "Basil/Sabja/Tukmaria Seeds",
      "Quinoa",
      "Flax Seeds",
      "Pumpkin Seeds",
      "Sunflower Seeds",
      "Sesame Seeds",
      "Hemp Seeds",
    ],
  },
  {
    name: "Medicinal Flowers",
    slug: "flowers",
    image: "/images/flowers-category.jpg",
    description: "Dried flowers with various health benefits and therapeutic properties.",
    items: [
      "Hibiscus sabdariffa",
      "Safflower",
      "Chamomile",
      "Rose Petals",
      "Butterfly Pea/Aparajita",
      "Blue Corn Flower",
      "Calendula Flower",
      "Marigold Flower",
    ],
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
