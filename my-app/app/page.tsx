import Button from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <Link href="./home">Click Me</Link>
            <Button label='Click Me' />
        </div>
    )
}