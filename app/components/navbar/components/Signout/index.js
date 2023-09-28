"use client";
import { useRouter } from "next/navigation";

export default function SignOut() {

    const router = useRouter()

    const handleOnClick = (e) => {
        e.preventDefault()
        router.push("/")
    }
    return(
        <button onClick={handleOnClick}>
            Log Out
        </button>
    )
}