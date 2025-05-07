import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Leaf, Download } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-800/50 z-10" />
        <Image src="/images/about.jpeg" alt="Organic farming landscape" fill className="object-cover" />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl">
            Organic Life Enterprises: Committed to providing premium organic products that are good for nature and good
            for you.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Organic Life Enterprises was founded with a simple yet powerful vision: to provide high-quality organic
                products that benefit both people and the planet. Our journey began with a deep appreciation for
                nature's bounty and the traditional wisdom of Ayurveda.
              </p>
              <p className="text-gray-700 mb-4">
                Based in Fatehpur, Uttar Pradesh, we work directly with local farmers who practice sustainable farming
                methods. This ensures that our products are not only of the highest quality but also support local
                communities and preserve traditional farming practices.
              </p>
              <p className="text-gray-700">
                Today, we offer a wide range of organic herbs, spices, seeds, and medicinal flowers, all carefully
                sourced and processed to maintain their natural goodness. Our commitment to quality and sustainability
                remains at the heart of everything we do.
              </p>
            </div>
            <div className="lg:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/about-2.jpeg" alt="Organic farm" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Download Section */}
      <section className="py-12 bg-emerald-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-emerald-700 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Product Catalog</h2>
                <p className="text-emerald-100 mb-6">
                  Explore our complete range of organic products in our downloadable catalog. Discover the benefits and
                  uses of our premium organic herbs, spices, seeds, and medicinal flowers.
                </p>
                <div className="flex items-center text-emerald-100 mb-4">
                  <Check className="w-5 h-5 mr-3 text-emerald-300" />
                  <span>Complete product listings</span>
                </div>
                <div className="flex items-center text-emerald-100 mb-4">
                  <Check className="w-5 h-5 mr-3 text-emerald-300" />
                  <span>Detailed product descriptions</span>
                </div>
                <div className="flex items-center text-emerald-100">
                  <Check className="w-5 h-5 mr-3 text-emerald-300" />
                  <span>High-quality product images</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col items-center justify-center">
                <div className="relative h-48 w-36 mb-6 shadow-md rounded-md overflow-hidden">
                  <Image src="/images/catalog-cover.jpg" alt="Product Catalog Cover" fill className="object-cover" />
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 w-full flex items-center justify-center"
                >
                  <a href="/catalog/organic-life-catalog.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Catalog
                  </a>
                </Button>
                <p className="text-sm text-gray-500 mt-4 text-center">PDF format • 5.2 MB • Last updated: May 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-green-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Organic Life Enterprises, our values guide everything we do, from sourcing to processing to
              distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-lg shadow-md p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to Quality</h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              We are committed to providing the highest quality organic products through rigorous quality control
              processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex items-start">
                <Check className="w-6 h-6 text-green-300 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{commitment.title}</h3>
                  <p className="text-green-100">{commitment.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-white text-green-800 hover:bg-green-100">
              <Link href="/products">
                Explore Our Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Ready to Experience the Organic Difference?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover our wide range of organic products and experience the benefits of nature's goodness.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/products">Browse Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Data
const values = [
  {
    title: "Sustainability",
    icon: Leaf,
    description:
      "We are committed to sustainable farming practices that protect the environment and preserve biodiversity.",
  },
  {
    title: "Quality",
    icon: Check,
    description:
      "We maintain the highest standards of quality in all our products, from sourcing to processing to packaging.",
  },
  {
    title: "Transparency",
    icon: Leaf,
    description: "We believe in complete transparency about our products, their origins, and their benefits.",
  },
  {
    title: "Community",
    icon: Leaf,
    description: "We support local farmers and communities, ensuring fair practices and sustainable livelihoods.",
  },
  {
    title: "Tradition",
    icon: Leaf,
    description: "We honor traditional knowledge and practices, combining them with modern scientific understanding.",
  },
  {
    title: "Innovation",
    icon: Leaf,
    description:
      "We continuously innovate to improve our products and processes while staying true to our core values.",
  },
]

const commitments = [
  {
    title: "Organic Certification",
    description:
      "All our products are certified organic, ensuring they are grown without synthetic pesticides or fertilizers.",
  },
  {
    title: "Sustainable Sourcing",
    description:
      "We work directly with farmers who practice sustainable farming methods, protecting the environment and biodiversity.",
  },
  {
    title: "Quality Testing",
    description: "Each batch of our products undergoes rigorous quality testing to ensure purity, potency, and safety.",
  },
  {
    title: "Traditional Processing",
    description:
      "We use traditional processing methods that preserve the natural goodness and therapeutic properties of our products.",
  },
  {
    title: "Eco-Friendly Packaging",
    description:
      "Our packaging is designed to minimize environmental impact while ensuring product freshness and quality.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We are committed to continuously improving our products and processes based on customer feedback and scientific research.",
  },
]
