# 🍲 Kitchen Magic

A simple Recipe Finder application built with Next.js 13, TypeScript, and Tailwind CSS. This app allows users to enter ingredients they have on hand, and returns recipes they can make. It fetches recipe data from the Spoonacular API and includes a search functionality, individual recipe detail views, and a responsive UI.

## 📋 <a name="table">Table of Contents</a>

1. 📋 [Features](#features)
2. 🛠️ [Tech Stack](#tech-stack)
3. 🔧 [Prerequisites](#prerequisites)
4. 🚀 [Getting Started](#getting-started)
6. ⚙️  [Configuration](#configuration)
7. 📖 [Usage](#usage)
8. 📜 [Scripts](#scripts)
9. 🧪  [Testing](#testing)
10. ☁️  [Deployment](#deployment)
11. 🤝 [Contributing](#contributing)
12. 📄 [License](#license)


## <a name="features">📋 Features</a>

- Ingredient-based Recipe Search: Users can enter a list of ingredients and find recipes.
- Recipe Details: Each recipe includes a detailed view with ingredients and instructions.
- Dynamic Routing: Next.js 13 App Router allows for dynamic recipe detail pages.
- API Integration: Connects to the Spoonacular API to fetch recipes based on ingredients.
- Responsive Design: Tailwind CSS ensures the app is fully responsive.

## <a name="tech-stack">🛠️ Tech Stack</a>

- Next.js 14
- TypeScript for type safety
- Tailwind CSS for styling
- Jest and React Testing Library for unit and integration tests
- Spoonacular API for recipe data

## <a name="prerequisites">🔧 Prerequisites</a>

Before you begin, ensure you have met the following requirements:

- Node.js: >=20.x
- NPM: >=10.x
- Spoonacular API Key: Sign up here to get a free API key.

## <a name="getting-started">🚀 Getting Started</a>

1. Clone the repository:

```
git clone https://github.com/Mupa1/kitchen-magic.git
cd kitchen-magic
```

2. Install dependencies:

```
npm install
```

3. Set up environment variables: Create a .env.local file in the root directory and add your Spoonacular API key:

SPOONACULAR_API_KEY=your_api_key_here

## <a name="configuration">⚙️ Configuration</a>

**Jest and TypeScript**

Jest is configured with TypeScript support using ts-jest to enable seamless TypeScript testing. Testing utilities like React Testing Library are set up in the jest.setup.ts file, and JSDOM is configured to simulate a browser environment for component testing.

**Tailwind CSS**

Tailwind CSS is configured with a custom theme and utility classes to maintain a minimalist, responsive UI. All global styles are added in styles/globals.css.

## <a name="usage">📖 Usage</a>

To start the development server, run:

```
npm run dev

```

Navigate to http://localhost:3000 in your browser to view the app.

**Basic Features**
- Search Recipes:
Enter ingredients into the search bar and press Find Recipes.
The app will display a list of recipes matching the ingredients.
- View Recipe Details:
Click on a recipe to view its details, including ingredients and instructions.

## <a name="scripts">📜 Scripts</a>

The project includes various npm scripts for common tasks:

- npm run dev: Start the development server.
- npm run build: Build the application for production.
- npm start: Start the production server.
- npm run lint: Run ESLint for code linting.
- npm test: Run Jest tests once.
- npm run test:watch: Run Jest tests in watch mode.
- npm run test:coverage: Run Jest with coverage report.


## <a name="testing">🧪 Testing</a>

Unit and Integration Tests with Jest

Jest is used for unit and integration testing. To run tests:

```
npm test
````

To run tests with coverage:

```
npm run test:coverage
```

## <a name="deployment">☁️ Deployment</a>

## <a name="contributing">🤝 Contributing</a>

Contributions are welcome! Please follow these steps:

1. Fork the project.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Make your changes.
4. Commit your changes (git commit -m 'Add YourFeature').
5. Push to the branch (git push origin feature/YourFeature).
6. Open a pull request.

## <a name="license">📄 License</a>

This project is open-source and available under the MIT License. See the LICENSE file for more information.