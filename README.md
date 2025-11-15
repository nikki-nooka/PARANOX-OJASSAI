
# GeoSick

This project is a web application that provides AI-powered environmental health intelligence.

## Firebase Configuration

To use this application, you need to set up a Firebase project and configure the application to use your project's credentials.

### 1. Create a Firebase Project

1. Go to the [Firebase console](https://console.firebase.google.com/).
2. Click "Add project" and follow the on-screen instructions to create a new project.

### 2. Get Your Firebase Configuration

1. In your Firebase project, go to the "Project settings" page.
2. In the "Your apps" card, select the web app icon to create a new web app.
3. Enter a name for your app and click "Register app".
4. In the "Add Firebase SDK" step, you will see a `firebaseConfig` object. Copy this object.

### 3. Configure the Application

1. In the root of this project, open the `firebase.ts` file.
2. Replace the placeholder `firebaseConfig` object with the one you copied from the Firebase console.

### 4. Enable Google Sign-In

1. In the Firebase console, go to the "Authentication" page.
2. In the "Sign-in method" tab, click on "Google" in the "Sign-in providers" list.
3. Enable the Google sign-in provider and click "Save".

### 5. Authorize Your Domain (Crucial Step)

For security, Firebase only allows authentication from approved domains.

1. In the Firebase console, go to the "Authentication" page.
2. Click the "Settings" tab, and then select the "Authorized domains" section.
3. Click "Add domain" and enter the domain where your app is hosted.
    - If you are running the app locally, add `localhost`.
    - If you are using a service like Google Cloud Workstations, you must add the specific URL. For example: `5176-firebase-ojas-1758532949850.cluster-owzhzna315cj6tredjpnwucna4.cloudworkstations.dev`

**You must add the correct domain for the Sign-in with Google button to become responsive.**
