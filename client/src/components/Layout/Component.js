import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import NextLink from 'next/link';
import {Link} from '@chakra-ui/react';
import {useRouter} from 'next/router';

export default ({children}) => {
  const router = useRouter();
  const {colorMode, toggleColorMode} = useColorMode();
  const bgHeader = useColorModeValue('whiteAlpha.500', 'whiteAlpha.100');
  const bgGradient = useColorModeValue(
    'linear(to-br, #93A5CF, #E4EfE9)',
    'linear(to-br, 	gray.700, gray.900)',
  );
  return (
    <>
      <Flex
        bgGradient={bgGradient}
        align="center"
        justify="center"
        minH="100vh"
        w="100%"
      >
        <header>
          <Flex
            position="fixed"
            top={0}
            left="auto"
            align="center"
            right={0}
            p={3}
            pl={6}
            roundedBottomStart="2xl"
            gap={4}
            bg={bgHeader}
            backdropFilter="blur(10px)"
            style={{zIndex: 5}}
          >
            {router.pathname !== '/' && (
              <Link as={NextLink} href="/">
                Form
              </Link>
            )}
            {router.pathname !== '/answers' && (
              <Link as={NextLink} href="/answers">
                Answers
              </Link>
            )}
            <IconButton
              icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
          </Flex>
        </header>
        <main
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {children}
        </main>
      </Flex>
    </>
  );
};
