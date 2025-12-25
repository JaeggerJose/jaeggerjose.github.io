import React, { useState, useEffect } from "react"
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps"
import { Box, useColorModeValue } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"

// Japan TopoJSON - Local file for reliability
const GEO_URL = "/map/japan-detailed.json"

// Pulse animation for active marker
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(2.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`

const SnowMap = ({ spots, activeSpot }) => {
  const [position, setPosition] = useState({ coordinates: [138, 38], zoom: 1 })

  // Colors - Designer Palette
  const landColor = useColorModeValue("#E2E8F0", "#2D3748") // Cool Gray
  const hoverColor = useColorModeValue("#CBD5E0", "#4A5568")
  const strokeColor = useColorModeValue("#FFFFFF", "#1A202C")
  
  // Marker Colors
  const markerColor = "#319795" // Teal 500
  const activeMarkerColor = "#D53F8C" // Pink 500

  // Handle active spot changes to "fly" to location
  useEffect(() => {
    if (activeSpot) {
      setPosition({
        coordinates: [activeSpot.lng, activeSpot.lat],
        zoom: 3 // Moderate zoom level to see context
      })
    } else {
        // Reset to view whole Japan
        setPosition({
            coordinates: [138, 38],
            zoom: 1
        })
    }
  }, [activeSpot])

  return (
    <Box 
      w="100%" 
      h="100%" 
      bg={useColorModeValue("gray.50", "gray.900")} 
      position="relative" 
      overflow="hidden"
      borderRadius="xl"
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 4000,
          center: [138, 38] // Centered on Japan
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup 
            zoom={position.zoom} 
            center={position.coordinates} 
            onMoveEnd={(position) => setPosition(position)}
            motionStyle={{
                transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
            }}
            maxZoom={20} // Allow deeper zoom
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={landColor}
                  stroke={strokeColor}
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: hoverColor, outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {spots.map(({ title, lat, lng, id }) => {
             const isActive = activeSpot?.id === id
             return (
                <Marker key={id} coordinates={[lng, lat]}>
                    <g
                        style={{
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                    >
                        {/* Pulse Effect Background */}
                        {isActive && (
                            <circle
                                r={12}
                                fill={activeMarkerColor}
                                opacity={0.3}
                                style={{
                                    animation: `${pulse} 2s infinite ease-in-out`,
                                    transformBox: "fill-box",
                                    transformOrigin: "center"
                                }}
                            />
                        )}
                        
                        {/* Main Marker */}
                        <circle 
                            r={isActive ? 6 : 4} 
                            fill={isActive ? activeMarkerColor : markerColor} 
                            stroke="#fff" 
                            strokeWidth={2} 
                        />
                        
                        {/* Label */}
                        {isActive && (
                            <text
                                textAnchor="middle"
                                y={-15}
                                style={{
                                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                                    fill: "#2D3748", // Force dark text for readability or handle mode
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    textShadow: "0px 2px 4px rgba(255,255,255,0.8)", // Outline effect
                                    pointerEvents: "none"
                                }}
                            >
                                {title}
                            </text>
                        )}
                    </g>
                </Marker>
             )
          })}
        </ZoomableGroup>
      </ComposableMap>
      
      {/* Designer Credit / Aesthetic Label */}
      <Box position="absolute" bottom={4} right={4} fontSize="xs" color="gray.500" fontStyle="italic" fontWeight="light">
        Japan Snow Map
      </Box>
    </Box>
  )
}

export default SnowMap
