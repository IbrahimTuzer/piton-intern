import Info from './components/Info';
import Team from './components/Team';
import Metrics from './components/Metrics';


export default function Home() {
  return (
    <div>
      <div className="mt-44"><Info/></div>
      <div className="mt-44"><Team/></div>
      <div className="mt-44"><Metrics/></div>
    </div>
  );
}
