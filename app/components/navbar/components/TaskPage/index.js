"use client";
import { useRouter } from "next/navigation";

export default function Tasks() {

    const router = useRouter()

    const handleOnClick = (e) => {
        e.preventDefault()
        router.push("/Tasks")
    }
    return(
        <div className="className='container'">
            <button onClick={handleOnClick}>
            Tasks
            </button>
        </div>
    )
}