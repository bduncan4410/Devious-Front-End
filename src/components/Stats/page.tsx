import { Content } from "../Content";
import ServerInfo from "./ServerInfo";

export default function StatsPage() {
  return (
    <Content title="Servers">
      <div className="flex flex-wrap">
        <ServerInfo />
      </div>
    </Content>
  );
}