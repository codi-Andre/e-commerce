interface ItemCardProps {
  imgPath?: string
  figCaption?: string
}

export function ItemCard({ figCaption, imgPath }: ItemCardProps) {
  return (
    <a href="#">
      <img
        loading="lazy"
        className="h-[8.5rem] w-[8.5rem] max-w-none rounded-md p-2 
         shadow-design-2 md:h-36 md:w-36"
        src={imgPath}
        alt=""
      />

      <p className="mt-4 text-center text-text5 md:mt-6">{figCaption}</p>
    </a>
  )
}
