import React, { useState, useEffect } from "react"
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps"
import { Box } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"
import { useColorModeValue } from "./ui/color-mode"

const GEO_URL = "/map/japan-detailed.json"

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

    const landColor = useColorModeValue("#E2E8F0", "#2D3748")
    const hoverColor = useColorModeValue("#CBD5E0", "#4A5568")
    const strokeColor = useColorModeValue("#FFFFFF", "#1A202C")
    const bgColor = useColorModeValue("gray.50", "gray.900")

    const markerColor = "#319795"
    const activeMarkerColor = "#D53F8C"

    useEffect(() => {
        if (activeSpot) {
            setPosition({
                coordinates: [activeSpot.lng, activeSpot.lat],
                zoom: 3
            })
        } else {
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
            bg={bgColor}
            position="relative"
            overflow="hidden"
            borderRadius="xl"
        >
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 4000,
                    center: [138, 38]
                }}
                style={{ width: "100%", height: "100%" }}
            >
                <ZoomableGroup
                    zoom={position.zoom}
                    center={position.coordinates}
                    onMoveEnd={(pos) => setPosition(pos)}
                    motionStyle={{
                        transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
                    }}
                    maxZoom={20}
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
                                <g style={{ cursor: "pointer", transition: "all 0.3s ease" }}>
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
                                    <circle
                                        r={isActive ? 6 : 4}
                                        fill={isActive ? activeMarkerColor : markerColor}
                                        stroke="#fff"
                                        strokeWidth={2}
                                    />
                                    {isActive && (
                                        <text
                                            textAnchor="middle"
                                            y={-15}
                                            style={{
                                                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                                                fill: "#2D3748",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                                textShadow: "0px 2px 4px rgba(255,255,255,0.8)",
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

            <Box position="absolute" bottom={4} right={4} fontSize="xs" color="gray.500" fontStyle="italic" fontWeight="light">
                Japan Snow Map
            </Box>
        </Box>
    )
}

export default SnowMap
