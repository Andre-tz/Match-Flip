import getInitialTime from "../helpers/getInitialTime"

describe( "Obteniendo Tiempo inicial para el contador", ()=>{
    //type difficulty = "easy" | "medium" | "hard" | "godMode"

    it("devuelve 30 para easy", () => {
        expect(getInitialTime("easy")).toBe(30);
    });

    it("devuelve 45 para medium", () => {
        expect(getInitialTime("medium")).toBe(45);
    });

    it("devuelve 50 para hard", () => {
        expect(getInitialTime("hard")).toBe(50);
    });

    it("devuelve 90 para godMode", () => {
        expect(getInitialTime("godMode")).toBe(90);
    });

    it("devuelve NaN para dificultad inválida", () => {
        expect(getInitialTime("legendary")).toBeNaN();
    });
} )