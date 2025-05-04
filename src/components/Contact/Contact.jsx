import css from "./Contact.module.css"

export default function Contact({ data }) {
    
    return (
        <>
            <div className={css.container}>
                <p>{data.name}</p>
                <p>{data.number}</p>
                <button>Delete</button>
            </div>
        </>
    )
};