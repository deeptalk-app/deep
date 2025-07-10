import { Redirect } from "expo-router";

export default function Index() {
  // During development, it can be useful to redirect to a specific screen.
  //
  // 1. Replace "your-screen-name" with the name of the file in your `(playing)`
  //    directory you want to start on (e.g., `game`, `board`).
  // 2. Comment out or remove this redirect when you're done testing.
  //
  return <Redirect href="/(playscreen)" />;
}
