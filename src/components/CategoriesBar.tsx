import sortIcon from "../assets/icons/sort.svg"

export function CategoriesBar() {
  return (
    <div className="2xl:w-full">
      <button
        className="rounded-full bg-white p-3 text-center lg:px-8 2xl:hidden"
        aria-label="categories menu"
      >
        <img className="icon" src={sortIcon} alt="" />
      </button>

      <ul className="design-text6 design-link hidden flex-1 gap-12 2xl:flex">
        <li>
          <a href="#">Jewelry & Accessories</a>
        </li>
        <li>
          <a href="#">Clothing & shoes</a>
        </li>
        <li>
          <a href="#">Home & living</a>
        </li>
        <li>
          <a href="#">Wedding & party</a>
        </li>
        <li>
          <a href="#">Toys & entertainment</a>
        </li>
        <li>
          <a href="#">Art & collectibles</a>
        </li>
        <li>
          <a href="#">Craft supplies & tools</a>
        </li>
      </ul>
    </div>
  )
}
