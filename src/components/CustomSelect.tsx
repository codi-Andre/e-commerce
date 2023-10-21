import expandIcon from "../assets/icons/expand.svg"

export function CustomSelect() {
  return (
    <div className="design-text1 hidden flex-col lg:flex">
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

      <ul className="hidden" id="listbox1" role="listbox" tabIndex={-1}>
        <li role="option" aria-selected="true">
          All categories
        </li>

        <li role="option" aria-selected="false">
          Jewelry & Accessories
        </li>

        <li role="option" aria-selected="false">
          Clothing & shoes
        </li>

        <li role="option" aria-selected="false">
          Home & living
        </li>

        <li role="option" aria-selected="false">
          Wedding & party
        </li>

        <li role="option" aria-selected="false">
          Toys & entertainment
        </li>

        <li role="option" aria-selected="false">
          Art & collectibles
        </li>

        <li role="option" aria-selected="false">
          Craft supplies & tools
        </li>
      </ul>
    </div>
  )
}
