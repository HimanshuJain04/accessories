"use client";
import { signIn, signOut } from "next-auth/react"

export function SignInButton() {
  return (
    <>
        <button onClick={()=>signIn()}>Sign In</button>
        <button onClick={()=>signOut()}>Logout</button>
    </>
  )
}

