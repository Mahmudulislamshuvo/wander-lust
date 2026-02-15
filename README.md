# Wanderlust - Your AI-Powered Travel Companion

## Video Demo

https://github.com/user-attachments/assets/e56f9952-dc4b-495a-8fe0-c9088c3bb307

## Unleash Your Inner Explorer with Intelligent Itineraries

Wanderlust is a cutting-edge web application that transforms the way you plan your travels. Forget generic guidebooks and endless research; with Wanderlust, your dream trip is just a few words away. Leveraging the advanced capabilities of Google Gemini AI, this platform crafts personalized, detailed itineraries tailored precisely to your desires. Whether you're dreaming of a romantic European getaway, an adventurous hike in Patagonia, or a cultural immersion in an exotic city, Wanderlust makes planning effortless and inspiring.

## The Problem Wanderlust Solves

Travel planning can often be overwhelming, time-consuming, and fraught with uncertainty. From choosing a destination to mapping out daily activities, finding accommodations, and discovering local gems, the sheer volume of information can deter even the most enthusiastic travelers. Wanderlust eliminates this complexity by providing an intelligent, AI-driven solution that streamlines the entire planning process, offering bespoke itineraries in moments.

## Key Features & Benefits

- **Intelligent Itinerary Generation**: Powered by the Google Gemini AI, Wanderlust interprets your natural language prompts (e.g., "A 7-day family-friendly trip to Rome with historical sites and pasta-making classes") to generate comprehensive, day-by-day travel plans.
- **Personalized Experiences**: Receive itineraries that truly reflect your interests, travel style, and duration, ensuring a unique and memorable journey every time.
- **Dynamic Visual Storytelling**: Each travel plan is brought to life with stunning, contextually relevant images dynamically fetched from Unsplash, providing a rich visual preview of your adventure.
- **Effortless Persistence**: All generated travel plans are securely stored in a MongoDB database. This means you can revisit your past itineraries anytime, share them with friends, or simply draw inspiration for future trips without needing to regenerate them.
- **Optimized Performance & User Experience**: Built with Next.js, the application delivers a fast, responsive, and seamless user experience. Image placeholders (`plaiceholder`) ensure a smooth loading experience, while a clean, intuitive interface makes navigation a breeze.
- **Community Inspiration**: Explore a curated selection of recently generated travel plans on the homepage, offering a glimpse into diverse adventures and sparking new travel ideas.

## Technologies Under the Hood

Wanderlust is built on a robust and modern technology stack designed for performance, scalability, and an excellent developer experience:

- **Frontend Framework**: [Next.js](https://nextjs.org/) (React) - For server-side rendering, routing, and a highly performant user interface.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid and consistent UI development.
- **AI Integration**: [Google Gemini API](https://ai.google.dev/) - The core intelligence behind personalized itinerary generation.
- **Database**: [MongoDB](https://www.mongodb.com/) - A flexible NoSQL database for storing dynamic travel plan data.
- **Object Data Modeling**: [Mongoose](https://mongoosejs.com/) - Provides an elegant way to interact with MongoDB.
- **Image Sourcing**: [Unsplash API](https://unsplash.com/developers) - For fetching high-quality, relevant cover and daily images.
- **Image Optimization**: [Plaiceholder](https://plaiceholder.co/) - Generates low-resolution image placeholders to improve perceived loading performance.
- **Iconography**: [Lucide React](https://lucide.dev/) - A beautiful and customizable icon library.

## Getting Started

Follow these instructions to set up and run Wanderlust on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (LTS version recommended)
- npm or Yarn

### 1. Clone the Repository

```bash
git https://github.com/Mahmudulislamshuvo/wander-lust
cd wander-lust
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a file named `.env.local` in the root of your project directory. This file will store your sensitive API keys and database connection string.

```dotenv
MONGODB_URL=YOUR_MONGODB_CONNECTION_STRING
GEMINI_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY
UNSPLASH_ACCESS_KEY=YOUR_UNSPLASH_ACCESS_KEY
```

- **`MONGODB_URL`**: Your MongoDB connection string (e.g., from MongoDB Atlas or a local instance).
- **`GEMINI_API_KEY`**: Obtain this from the [Google AI Studio](https://ai.google.dev/).
- **`UNSPLASH_ACCESS_KEY`**: Register for a developer account on [Unsplash](https://unsplash.com/developers) to get your access key.

### 4. Run the Development Server

Once your environment variables are set, start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## How to Use Wanderlust

1.  **Craft Your Prompt**: On the homepage, enter a descriptive prompt specifying your travel preferences, desired destination, duration, and any specific interests (e.g., "A romantic 4-day trip to Paris in Spring, focusing on art museums and hidden cafes...").
2.  **Generate Your Plan**: Click the "Generate Plan" button (or press `Enter` in the input field). Wanderlust will then utilize AI to create a comprehensive itinerary.
3.  **Explore Your Itinerary**: You will be redirected to a dedicated page showcasing your personalized travel plan, complete with daily schedules, activity suggestions, and inspiring imagery.
4.  **Discover Inspiration**: Browse the homepage for recently generated travel plans from other users, offering new ideas and destinations for your next adventure.

## Project Structure

```
.
├── actions/              # Server actions for AI generation and image fetching
├── app/                  # Next.js app directory for pages and layout
│   ├── (root)            # Homepage and main layout
│   └── plan/[slug]/      # Dynamic routing for individual travel plans
├── components/           # Reusable React components
│   ├── footer/
│   ├── home/
│   └── TravelPlanPage/
├── db/                   # Database interaction logic
├── public/               # Static assets
├── schema/               # Mongoose schemas for MongoDB
├── service/              # Database connection service
└── utils/                # Utility functions (e.g., image blur, slug generation)
```
