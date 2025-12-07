import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, useMapEvents } from 'react-leaflet';
import { LatLng } from 'leaflet';
import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';

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
    <div className="w-full">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <p className="font-medium text-text-secondary m-0 text-[15px]">
          {t('dashboard.selectArea')} {points.length > 0 && `(${points.length} points)`}
        </p>
        <div className="flex gap-3">
          <button 
            onClick={handleClear} 
            disabled={points.length === 0}
            className="px-6 py-2.5 font-medium text-[15px] rounded-md cursor-pointer transition-all duration-base bg-surface text-text-primary border border-border shadow-xs hover:not-disabled:bg-surface-elevated hover:not-disabled:border-accent hover:not-disabled:-translate-y-px hover:not-disabled:shadow-sm active:not-disabled:translate-y-0 active:not-disabled:shadow-xs disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear
          </button>
          <button 
            onClick={handleSave} 
            disabled={points.length < 3}
            className="px-6 py-2.5 font-medium text-[15px] rounded-md cursor-pointer transition-all duration-base bg-primary text-white border-none shadow-sm hover:not-disabled:bg-primary-light hover:not-disabled:-translate-y-px hover:not-disabled:shadow-md active:not-disabled:translate-y-0 active:not-disabled:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('dashboard.saveArea')}
          </button>
        </div>
      </div>
      <MapContainer
        center={[52.2297, 21.0122]}
        zoom={13}
        className="h-[500px] w-full rounded-lg overflow-hidden border border-border shadow-md transition-shadow duration-base hover:shadow-lg md:h-[400px]"
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
