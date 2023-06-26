<h1 align="center">SpaceX Dashboard </h1> <br>

<p align="center">
  <a href="">
    <img  alt="SpaceX Logo" title="" src="./src/assets/images/logo.png" height=150, width=200 >
  </a>
</p>

<p align="center">
  SpaceX Mobile App
</p>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Features](#features)
- [Libraries](#libraries)
- [Build Process](#build-process)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

SpaceX dashboard to see all the Launches of the spaceX , mission, rocket , payload details and many more

**Available for both iOS and Android.**

## Features

- List of Mission
- Mission Details
- Map View of List

## Libraries

- [React Native](https://reactnative.dev/) - ReactJS-based framework that can use native platform capabilities
- [React Navigation(v6)](https://reactnavigation.org/) - For Stack and Tab Navigation
- [React Native Paper](https://reactnativepaper.com/) - UI library
- [React Query](https://tanstack.com/query/v3/) React Query For Data Fetching
- [Redux Toolkit](https://redux.js.org/) - For Global State Managemenet
- [Appolo Client](https://) GraphQL client
- See the `package.json` for detailed list of dependencies

## Xcode version 
14.2

## Build Process

- Make sure to setup enviroment by following the [React Native Guide](https://reactnative.dev/docs/environment-setup) for getting started building a project with native code. **A Mac is required if you wish to develop for iOS.**
- Clone or download the repo
- `yarn` Install the dependencies
- `cd ios && pod install && cd ..` Insall the cocoapod dependencies
- `yarn start` Start the Packager
- `yarn ios` Run the app in ios simulator
- `yarn android` Run the app in android emulator
- If you wish to run the app on the real device follow this guide by [React Native](https://reactnative.dev/docs/running-on-device)

## Note
- page information is missing in graphql query.
- latitude and longitude information was also missing in location from graphql query
