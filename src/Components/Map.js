import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  width: 100%;
`;

const getIsMobile = () => window.innerWidth <= 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return isMobile;
}

function Map({ lat, long }) {
  const isMobile = useIsMobile();
  console.log(lat, long);
  const src = `https://maps.google.com/maps?q=${
    lat / 2
  },%20${long}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  return (
    <Container>
      <iframe
        title="Map"
        width={isMobile ? "350" : "400"}
        height={isMobile ? "250" : "400"}
        zoom="0"
        src={src}
        scrolling="no"
        marginWidth="0"
      ></iframe>
    </Container>
  );
}

export default Map;
