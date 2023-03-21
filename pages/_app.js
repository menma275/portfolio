import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          body: "Poppins, sans-serif;",
        },
      })}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
