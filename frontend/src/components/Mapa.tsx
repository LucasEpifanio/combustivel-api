import React, { useState, useEffect, useCallback } from "react"; 
import axios from "axios";
import { GoogleMap, LoadScript, Marker, MarkerClusterer, InfoWindow } from '@react-google-maps/api';

import postoIcon from '../assets/img/gas-pump.png';

// Definir a posição padrão e o ícone do marcador
const defaultPosition = { lat: 41.1579, lng: -8.6291 };

// Tipagem para o posto
interface Posto {
  Id: string;
  Latitude: number;
  Longitude: number;
  Nome: string;
  Preco: string;
}

const MapComponent = () => {
  const [position, setPosition] = useState(defaultPosition);
  const [postos, setPostos] = useState<Posto[]>([]);
  const [bounds, setBounds] = useState<google.maps.LatLngBounds | null>(null);
  const [zoom, setZoom] = useState(12);
  const [loading, setLoading] = useState(true); // Estado de loading
  const [selectedPosto, setSelectedPosto] = useState<Posto | null>(null); // Estado para o posto selecionado

  // Carregar dados dos postos de combustível
  useEffect(() => {
    const fetchPostos = async () => {
      try {
        const response = await axios.get("/api/results");
        setPostos(response.data || []);
        setLoading(false); // Marca o carregamento como concluído
      } catch (error) {
        console.error("Erro ao buscar postos:", error);
        setLoading(false); // Também marca como concluído em caso de erro
      }
    };

    fetchPostos();

    // Obter a localização atual do usuário
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setPosition({ lat: coords.latitude, lng: coords.longitude });
        },
        () => {
          console.warn("Usuário negou a localização. Usando posição padrão.");
        }
      );
    }
  }, []);

  // Função que lida com as mudanças de limites do mapa
  const onBoundsChanged = useCallback((map: google.maps.Map) => {
    setBounds(map.getBounds() ?? null);
    setZoom(map?.getZoom() ?? 5);
  }, []);

  // Filtra os postos que estão dentro dos limites visíveis do mapa
  const isPostoInBounds = (posto: Posto) => {
    if (!bounds) return true; // Se não houver limites, renderiza todos os postos

    const postoLatLng = new google.maps.LatLng(posto.Latitude, posto.Longitude);
    return bounds.contains(postoLatLng); // Retorna true se o posto está dentro dos limites
  };

  // Função chamada quando um marcador de posto é clicado
  const onMarkerClick = (posto: Posto) => {
    setSelectedPosto(posto);
  };

  // Função para fechar o card
  const closeCard = () => {
    setSelectedPosto(null);
  };

  return (
    <LoadScript googleMapsApiKey="ApiKey" libraries={['visualization']}>
      <div style={{ width: "100%", height: "100%" }}>
        {/* Exibir indicador de loading enquanto os dados não estiverem carregados */}
        {loading ? (
          <div style={{
            display: "flex", justifyContent: "center", alignItems: "center", height: "100%", fontSize: "24px", color: "white"
          }}>
            Carregando mapa...
          </div>
        ) : (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={position}
            zoom={zoom}
            onBoundsChanged={() => onBoundsChanged} // Chama a função quando os limites mudarem
          >
            {/* Marcador para a localização atual */}
            <Marker position={position} />

            {/* Marker Clusterer para agrupar os postos */}
            <MarkerClusterer>
              {(clusterer) => (
                <React.Fragment>
                  {postos
                    .filter(isPostoInBounds) // Filtra os postos que estão dentro dos limites visíveis
                    .map((posto) => (
                      <Marker
                        key={posto.Id}
                        position={{ lat: posto.Latitude, lng: posto.Longitude }}
                        icon={{
                          url: postoIcon,
                          scaledSize: new google.maps.Size(25, 25),  // Ajuste o tamanho do ícone aqui
                          origin: new google.maps.Point(0, 0),  // Posição inicial do ícone
                          anchor: new google.maps.Point(4,4),  // Ajuste a âncora do ícone para o centro
                        }}
                        onClick={() => onMarkerClick(posto)} // Chama a função ao clicar no marcador
                        clusterer={clusterer}  // Atribui o clusterer ao marcador
                      />
                    ))}
                </React.Fragment>
              )}
            </MarkerClusterer>

            {/* Exibir o card com as informações do posto quando um marcador for clicado */}
            {selectedPosto && (
              <div 
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  width: "200px",
                  zIndex: 1
                }}
              >
                <h3>{selectedPosto.Nome}</h3>
                <p><strong>Preço:</strong> {selectedPosto.Preco}</p>
                <button
                  onClick={closeCard}
                  style={{
                    width: "100%",
                    padding: "5px",
                    marginTop: "10px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Fechar
                </button>
              </div>
            )}
          </GoogleMap>
        )}
      </div>
    </LoadScript>
  );
};

export default MapComponent;
