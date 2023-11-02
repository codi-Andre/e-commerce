import artImg from "../assets/categories-images/art.jpeg"
import clothingImg from "../assets/categories-images/clothing.jpeg"
import homeImg from "../assets/categories-images/home.jpeg"
import chairImg from "../assets/productImages/chair.png"
import lambaderImg from "../assets/productImages/lambader.png"
import pillowImg from "../assets/productImages/pillow.png"
import sofaImg from "../assets/productImages/sofa.png"
import { CategoryCard } from "./CategoryCard"
import { ColorPalette } from "./ColorPalette"
import { DotsNav } from "./DotsNav"
import { ProductCard } from "./ProductCard"

export function Main() {
  return (
    <main className="">
      <section className="container">
        <div className="mx-4 mb-10 mt-6 flex flex-col gap-6 md:mx-6 lg:flex-row">
          <CategoryCard imagePath={clothingImg} title="Clothing & shoes" />

          <CategoryCard imagePath={homeImg} title="Home & living" />

          <CategoryCard imagePath={artImg} title="Art & collectibles" />
        </div>
      </section>

      <section className="container mb-12 flex flex-col items-center justify-center sm:flex-row sm:gap-6 md:justify-between md:px-6">
        <div className="rounded-md bg-cards-1">
          <ProductCard
            imgPath={chairImg}
            description="Vonna Neva Walnut Sandalye Chair"
            price="195,13 $"
            availableColors={
              <ColorPalette green blue lightGreen orange pink purple skyBlue />
            }
          />
        </div>

        <div className="hidden rounded-md bg-cards-2 sm:block">
          <ProductCard
            imgPath={lambaderImg}
            description="Wood lamp, Floor Lamp, Lambader, Decorative"
            price="458,43 $"
            availableColors={<ColorPalette green blue orange pink purple />}
          />
        </div>

        <div className="hidden rounded-md bg-cards-3 lg:block">
          <ProductCard
            imgPath={sofaImg}
            description="NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made"
            price="789,67 $"
            availableColors={<ColorPalette blue pink purple />}
          />
        </div>

        <div className="hidden rounded-md bg-cards-4 xl:block ">
          <ProductCard
            imgPath={pillowImg}
            description="Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches"
            price="43,23 $"
            availableColors={
              <ColorPalette green lightGreen pink purple orange />
            }
          />
        </div>

        <DotsNav
          size="sm"
          accessibilityCaption={["slide1", "slide2", "slide3", "slide4"]}
        />
      </section>
    </main>
  )
}
