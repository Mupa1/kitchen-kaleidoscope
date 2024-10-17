import axios from "axios";
import Image from "next/image";

interface Recipe {
  id: number;
  title: string;
  image: string;
  instructions: string;
}

interface RecipePageProps {
  params: { id: string };
}

async function getRecipe(id: string): Promise<Recipe> {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information`,
    {
      params: { apiKey: process.env.SPOONACULAR_API_KEY },
    }
  );
  return response.data;
}

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await getRecipe(params.id);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
      <Image
        className="w-full h-185 object-cover rounded-lg mb-4"
        src={recipe.image}
        alt={recipe.title}
        width={278}
        height={185}
      />
      <p className="text-gray-700">{recipe.instructions}</p>
    </div>
  );
}
