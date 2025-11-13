import React from "react";
import { demoToys } from "../lib/demo-data";
import ToyCard from "../components/toy-card";

export default function Browse() {
  return (
    <main className="text-3xl font-bold text-stone-800">
      <h1 className="text-3xl font-bold text-stone-800">Browse Shelves</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
        {demoToys.map((toy) => (
          <ToyCard key={toy.id} toy={toy} />
        ))}
      </div>
    </main>
  );
}
