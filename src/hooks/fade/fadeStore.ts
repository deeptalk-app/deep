// lib/fadeController.ts
import { Animated } from "react-native";

const fadeValue = new Animated.Value(1);

export function fadeOut(to = 0.2, duration = 300) {
  return Animated.timing(fadeValue, {
    toValue: to,
    duration,
    useNativeDriver: true,
  }).start();
}

export function fadeIn(duration = 300) {
  return Animated.timing(fadeValue, {
    toValue: 1,
    duration,
    useNativeDriver: true,
  }).start();
}

export default fadeValue;
