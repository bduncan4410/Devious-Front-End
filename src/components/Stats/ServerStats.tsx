export default function ServerStats() {
    const usersOnline = 5;
    const discordMembers = 1046;
    const staffOnline = 2;
    const stats = [
      {title: "User(s) Online", value: usersOnline},
      {title: "Discord Members", value: discordMembers},
      {title: "Staff Online", value: staffOnline}
    ]
    return (<div className="flex flex-wrap text-white justify-center">
    {stats.map((stat, index) => {
      return <Stat key={index} title={stat.title} value={stat.value} />
    }
    )}
  </div>);
}
interface IStatProps { title:string, value:string | number }

function Stat(props:IStatProps) {
  const {title, value} = props;
  return (<div className="mx-2 p-1 bg-slate-700 rounded-lg">
  <div className="text-2xl font-bold align-middle text-center">{value}</div>
  <div className="align-middle text-center">{title}</div>
</div>)
}