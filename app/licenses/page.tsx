import Image from "next/image"
import Link from "next/link"
import { FileText, Award, BadgeIcon as Certificate, CheckCircle } from "lucide-react"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function LicensesPage() {
  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold text-green-800 mb-4 ${playfair.className}`}>
            Our Licenses & Certifications
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Organic Life Enterprises is proud to be a fully certified and licensed exporter of premium organic products.
            Below are our official certifications that ensure our commitment to quality and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {licenses.map((license) => (
            <div key={license.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <license.icon className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className={`text-2xl font-semibold text-green-800 ${playfair.className}`}>{license.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{license.description}</p>

                <div className="relative h-[400px] w-full mb-6 border border-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={license.thumbnailSrc || "/placeholder.svg"}
                    alt={license.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">
                      License Number: <span className="font-medium">{license.licenseNumber}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Valid Until: <span className="font-medium">{license.validUntil}</span>
                    </p>
                  </div>
                  <Link
                    href={license.pdfSrc}
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Full Document
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex items-center mb-6">
            <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
            <h2 className={`text-2xl font-semibold text-green-800 ${playfair.className}`}>
              Our Commitment to Compliance
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            At Organic Life Enterprises, we are committed to maintaining the highest standards of quality and compliance
            with all regulatory requirements. Our certifications and licenses are regularly renewed and updated to
            ensure we meet all national and international standards for organic product export.
          </p>
          <p className="text-gray-700">
            For any queries regarding our certifications or to request additional documentation, please feel free to
            <Link href="/contact" className="text-green-600 hover:text-green-700 font-medium">
              {" "}
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

const licenses = [
  {
    title: "Importer-Exporter Code (IEC)",
    description:
      "The Importer-Exporter Code (IEC) is a key business identification number that is mandatory for export from India or import to India. This license is issued by the DGFT (Directorate General of Foreign Trade).",
    icon: Certificate,
    thumbnailSrc: "/licenses/iec-thumbnail.jpg",
    pdfSrc: "/licenses/iec.pdf",
    licenseNumber: "BLMPD4889G",
    validUntil: "Permanent",
  },
  {
    title: "APEDA Registration",
    description:
      "Registration with the Agricultural and Processed Food Products Export Development Authority (APEDA) certifies that we meet all requirements for exporting agricultural and processed food products.",
    icon: Award,
    thumbnailSrc: "/licenses/apeda-thumbnail.jpg",
    pdfSrc: "/licenses/apeda.pdf",
    licenseNumber: "226452",
    validUntil: "08/05/2028",
  },
  {
    title: "UDYAM Registration (MSME)",
    description:
      "The UDYAM Registration certifies that Organic Life Enterprises is registered as a Micro, Small, and Medium Enterprise (MSME) with the Ministry of Micro, Small & Medium Enterprises, Government of India.",
    icon: Certificate,
    thumbnailSrc: "/licenses/msme-thumbnail.jpg",
    pdfSrc: "/licenses/msme.pdf",
    licenseNumber: "UDYAM-UP-26-0005001",
    validUntil: "Permanent",
  },
  {
    title: "GST Registration",
    description:
      "Our Goods and Services Tax (GST) registration certifies that we are a registered taxpayer under the GST regime in India, ensuring compliance with all tax regulations.",
    icon: Certificate,
    thumbnailSrc: "/licenses/gst-thumbnail.jpg",
    pdfSrc: "/licenses/gst.pdf",
    licenseNumber: "09BLMPD4889G1ZL",
    validUntil: "Permanent",
  },
]
