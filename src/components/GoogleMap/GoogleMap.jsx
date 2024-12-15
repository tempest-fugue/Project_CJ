import "./GoogleMap.css";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function GoogleMap() {
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
            <AdvancedMarker
              position={{ lat: 33.75, lng: -84.39 }}
            ></AdvancedMarker>
            <AdvancedMarker
              position={{ lat: 35.23, lng: -80.84 }}
            ></AdvancedMarker>
            <AdvancedMarker
              position={{ lat: 40.71, lng: -74 }}
            ></AdvancedMarker>
            <AdvancedMarker
              position={{ lat: 42.36, lng: -71.06 }}
            ></AdvancedMarker>
          </Map>
        </div>
      </div>
    </APIProvider>
  );
}

export default GoogleMap;
