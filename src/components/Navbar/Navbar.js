/* This example requires Tailwind CSS v2.0+ */
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className="bg-slate-600 h-8 w-auto sticky top-0">
        <div className="flex float-left">
          <li className="font-serif text-2xl list-none px-3 text-white">
            <a>Josh Hollis</a>
          </li>
        </div>

        <div className="flex float-right">
          <li className="font-serif text-1xl list-none px-3 pt-1">
            <a>About</a>
          </li>
          <li className="font-serif text-1xl list-none px-3 pt-1">
            <a>Projects</a>
          </li>
          <li className="font-serif text-1xl list-none px-3 pt-1">
            <a>Information</a>
          </li>
        </div>
      </nav>
    </>
  );
}
