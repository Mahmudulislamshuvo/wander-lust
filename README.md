# Wanderlust - AI Trip Planner

## Project Overview

Wanderlust is a Next.js application designed to revolutionize travel planning using artificial intelligence. It leverages the Google Gemini AI to generate detailed and personalized travel itineraries based on user prompts. The application integrates with MongoDB for efficient storage and retrieval of travel plans and dynamically fetches captivating images from Unsplash to enrich the visual experience of each itinerary.

## Features

-   **AI-Powered Itinerary Generation**: Users can input natural language prompts to receive bespoke travel plans, including destinations, daily activities, and points of interest.
-   **Dynamic Image Integration**: Automatically fetches relevant and high-quality images from Unsplash for hero sections and daily plan thumbnails, enhancing the visual appeal of travel itineraries.
-   **MongoDB Persistence**: Stores generated travel plans in a MongoDB database, allowing users to revisit their plans and reducing redundant AI calls for popular queries.
-   **User-Friendly Interface**: A clean and intuitive interface built with Next.js and Tailwind CSS, making it easy for users to generate and explore their dream trips.
-   **Blur Image Placeholders**: Utilizes `plaiceholder` for generating blur-up image placeholders, improving perceived loading performance.

## Technologies Used

-   **Framework**: [Next.js](https://nextjs.org/) (React Framework)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Database**: [MongoDB](https://www.mongodb.com/)
-   **ORM**: [Mongoose](https://mongoosejs.com/)
-   **AI Integration**: [Google Gemini API](https://ai.google.dev/)
-   **Image API**: [Unsplash API](https://unsplash.com/developers)
-   **Image Placeholders**: [Plaiceholder](https://plaiceholder.co/)

## Setup and Installation

Follow these steps to set up and run Wanderlust locally:

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/wanderlust.git
cd wanderlust
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

```dotenv
MONGODB_URL=YOUR_MONGODB_CONNECTION_STRING
GEMINI_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY
UNSPLASH_ACCESS_KEY=YOUR_UNSPLASH_ACCESS_KEY
```

-   **`MONGODB_URL`**: Your MongoDB connection string. You can obtain this from MongoDB Atlas or your local MongoDB instance.
-   **`GEMINI_API_KEY`**: Obtain your API key from the [Google AI Studio](https://ai.google.dev/).
-   **`UNSPLASH_ACCESS_KEY`**: Register on the [Unsplash Developer website](https://unsplash.com/developers) to get your access key.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1.  **Enter Your Travel Prompt**: On the homepage, type your desired travel plan into the text area. Be as descriptive as possible (e.g., "A romantic 4-day trip to Paris in Spring, focusing on art museums and hidden cafes...").
2.  **Generate Plan**: Click the "Generate" button or press `Enter`. The AI will process your request and create a personalized itinerary.
3.  **Explore Your Plan**: Once generated, you will be redirected to a dedicated page showcasing your detailed travel plan, complete with daily schedules, activity suggestions, and beautiful imagery.
4.  **Discover More**: The homepage also displays recently generated travel plans for inspiration.
