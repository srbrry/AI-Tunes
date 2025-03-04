import { useState } from "react"
import { logIn  } from "../../utilities/users-service"
import { getAllUsers } from "../../utilities/users-api"

export default function LoginForm({setUser}) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState('')

    function handleChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault()
            const user = await logIn(credentials)
            setUser(user)
            getAllUsers()
            
        } catch {
            setError('Error Logging In')
        }
    }

    return (
        <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required 
                    />
                    <label>Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required 
                    />
                    <button type="submit">Sign In</button>
                </form>
                <p className="error-message">{error}</p>
            </div>
    )
}