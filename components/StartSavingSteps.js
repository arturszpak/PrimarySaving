export const StartSavingSteps = () => {
  return (
    <div className="w-[100%] m-auto bg-white min-h-[80vh] p-8 mb-10">
        <header >
            <h2 className='text-4xl py-2 mb-6 text-gray-800'>Start saving money with PrimarySaving in 5 steps</h2>
            <p className='text-md mb-14 text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In beatae harum quod dignissimos facere quos, laborum iure est, ea, nostrum minima at unde nihil fugit veritatis error a. Laboriosam, iste! Molestiae quisquam eaque cupiditate dignissimos! Dolor dicta nulla eligendi sunt pariatur quisquam iure esse beatae, possimus saepe fuga voluptatem. Autem.</p>
        </header>
        <div className="flex justify-between flex-wrap gap-10">
            {
                plansData.map(plan => <PricingPlansPreviewSingle {...plan} />)
            }
        </div>
    </div>
  )
}