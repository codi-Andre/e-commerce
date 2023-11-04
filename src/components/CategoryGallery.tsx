import cupImg from "../assets/categories-images/cup.png"
import giftImg from "../assets/categories-images/gift.png"
import lifeStyleImg from "../assets/categories-images/life-style.png"
import lionImg from "../assets/categories-images/lion.png"
import pillow2Img from "../assets/categories-images/pillow.png"
import selfCareImg from "../assets/categories-images/self-care.png"
import wallDecorImg from "../assets/categories-images/wall-decor.png"
import weddingImg from "../assets/categories-images/wedding.png"
import expandLeft from "../assets/icons/expand-left.svg"
import expandRight from "../assets/icons/expand-right.svg"
import { ItemCard } from "./ItemCard"

export function CategoryGallery() {
  return (
    <div
      className="overflow-x-without-bars 2xl:reset-overflow-x-without-bars relative flex
      flex-nowrap gap-4 py-6 md:gap-6 2xl:justify-center"
    >
      <button
        className="absolute -left-16 top-16 hidden
       rounded-full bg-design-gray-background p-2 2xl:inline-block"
      >
        <img className="h-8 w-8" src={expandLeft} alt="left arrow" />
      </button>

      <ItemCard figCaption="Craft Kits" imgPath={lionImg} />

      <ItemCard figCaption="Throw Pillows" imgPath={pillow2Img} />

      <ItemCard figCaption="Natural Glass" imgPath={cupImg} />

      <ItemCard figCaption="Self Care" imgPath={selfCareImg} />

      <ItemCard figCaption="Gift Ideas" imgPath={giftImg} />

      <ItemCard figCaption="Wall Decor" imgPath={wallDecorImg} />

      <ItemCard figCaption="Wedding" imgPath={weddingImg} />

      <ItemCard figCaption="Life Style" imgPath={lifeStyleImg} />

      <button
        className="absolute -right-16 top-16 hidden rounded-full bg-design-gray-background
       p-2 2xl:inline-block"
      >
        <img className="h-8 w-8" src={expandRight} alt="right arrow" />
      </button>
    </div>
  )
}
