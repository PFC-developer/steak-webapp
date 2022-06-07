import { extendTheme } from "@chakra-ui/react";

import Button from "./button";
import Link from "./link";
import Popover from "./popover";
import Modal from "./modal";
import Text from "./text";

const defaultSansSerif = "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif";
const defaultEmoji = "Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";

export default extendTheme({
  fonts: {
    heading: `Urbanist,${defaultSansSerif},${defaultEmoji}`,
    body: `Urbanist,${defaultSansSerif},${defaultEmoji}`,
    mono: "Menlo, monospace",
  },
  components: {
    Button,
    Link,
    Popover,
    Modal,
    Text,
  },
  colors: {
    brand: {
      darkerBrown: "#FFEDBD",
      darkBrown: "#0F6988",
      lightBrown: "#FFEDBD",
      xlighterBrown: "#e4d5c8",
      lighterBrown: "#0f1e88",
      red: "#54a3da",
      black: "#DD482D",
    },
  },
  textStyles: {
    minibutton: {
      fontWeight: "bolder",
      fontSize: "12px",
      lineHeight: "1.2",
      letterSpacing: "0.18rem",
      textTransform: "uppercase",
    },
    small: {
      fontWeight: "medium",
      fontSize: "sm",
      lineHeight: "shorter",
    },
  },
});
