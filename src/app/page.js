import Image from 'next/image';
import Info from './components/Info';
import Team from './components/Team';
import Metrics from './components/Metrics';


export default function Home() {
  return (
    <div style={{ marginBottom: '100x' }}>
      <Info/>
      <Team/>
      <Metrics/>
     piton intern
    </div>
  );
}
