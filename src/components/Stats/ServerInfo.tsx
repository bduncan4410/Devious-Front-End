export default function ServerInfo() {
    const testData = [
        { serverName: "Test Server", status: "Online", ip: "192.168.0.0:69420", playersOnline: 5, imageSource: "/images/GrassBlock.jpg" },
        { serverName: "Test Server", status: "Offline", ip: "255.255.255.255:25565", playersOnline: 9001, imageSource: "/images/GrassBlock.jpg" },
        { serverName: "Test Server", status: "Online", ip: "255.255.255.255:25565", playersOnline: 9001, imageSource: "/images/GrassBlock.jpg" },
        { serverName: "Test Server", status: "Online", ip: "255.255.255.255:25565", playersOnline: 9001, imageSource: "/images/GrassBlock.jpg" },
        { serverName: "Test Server", status: "Online", ip: "255.255.255.255:25565", playersOnline: 9001, imageSource: "/images/GrassBlock.jpg" },
        { serverName: "Test Server", status: "Online", ip: "255.255.255.255:25565", playersOnline: 9001, imageSource: "/images/GrassBlock.jpg" },
        { serverName: "Test Server", status: "Online", ip: "255.255.255.255:25565", playersOnline: 9001, imageSource: "/images/GrassBlock.jpg" },
    ]
    return (
        <>
            {testData.map((server, index) => {
                return <ServerBox key={index} serverName={server.serverName} status={server.status} ip={server.ip} playersOnline={server.playersOnline} imageSource={server.imageSource} />
            })};
        </>
    )
}
interface IServerBoxProps {
    serverName: string;
    status: string;
    ip: string;
    playersOnline: number;
    imageSource: string;
}
function ServerBox(props: IServerBoxProps) {
    const { serverName, status, ip, playersOnline, imageSource } = props;
    return (
        <div className="w-full p-2 md:w-4/12">
            <div className="relative aspect-square w-full">
                <img src={imageSource} className="absolute h-full w-full rounded-3xl object-cover opacity-60" alt="Background" />
                <div className="grid h-full place-items-center p-2">
                    <div className="relative rounded-3xl bg-transparent bg-center bg-no-repeat p-4">
                        <div className="mb-4 mt-5 text-center">
                            <p className="text-base font-bold text-white opacity-100">
                                {serverName}
                            </p>
                            {status === "Online" && (
                                <p className="mt-2 text-sm font-bold text-green-500 opacity-100">{status}</p>
                            )
                            }
                            {status === "Offline" && (
                                <p className="mt-2 text-sm font-bold text-red-500 opacity-100">{status}</p>
                            )}
                            <p className="mt-2 text-sm text-white opacity-100">IP Address: <span className="font-bold">{ip}</span></p>
                            <p className="mt-2 text-sm text-white opacity-100">Players Online: <span className="font-bold">{playersOnline}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}