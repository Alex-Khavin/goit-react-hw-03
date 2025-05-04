import css from "./ContactList.module.css"
import Contact from "../Contact/Contact";

export default function ContactList({contacts}) {
  return (
    <ul className={css.container}>
        {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
            <Contact data={contact} />
        </li>
    ))}
    </ul>
  )
}