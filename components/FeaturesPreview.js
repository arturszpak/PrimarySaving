import Link from "next/link"
import { FeaturesPreviewSingle } from './FeaturesPreviewSingle.js'

export const FeaturesPreview = () => {
  return (
    <div className="w-[100%] m-auto bg-white min-h-[80vh] p-8 mb-10">
        <header >
            <h2 className='text-4xl py-2 mb-6 text-gray-800'>Create your wallet now</h2>
            <p className='text-md mb-14 text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In beatae harum quod dignissimos facere quos, laborum iure est, ea, nostrum minima at unde nihil fugit veritatis error a. Laboriosam, iste! Molestiae quisquam eaque cupiditate dignissimos! Dolor dicta nulla eligendi sunt pariatur quisquam iure esse beatae, possimus saepe fuga voluptatem. Autem.</p>
        </header>
        <div className="flex justify-between flex-wrap gap-10">
            <FeaturesPreviewSingle />
            <FeaturesPreviewSingle />
            <FeaturesPreviewSingle />
        </div>
        <div className="flex justify-center">
          <Link href="/register">
            <button className="p-3 mt-8 text-gray-800 bg-amber-300 rounded font-bold hover:translate-x-2 ease-in-out duration-200">Try for free</button>
          </Link>
        </div>
    </div>
  )
}