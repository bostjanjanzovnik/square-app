import React from "react"
import { render } from "@testing-library/react"
import App, { calculateSquares } from "./App"

describe("<App />", () => {
    test("Should contain elements with class name 'square'", () => {
        const { container } = render(<App />)
        const squares = container.getElementsByClassName("square")

        expect(squares.length).toBeGreaterThan(0)
    })

    test.each([
        { width: 0, height: 0, expected: 0 },
        { width: 50, height: 0, expected: 0 },
        { width: 0, height: 50, expected: 0 },
        { width: 50, height: 50, expected: 1 },
        { width: 100, height: 50, expected: 2 },
        { width: 200, height: 50, expected: 4 },
        { width: 3440, height: 1235, expected: 26 },
    ])("Should return $expected number of squares", ({ width, height, expected }) => {
        const squares = calculateSquares(width, height)

        expect(squares.length).toEqual(expected)
    })

    test("Squares in 50 x 100 space should be the right size", () => {
        const squares = calculateSquares(50, 100)

        expect(squares.length).toEqual(2)
        expect(squares[0].size).toEqual(50)
        expect(squares[1].size).toEqual(50)
    })

    test("Squares in 50 x 120 space should be the right size", () => {
        const squares = calculateSquares(50, 120)

        expect(squares.length).toEqual(6)
        expect(squares[0].size).toEqual(50)
        expect(squares[1].size).toEqual(50)
        expect(squares[2].size).toEqual(20)
        expect(squares[3].size).toEqual(20)
        expect(squares[4].size).toEqual(10)
        expect(squares[5].size).toEqual(10)
    })
})
