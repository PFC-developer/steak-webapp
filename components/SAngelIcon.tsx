import { Image, Link} from "@chakra-ui/react";

/**
 * Wiggle animation is defined in the style tag in `../pages/_document.tsx`
 * See: https://stackoverflow.com/questions/38132700/css-wiggle-shake-effect
 */
export default function SAngelIcon() {
  return (
    <Link
      isExternal={false}
      href="/"
      animation="wiggle 2.5s infinite"
    >
     <Image src="/angel_logo.png" />
    </Link>
  );
}
