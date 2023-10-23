import artImg from "../assets/categories-images/art.jpeg"
import clothingImg from "../assets/categories-images/clothing.jpeg"
import homeImg from "../assets/categories-images/home.jpeg"
import { CategoryCard } from "./CategoryCard"

export function Main() {
  return (
    <main className="">
      <section className="container">
        <nav className="mx-4 my-6 flex flex-col gap-6 md:mx-6 lg:flex-row">
          <CategoryCard imagePath={clothingImg} title="Clothing & shoes" />

          <CategoryCard imagePath={homeImg} title="Home & living" />

          <CategoryCard imagePath={artImg} title="Art & collectibles" />
        </nav>
      </section>
    </main>
  )
}
