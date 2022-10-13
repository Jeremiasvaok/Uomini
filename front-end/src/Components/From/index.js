import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInAdmin } from "../../Redux/Actions";

const SignIn = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    console.log(input)
    const handleChange = (e) => {
        e.preventDefault();
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        if (input.email && input.password) {
            dispatch(signInAdmin(input))
            setInput({
                email: " ",
                password: " "
            })
        } else {
            alert('No se puede crear')
        }
    }
    return (
        <>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>Email</label>
           <input 
            value={input.email}
            name="email"
            type={'email'} 
            placeholder='write your email'
            onChange={(e)=>handleChange(e)}
            />
           <br/>
           <label>Password</label>
           <input 
            value={input.password}
            name="password"
            type={'password'} 
            placeholder="write your password"
            onChange={(e)=>handleChange(e)}
            />
           <br/>
           <input type={'submit'}/>
          </form>
        </>
    )
}

export default SignIn 