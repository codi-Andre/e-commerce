import { ReactNode } from "react"

interface CommunityCardProps {
  imgPath?: string
  children?: ReactNode
  screen?: "md" | "lg"
}

export function CommunityCard({
  screen,
  imgPath,
  children
}: CommunityCardProps) {
  return (
    <div
      className={`${
        screen === "md"
          ? "hidden md:flex"
          : screen === "lg"
          ? "hidden lg:flex"
          : "flex"
      } w-full flex-col items-center gap-6 rounded-md
       bg-design-gray-background p-6 2xl:flex-row-reverse 2xl:gap-[4.625rem]`}
    >
      <img className="h-32 w-32" src={imgPath} alt="" />

      <div className="w-44">{children}</div>
    </div>
  )
}
