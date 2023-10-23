import expandIcon from "../assets/icons/expand.svg"
import { Categories } from "../entities/categories"

interface CategoriesFilterProps {
  categoriesList?: Categories[]
}

export function CategoriesFilter({ categoriesList }: CategoriesFilterProps) {
  return (
    <div className="relative hidden flex-col text-text1 lg:flex">
      <div
        className="flex cursor-pointer gap-2 rounded-full bg-design-gray-background px-6 py-2"
        tabIndex={0}
        role="combobox"
        aria-controls="listbox1"
        aria-expanded="false"
        aria-activedescendant=""
      >
        <span>All categories</span>

        <img className="h-4 w-4" src={expandIcon} alt="" />
      </div>

      <ul
        className="absolute top-6 hidden flex-col rounded-b-3xl bg-design-gray-background"
        id="listbox1"
        role="listbox"
        tabIndex={-1}
      >
        {categoriesList ? (
          categoriesList.map((item) => (
            <li
              className="cursor-pointer p-4"
              id={item.name}
              key={item.name}
              role="option"
              aria-selected="false"
            >
              {item.name}
            </li>
          ))
        ) : (
          <li>No categories</li>
        )}
      </ul>
    </div>
  )
}
