import {Box, Heading, Accordion} from '@chakra-ui/react';
import {AccordionItem as MyListItem} from './_components';

export default ({data}) => {
  return (
    <Box w="100%">
      <Heading as="h1" size="lg" m={4}>
        Provided answers
      </Heading>
      <Accordion allowToggle>
        {data.map(item => (
          <MyListItem item={item} key={item._id} />
        ))}
      </Accordion>
    </Box>
  );
};
