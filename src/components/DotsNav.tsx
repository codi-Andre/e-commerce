interface DotsNavProps {
  hide?: "md" | "lg"
  accessibilityCaption?: string[]
}

export function DotsNav({ hide, accessibilityCaption }: DotsNavProps) {
  return (
    <div
      className={`flex gap-2 ${
        hide === "md" ? "md:hidden" : "lg:hidden"
      } justify-center`}
    >
      {accessibilityCaption?.map((caption) => (
        <span
          key={caption}
          className={`
            ${hide === "md" ? "p-[0.25rem]" : "p-[0.25rem] md:p-[0.375rem]"} 
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
