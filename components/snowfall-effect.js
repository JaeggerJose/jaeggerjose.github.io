import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'

const SnowfallEffect = ({ particleCount = 100, particleColor = 'rgba(255, 255, 255, 0.8)' }) => {
    const canvasRef = useRef(null)
    const animationRef = useRef(null)
    const mouseRef = useRef({ x: null, y: null })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Snowflake class
        class Snowflake {
            constructor() {
                this.reset()
                this.y = Math.random() * canvas.height
                this.initialSpeed = this.speed
                this.rotation = Math.random() * Math.PI * 2
                this.rotationSpeed = (Math.random() - 0.5) * 0.02
            }

            reset() {
                this.x = Math.random() * canvas.width
                this.y = -10
                this.radius = Math.random() * 4 + 3
                this.speed = Math.random() * 1 + 0.5
                this.wind = Math.random() * 0.5 - 0.25
                this.opacity = Math.random() * 0.5 + 0.3
                this.initialSpeed = this.speed
                this.rotation = Math.random() * Math.PI * 2
                this.rotationSpeed = (Math.random() - 0.5) * 0.02
            }

            update() {
                // Mouse collision detection
                const mouse = mouseRef.current
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = this.x - mouse.x
                    const dy = this.y - mouse.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    const minDistance = 100

                    if (distance < minDistance) {
                        // Repel from mouse
                        const force = (minDistance - distance) / minDistance
                        const angle = Math.atan2(dy, dx)
                        this.x += Math.cos(angle) * force * 5
                        this.y += Math.sin(angle) * force * 5
                        
                        // Speed up when repelled
                        this.speed = this.initialSpeed * (1 + force * 2)
                    } else {
                        // Gradually return to normal speed
                        this.speed = this.speed * 0.95 + this.initialSpeed * 0.05
                    }
                }

                // Normal falling motion
                this.y += this.speed
                this.x += this.wind

                // Rotation
                this.rotation += this.rotationSpeed

                // Slight swing motion
                this.wind += Math.random() * 0.1 - 0.05
                this.wind = Math.max(-1, Math.min(1, this.wind))

                // Reset when off screen
                if (this.y > canvas.height) {
                    this.reset()
                }
                if (this.x > canvas.width + 10 || this.x < -10) {
                    this.x = Math.random() * canvas.width
                }
            }

            draw() {
                ctx.save()
                ctx.translate(this.x, this.y)
                ctx.rotate(this.rotation)

                // Draw snowflake with 6 branches
                const branches = 6
                const size = this.radius

                // Draw glow first
                ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.2})`
                ctx.lineWidth = size * 0.5
                ctx.lineCap = 'round'
                ctx.lineJoin = 'round'

                for (let i = 0; i < branches; i++) {
                    const angle = (Math.PI * 2 * i) / branches
                    
                    ctx.beginPath()
                    ctx.moveTo(0, 0)
                    const endX = Math.cos(angle) * size
                    const endY = Math.sin(angle) * size
                    ctx.lineTo(endX, endY)
                    ctx.stroke()
                }

                // Draw main snowflake
                ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`
                ctx.lineWidth = size * 0.15
                ctx.lineCap = 'round'
                ctx.lineJoin = 'round'

                for (let i = 0; i < branches; i++) {
                    const angle = (Math.PI * 2 * i) / branches
                    
                    // Main branch
                    ctx.beginPath()
                    ctx.moveTo(0, 0)
                    const endX = Math.cos(angle) * size
                    const endY = Math.sin(angle) * size
                    ctx.lineTo(endX, endY)
                    ctx.stroke()

                    // Side branches
                    for (let j = 0.3; j < 1; j += 0.35) {
                        const branchX = Math.cos(angle) * size * j
                        const branchY = Math.sin(angle) * size * j
                        const branchSize = size * 0.3

                        // Left side branch
                        ctx.beginPath()
                        ctx.moveTo(branchX, branchY)
                        const leftAngle = angle - Math.PI / 4
                        ctx.lineTo(
                            branchX + Math.cos(leftAngle) * branchSize,
                            branchY + Math.sin(leftAngle) * branchSize
                        )
                        ctx.stroke()

                        // Right side branch
                        ctx.beginPath()
                        ctx.moveTo(branchX, branchY)
                        const rightAngle = angle + Math.PI / 4
                        ctx.lineTo(
                            branchX + Math.cos(rightAngle) * branchSize,
                            branchY + Math.sin(rightAngle) * branchSize
                        )
                        ctx.stroke()
                    }
                }

                // Center dot
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
                ctx.beginPath()
                ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2)
                ctx.fill()

                ctx.restore()
            }
        }

        // Create snowflakes
        const snowflakes = []
        for (let i = 0; i < particleCount; i++) {
            snowflakes.push(new Snowflake())
        }

        // Mouse move handler
        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX
            mouseRef.current.y = e.clientY
        }

        const handleMouseLeave = () => {
            mouseRef.current.x = null
            mouseRef.current.y = null
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseleave', handleMouseLeave)

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            snowflakes.forEach(snowflake => {
                snowflake.update()
                snowflake.draw()
            })

            animationRef.current = requestAnimationFrame(animate)
        }
        animate()

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseleave', handleMouseLeave)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [particleCount])

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100%"
            pointerEvents="none"
            zIndex={1}
        >
            <canvas
                ref={canvasRef}
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%'
                }}
            />
        </Box>
    )
}

export default SnowfallEffect

