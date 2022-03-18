import {
    MenuIcon
} from '@heroicons/react/outline';
import Image from 'next/image';

function Header() {
  return (
        <header className="text-white min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] clip-br-95 pt-4 px-6">
            <div className="flex items-start justify-between">
                <div className="relative w-36 h-20 cursor-pointer">
                    <Image src="/logo.png" layout='fill' />
                </div>

                <div className="login-btns flex items-center space-x-4">
                    <button className="p-2 border-2 border-white rounded whitespace-nowrap font-bold hover:-translate-y-0.5  ease-out duration-100">Get Started</button>
                    <button className="p-2 whitespace-nowrap hidden md:block">Sign In</button>
                    <MenuIcon className="h-8 md:hidden" />
                </div>
            </div>
            <div className="flex flex-col space-y-6 mt-16 lg:mt-32">
                <h1 className="text-5xl font-bold leading-tight lg:leading-snug text-white">The smartest way to manage your finance and expenses</h1>
                <p className="font-medium text-lg">PrimarySaving is a tool that makes your spendings organized in one place. Easy, user-friendly interface and support 24/7. Start now and save for the future.</p>
                <div className="py-8">
                    <button className="p-3 text-gray-800 bg-amber-300 rounded font-bold hover:translate-x-2 ease-in-out duration-200">Try for free</button>
                </div>
            </div>


		</header>
  )
}
export default Header