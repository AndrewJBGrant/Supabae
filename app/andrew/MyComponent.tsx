
// import { useContext } from "react";
import { useColorContext } from "../colorContext"

// export const findContext = () => {
//   const value = useContext(ColorContext);
// if (!value) {
//   throw new Error("Value not safe with TypeScript!");
// };
//     return value;

// };

export const MyComponent = () => {

const value = useColorContext()

  return (
    <>
  <span>Value:{value}</span>
    </>
  );
}
