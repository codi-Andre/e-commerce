interface AccordionProps {
  label?: string
  list?: string[]
  active?: boolean
}

export function Accordion({ active, label, list }: AccordionProps) {
  return (
    <div>
      <button
        className={`${
          active
            ? "bg-design-third text-white"
            : "bg-design-gray-background text-design-text"
        } flex w-full items-center justify-between rounded-full
         px-6 py-4 text-title1`}
      >
        <span>{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18 9L12.7071 14.2929C12.3166 14.6834 11.6834 14.6834 11.2929 14.2929L6 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul className="pl-6 text-text6">
        {list?.map((item) => (
          <li
            key={item}
            className="border-b-[1px] border-design-border last:border-b-0"
          >
            <a href="#" className="block py-3">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
