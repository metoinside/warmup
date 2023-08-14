"use client"

import Link from "next/link"
import { useState } from "react"

export default function SignupPage() {
    const [user, setUser] = useState({
        email:"",
        password: "",
        username: "",
    })

    const onSignUp = async () => {

    }
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-white text-2xl">Signup</h1>
            <hr />

            <label htmlFor="username"> username</label>
            <input
                className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.username}
                onChange={(event) => setUser({...user, username: event.target.value})}
                placeholder="username"
                />
            <label htmlFor="password"> password</label>
            <input
                className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                value={user.username}
                onChange={(event) => setUser({...user, password: event.target.value})}
                placeholder="password"
                />
            <label htmlFor="email"> email</label>
            <input
                className="p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="text"
                value={user.email}
                onChange={(event) => setUser({...user, email: event.target.value})}
                placeholder="email"
                />
            <button
                onClick={onSignUp}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"    
            >Sign Up Here</button>
            <Link href="/login">Visit login</Link>
        </div>
    )
}