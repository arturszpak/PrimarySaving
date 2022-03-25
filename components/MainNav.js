import {
    MenuIcon
} from '@heroicons/react/outline';
import Link from 'next/link'
import Image from 'next/image';

export const MainNav = () => {
  return (
    <nav className="text-white mb-20 clip-br-95 pt-4 px-6">
        <div className="flex items-start justify-between">
            <div className="relative w-36 h-20 cursor-pointer">
                <Image src="/logo.png" layout='fill' />
            </div>

            <div className="login-btns flex items-center space-x-4">

                <Link href="/register">
                    <button className="p-2 border-2 border-white rounded whitespace-nowrap font-bold hover:-translate-y-0.5  ease-out duration-100">Get Started</button>
                </Link>
                <Link href="/login">
                    <button className="p-2 whitespace-nowrap hidden md:block">Sign In</button>
                </Link>
                <MenuIcon className="h-8 md:hidden cursor-pointer" />
            </div>
        </div>
    </nav>
  )
}