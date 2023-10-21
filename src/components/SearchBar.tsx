import searchIcon from "../assets/icons/search.svg"
import { CustomSelect } from "./CustomSelect"

interface SearchBarProps {
  mobile?: boolean
}

export function SearchBar({ mobile }: SearchBarProps) {
  return (
    <div
      className={`${
        mobile ? "flex 2xl:hidden" : "hidden 2xl:flex"
      } min-w-0 flex-1 gap-4 rounded-full bg-white px-4 py-2`}
    >
      <CustomSelect />

      <input
        className="design-text1 min-w-0 flex-1 px-1"
        type="text"
        placeholder="Search anything"
      />

      <button aria-label="search">
        <img className="icon" src={searchIcon} alt="" />
      </button>
    </div>
  )
}
