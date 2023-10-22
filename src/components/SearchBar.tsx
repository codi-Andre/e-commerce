import { ReactNode } from "react"
import searchIcon from "../assets/icons/search.svg"

interface SearchBarProps {
  mobile?: boolean
  select?: ReactNode
}

export function SearchBar({ mobile, select }: SearchBarProps) {
  return (
    <div
      className={`${
        mobile ? "flex 2xl:hidden" : "hidden 2xl:flex"
      } min-w-0 flex-1 gap-4 rounded-full bg-white px-4 py-2`}
    >
      {select}

      <input
        className="text-text1 min-w-0 flex-1 px-1"
        type="text"
        placeholder="Search anything"
      />

      <button aria-label="search">
        <img className="icon" src={searchIcon} alt="" />
      </button>
    </div>
  )
}
