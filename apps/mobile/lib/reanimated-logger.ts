import {
  ReanimatedLogLevel,
  configureReanimatedLogger,
} from "react-native-reanimated"

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
})
