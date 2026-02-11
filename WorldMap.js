import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import './WorldMap.css';

const WorldMap = () => {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });

  useEffect(() => {
    // Load country data
    fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
      .then(res => res.json())
      .then(setCountries);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      // Auto-rotate
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      
      // Disable all user interactions
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().enablePan = false;
      globeEl.current.controls().enableRotate = false;
      globeEl.current.controls().enableDamping = false;
      
      // Set initial camera position
      globeEl.current.pointOfView({ altitude: 2 });
    }
  }, []);

  return (
    <div className="world-map">
      <div className="globe-container-3d">
        <Globe
          ref={globeEl}
          backgroundColor="rgba(0,0,0,0)"
          showGlobe={false}
          showAtmosphere={false}
          width={550}
          height={550}
          enablePointerInteraction={false}
          
          // Hexed polygons - no hover effects
          hexPolygonsData={countries.features}
          hexPolygonResolution={3}
          hexPolygonMargin={0.3}
          hexPolygonUseDots={true}
          hexPolygonColor={() => '#666666'}
          hexPolygonLabel={() => ''}
          onHexPolygonHover={() => {}}
          onHexPolygonClick={() => {}}
        />
      </div>
    </div>
  );
};

export default WorldMap;