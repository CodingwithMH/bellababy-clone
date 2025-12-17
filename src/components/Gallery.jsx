import React from 'react'
import { useState } from "react"
const Gallery = ({images}) => {
    const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <div>
            <div className="flex gap-4">
              {/* Thumbnails */}
              <div className="flex flex-col gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 border-2 rounded-md overflow-hidden ${
                      selectedImage === idx ? "border-[#FFA500]" : "border-border"
                    }`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Product view ${idx + 1}`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 bg-muted rounded-lg overflow-hidden relative aspect-square">
                <img
                  src={images[selectedImage] || "/placeholder.svg"}
                  alt="Product main view"
                  className="object-contain p-8"
                />
                <div className="absolute top-4 left-4 bg-[#FFA500] text-white px-2 py-1 text-xs rounded">★</div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                  Tripp Trapp®
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Gallery
