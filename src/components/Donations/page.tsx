import { Content } from "../Content";
import { DonationCard } from "./DonationsCard";

export default function DonationPage() {
    return (
        <Content title="Donations">
        <div className="flex flex-wrap">
            <div className="w-full rounded-3xl bg-slate-900 p-6 lg:w-full">
            <hr className="border-white border-1 w-full p-2" />
            <div className="grid grid-cols-3 gap-x-4 gap-y-4 mx-auto pb-8">
                {sampleDonationStats.map((stat, index) => {
                return <DonationCard key={index} rank={stat.rank} icon={stat.icon} rewards={stat.rewards} price={stat.price} />
                
                })}
            </div>
            </div>
        </div>
        </Content>
    );
    }
    const sampleDonationStats: any[] = [
        { rank: "VIP", icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7ElEQVR4nO2ZMQ7CMBAEfQ/0U2j4TJ5A48pVWn6QggeEOhVukGigMxcpp1wQjg+zK21nJTfelRPJzkEQ9FXR4fhcs7MsAkDlXR/vj1WbqxMBwNCu++G66jilbKpVJwBMFRIgoTa8ElJtxnTLltZQaRgAJKMJeF4VoVqamhEAWkyANg6t+ZC5cM72pWEAMPxAAlHRbwB8qmYTiGxozUASgOtOiwZA8wl4zXCS+8uyw3sNAJpJgIs/dDY07680HLewnvb8nQZA10oCoXDvAdAbSoBr9jLNEbnncakRAELlBLZeK5m+LyMAQBD0t3oBWfH+d0H6Ew0AAAAASUVORK5CYII="/>, rewards: ["Access to /fly", "Access to /nick", "Access to /hat"], price: "$5" },
        { rank: "VIP+", icon: <i className="fas fa-star"></i>, rewards: ["Access to /fly", "Access to /nick", "Access to /hat"], price: "$10" },
        { rank: "MVP", icon: <i className="fas fa-star"></i>, rewards: ["Access to /fly", "Access to /nick", "Access to /hat"], price: "$15" },
        { rank: "MVP+", icon: <i className="fas fa-star"></i>, rewards: ["Access to /fly", "Access to /nick", "Access to /hat"], price: "$20" },
        { rank: "MVP++", icon: <i className="fas fa-star"></i>, rewards: ["Access to /fly", "Access to /nick", "Access to /hat"], price: "$25" },
    ]
