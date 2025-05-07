import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { Playfair_Display, Montserrat } from "next/font/google"

import { Button } from "@/components/ui/button"
import { Leaf, Shield, Sprout } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen ${montserrat.variable}`}>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <Image src="/images/hero-field.jpeg" alt="Green field landscape" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 to-green-800/40 z-10" />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="relative h-40 w-40 mb-4 shine-container overflow-hidden">
              <Image src="/images/new-logo.png" alt="Organic Life Enterprises Logo" fill className="object-contain" />
              <div className="shine-effect"></div>
            </div>
            <h1 className={`${playfair.className} text-5xl font-bold tracking-tight`}>
              <span className="block text-5xl">ORGANIC</span>
              <span className="block text-5xl">LIFE ENTERPRISES</span>
            </h1>
          </div>
          <div className="text-xl font-medium mb-8 italic shine-container overflow-hidden relative">
  <div className="shine-effect"></div>
  <p>Good for nature Good for You</p>
</div>
          
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 text-lg">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+91-8400640070</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+91-9555930712</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 text-lg mt-3">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>aryangupta@live.com</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>aryan@organiclifenow.in</span>
            </div>
          </div>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="#products">
                Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className={`${playfair.className} text-3xl font-bold text-green-800 mb-6`}>
                Nature's Bounty, Sustainably Harvested
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                At Organic Life Enterprises, we believe in the power of nature to heal, nourish, and sustain. Our
                commitment to organic farming practices ensures that every product we offer is as good for the earth as
                it is for you.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                From our carefully cultivated herbs to our ethically sourced spices, each item in our catalog represents
                our dedication to quality, sustainability, and traditional wisdom.
              </p>
              <Button asChild className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                <Link href="/about">Learn About Our Journey</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/hero-field.jpeg" alt="Organic farming" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section id="products" className="py-16 bg-green-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className={`${playfair.className} text-4xl font-bold text-green-800 mb-4`}>Our Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our wide range of organic products, carefully sourced and processed to maintain their natural
              goodness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category) => (
              <Link
                key={category.name}
                href={`/products/${category.slug}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Leaf className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className={`${playfair.className} text-xl font-semibold text-green-800`}>{category.name}</h3>
                  </div>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className={`${playfair.className} text-4xl font-bold text-green-800 mb-4`}>Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our most popular organic products, known for their exceptional quality and benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.name} className="bg-green-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-56 overflow-hidden relative bg-gradient-to-b from-green-100 to-white">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`${playfair.className} text-xl font-semibold text-green-800 mb-1`}>{product.name}</h3>
                  <p className="text-sm text-emerald-600 italic mb-3">{product.scientific}</p>
                  <p className="text-gray-600 line-clamp-3">{product.description}</p>
                  <Button asChild className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                    <Link href={`/products/${product.category}/${product.slug}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-emerald-50 to-green-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className={`${playfair.className} text-4xl font-bold text-emerald-800 mb-4`}>Why Choose Organic?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our organic products offer numerous benefits for your health and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className={`${playfair.className} text-xl font-semibold text-emerald-800 mb-3`}>{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-100">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-emerald-700 text-white p-8 flex flex-col justify-center">
                <h2 className={`${playfair.className} text-3xl font-bold mb-6`}>Contact Us</h2>
                <p className="mb-8">Feel free to reach out to us for any queries about our organic products.</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>+91-8400640070</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>+91-9555930712</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3" />
                    <span>aryangupta@live.com</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3" />
                    <span>aryan@organiclifenow.in</span>
                  </div>
                  <div>
                    <p className="mt-4">ORGANIC LIFE ENTERPRISES</p>
                    <p>FATEHPUR, U.P-212601</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className={`${playfair.className} text-2xl font-semibold text-emerald-800 mb-6`}>
                  Send us a message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Data
const productCategories = [
  {
    name: "Organic Herbs",
    slug: "herbs",
    image: "/images/herbs-category.jpg",
    description: "Fresh and dried herbs with medicinal properties.",
  },
  {
    name: "Organic Spices",
    slug: "spices",
    image: "/images/spices-category.jpg",
    description: "Premium quality spices for flavor and health benefits.",
  },
  {
    name: "Medicinal Seeds",
    slug: "seeds",
    image: "/images/seeds-category.jpg",
    description: "Nutrient-rich seeds with therapeutic properties.",
  },
  {
    name: "Medicinal Flowers",
    slug: "flowers",
    image: "/images/flowers-category.jpg",
    description: "Dried flowers with various health benefits.",
  },
]

const featuredProducts = [
  {
    name: "Tulsi Leaves",
    slug: "tulsi-leaves",
    scientific: "Ocimum Sactum",
    category: "herbs",
    image: "/images/tulsi.png",
    description:
      "Ocimum tenuiflorum, commonly known as holy basil, tulsi or tulasi, is an aromatic perennial plant. It is also called queen of herbs, Due to its holistic properties tulsi is widely used in many ayurvedic and Naturopathic medicines.",
  },
  {
    name: "Hibiscus",
    slug: "hibiscus",
    scientific: "Hibiscus sabdariffa",
    category: "flowers",
    image: "/images/hibiscus.png",
    description:
      "Although a perennial, roselle is usually grown as an annual and propagated from seed. It grows best in loamy well-drained soil, mainly in tropical climates. The dried flowers are used to make medicine and herbal teas.",
  },
  {
    name: "Stevia Leaves",
    slug: "stevia-leaves",
    scientific: "Stevia rebaudiana",
    category: "herbs",
    image: "/images/stevia.png",
    description:
      "Stevia is often touted as a safe and healthy sugar substitute that can sweeten up foods without the negative health effects linked to refined sugar. It's also associated with several impressive health benefits, such as reduced calorie intake, blood sugar levels, and risk of cavities.",
  },
]

const benefits = [
  {
    title: "100% Natural",
    icon: Leaf,
    description:
      "Our products are completely natural, free from synthetic chemicals, pesticides, and artificial additives.",
  },
  {
    title: "Health Benefits",
    icon: Shield,
    description:
      "Organic products are rich in nutrients, antioxidants, and beneficial compounds that support overall health and wellbeing.",
  },
  {
    title: "Environmentally Friendly",
    icon: Sprout,
    description:
      "Our sustainable farming practices protect biodiversity, conserve water, and maintain soil health for future generations.",
  },
]
