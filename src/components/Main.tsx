import abstractArt1 from "../assets/abstract-art/abstract-art1.svg"
import abstractArt2 from "../assets/abstract-art/abstract-art2.svg"
import abstractArt3 from "../assets/abstract-art/abstract-art3.svg"
import artImg from "../assets/categories-images/art.jpeg"
import clothingImg from "../assets/categories-images/clothing.jpeg"
import homeImg from "../assets/categories-images/home.jpeg"
import chairImg from "../assets/productImages/chair.png"
import lambaderImg from "../assets/productImages/lambader.png"
import pillow1Img from "../assets/productImages/pillow.png"
import sofaImg from "../assets/productImages/sofa.png"
import { CategoriesGallery } from "./CategoriesGallery"
import { CategoryCard } from "./CategoryCard"
import { ColorPalette } from "./ColorPalette"
import { CommunityCard } from "./CommunityCard"
import { DotsNav } from "./DotsNav"
import { ProductCard } from "./ProductCard"
import { ProductGallery } from "./ProductGallery"

export function Main() {
  return (
    <main className="from-design-gray-background from-[400px] to-white to-[401px] pt-6 2xl:bg-gradient-to-b">
      <section className="container">
        <div className="mx-4 mb-10 flex flex-col gap-6 md:mx-6 lg:flex-row">
          <CategoryCard imagePath={clothingImg} title="Clothing & shoes" />

          <CategoryCard imagePath={homeImg} title="Home & living" />

          <CategoryCard imagePath={artImg} title="Art & collectibles" />
        </div>
      </section>

      <section
        className="container mb-6 flex flex-col items-center justify-center
       gap-6 md:mb-12 md:flex-row md:justify-between md:px-6"
      >
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

        <div className="hidden rounded-md bg-cards-2 md:block">
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

        <div className="hidden rounded-md bg-cards-4 xl:block">
          <ProductCard
            imgPath={pillow1Img}
            description="Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches"
            price="43,23 $"
            availableColors={
              <ColorPalette green lightGreen pink purple orange />
            }
          />
        </div>

        <DotsNav
          hide="md"
          accessibilityCaption={["slide1", "slide2", "slide3", "slide4"]}
        />
      </section>

      <section
        className="container mb-6 flex flex-col items-center justify-center gap-6
      px-4 md:mb-12 md:flex-row md:px-6"
      >
        <CommunityCard imgPath={abstractArt1}>
          <h4 className="mb-4 text-center text-text5 md:text-text4">
            A community
            <br /> doing good
          </h4>

          <p className="text-center text-text1">
            Commerce is a global online
            <br /> marketplace, where people.
          </p>
        </CommunityCard>

        <CommunityCard screen="md" imgPath={abstractArt2}>
          <h4 className="mb-4 text-center text-text5 md:text-text4">
            Support independent
            <br /> creators
          </h4>

          <p className="text-center text-text1">
            Just millions of people selling
            <br /> the things they love.
          </p>
        </CommunityCard>

        <CommunityCard screen="lg" imgPath={abstractArt3}>
          <h4 className="mb-4 text-center text-text5 md:text-text4">
            Peace
            <br /> of mind
          </h4>

          <p className="text-center text-text1">
            Privacy is the highest priority
            <br /> of our dedicated team.
          </p>
        </CommunityCard>

        <DotsNav
          hide="md"
          accessibilityCaption={["slide1", "slide2", "slide3"]}
        />
      </section>

      <section className="container mb-6 px-4 md:mb-0 md:px-6">
        <h2 className="mb-2 text-title2">
          Find things you'll love.
          <br className="md:hidden" /> Support independent sellers.
        </h2>

        <p className="text-text5 text-design-subtext">Only on polka.</p>

        <CategoriesGallery />

        <DotsNav
          hide="md"
          accessibilityCaption={["slide1", "slide2", "slide3"]}
        />
      </section>

      <section className="container mb-6 px-4 md:px-6">
        <div className="flex justify-between">
          <h2 className="text-title2 md:text-title3">
            Discover unique <br className="md:hidden" />
            hand-picked items
          </h2>

          <button className="hidden items-center gap-2 text-text6 text-design-third md:flex">
            <span>View all</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.33325 4L13.3333 8M13.3333 8L9.33325 12M13.3333 8H3.33325"
                stroke="#EB8426"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <ProductGallery />

        <DotsNav
          hide="lg"
          accessibilityCaption={["slide1", "slide2", "slide3", "slide4"]}
        />
      </section>
    </main>
  )
}
