import logoIcon from "../assets/logo.svg"
import { AccountBar } from "./AccountBar"
import { CategoriesBar } from "./CategoriesBar"
import { SearchBar } from "./SearchBar"

export function Header() {
  return (
    <div className="bg-design-soft-background">
      <header className="container px-4 pb-6 pt-8 lg:px-6 lg:pt-7 2xl:max-w-7xl">
        <div className="flex justify-between 2xl:gap-6">
          <img
            className="h-7 w-32 lg:h-12 lg:w-48"
            src={logoIcon}
            alt="E-commerce logo"
          />

          <SearchBar />

          <AccountBar />
        </div>

        <div className="mt-3 flex gap-4 lg:gap-6">
          <CategoriesBar />

          <SearchBar mobile />
        </div>
      </header>
    </div>
  )
}
