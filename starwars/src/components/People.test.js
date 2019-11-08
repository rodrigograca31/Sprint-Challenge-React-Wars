import React from "react";

// import react-testing methods
import { render, fireEvent, waitForElement } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/dist/extend-expect";

import People from "./People";

test("should have text", () => {
	const { container, getByRole } = render(<People data={{}} />);

	expect(container).toHaveTextContent("Open");
});

test("should have button with text", () => {
	const { container, getByRole } = render(<People data={{}} />);
	expect(getByRole("button")).toHaveTextContent("Open");
});
test("should have CardTitle", () => {
	const { container, getByRole } = render(<People data={{}} />);

	expect(container).toContainElement(document.querySelector("div.card"));
});
