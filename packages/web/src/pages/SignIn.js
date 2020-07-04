import React, { useState } from 'react'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:8000/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(r => r.json())
            .then(data => console.log('Data:', data))
    }

    const handleEmailChange = ({ target: { value } }) => setEmail(value)
    const handlePasswordChange = ({ target: { value } }) => setPassword(value)

    return (
        <form action="/authenticate" method="POST" onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" inputMode="email" autoComplete="username" value={email} onChange={handleEmailChange} />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Senha</label>
                <input id="password" type="password" autoComplete="current-password" value={password} onChange={handlePasswordChange} />
            </fieldset>
            <button type="submit">Entrar</button>
        </form>
    )
}
