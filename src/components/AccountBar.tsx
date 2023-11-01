import bagIcon from "../assets/icons/bag.svg"
import userIcon from "../assets/icons/user.svg"

export function AccountBar() {
  return (
    <div className="flex items-center gap-4 lg:gap-6">
      <button
        className="hidden rounded-full bg-design-primary px-7 py-4 
      text-text2 text-white lg:inline-block"
      >
        Help
      </button>

      <button className="flex gap-2">
        <img className="icon" src={userIcon} alt="" />

        <span className="sr-only text-text6 lg:not-sr-only">Account</span>
      </button>

      <button className=" flex gap-2">
        <div className="relative">
          <img className="icon" src={bagIcon} alt="" />

          <span
            aria-hidden
            className="icon absolute -right-3 -top-3 flex items-center
           justify-center rounded-full bg-design-primary text-text1 
          text-white lg:-top-5 2xl:-top-6"
          >
            16
          </span>
        </div>

        <span className="sr-only text-text6 lg:not-sr-only">Shopping</span>
      </button>
    </div>
  )
}
