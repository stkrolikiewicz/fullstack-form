import {extendTheme} from '@chakra-ui/react';

const config = {
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
};

const theme = extendTheme(config);

export default theme;
