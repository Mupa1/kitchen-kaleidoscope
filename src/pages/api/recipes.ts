import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { ingredients } = req.query;
  console.log('process.env.SPOONACULAR_API_KEY', process.env.SPOONACULAR_API_KEY);

  if (typeof ingredients !== "string") {
    res.status(400).json({ error: "Invalid ingredients parameter" });
    return;
  }

  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/findByIngredients",
      {
        params: {
          ingredients,
          number: 10,
          apiKey: process.env.SPOONACULAR_API_KEY,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
}
