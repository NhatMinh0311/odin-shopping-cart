import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe('renders a navigation bar', ()=> {
    it('renders link to home', () => {
        render(<NavBar/>);
        expect(screen);
    })
})