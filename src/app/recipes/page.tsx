"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Recipe {
  id: number;
  title: string;
  image: string;
}

export default function RecipesPage() {
  const searchParams = useSearchParams();
    const ingredients = searchParams ? searchParams.get("ingredients") : null;
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (ingredients) {
      fetch(`/api/recipes?ingredients=${ingredients}`)
        .then((response) => response.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error("Error fetching recipes:", error));
    }
  }, [ingredients]);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Recipes with {ingredients}
      </h1>
      {recipes.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-lg font-semibold">{recipe.title}</h2>
              <Image
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={recipe.image}
                alt={recipe.title}
                width={64}
                height={64}
              />
              <Link
                href={`/recipes/${recipe.id}`}
                className="text-blue-500 mt-2 inline-block"
              >
                View Recipe
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found for the given ingredients.</p>
      )}
    </div>
  );
}
