import "./GoogleMap.css";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { getPath } from "../../utils/pathGenerator";

function GoogleMap() {
  const [openMarkerIndex, setOpenMarkerIndex] = useState(null);

  const handleMarkerClick = (index) => {
    setOpenMarkerIndex(index);
  };

  return (
    <APIProvider apiKey={"AIzaSyBKsxB7SuZvOCJUCfWSsW9jkBRKtYBa0MY"}>
      <div className="google-map__wrapper">
        <div className="google-map__map">
          <Map
            mapId={"89d3de76b192536f"}
            defaultCenter={{ lat: 38.5, lng: -77 }}
            defaultZoom={6}
            gestureHandling={"greedy"}
            disableDefaultUI={false}
            fullscreenControl={false}
          >
            {getPath().map((item, index) => (
              <div key={index}>
                {/* AdvancedMarker */}
                <AdvancedMarker
                  position={{ lat: item.lat, lng: item.long }}
                  onClick={() => handleMarkerClick(index)}
                ></AdvancedMarker>

                {/* Conditionally render InfoWindow */}
                {openMarkerIndex === index && (
                  <InfoWindow
                    position={{ lat: item.lat, lng: item.long }}
                    onCloseClick={() => setOpenMarkerIndex(null)}
                  >
                    <div>
                      <h3>Marker Info</h3>
                      <p>Lat: {item.lat}</p>
                      <p>Lng: {item.long}</p>
                    </div>
                  </InfoWindow>
                )}
              </div>
            ))}
          </Map>
        </div>
      </div>
    </APIProvider>
  );
}

export default GoogleMap;
