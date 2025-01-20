# React Router Dom v6 Nested Route Path Matching Issue

This repository demonstrates a common issue encountered when working with nested routes in React Router Dom v6.  The problem arises from the way path matching works with nested Route components, leading to unexpected routing behavior or routes not being matched as intended.

The issue is described in detail in `bug.js`. The `bugSolution.js` file provides a fix to resolve the issue.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the unexpected routing behavior.

## Solution

The solution is provided in `bugSolution.js` which demonstrates how to correctly configure nested routes to ensure proper path matching.