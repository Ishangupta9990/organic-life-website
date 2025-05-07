import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CatalogDownloadButtonProps {
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
}

export default function CatalogDownloadButton({
  className = "",
  variant = "default",
  size = "default",
}: CatalogDownloadButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href="/catalog/organic-life-catalog.pdf" download>
        <Download className="mr-2 h-4 w-4" />
        Download Catalog
      </a>
    </Button>
  )
}
