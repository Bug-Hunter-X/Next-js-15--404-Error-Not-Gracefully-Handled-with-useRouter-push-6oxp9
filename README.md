# Next.js 15: Graceful 404 Handling with useRouter.push

This repository demonstrates a common issue in Next.js 15 applications: the lack of graceful error handling when using `useRouter.push` to navigate to a non-existent page.  The application throws a standard 404 error, which isn't ideal for user experience.

## Problem

The `about.js` component uses `useRouter.push` to navigate to a non-existent route ('/nonexistent'). This results in a standard 404 page, lacking any custom error handling or fallback.

## Solution

The solution involves implementing a custom error boundary to gracefully handle 404 errors or other unexpected navigation issues.  This provides a better user experience and allows for more controlled handling of errors.

## Setup

1. Clone this repository.
2. Navigate to the repository in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.