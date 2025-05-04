import {useId} from 'react'
import css from "./SearchBox.module.css"

export default function SearchBox({value, onChange}) {
  const inputId = useId();
  const handleChange = (event) => {
    onChange(event.target.value)
  }
  return (
<>
      <label id={inputId}>Find contacts by name</label>
      <input type="text" value={value} onChange={handleChange} name="search" id={inputId} />
      <p>{value}</p>
      
</>
)
}