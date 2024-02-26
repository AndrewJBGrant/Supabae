"use client";

// import { useContext } from "react"

// import MoodContext  from "./counter"

// export default function ChildChange() {


// // const value = useContext(MoodContext)

// return (
// <section className="bg-teal-400 text-slate-500 m-2">
// <MoodContext.Consumer>

// <h1>Here we will see the context change!!</h1>

// <h1>Here are the Moods:{value => {value}}!!</h1>

// </MoodContext.Consumer>
// </section>



// )

// }
import MyComponent from "./MyComponent"
import { createContext } from "react";

export const Context = createContext("Default Value");

const moods = {
  happy: "happy",
  sad: "SAD"
}


export default function ChildChange() {



  const value = moods.happy;

  return (
    <Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>
  );
}
