import { describe, test } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event";

import App from "./App"

describe("App", () => {
  test("should be render the correct elements", () => {
    render(<App />)

    expect(screen.getByAltText("max")).toBeInTheDocument()
  })
})