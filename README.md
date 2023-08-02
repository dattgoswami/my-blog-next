# Blog Posts Next.js App

This is a Blog Posts web application built using [Next.js](https://nextjs.org/)
It is a simple Next.js application that fetches and displays blog posts from the Hatchways API based on the selected tag. It allows users to sort the blog posts based on their preferences.

## Getting Started

### Prerequisites

Before running the application, make sure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone this repository to your local machine.

2. Navigate to the project directory:

```bash
cd my-blog-next
```

3. Install the required dependencies:

```bash
npm install
```

### Running the Development Server

To start the development server and run the application locally, use the following command:

```bash
npm run dev
```

This will launch the application at [http://localhost:3000/](http://localhost:3000/) in your default web browser.

## Features

- View and search blog posts by tags.
- Sort blog posts by ID, Likes, Reads, or Popularity in ascending or descending order.

## Project Structure

The project has the following structure:

```
├── pages
│   └── index.tsx
├── components
│   └── BlogPost.tsx
├── types
│   └── post.ts
├── package.json
├── package-lock.json (or yarn.lock if using Yarn)
└── ...
```

- `pages/index.tsx` is the main component that makes up the blog posts app's UI.
- `components/BlogPost.tsx` is a reusable component responsible for rendering individual blog posts.
- `types/post.ts` contains the interface definition for the `Post` object used in the application.

## API Integration

The application fetches blog posts data from the [Hatchways Blog API](https://api.hatchways.io/assessment/blog/posts) using the `axios` library.

## Contributing

We welcome contributions to this project. If you find any issues or have improvements to suggest, feel free to open a new issue or submit a pull request.
