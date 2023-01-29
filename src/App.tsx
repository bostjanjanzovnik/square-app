import React, { useEffect, useState } from "react"
import { Square } from "./components"

interface ISquare {
    x: number
    y: number
    size: number
}

export const calculateSquares = (width: number, height: number): ISquare[] => {
    const squares: ISquare[] = []
    let x = 0
    let y = 0
    let remainingWidth = width
    let remainingHeight = height

    while (remainingWidth > 0 && remainingHeight > 0) {
        const size = Math.min(remainingWidth, remainingHeight)

        squares.push({
            x,
            y,
            size,
        })

        remainingWidth -= size

        if (remainingWidth === 0) {
            y += size
            remainingWidth = width - x
            remainingHeight = height - y
        } else {
            x += size
        }
    }

    return squares
}

const App = () => {
    const [squares, setSquares] = useState<ISquare[]>([])

    useEffect(() => {
        setSquares(calculateSquares(window.innerWidth, window.innerHeight))
    }, [])

    return (
        <div>
            {squares.map((square, index) => (
                <Square key={index} x={square.x} y={square.y} size={square.size} />
            ))}
        </div>
    )
}

export default App
