import { createContext, useContext } from "react";
import { ColorContextType } from "./andrew/ChildChange";



// Assiging that the context must be a colorContColorContextType: string or undefined
export const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function useColorContext() {
  const color = useContext(ColorContext);

if (color === undefined) {
  throw new Error("color needs to be inside context ")
}

return color;
}
