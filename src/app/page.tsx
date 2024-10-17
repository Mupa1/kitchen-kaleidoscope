"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [ingredients, setIngredients] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/recipes?ingredients=${ingredients}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Recipe Finder</h1>
      <form onSubmit={handleSearch} className="w-full max-w-md">
        <input
          type="text"
          placeholder="Enter ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Find Recipes
        </button>
      </form>
    </div>
  );
}
