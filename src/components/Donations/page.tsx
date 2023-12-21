import { Content } from "../Content";
import { DonationCard } from "./DonationsCard";

export default function DonationPage() {
    return (
        <Content title="Donations">
            <hr className="border-white border-1 w-full p-2" />
            <div className="grid grid-cols-3 gap-x-4 gap-y-4 mx-auto pb-8">
                {ranks.map((stat, index) => {
                    return <DonationCard key={index} rank={stat.rank} icon={stat.icon} rewards={stat.rewards} price={stat.price} />

                })}
            </div>
        </Content>
    );
}
const ranks: Rank[] = [
    {
        rank: "Apprentice Deviant",
        icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7ElEQVR4nO2ZMQ7CMBAEfQ/0U2j4TJ5A48pVWn6QggeEOhVukGigMxcpp1wQjg+zK21nJTfelRPJzkEQ9FXR4fhcs7MsAkDlXR/vj1WbqxMBwNCu++G66jilbKpVJwBMFRIgoTa8ElJtxnTLltZQaRgAJKMJeF4VoVqamhEAWkyANg6t+ZC5cM72pWEAMPxAAlHRbwB8qmYTiGxozUASgOtOiwZA8wl4zXCS+8uyw3sNAJpJgIs/dDY07680HLewnvb8nQZA10oCoXDvAdAbSoBr9jLNEbnncakRAELlBLZeK5m+LyMAQBD0t3oBWfH+d0H6Ew0AAAAASUVORK5CYII=" />,
        rewards: ["50 more claimed chunks!",
            "20 more coins per hour!",
            "Access to /nick",
            "Exclusive Apprentice Deviant tag",
            "Exclusive Premium chat",
            "Sneak peek at upcoming features",
            "3 homes",
            "No command warmup",
            "Less cooldowns"],
        price: "$5",
        imgUrl: ""
    },
    {
        rank: "Mastermind Maverick",
        icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7ElEQVR4nO2ZMQ7CMBAEfQ/0U2j4TJ5A48pVWn6QggeEOhVukGigMxcpp1wQjg+zK21nJTfelRPJzkEQ9FXR4fhcs7MsAkDlXR/vj1WbqxMBwNCu++G66jilbKpVJwBMFRIgoTa8ElJtxnTLltZQaRgAJKMJeF4VoVqamhEAWkyANg6t+ZC5cM72pWEAMPxAAlHRbwB8qmYTiGxozUASgOtOiwZA8wl4zXCS+8uyw3sNAJpJgIs/dDY07680HLewnvb8nQZA10oCoXDvAdAbSoBr9jLNEbnncakRAELlBLZeK5m+LyMAQBD0t3oBWfH+d0H6Ew0AAAAASUVORK5CYII=" />,
        rewards: [
            "100 more claimed chunks!",
            "40 more coins per hour!",
            "Access to /nick",
            "Exclusive Mastermind Maverick tag",
            "Exclusive Premium chat",
            "Sneak peek at upcoming features",
            "5 homes",
            "No command warmup",
            "halved cooldowns",
            "Access to /hat",
            "Access to /craft",
            "Access to /enderchest"
        ],
        price: "$5",
        imgUrl: ""
    },

]

type Rank = {
    rank: string;
    icon: any;
    rewards: string[];
    price: string;
    imgUrl: string;
}