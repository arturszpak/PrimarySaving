import { PricingPlansPreviewSingle } from "./PricingPlansPreviewSingle"

export const PricingPlansPreview = () => {

    // Dummy text for now
    // Move this to DB 
    const plansData = [
        {
            type: 'Basic',
            imgHeaderPath: '/unsplash-basic-plan.jpg',
            price: 'FREE',
            paymentInterval: '',
            headerText: 'This plan is for people who want to save money for small expenses.',
            features:[
                'its great', 'its free', 'lots of great stuff', 'charts with data'
            ],
            buttonText: 'Try for free'
        },
        {
            type: 'Premium',
            imgHeaderPath: '/unsplash-premium-plan.jpg',
            price: '$20',
            paymentInterval: 'month',
            headerText: 'Premium plan will be perfect for you if you want to be serious about your savings and expenses.',
            features:[
                'more stuff', 'support 24/7', 'amazing charts and features', 'lots more'
            ],
            buttonText: 'Choose plan'
        }
    ];



  return (
    <div className="w-[100%] m-auto bg-white p-8 mb-10">
        <header >
            <h2 className='text-4xl py-2 mb-6 text-gray-800'>Create your wallet now</h2>
            <p className='text-md mb-14 text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In beatae harum quod dignissimos facere quos, laborum iure est, ea, nostrum minima at unde nihil fugit veritatis error a. Laboriosam, iste! Molestiae quisquam eaque cupiditate dignissimos! Dolor dicta nulla eligendi sunt pariatur quisquam iure esse beatae, possimus saepe fuga voluptatem. Autem.</p>
        </header>
        <div className="flex justify-around flex-wrap gap-10 ">
            {
                plansData.map(plan => <PricingPlansPreviewSingle key={plan.type} {...plan} />)
            }
        </div>
    </div>
  )
}