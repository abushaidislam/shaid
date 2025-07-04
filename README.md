# ReadOft Blog App

This repo now contains a minimal full stack blog built with Node.js and Express. It follows the ReadOft design plan with a simple layout and color palette.

## Structure
- `server.js` – Express application serving pages and handling posts
- `views/` – EJS templates for the homepage, single post, and new post form
- `public/styles.css` – shared styles
- `features.html` and `contact.html` – static pages
- `posts.json` – JSON file storing blog posts

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Visit `http://localhost:3000` to view the site.

## Adding Posts
Use the "New" link in the navigation or go to `/new` to submit a new post. Posts are saved to `posts.json`.

This lightweight example illustrates the design process but is not production ready.
