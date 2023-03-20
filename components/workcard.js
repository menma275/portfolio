import {
  Box,
  GridItem,
  Text,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import AnimatedBox from "./animatedbox";

const WorkCard = (props) => {
  // const num = () => Math.floor(Math.random() * 6) - 3;
  const num = () => 10;
  return (
    <GridItem>
      <AnimatedBox>
        <LinkBox
          rounded={10}
          overflow="hidden"
          _hover={{
            transform: "rotate(-3deg)",
            boxShadow: "2xl",
          }}
          zIndex={0}
        >
          <LinkOverlay href={props.url} position="relative">
            <Image src={props.image} alt={props.name} />
          </LinkOverlay>
        </LinkBox>
      </AnimatedBox>
    </GridItem>
  );
};

export default WorkCard;
