import bannerImg from "../assets/categories-images/category-banner.png"
import lampshadeImg2 from "../assets/productImages/lampshade2.png"
import selfCareImg2 from "../assets/productImages/self-care2.png"
import smartphoneImg from "../assets/productImages/smartphone.png"
import { ColorPalette } from "./ColorPalette"
import { ProductCard } from "./ProductCard"

export function ProductTab() {
  return (
    <div
      className="overflow-x-without-bars 2xl:reset-overflow-x-without-bars flex
     gap-4 pb-4 pt-6 md:gap-6 md:pb-0 2xl:justify-between"
    >
      <div className="min-h-[24rem] min-w-[12.5rem] rounded-md 2xl:h-[26.125rem] 2xl:w-[19.5rem]">
        <img
          className="h-full rounded-md object-cover"
          src={bannerImg}
          alt=""
        />
      </div>

      <div className="rounded-md bg-cards-5">
        <ProductCard
          imgPath={lampshadeImg2}
          description="Rovena Riva Series 6 Pcs. Wide Seating Claret Red Chair"
          price="195,13 $"
          availableColors={
            <ColorPalette green skyBlue lightGreen blue pink purple orange />
          }
        />
      </div>

      <div className="bg-cards-6 rounded-md">
        <ProductCard
          imgPath={smartphoneImg}
          description="Iphone 12 128 GB (Red) Apple"
          price="458,43 $"
          availableColors={<ColorPalette green blue pink purple orange />}
        />
      </div>

      <div className="bg-cards-7 rounded-md">
        <ProductCard
          imgPath={selfCareImg2}
          description="Rovena Riva Series 6 Pcs. Wide Seating Claret Red Chair"
          price="789,67 $"
          availableColors={<ColorPalette blue pink purple />}
        />
      </div>
    </div>
  )
}
