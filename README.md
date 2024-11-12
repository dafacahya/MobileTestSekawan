Here's a streamlined README designed specifically for running a React Native project in a technical test environment. It simplifies the steps and focuses on setup, execution, and quick testing.

---

# React Native Technical Test Guide

This project is a **React Native** application set up for technical testing, bootstrapped with [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Prerequisites

Before running the project, please complete the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) through the "Creating a new application" step. Ensure you have the following:

- **Node.js**
- **Java Development Kit (JDK)** for Android, **Xcode** for iOS (macOS only)
- **Android Studio** or an **Android Emulator**, or an **iOS Simulator**

## Quick Start Guide

### Step 1: Start Metro Server

Metro is the JavaScript bundler for React Native. Start it from the root directory with:

```bash
# Start Metro using npm
npm start

# OR using Yarn
yarn start
```

Metro should be running in a dedicated terminal window for the duration of your session.

### Step 2: Run the Application

With Metro running, open a new terminal at the project root.

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, the app should launch in your Android Emulator or iOS Simulator.

### Step 3: Test and Modify

1. Open `App.tsx` in a code editor and make some changes.
2. Save the file, then reload the app to see changes.

   - **Android**: Double press <kbd>R</kbd> or open the Developer Menu (<kbd>Ctrl</kbd> + <kbd>M</kbd> on Windows/Linux, <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> on macOS) and select **Reload**.
   - **iOS**: Press <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in the iOS Simulator.

## Troubleshooting

If issues arise, refer to the [Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).

---

This guide is designed to get you up and running quickly for technical testing. Enjoy testing!
