import { DiscordAnnouncements } from "./DiscordAnnouncements";
interface ContentProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

export function Content(props: ContentProps) {
  const { title, children } = props;
  return (
    <div className="relative mx-auto flex flex-wrap px-3 min-h-[80vh] max-h-[80vh]">
      <div className="w-full rounded-lg bg-slate-900 bg-opacity-75 p-6 lg:w-8/12">
      <div className="mb-8 flex items-center justify-between text-white">
          <p className="text-2xl font-bold">{title}</p>
        </div>
        <div className="overflow-y-auto">
        {children}
        </div>
      </div>
      <DiscordAnnouncements/>
    </div>
  );
}

