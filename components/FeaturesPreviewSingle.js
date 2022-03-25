import {
    CashIcon,
    ChartBarIcon,
    BellIcon
} from '@heroicons/react/outline';

export const FeaturesPreviewSingle = () => {
  return (
        <div className="border-2 border-gray-600 py-6 px-10 md:basis-1/2 md:m-auto lg:basis-[30%] cursor-pointer hover:border-gray-900 ">
            <h5 className="text-sm mb-10 border-gray-700 ">Feature name</h5>
            <div className="icon-container">
                <ChartBarIcon className='text-lime-600 h-24 mb-4' />
            </div>
            <h3 className='text-3xl my-4'>Feature short desc Lorem ipsum dolor sit amet.</h3>
            <p className='my-4 text-gray-800 text-md text-justify'>description <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, molestiae repudiandae recusandae rerum, rem voluptate est fugiat repellendus possimus laborum totam eaque officiis quis quos nobis nemo animi cum quibusdam omnis fuga sint accusantium! Voluptates neque fugiat consequatur rem voluptatibus.</p>
            <ul className='text-gray-800 my-4 text-md list-disc pl-8'>
                <li className='my-1'>value</li>
                <li className='my-1'>value</li>
                <li className='my-1'>value</li>
                <li className='my-1'>value</li>
            </ul>
        </div>
  )
}