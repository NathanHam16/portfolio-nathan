"use client";
import { useRouter } from "next/navigation";

export default function SignUp() {

    const router = useRouter()

    const handleOnClick = (e) => {
        e.preventDefault()
        router.push("/dashboard")
    }
    return(
        <button onClick={handleOnClick}>
            Log In
        </button>
    )
}