import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Slide,
  Button,
  Flex,
  Center,
  useMediaQuery,
  IconButton,
  CloseButton,
} from '@chakra-ui/react';

import {useState, useEffect} from 'react';
export default ({
  status,
  title,
  description,
  enterState,
  disappear = true,
  duration = 3000,
  action,
  buttonColorScheme,
  buttonIcon,
  buttonContent,
  closeButton = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const [isMobile] = useMediaQuery('(max-width: 600px)');

  useEffect(() => {
    if (disappear)
      setTimeout(() => {
        setIsVisible(false);
      }, duration);
  }, [enterState]);
  return (
    <Slide direction="top" in={enterState && isVisible} style={{zIndex: 10}}>
      <Alert status={status} p={4} backdropFilter="blur(10px)">
        <Flex gap={4} justifyContent={'space-between'} width={'100%'}>
          <Center>
            <AlertIcon />
            <AlertTitle>{title}</AlertTitle>
            {!isMobile && <AlertDescription>{description}</AlertDescription>}
          </Center>
          <Flex gap={4} align="center">
            {closeButton && (
              <CloseButton
                size="lg"
                onClick={() => {
                  setIsVisible(false);
                }}
              />
            )}
            {action && (
              <>
                {isMobile ? (
                  <IconButton
                    aria-label={buttonContent}
                    icon={buttonIcon}
                    colorScheme={buttonColorScheme}
                    onClick={() => {
                      action();
                    }}
                  />
                ) : (
                  <Button
                    variant="solid"
                    colorScheme={buttonColorScheme}
                    leftIcon={buttonIcon}
                    onClick={() => {
                      action();
                    }}
                  >
                    {buttonContent && buttonContent}
                  </Button>
                )}
              </>
            )}
          </Flex>
        </Flex>
      </Alert>
    </Slide>
  );
};
