export type Color = "black" | "white" | "grey" | "blue";
export type Make = "BMW" | "Audi" | "Chevrolet" | "Honda" | "Linkoln";
export type Country = "USA" | "Japan" | "Germany";

export interface Filter {
    make?: Make;
    color?: Color;
    country?: Country;
}
