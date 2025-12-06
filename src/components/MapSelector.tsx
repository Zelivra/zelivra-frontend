import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, useMapEvents } from 'react-leaflet';
import { LatLng } from 'leaflet';
import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';
import '../styles/MapSelector.css';

interface MapSelectorProps {
  onAreaSelected: (coordinates: { lat: number; lng: number }[]) => void;
}

const MapClickHandler: React.FC<{
  onMapClick: (latlng: LatLng) => void;
}> = ({ onMapClick }) => {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng);
    },
  });
  return null;
};

const MapSelector: React.FC<MapSelectorProps> = ({ onAreaSelected }) => {
  const { t } = useTranslation();
  const [points, setPoints] = useState<LatLng[]>([]);

  const handleMapClick = (latlng: LatLng) => {
    setPoints((prev) => [...prev, latlng]);
  };

  const handleClear = () => {
    setPoints([]);
  };

  const handleSave = () => {
    if (points.length >= 3) {
      const coordinates = points.map((p) => ({ lat: p.lat, lng: p.lng }));
      onAreaSelected(coordinates);
    }
  };

  useEffect(() => {
    // Fix for Leaflet marker icons in Vite
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const L = (window as any).L;
    if (L) {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    }
  }, []);

  return (
    <div className="map-selector">
      <div className="map-controls">
        <p className="map-instructions">
          {t('dashboard.selectArea')} {points.length > 0 && `(${points.length} points)`}
        </p>
        <div className="map-buttons">
          <button onClick={handleClear} disabled={points.length === 0} className="btn-secondary">
            Clear
          </button>
          <button onClick={handleSave} disabled={points.length < 3} className="btn-primary">
            {t('dashboard.saveArea')}
          </button>
        </div>
      </div>
      <MapContainer
        center={[52.2297, 21.0122]}
        zoom={13}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler onMapClick={handleMapClick} />
        {points.length > 2 && (
          <Polygon
            positions={points}
            pathOptions={{
              color: '#6366f1',
              fillColor: '#6366f1',
              fillOpacity: 0.3,
            }}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default MapSelector;
