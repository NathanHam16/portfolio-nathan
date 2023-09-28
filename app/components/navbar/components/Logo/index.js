// Logo component
import { useRouter } from "next/navigation";

export default function Logo() {
    const router = useRouter();
    const handleOnClick = () => {
      router.push("/calendar");
    };
    return <div className="logo" onClick={handleOnClick}>GoTask</div>;
  }