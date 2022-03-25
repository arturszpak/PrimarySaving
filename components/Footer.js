import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="bg-black text-gray-200 ">
      <div className="p-12 flex flex-col md:flex-row md:justify-between lg:max-w-6xl lg:m-auto">
        <div className="flex flex-col sm:mb-14">
          <div className="relative w-36 h-20">
              <Image src="/logo.png" layout='fill' />
          </div>
          <p className='text-xs mt-1'>Modern app to save money.</p>
        </div>
        <div className="flex mt-8 justify-between gap-10 md:min-w-[60%] ">
          <div className="flex flex-col basis-1/2 md:min-w-fit">
            <h4 className='font-bold'>Company</h4>
            <hr className='border-gray-500 my-4' />
            <ul className='uppercase'>
              <li className='my-2 text-sm cursor-pointer hover:underline'>about us</li>
              <li className='my-2 text-sm cursor-pointer hover:underline'>blog</li>
              <li className='my-2 text-sm cursor-pointer hover:underline'>careers</li>
              <li className='my-2 text-sm cursor-pointer hover:underline'>contact</li>
            </ul>
          </div>
          <div className="flex flex-col basis-1/2 md:min-w-fit">
            <h4 className='font-bold'>Stay connected</h4>
            <hr className='border-gray-500 my-4' />
            <ul className='uppercase'>
              <li className='my-2 text-sm cursor-pointer hover:underline'>linkedin</li>
              <li className='my-2 text-sm cursor-pointer hover:underline'>twitter</li>
              <li className='my-2 text-sm cursor-pointer hover:underline'>facebook</li>
              <li className='my-2 text-sm cursor-pointer hover:underline'>instagram</li>
            </ul>
          </div>
        </div>
      </div>
      
      <hr className='border-gray-500 my-8' />
      <div className="flex flex-col pb-8 px-12">
        <p className="mb-3">@ 2022 PrimarySaving</p>
        <p className="my-1 text-gray-500 cursor-pointer">Privacy policy</p>
        <p className="my-1 text-gray-500 cursor-pointer">Terms</p>
      </div>


    </div>
  )
}