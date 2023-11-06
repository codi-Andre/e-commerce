import expandLeft from "../assets/icons/expand-left.svg"
import expandRight from "../assets/icons/expand-right.svg"
import bagImg1 from "../assets/productImages/bag.png"
import bagImg2 from "../assets/productImages/bag2.png"
import ringImg1 from "../assets/productImages/ring.png"
import ringImg2 from "../assets/productImages/ring2.png"
import shoesImg1 from "../assets/productImages/shoes.png"
import shoesImg2 from "../assets/productImages/shoes2.png"
import { SmallProductCard } from "./SmallProductCard"

interface ProductGalleryProps {
  showArrows?: boolean
}

export function ProductGallery({ showArrows }: ProductGalleryProps) {
  return (
    <div
      className="overflow-x-without-bars 2xl:reset-overflow-x-without-bars relative flex
    flex-nowrap gap-4 px-2 py-6 md:gap-6 md:py-12 2xl:justify-center"
    >
      <button
        className={`absolute -left-20 top-40 hidden
       rounded-full bg-design-gray-background p-2 ${
         showArrows ? "2xl:inline-block" : ""
       }`}
      >
        <img className="h-8 w-8" src={expandLeft} alt="left arrow" />
      </button>

      <SmallProductCard
        description="Distressed Tote Leather Bag Leather Bag"
        price="216,27 $"
        imgPath={bagImg1}
      />

      <SmallProductCard
        description="Womens Cognac Leather Elastic Straps"
        price="195,13 $"
        imgPath={shoesImg1}
      />

      <SmallProductCard
        description="Distressed Tote Leather Bag Leather Bag"
        price="910,76 $"
        imgPath={bagImg2}
      />

      <SmallProductCard
        description="High Top Canvas Shoes"
        price="341,02 $"
        imgPath={shoesImg2}
      />

      <SmallProductCard
        description="Rose Gold Moissanite Vintage Wedding Ring Set"
        price="3.344,13 $"
        imgPath={ringImg1}
      />

      <SmallProductCard
        description="Blue Topaz Bangle 24K Gold Plated Handmade"
        price="789,09 $"
        imgPath={ringImg2}
      />

      <button
        className={`absolute -right-20 top-40 hidden rounded-full bg-design-gray-background
       p-2 ${showArrows ? "2xl:inline-block" : ""}`}
      >
        <img className="h-8 w-8" src={expandRight} alt="right arrow" />
      </button>
    </div>
  )
}
