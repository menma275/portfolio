import {
  Box,
  Center,
  Flex,
  GridItem,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import AnimatedBox from "./animatedbox";

const LinkCard = (props) => {
  return (
    <GridItem>
      <AnimatedBox>
        <Box
          bg={"white"}
          rounded={10}
          _hover={{ border: "2px", borderColor: "black" }}
        >
          <LinkBox
            position="relative"
            color={"gray.900"}
            bg="white"
            border="2px"
            borderColor="black"
            maxW={400}
            W="100%"
            rounded={10}
            p={5}
            zIndex={0}
            _hover={{
              transform: "rotate(-3deg)",
              boxShadow: "lg",
            }}
          >
            <LinkOverlay href={props.url} fontSize="xl">
              {props.name}
            </LinkOverlay>
            <Text>{props.description}</Text>
          </LinkBox>
        </Box>
      </AnimatedBox>
    </GridItem>
  );
};

export default LinkCard;
