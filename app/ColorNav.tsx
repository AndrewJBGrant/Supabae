"use client";

import { useContext } from "react";
import { ColorContext } from "./colorContext"
export default function ColorNav() {

const color = useContext(ColorContext)

//console.log(Context)
// console.log(color)
// console.log(typeof(color))

  return (
    <section className={`fixed left-0 top-0 border border-teal-900 p-8 m-8 ${color}`}>


      <h1 className="font-extrabold">Hello</h1>
    </section>
  );
}
