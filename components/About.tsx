import { Box, Flex, Link,  Text } from "@chakra-ui/react";
import { FC } from "react";

import Header from "./Header";
import ExternalLinkIcon from "./ExternalLinkIcon";

function ExternalLinkIconWrapper() {
  return <ExternalLinkIcon ml="1" mr="6" transform="translateY(-2px)" />;
}

const About: FC = () => {
  return (
    <>
      <Header text="About" />
      <Box bg="white" p="6" mb="4" borderRadius="2xl">
        <Text mb="3">
          <b>sAngel</b> is a liquid staking protocol for 🌎 Terra, designed for charitable donations.
        </Text>
        <Text mb="3">
          Users stake 🌔 LUNA through the <b>sAngel Hub</b> smart contract, which in return mints
          sAngel tokens to the users representing their staked amount. Every 24–48 hours, the staking
          rewards are claimed and forwarded to Angel wallets.
        </Text>
       <Text>sAngel is designed to be charitable. ALL yield that is generated goes to Angel.</Text>
        <hr />
        <Box mt="6" mb="1">
          <b>Useful links</b>
        </Box>
        <Flex direction={["column", null, "row", null]} mb="1">
          <Link
            variant="docs"
            isExternal={true}
            href="https://github.com/PFC-developer/steak-contracts/tree/sAngel"
          >
            Smart contract source code <ExternalLinkIconWrapper />
          </Link>
          <Link variant="docs" isExternal={true} href="https://github.com/PFC-developer/steak-webapp/tree/sAngel">
            Webapp source code <ExternalLinkIconWrapper />
          </Link>
          <Link
            variant="docs"
            isExternal={true}
            href="https://github.com/SCV-Security/PublicReports/blob/main/CW/St4k3h0us3/St4k3h0us3%20-%20Steak%20Contracts%20Audit%20Review%20-%20%20v1.0.pdf"
          >
            Audit report by SCV <ExternalLinkIconWrapper />
          </Link>
        </Flex>
        <Flex direction={["column", null, "row", null]}>
          <Link
            variant="docs"
            isExternal={true}
            href="https://finder.terra.money/mainnet/address/xxx"
          >
            sAngel Hub contract <ExternalLinkIconWrapper />
          </Link>
          <Link
            variant="docs"
            isExternal={true}
            href="https://finder.terra.money/mainnet/address/xxx"
          >
            sAngel Token contract <ExternalLinkIconWrapper />
          </Link>
        </Flex>
        <Flex direction={["column", null, "row", null]}>
          sAngel-LUNA Pairs
          (<Link
              variant="docs"
              isExternal={true}
              href="https://finder.terra.money/mainnet/address/xxx"
          >
            Astroport  <ExternalLinkIconWrapper />
          </Link> /
          <Link
              variant="docs"
              isExternal={true}
              href="https://finder.terra.money/mainnet/address/xxx"
          >
            TerraSwap <ExternalLinkIconWrapper />
          </Link>)
        </Flex>
      </Box>
    </>
  );
};

export default About;
