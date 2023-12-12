interface IDiscordContentProps {
    img: JSX.Element;
    username: string;
    message: string;
    date: Date;
}

export function DiscordContent(props:IDiscordContentProps): JSX.Element {
    const {img, username, message, date} = props;
  return (
    <div className="flex w-full border-t border-gray-700 p-4 hover:bg-gray-700 2xl:items-start">
              {img}
              <div className="w-full pl-4">
                <div className="flex w-full items-center justify-between">
                  <div className="font-medium text-white">{username}</div>
                  <div className="flex h-7 w-7 cursor-pointer items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                </div>
                <p className="my-2 text-sm text-gray-400">
                  {message}
                </p>
                <p className="text-right text-sm text-gray-400">{`${date.toLocaleString()}`}</p>
              </div>
            </div>
  );
}
export function DiscordAnnouncements(): JSX.Element {

    const content = sampleData?.map((item:any, index:number) => {
        return (
            <DiscordContent
                key={index}
                img={<img src={item.avatar} alt="Discord Avatar" className="h-12 w-12 rounded-full" />}
                username={item.username}
                message={item.content}
                date={new Date(item.timestamp)}
            />
        );
    });
    return (
    <div className="mt-8 w-full lg:mt-0 lg:w-4/12 lg:pl-4">
    <div className="rounded-3xl bg-slate-900 px-6 pt-6">
      <div className="flex pb-6 text-2xl font-bold text-white">
        <p>Discord Announcments</p>
      </div>
      <div className="py-6">
        {content}
      </div>
    </div>
  </div>
)
}
const sampleData = [
    {
      "username": "Devious",
      "avatar": "/images/DeviousMain.png",
      "content": "Welcome to the Devious Discord Server!",
      "timestamp": new Date().toISOString()
    },
    {
      "username": "Devious",
      "avatar": "/images/DeviousMain.png",
      "content": "Sample Text from discord goes here.",
      "timestamp": new Date().getTime()-1000*60*60*24
    },
    {
      "username": "Devious",
      "avatar": "/images/DeviousMain.png",
      "content": "Sample Text from discord goes here.",
      "timestamp": "2021-10-30T19:30:00.000Z"
    },
    {
      "username": "Devious",
      "avatar": "/images/DeviousMain.png",
      "content": "Sample Text from discord goes here.",
      "timestamp": "2021-10-30T19:30:00.000Z"
    },]