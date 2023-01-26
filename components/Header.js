
import ReactPlayer from 'react-player';
import { useState } from 'react';
import styles from '../styles/Header.module.css';
const Header = () => {
  const [onAir, setOnAir] = useState(false);
 const onProgress = ({played}) => {
if (played >= 0  && !onAir){
setOnAir(true)
}
 }
  return (
    <div className={styles.container}>
    <div className={
      onAir
       ? styles.live: styles.offAir}>
          <div className='player-wrapper'>
          <ReactPlayer 
            className='react-player'
          url='https://lfc.milkywayfiasco.com/hls/stream/index.m3u8'
    autoplay={true}
    playing={true}
    controls={true}
    playsinline={true}
    onProgress={onProgress}
    width="100%"
    height="100%"
/>
        </div>
     </div>
    </div>
  )
}

export default Header
