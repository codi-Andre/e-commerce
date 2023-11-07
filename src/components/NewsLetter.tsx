export function NewsLetter() {
  return (
    <div className="bg-design-news-letter rounded-md px-4 py-8 text-white md:px-28">
      <h3 className="mb-2 text-title2 md:text-title3">Yes!</h3>

      <p className="mb-6 max-w-[48ch] text-text2 md:mb-12 md:text-text6 2xl:text-title3">
        Send me exclusive offers, unique gift ideas, and personalized tips for
        shopping and selling on Commerce.
      </p>

      <div className="relative flex flex-1 flex-col lg:mx-auto lg:w-[47rem]">
        <input
          className="mb-4 rounded-full px-6 py-4 text-text1 text-black"
          placeholder="Drop your email"
          type="text"
        />

        <button
          className="flex items-center justify-center gap-2 rounded-full bg-design-primary px-6 py-2
               text-text2 md:absolute md:right-2 md:top-2"
        >
          <span>Subscribe</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M9.33325 4L13.3333 8M13.3333 8L9.33325 12M13.3333 8H3.33325"
              stroke="white"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <p className="hidden text-center text-text2 text-design-light 2xl:block">
        First order only. You’re ready?
      </p>
    </div>
  )
}
