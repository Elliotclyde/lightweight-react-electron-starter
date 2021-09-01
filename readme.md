# Lightweight React Electron Starter

This is a project to get you started making React Electron apps with as few tools as possible.

It uses Electron, Electron Forge, React, ReactDOM, and esbuild - and that's it!

After cloning and npm installing, you will need to run `npx electron-forge import` to set up electron forge on your machine. Then you should be good to go!

## Why is there a build folder and an out folder?

esbuild will transpile your JSX into JS and throw it into the "build" folder as an intermediate step. This will happen in both build and dev. When you are ready to publish your application electron forge will push the completed application into the "out" folder.
