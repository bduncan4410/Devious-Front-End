interface DonationCardProps {
    rank: string,
    icon: JSX.Element,
    rewards: string[],
    price: string
}
export function DonationCard(props: DonationCardProps) {
    const { rank, icon, rewards, price } = props;
    return (
    <div className="max-w-sm overflow-hidden rounded p-6 shadow-lg">
        <div className="flex justify-center">
            <div className="-mb-8 flex h-16 w-16 items-center justify-center rounded-full p-0 text-white">
                {icon}
            </div>
        </div>
        <div className="rounded-md bg-gray-500  p-1">
        <div className="rounded-md bg-gray-200  p-5">
        <div className="mb-2 mt-0 text-center">
            <span className="text-lg font-bold">{rank}</span>
        </div>
        <ul className="mb-4 list-disc pl-5 text-sm text-gray-700">
            {rewards.map((reward, index) => {
                return <li key={index}>{reward}</li>
            })}
        </ul>
        <div className="mt-4 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-900">{price}</span>
        </div>
        </div>
        </div>
    </div>
    )
}