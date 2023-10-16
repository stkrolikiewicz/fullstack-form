import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import {ChakraProvider, localStorageManager} from '@chakra-ui/react';
import theme from '@/styles/theme';

export default function App({Component, pageProps}) {
  return (
    <ChakraProvider colorModeManager={localStorageManager} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
