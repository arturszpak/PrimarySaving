import Link from "next/link"

export const Header = () =>{
  return (
    <div className="flex flex-col space-y-6 max-w-6xl m-auto pt-4 px-6">
        <h1 className="text-5xl font-bold leading-tight lg:leading-snug text-white">The smartest way to manage your finance and expenses</h1>
        <p className="font-medium text-lg text-gray-100">PrimarySaving is a tool that makes your spendings organized in one place. Easy, user-friendly interface and support 24/7. Start now and save for the future.</p>
        <div className="py-8">
            <Link href="/register">
                <button className="p-3 text-gray-800 bg-amber-300 rounded font-bold hover:translate-x-2 ease-in-out duration-200">Try for free</button>
            </Link>
        </div>
    </div>
  )
}