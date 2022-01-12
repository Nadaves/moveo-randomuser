import React from "react";

function Map({ lat, long }) {
  const src = `https://maps.google.com/maps?q=${lat},%20${long}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="600"
          height="500"
          id="gmap_canvas"
          src={src}
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
