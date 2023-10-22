import { useEffect, useRef, useState } from "react"
import expandIcon from "../assets/icons/expand.svg"
import { Categories } from "../entities/categories"

interface CustomSelectProps {
  categoriesList?: Categories[]
}

export function CustomSelect({ categoriesList }: CustomSelectProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [active, setActive] = useState("All categories")
  const [hovered, setHovered] = useState(0)

  const customSelectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
  }, [])

  function handleClickOutside(e: MouseEvent) {
    const node = e.target as HTMLElement
    if (customSelectRef.current?.contains(node)) {
      setIsPopupOpen((state) => !state)
    } else {
      setIsPopupOpen(false)
    }
  }

  return (
    <div
      ref={customSelectRef}
      className="relative hidden flex-col text-text1 lg:flex"
    >
      <div
        className="flex cursor-pointer gap-2 rounded-full bg-design-gray-background px-6 py-2"
        tabIndex={0}
        role="combobox"
        aria-controls="listbox1"
        aria-expanded="false"
        aria-activedescendant=""
      >
        <span>{active}</span>

        <img className="h-4 w-4" src={expandIcon} alt="" />
      </div>

      <ul
        className={`${
          isPopupOpen ? "flex" : "hidden"
        } absolute top-6 flex-col rounded-b-3xl bg-design-gray-background`}
        id="listbox1"
        role="listbox"
        tabIndex={-1}
      >
        {categoriesList ? (
          categoriesList.map((item, index) => (
            <li
              className={`${
                index === hovered ? "text-design-third" : ""
              } cursor-pointer p-4`}
              key={item.name}
              role="option"
              aria-selected="false"
              onClick={() => setActive(item.name)}
              onMouseEnter={() => setHovered(index)}
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
