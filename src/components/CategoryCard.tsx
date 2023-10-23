interface CategoryCardProps {
  imagePath: string
  title: string
}

export function CategoryCard({ imagePath, title }: CategoryCardProps) {
  return (
    <a className="relative h-44 w-full" href="#">
      <img
        className="h-full w-full rounded-md object-cover"
        src={imagePath}
        alt=""
      />

      <span className="absolute bottom-4 left-4 text-title2 text-white">
        {title}
      </span>
    </a>
  )
}
