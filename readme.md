# Lightweight React Electron Starter

This is a project to get you started making React Electron apps with as few tools as possible.

It uses Electron, Electron Forge, React, ReactDOM, and esbuild - and that's it!

## How to get this starter:

- `git clone https://github.com/Elliotclyde/lightweight-react-electron-starter.git`
- `cd lightweight-react-electron-starter`
- `npm install`
- `npx electron-forge import`
- `npm run start`

## I want to know more!

- About [React](https://reactjs.org/)
- About [Electron](https://www.electronjs.org/)
- About [Electron Forge](https://www.electronforge.io/)
- About [esbuild](https://esbuild.github.io/)

## Why is there a build folder and an out folder?

esbuild will transpile your JSX into JS and throw it into the "build" folder as an intermediate step. This will happen in both build and dev. When you are ready to publish your application electron forge will push the completed application into the "out" folder.
