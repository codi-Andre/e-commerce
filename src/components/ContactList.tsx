interface ContactListProps {
  title?: string
  list?: string[]
}

export function ContactList({ title, list }: ContactListProps) {
  return (
    <div>
      <h3 className="mb-6 text-title2">{title}</h3>
      <ul className="flex flex-col gap-3 text-text6 text-design-paragraph">
        {list?.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
