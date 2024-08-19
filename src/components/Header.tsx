import Link from "next/link"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <h1 className="font-bold">POC User Firebase</h1>
      <div className="space-x-2">
        <Link href="/">
          <Button>Create User</Button>
        </Link>
        <Link href="/users-list">
          <Button variant={"outline"}>Users List</Button>
        </Link>
      </div>
    </header>
  )
}

export default Header;