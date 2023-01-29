import React from "react"

interface ISquareProps {
    x: number
    y: number
    size: number
}

export const Square = ({ x, y, size }: ISquareProps) => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`

    return (
        <div
            className="square"
            style={{
                position: "absolute",
                left: x,
                top: y,
                width: size,
                height: size,
                backgroundColor: randomColor,
            }}
        />
    )
}
