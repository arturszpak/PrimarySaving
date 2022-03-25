import Image from 'next/image';

export const PricingPlansPreviewSingle = ({type, imgHeaderPath, price, paymentInterval, headerText, features, buttonText}) => {
  return (
    <div className="basis-1/1 sm:basis-4/5 md:basis-2/3 lg:basis-2/5 border-2 border-gray-400 rounded-lg hover:border-gray-800 cursor-pointer pb-8">
        <div className="relative h-0 pb-2/3 sm:pt-1/3 lg:pt-1/5">
            <Image src={imgHeaderPath} layout='fill' alt="" className='rounded-t-lg absolute inset-0 w-full h-full object-cover shadow-lg' />
        </div>
        <div className="p-4">
            <h2 className='text-xl'>{type} Plan</h2>
            <p className='font-bold text-3xl my-2'>{price} {paymentInterval!='' ? <span className='font-normal text-gray-400 text-sm'>/ {paymentInterval}</span>: ''}</p>
            <p>{headerText}</p>
            <ul className='list-disc pl-6 mt-2'>
                {
                    features.map(feature => <li key={feature}>{feature}</li>)
                }
            </ul>
            <button className="p-3 mt-8 text-gray-800 bg-amber-300 rounded font-bold hover:translate-x-2 ease-in-out duration-200"> {buttonText} </button>
        </div>
    </div>
  )
}