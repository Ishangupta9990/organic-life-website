import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ProductPage({
  params,
}: {
  params: { category: string; product: string }
}) {
  const product = productDetails.find((p) => p.slug === params.product)

  if (!product) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Product not found</h1>
        <p className="mb-8">The product you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href={`/products/${params.category}`}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Category
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container">
        <div className="mb-8">
          <Link href={`/products/${params.category}`} className="text-green-700 hover:text-green-900 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to {getCategoryName(params.category)}
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <div className="h-[400px] relative bg-gradient-to-b from-green-50 to-white">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
            <div className="lg:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-emerald-800 mb-2">{product.name}</h1>
              <p className="text-lg text-emerald-600 italic mb-6">{product.scientific}</p>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-emerald-700 mb-3">Description</h2>
                <p className="text-gray-700">{product.description}</p>
              </div>

              {product.benefits && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-emerald-700 mb-3">Benefits</h2>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.uses && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-emerald-700 mb-3">Uses</h2>
                  <p className="text-gray-700">{product.uses}</p>
                </div>
              )}

              <div className="mt-8">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/contact">Inquire About This Product</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-emerald-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getRelatedProducts(product.slug, params.category).map((relatedProduct) => (
              <Link
                key={relatedProduct.slug}
                href={`/products/${params.category}/${relatedProduct.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="h-48 relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-emerald-800">{relatedProduct.name}</h3>
                  <p className="text-sm text-emerald-600 italic">{relatedProduct.scientific}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper functions
function getCategoryName(slug: string): string {
  const categories: Record<string, string> = {
    herbs: "Organic Herbs",
    spices: "Organic Spices",
    seeds: "Medicinal Seeds",
    flowers: "Medicinal Flowers",
  }
  return categories[slug] || "Products"
}

function getRelatedProducts(currentSlug: string, category: string) {
  return productDetails.filter((p) => p.slug !== currentSlug && p.category === category).slice(0, 4)
}

// Data
const productDetails = [
  {
    name: "Tulsi Leaves",
    slug: "tulsi-leaves",
    scientific: "Ocimum Sactum",
    category: "herbs",
    image: "/images/tulsi.png",
    description:
      "Ocimum tenuiflorum, commonly known as holy basil, tulsi or tulasi, is an aromatic perennial plant. It is also called queen of herbs, Due to its holistic properties tulsi is widely used in many ayurvedic and Naturopathic medicines.",
    benefits: [
      "Helps fight infections and boosts immunity",
      "Reduces stress and anxiety",
      "Supports respiratory health",
      "Has anti-inflammatory properties",
      "Helps in managing blood sugar levels",
    ],
    uses: "Tulsi can be consumed as tea, added to food, or used in traditional remedies. It's also used in religious ceremonies in India.",
  },
  {
    name: "Ashwagandha",
    slug: "ashwagandha",
    scientific: "Withania somnifera",
    category: "herbs",
    image: "/images/ashwagandha.jpg",
    description:
      "Ashwagandha is an ancient medicinal herb that's classified as an adaptogen, meaning it can help your body manage stress. It also provides numerous other benefits for your body and brain, including improving concentration and reducing inflammation.",
    benefits: [
      "Reduces stress and anxiety",
      "May improve strength and muscle mass",
      "May reduce blood sugar levels",
      "Has anti-inflammatory properties",
      "May improve brain function and memory",
    ],
    uses: "Ashwagandha can be consumed as a powder, capsule, or in liquid extract form. It's commonly used in Ayurvedic medicine for its rejuvenating properties.",
  },
  {
    name: "Giloy/Guduchi",
    slug: "giloy",
    scientific: "Tinospora cordifolia",
    category: "herbs",
    image: "/images/giloy.jpg",
    description:
      "Giloy, also known as Guduchi, is a climbing shrub that's widely used in Ayurvedic medicine. It's considered one of the most versatile herbs in Ayurveda due to its numerous health benefits and immune-boosting properties.",
    benefits: [
      "Boosts immunity",
      "Has anti-inflammatory properties",
      "Helps manage diabetes",
      "Improves digestion",
      "Purifies blood and removes toxins",
    ],
    uses: "Giloy can be consumed as juice, powder, or capsules. It's often used to boost immunity and treat various ailments in traditional medicine.",
  },
  {
    name: "Brahmi/Gotu kola",
    slug: "brahmi",
    scientific: "Centella asiatica",
    category: "herbs",
    image: "/images/brahmi.jpg",
    description:
      "Brahmi, also known as Gotu kola, is a perennial herb that has been used in traditional Ayurvedic medicine for centuries. It's known for its cognitive-enhancing properties and is considered a brain tonic in Ayurveda.",
    benefits: [
      "Enhances memory and cognitive function",
      "Reduces anxiety and stress",
      "Improves concentration and focus",
      "Has anti-inflammatory properties",
      "Supports skin health and wound healing",
    ],
    uses: "Brahmi can be consumed as tea, juice, or in supplement form. It's commonly used to improve memory, reduce stress, and promote longevity in Ayurvedic medicine.",
  },
  {
    name: "Stevia Leaves",
    slug: "stevia-leaves",
    scientific: "Stevia rebaudiana",
    category: "herbs",
    image: "/images/stevia.png",
    description:
      "Stevia is often touted as a safe and healthy sugar substitute that can sweeten up foods without the negative health effects linked to refined sugar. It's also associated with several impressive health benefits, such as reduced calorie intake, blood sugar levels, and risk of cavities.",
    benefits: [
      "Natural sweetener with zero calories",
      "May help manage blood sugar levels",
      "Potential to lower high blood pressure",
      "Helps reduce the risk of cavities",
      "Supports weight management",
    ],
    uses: "Stevia leaves can be used fresh or dried to sweeten beverages, desserts, and other foods as a natural alternative to sugar.",
  },
  {
    name: "Turmeric",
    slug: "turmeric",
    scientific: "Curcuma longa",
    category: "spices",
    image: "/images/turmeric.jpg",
    description:
      "Turmeric is a bright yellow spice that comes from the root of the Curcuma longa plant. It contains curcumin, a compound with powerful anti-inflammatory and antioxidant properties. Turmeric has been used in India for thousands of years as both a spice and medicinal herb.",
    benefits: [
      "Has powerful anti-inflammatory effects",
      "Increases the antioxidant capacity of the body",
      "May improve brain function and lower risk of brain diseases",
      "May help prevent and treat cancer",
      "May help prevent heart disease",
    ],
    uses: "Turmeric can be used in cooking, as a supplement, or applied topically. It's a key ingredient in many curries and is often used to color and flavor mustard, butter, and cheese.",
  },
  {
    name: "Cumin Seeds",
    slug: "cumin-seeds",
    scientific: "Cuminum cyminum",
    category: "spices",
    image: "/images/cumin.png",
    description:
      "Originated from Rajasthan, cumin contains compounds called flavonoids that work as antioxidants in the body. Antioxidants can help neutralize unstable particles called free radicals that cause cell damage. By neutralizing these particles, antioxidants can help prevent diseases like cancer, heart disease, and high blood pressure.",
    benefits: [
      "Rich in antioxidants",
      "May improve digestion",
      "Contains anti-inflammatory properties",
      "May help control blood sugar",
      "Supports weight loss",
    ],
    uses: "Cumin seeds are widely used in cooking, particularly in Indian, Middle Eastern, and Mexican cuisines. They can be used whole or ground into a powder.",
  },
  {
    name: "Black Pepper",
    slug: "black-pepper",
    scientific: "Piper nigrum",
    category: "spices",
    image: "/images/black-pepper.jpg",
    description:
      "Black pepper is one of the most commonly used spices worldwide. It's made by grinding peppercorns, which are dried berries from the vine Piper nigrum. It has a sharp, mildly spicy flavor that goes well with many dishes.",
    benefits: [
      "Contains antioxidants",
      "Has anti-inflammatory properties",
      "May improve digestion",
      "Enhances the absorption of certain nutrients",
      "May have cancer-fighting properties",
    ],
    uses: "Black pepper is versatile and can be used in virtually any savory dish. It's often paired with salt and is a staple on dining tables worldwide.",
  },
  {
    name: "Cinnamon",
    slug: "cinnamon",
    scientific: "Cinnamomum verum",
    category: "spices",
    image: "/images/cinnamon.png",
    description:
      "Cinnamon is a highly delicious spice that comes from the inner bark of trees from the Cinnamomum family. It has been prized for its medicinal properties for thousands of years and was once more valuable than gold.",
    benefits: [
      "Loaded with antioxidants",
      "Has anti-inflammatory properties",
      "May reduce the risk of heart disease",
      "Can improve sensitivity to insulin",
      "May help lower blood sugar levels",
    ],
    uses: "Cinnamon is commonly used in sweet and savory dishes, from breakfast cereals and baked goods to curries and stews. It can be used in stick form or ground into a powder.",
  },
  {
    name: "Cardamom",
    slug: "cardamom",
    scientific: "Elettaria cardamomum",
    category: "spices",
    image: "/images/cardamom.jpeg",
    description:
      "Cardamom is a spice made from the seed pods of various plants in the ginger family. It has a strong, unique taste, with an intensely aromatic, resinous fragrance. It's commonly used in Indian, Middle Eastern, and Swedish cuisines.",
    benefits: [
      "May help with digestive problems",
      "Contains antioxidants",
      "May have anti-inflammatory effects",
      "May help lower blood pressure",
      "May have antibacterial properties",
    ],
    uses: "Cardamom is used in both sweet and savory dishes. It's a common ingredient in Indian curries and chai tea, and is also used in baked goods in Nordic countries.",
  },
  {
    name: "Lemon Grass",
    slug: "lemon-grass",
    scientific: "Cymbopogon",
    category: "herbs",
    image: "/images/lemongrass.png",
    description:
      "Lemongrass might help prevent the growth of some bacteria and yeast. Lemongrass also contains substances that are thought to relieve pain and swelling, reduce fever, improve levels of sugar and cholesterol in the blood, stimulate the uterus and menstrual flow, and have antioxidant properties.",
    benefits: [
      "Has antimicrobial properties",
      "May reduce inflammation",
      "Helps relieve anxiety",
      "May lower cholesterol",
      "Supports digestive health",
    ],
    uses: "Lemongrass is commonly used in cooking, particularly in Southeast Asian cuisine. It can also be brewed into tea or used to make essential oils.",
  },
  {
    name: "Chia Seeds",
    slug: "chia-seeds",
    scientific: "Salvia hispanica",
    category: "seeds",
    image: "/images/chia.jpeg",
    description:
      "Chia seeds are tiny black seeds from the plant Salvia hispanica, which is related to mint. Despite their small size, chia seeds are among the most nutritious foods on the planet. They're loaded with fiber, protein, omega-3 fatty acids, and various micronutrients.",
    benefits: [
      "Rich in nutrients",
      "High in antioxidants",
      "May support weight loss",
      "High in protein quality",
      "May lower blood sugar levels",
    ],
    uses: "Chia seeds can be added to smoothies, yogurt, oatmeal, or baked goods. They can also be used to make chia pudding or as an egg substitute in vegan recipes.",
  },
  {
    name: "Basil/Sabja Seeds",
    slug: "sabja-seeds",
    scientific: "Ocimum basilicum",
    category: "seeds",
    image: "/images/sabja.jpg",
    description:
      "Sabja seeds, also known as basil seeds or tukmaria, come from the sweet basil plant. They look similar to chia seeds but are slightly larger and primarily black in color. When soaked in water, they swell up and form a gelatinous coating.",
    benefits: [
      "May help with weight loss",
      "Rich in fiber",
      "May help regulate blood sugar",
      "Has cooling properties",
      "May help relieve constipation",
    ],
    uses: "Sabja seeds are commonly used in beverages, desserts, and as a cooling agent in summer drinks. They're a popular ingredient in falooda, a traditional Indian dessert drink.",
  },
  {
    name: "Flax Seeds",
    slug: "flax-seeds",
    scientific: "Linum usitatissimum",
    category: "seeds",
    image: "/images/flax-seed.jpg",
    description:
      "Flax seeds are small oil seeds that originated in the Middle East thousands of years ago. They're a rich source of the plant-based omega-3 fatty acid called alpha-linolenic acid (ALA), lignans, and fiber, all of which have numerous health benefits.",
    benefits: [
      "Rich in omega-3 fatty acids",
      "High in lignans, which may reduce cancer risk",
      "Rich in dietary fiber",
      "May help lower cholesterol",
      "May help regulate blood pressure",
    ],
    uses: "Flax seeds can be ground and added to smoothies, yogurt, oatmeal, or baked goods. They can also be used as an egg substitute in vegan recipes.",
  },
  {
    name: "Pumpkin Seeds",
    slug: "pumpkin-seeds",
    scientific: "Cucurbita pepo",
    category: "seeds",
    image: "/images/pumpkin-seeds.jpg",
    description:
      "Pumpkin seeds, also known as pepitas, are the edible seeds of pumpkins and certain other squash varieties. They're flat, oval-shaped, and typically have a white outer hull and a green interior. They're nutrient-rich and have a slightly sweet, nutty flavor.",
    benefits: [
      "Rich in antioxidants",
      "High in magnesium",
      "May improve heart health",
      "May reduce inflammation",
      "May help improve sleep quality",
    ],
    uses: "Pumpkin seeds can be eaten raw, roasted, or incorporated into various dishes. They're commonly used in salads, granola, trail mix, or as a topping for soups and baked goods.",
  },
  {
    name: "Hibiscus",
    slug: "hibiscus",
    scientific: "Hibiscus sabdariffa",
    category: "flowers",
    image: "/images/hibiscus.png",
    description:
      "Although a perennial, roselle is usually grown as an annual and propagated from seed. It grows best in loamy well-drained soil, mainly in tropical climates. The dried flowers are used to make medicine and herbal teas.",
    benefits: [
      "May help lower blood pressure",
      "Rich in antioxidants",
      "Supports liver health",
      "May aid in weight management",
      "Helps maintain healthy cholesterol levels",
    ],
    uses: "Hibiscus is commonly used to make herbal teas, jams, and syrups. It's also used in traditional medicine for various ailments.",
  },
  {
    name: "Rose Petals",
    slug: "rose-petals",
    scientific: "Rosa Centifolia",
    category: "flowers",
    image: "/images/rose.jpg",
    description:
      "Rose petals have been used in traditional medicine and culinary applications for centuries. They're known for their delicate fragrance and flavor, as well as their potential health benefits. Rose petals contain various compounds with antioxidant and anti-inflammatory properties.",
    benefits: [
      "Rich in antioxidants",
      "May have anti-inflammatory effects",
      "May help reduce stress and anxiety",
      "Supports skin health",
      "May have mild sedative properties",
    ],
    uses: "Rose petals can be used to make tea, rosewater, or added to desserts and other culinary creations. They're also used in aromatherapy and skincare products.",
  },
  {
    name: "Chamomile",
    slug: "chamomile",
    scientific: "Matricaria chamomilla",
    category: "flowers",
    image: "/images/chamomile.jpg",
    description:
      "Chamomile is a daisy-like flower that has been used for centuries as a natural remedy for various health issues. It's known for its calming effects and is often consumed as a tea before bedtime to promote relaxation and sleep.",
    benefits: [
      "May improve sleep quality",
      "Has anti-inflammatory properties",
      "May help reduce anxiety and stress",
      "Supports digestive health",
      "May help relieve menstrual pain",
    ],
    uses: "Chamomile is most commonly consumed as a tea, but it can also be used in skincare products, aromatherapy, and as a natural remedy for various ailments.",
  },
  {
    name: "Calendula",
    slug: "calendula",
    scientific: "Calendula officinalis",
    category: "flowers",
    image: "/images/calendula.jpg",
    description:
      "Calendula, also known as pot marigold, is a flowering plant in the daisy family. The flower heads are used to make medicine. Calendula has been used for centuries for its anti-inflammatory, antiviral, and antibacterial properties.",
    benefits: [
      "Has anti-inflammatory properties",
      "May help heal wounds and skin irritations",
      "Contains antioxidants",
      "May support oral health",
      "May have antifungal and antimicrobial effects",
    ],
    uses: "Calendula is commonly used in topical applications for skin conditions, but it can also be consumed as a tea or used in culinary applications. It's also used in traditional medicine for various ailments.",
  },
]
