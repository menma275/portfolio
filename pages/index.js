import Head from "next/head";
import Image from "next/image";
import {
  Flex,
  Heading,
  Button,
  Box,
  Container,
  Text,
  Spacer,
  Center,
  Grid,
  GridItem,
  VStack,
  Link,
  HStack,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
import { Element } from "react-scroll";

// custom comp
import Header from "@/components/header";
import LinkCard from "@/components/linkcard";
import { LinkList } from "@/components/linklist";
import WorkCard from "@/components/workcard";
import { WorkList } from "@/components/worklist";
import AnimatedBox from "@/components/animatedbox";

import Portrait from "../public/face.jpg";

export default function Home() {
  const bg = useColorModeValue("orange.50", "gray.900");
  const color = useColorModeValue("gray.900", "gray.50");
  const secondary = useColorModeValue("gray.600", "gray.400");
  const [isHover, setIsHover] = useState(false);

  return (
    <Box fontWeight="medium" bg={bg} color={color}>
      <Head>
        <title>sakamura</title>
        <meta name="description" content="sakamura's Portfolio Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="../public/Poppins-Semibold.ttf" />
      </Head>
      <Header />
      <Container maxW="container.lg" px={10}>
        {/* Top section */}
        {/* Greeting */}
        <Flex paddingTop={10} h="100vh" justify="center" align="center">
          <Grid
            mx="auto"
            gridTemplateColumns={{
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gap={10}
          >
            <GridItem m="auto">
              <Text fontSize={["3xl", "3xl", "4xl", "4xl"]} lineHeight={1.5}>
                <Box
                  as="span"
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  {isHover ? "👋" : "Hi"}
                </Box>
                , I'm <br />
                Kusuke SAKAMURA.
              </Text>
              <Text fontSize="2xl" my={3}>
                Generative Artist & Creative Coder
              </Text>
              <Text fontSize="md" color={secondary}>
                Making Generative art with p5.js and shader.
                <br />
                Student of Tokyo Metropolitan Univ.
              </Text>
              <Flex fontSize="3xl" color={color} mt={5}>
                <Link href="https://twitter.com/menma275" marginRight={5}>
                  <FaTwitter />
                </Link>
                <Link href="https://www.linkedin.com/in/kusuke-sakamura-09544325a">
                  <FaLinkedin />
                </Link>
              </Flex>
            </GridItem>
            <GridItem m="auto">
              <Box maxW={300} rounded={10} overflow="hidden">
                <Image src={Portrait} />
              </Box>
            </GridItem>
          </Grid>
        </Flex>
        {/* Links section */}
        <Box>
          <AnimatedBox>
            <Text id="Links" fontSize="3xl" mb={3}>
              Links
            </Text>
          </AnimatedBox>
          <Grid
            templateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
            gap={6}
          >
            {LinkList.map((list) => (
              <LinkCard
                name={list.name}
                description={list.description}
                url={list.url}
              />
            ))}
          </Grid>
        </Box>
        {/* Works section */}
        <Box mt={10}>
          <AnimatedBox>
            <Text id="Works" fontSize="3xl" mb={1}>
              Works
            </Text>
            <Text color={secondary} mb={3}>
              Click on the works you like to visit the site 👀.
            </Text>
          </AnimatedBox>
          <Grid
            templateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
            gap={6}
          >
            {WorkList.map((work) => (
              <WorkCard url={work.url} image={work.image} name={work.name} />
            ))}
          </Grid>
        </Box>
        {/* Contact section */}
        <Box mt={10}>
          <AnimatedBox>
            <Element name="Contact">
              <Text id="Contact" fontSize="3xl" mb={1}>
                Contact
              </Text>
            </Element>
          </AnimatedBox>
          <AnimatedBox>
            <Text color={secondary}>
              Feel free to drop me an email if you'd like to contact.
            </Text>
            <HStack mt={2} fontSize="xl" align="center">
              <Text fontSize="2xl">
                <HiMail />
              </Text>
              <Text>sakamura.ga@gmail.com</Text>
            </HStack>
          </AnimatedBox>
        </Box>
      </Container>
      {/* Footer */}
      <Box marginTop={30} paddingY={5} color={color}>
        <Text fontWeight="light" textAlign="center">
          © 2023 Kusuke SAKAMURA. All Rights Reserved.
          <br />
          Built with <Link href="https://nextjs.org/">Next.js</Link> and
          <Link href="https://chakra-ui.com/">Chakra UI</Link>.
        </Text>
      </Box>
    </Box>
  );
}
