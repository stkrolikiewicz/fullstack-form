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
      <Alert status={status}>
        <Flex gap={4} justifyContent={'space-between'} width={'100%'}>
          <Center>
            <AlertIcon />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
          </Center>
          {action && (
            <Center>
              {isMobile ? (
                <IconButton
                  aria-label={buttonContent}
                  icon={buttonIcon}
                  colorScheme={buttonColorScheme}
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
            </Center>
          )}
        </Flex>
      </Alert>
    </Slide>
  );
};
