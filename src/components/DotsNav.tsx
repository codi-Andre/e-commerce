interface DotsNavProps {
  size?: "sm" | "md"
  accessibilityCaption?: string[]
}

export function DotsNav({ size, accessibilityCaption }: DotsNavProps) {
  return (
    <div
      className={`mt-6 flex gap-2 ${
        size === "sm" ? "md:hidden" : "hidden md:block"
      }`}
    >
      {accessibilityCaption?.map((caption) => (
        <span
          key={caption}
          className={`
            ${
              size === "sm"
                ? "p-[0.25rem] sm:hidden"
                : "hidden p-[0.375rem] sm:block"
            } 
            ${
              caption === "slide2"
                ? "border-design-third bg-design-third"
                : "bg-design-gray-background"
            } rounded-full  border-2 border-solid border-design-border`}
        >
          <span className="sr-only">{caption}</span>
        </span>
      ))}
    </div>
  )
}
