import { beforeEach, describe, test, expect } from "vitest";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";

describe('App', () => {
    
    beforeEach(() => {
        render(
            <App />
        )
    })

    test("should be a h1 with Vite + React text", () => {
        expect(document.querySelector("h1").textContent).toBe("Vite + React");
    })

    test("should be a className .read-the-docs with specific text", () => {
        expect(document.querySelector(".read-the-docs").textContent).toBe("Click on the Vite and React logos to learn more");
    })

    test("App loads with initial state of 0", () => {
        expect(document.querySelector("#count").textContent).toContain(0);
    })

    test("Count should increase after click", () => {
        const button = document.querySelector("#count")
        fireEvent.click(button)
        expect(document.querySelector("#count").textContent).toContain(1);
    })
})