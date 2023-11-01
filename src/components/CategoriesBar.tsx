import sortIcon from "../assets/icons/sort.svg"
import { Categories } from "../entities/categories"

interface CategoriesBarProps {
  categoriesList?: Categories[]
}

export function CategoriesBar({ categoriesList }: CategoriesBarProps) {
  return (
    <nav className="2xl:w-full">
      <button
        className="rounded-full bg-white p-3 text-center lg:px-8 2xl:hidden"
        aria-label="categories menu"
      >
        <img className="icon" src={sortIcon} alt="" />
      </button>

      <ul className="design-link hidden gap-12 text-text6 2xl:flex">
        {categoriesList ? (
          categoriesList.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))
        ) : (
          <li>No categories found.</li>
        )}
      </ul>
    </nav>
  )
}
