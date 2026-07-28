# Blog App

React lifecycle hands-on lab solution.

## Implemented Requirements

- Created a React application named `blogapp`.
- Added `src/Post.js` with a `Post` class containing `id`, `title`, and `body`.
- Added `src/Posts.js` as a class-based React component.
- Initialized component state with a list of posts in the constructor.
- Added `loadPosts()` to fetch posts from `https://jsonplaceholder.typicode.com/posts`.
- Called `loadPosts()` inside `componentDidMount()`.
- Rendered post titles as headings and post bodies as paragraphs.
- Added `componentDidCatch(error, info)` to show component errors using an alert message.
- Added the `Posts` component to the main `App` component.

## Run

```bash
npm install
npm start
```

## Build

```bash
npm run build
```
