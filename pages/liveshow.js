import 'video-react/dist/video-react.css';
import Layout from '../components/Layout';
import { Player } from 'video-react';

export default function LiveShow(props) {
  return (
    <Layout title="Live Show">
      <div className=" text-white">
        <Player
          playsInline
          poster="https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/images/decision.png"
          src="https://milkywayfiasco.sfo2.cdn.digitaloceanspaces.com/hls/decision/decision_http.m3u8"
          ControlBar
          ReplayControl
          ForwardControl
          CurrentTimeDisplay
          TimeDivider
          PlaybackRateMenuButton
          VolumeMenuButton
        />
      </div>
    </Layout>
  );
}
