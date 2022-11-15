import { useState } from "react";
import { useDispatch } from 'react-redux'
import { useHref } from "react-router-dom";
import { searchProduct } from "../../Redux/Actions";

export default function SearchBar(){
    const[input, setInput] = useState('');
    
    const dispatch = useDispatch()
   
    const handleSubmit = e =>{
           if(input === ''){
            alert(' no se encuetra lo que estas buscando')
           }
            e.preventDefault();
            dispatch(searchProduct(input))
            useHref
            setInput("")
        }
    const handleChange = e =>{
            e.preventDefault();
            setInput(e.target.value)
        }
    return(
    <div >
        <form onSubmit={handleSubmit}>
            <input
             type={'text'}
             placeholder={'Busca un producto'}
             value={input}
             onChange={e => handleChange(e)}
            />
            <button type={'submit'}>Buscar</button>
         </form>
    </div>
    )
}