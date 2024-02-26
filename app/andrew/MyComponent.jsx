
import { useContext } from "react";
import { Context } from "./ChildChange"

export default function MyComponent() {
  const value = useContext(Context);

  return <span>{value}</span>;
}
