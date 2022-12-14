import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInAdmin, setToken } from "../../Redux/Actions";


const SignIn = () => {

    const dispatch = useDispatch()
    const {token} = useSelector(state => state.signInAdmin)
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const userToken = token
    useEffect(()=>{
        console.log(userToken)
    })
     const [user, setUser] = useState({})
    
    setToken(token)
    // useEffect(() => {
    //     const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    //     console.log(loggedUserJSON)
    //     if (loggedUserJSON) {
    //       const user = JSON.parse(loggedUserJSON)
    //       setUser(user)
    //       setToken(token)
    //     }
    //   }, [])
    const handleChange = (e) => {
        e.preventDefault();
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    let handleLogin = async(e) => {
        e.preventDefault();
        try {
            if (input.email && input.password) {
                dispatch(signInAdmin(input))
                //   setUser()
                 
                //   setToken(token)
                
                //  window.localStorage.setItem(
                //     'loggedNoteappUser', JSON.stringify(user)
                //   ) 
                setInput({
                    email: "",
                    password: ""
                })
            } else {
                alert('No se puede crear')
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
            <form onSubmit={(e) => handleLogin(e)}>
                <label>Email</label>
                <input
                    value={input.email}
                    name="email"
                    type={'email'}
                    placeholder='write your email'
                    onChange={(e) => handleChange(e)}
                />
                <br />
                <label>Password</label>
                <input
                    value={input.password}
                    name="password"
                    type={'password'}
                    placeholder="write your password"
                    onChange={(e) => handleChange(e)}
                />
                <br />
                <input type={'submit'} />
            </form>
        </>
    )
}

export default SignIn 