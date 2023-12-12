import { Content } from "../Content";
import ServerInfo from "./ServerInfo";
import ServerStats from "./ServerStats";

export default function StatsPage() {
  return (
    <Content title="Stats">
      <div className="flex flex-wrap">
        <div className="w-full rounded-3xl bg-slate-900 p-6 lg:w-full">
          <hr className="border-white border-1 w-full p-2" />
          <div className="flex mx-auto pb-8 items-center">
            <ServerStats />

          </div>
          <div className="flex flex-wrap">
            <ServerInfo />
          </div>
        </div>
      </div>
    </Content>
  );
}