import { ReactNode } from "react"
import heartIcon from "../assets/icons/heart.svg"

interface ProductCardProps {
  imgPath?: string
  productPage?: string
  description?: string
  price?: string
  availableColors?: ReactNode
}

export function ProductCard({
  description,
  imgPath,
  productPage = "",
  price,
  availableColors
}: ProductCardProps) {
  return (
    <div
      className="relative flex h-96 w-72 flex-col gap-10 rounded-md p-6
      2xl:h-[26.125rem] 2xl:w-[19.5rem] 2xl:gap-14"
    >
      <img
        loading="lazy"
        className="mx-auto mt-4 h-[12.5rem] w-[12.5rem]"
        src={imgPath}
        alt=""
      />

      <a className="text-text6" href={productPage}>
        {description}
        <br />
        <span className="absolute bottom-6 left-6 text-text5"> {price}</span>
      </a>

      <button
        className="absolute right-4 top-4 rounded-full bg-white p-2"
        aria-label="save to waiting list"
      >
        <img className="h-4 w-4" src={heartIcon} alt="" />
      </button>

      <p className="absolute bottom-32 left-6 flex flex-col gap-3 text-text2 2xl:bottom-36">
        <span>Colors</span>
        {availableColors}
      </p>
    </div>
  )
}
