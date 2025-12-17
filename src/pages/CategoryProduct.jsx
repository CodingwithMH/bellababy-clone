import Gallery from "../components/Gallery"
import ProductDetails from "../components/ProductDetails"
import RelatedProducts from "../components/RelatedProducts"
import images from "../data/product_images.json"
const CategoryProduct = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-8">

    <div className="grid lg:grid-cols-2 gap-12">

      <Gallery images={images}/>
      <ProductDetails/>
    </div>
      <RelatedProducts/>
    </div>
    </>
  )
}

export default CategoryProduct
