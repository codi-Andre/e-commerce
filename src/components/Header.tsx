import logoIcon from "../assets/logo.svg"
import { AccountBar } from "./AccountBar"
import { CategoriesBar } from "./CategoriesBar"
import { CategoriesFilter } from "./CategoriesFilter"
import { SearchBar } from "./SearchBar"

const categoriesList = [
  { name: "All categories", link: "#" },
  { name: "Jewelry & Accessories", link: "#" },
  { name: "Clothing & shoes", link: "#" },
  { name: "Home & living", link: "#" },
  { name: "Wedding & party", link: "#" },
  { name: "Toys & entertainment", link: "#" },
  { name: "Art & collectibles", link: "#" },
  { name: "Craft supplies & tools", link: "#" }
]

export function Header() {
  return (
    <div className="bg-design-soft-background">
      <header className="container px-4 pb-6 pt-8 lg:px-6 lg:pt-7">
        <div className="flex justify-between pr-3 2xl:gap-6">
          <img
            className="h-7 w-32 lg:h-12 lg:w-48"
            src={logoIcon}
            alt="E-commerce logo"
          />

          <SearchBar
            select={<CategoriesFilter categoriesList={categoriesList} />}
          />

          <AccountBar />
        </div>

        <div className="mt-3 flex gap-4 lg:gap-6">
          <CategoriesBar categoriesList={categoriesList} />

          <SearchBar
            mobile
            select={<CategoriesFilter categoriesList={categoriesList} />}
          />
        </div>
      </header>
    </div>
  )
}
