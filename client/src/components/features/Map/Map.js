import { APIProvider, Map, Marker, useMapsLibrary } from '@vis.gl/react-google-maps';
import styles from './Map.module.scss';

const Maps = () => {
  const key = "AIzaSyBHrqLId2gyFL8m6eukd2_WR6Tj6_H7VhA";
  const circlesLibrary = useMapsLibrary('Circle');

  return (    
    <div className={styles["map"]}>
      <APIProvider apiKey={key}>
        <Map
          zoom={15}
          center={{lat: 52.732529, lng: 15.236930}}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          <Marker position={{lat: 52.732529, lng: 15.236930}} />
        </Map>
    </APIProvider>
    </div>
  )
}

export default Maps;