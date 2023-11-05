import heartIcon from "../assets/icons/heart.svg"

interface SmallProductCardProps {
  imgPath?: string
  description?: string
  price?: string
}

export function SmallProductCard({
  description,
  imgPath,
  price
}: SmallProductCardProps) {
  return (
    <div className="shadow-design-1 relative h-72 p-2">
      <img
        className="mb-4 h-[11.5rem] w-[11.5rem] max-w-none"
        src={imgPath}
        alt=""
      />

      <p className="text-text1">
        <a href="#">
          {description}
          <span className="absolute bottom-4 left-2 text-text5">{price}</span>
        </a>
      </p>

      <button
        className="absolute right-4 top-4 rounded-full border-2 border-design-border bg-white p-2"
        aria-label="save to waiting list"
      >
        <img className="h-4 w-4" src={heartIcon} alt="" />
      </button>
    </div>
  )
}
