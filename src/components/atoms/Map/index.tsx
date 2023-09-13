"use client";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useEffect, useMemo, useState } from "react";
import { MapProps } from "./types";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function Map(props: MapProps) {
  const { center, googlePlaceId } = props;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCEfoHCwxacPDgtKN0agutKol4gZgb6U6c",
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  let service = useMemo(
    () => (map ? new google.maps.places.PlacesService(map) : null),
    [map]
  );

  useEffect(() => {
    if (service && googlePlaceId) {
      service.getDetails(
        {
          placeId: googlePlaceId,
        },
        function (result, status) {
          var marker = new google.maps.Marker({
            map: map,
            // @ts-ignore
            place: {
              placeId: googlePlaceId,
              // @ts-ignore
              location: result.geometry.location,
            },
          });

          var infoWindow = new google.maps.InfoWindow({
            content: result?.name,
          });

          marker.addListener("click", () => {
            infoWindow.open({
              map: map,
              anchor: marker,
            });
          });

          infoWindow.open({
            map: map,
            anchor: marker,
          });
        }
      );
    }
  }, [googlePlaceId, map, service]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={19}
      onLoad={onLoad}
      onUnmount={onUnmount}
      clickableIcons={false}
      options={{
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
      }}
    />
  ) : null;
}
