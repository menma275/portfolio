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

const ExhibitCard = (props) => {
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
            <Text fontSize="sm" marginTop={"0.75rem"}>
              {props.description}
            </Text>
            <Text
              fontSize="sm"
              borderTop={"1px"}
              marginTop={"0.5rem"}
              paddingTop={"0.5rem"}
            >
              {props.relate}
            </Text>
          </LinkBox>
        </Box>
      </AnimatedBox>
    </GridItem>
  );
};

export default ExhibitCard;
