"use client"
import {Input} from "ui";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
        User-main-app
        <button onClick={()=>signIn()}>Sign In</button>
        <Input/>
    </div>
  );
}
