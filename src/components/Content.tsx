import { DiscordAnnouncements } from "./DiscordAnnouncements";
interface ContentProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

export function Content(props: ContentProps) {
  const { title, children } = props;
  return (
    <div className="mx-auto flex flex-wrap pl-3">
      <div className="w-full rounded-3xl bg-slate-900 p-6 lg:w-8/12">
      <div className="mb-8 flex items-center justify-between text-white">
          <p className="text-2xl font-bold">{title}</p>
          
          <p className="">{new Date().toLocaleDateString()}</p>
        </div>
        {children}
      </div>
      <DiscordAnnouncements/>
    </div>
  );
}

