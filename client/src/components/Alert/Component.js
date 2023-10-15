import {Alert, AlertIcon, AlertTitle, AlertDescription} from '@chakra-ui/react';

export default ({status, title, description}) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};
