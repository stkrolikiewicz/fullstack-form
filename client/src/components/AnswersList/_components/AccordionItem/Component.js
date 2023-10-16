import {
  Box,
  Heading,
  List,
  ListItem,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Card,
  CardBody,
} from '@chakra-ui/react';

export default ({item}) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            Answer {item._id}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Card>
          <CardBody>
            <List spacing={2}>
              {Object.entries(item).map(([key, value]) => (
                <ListItem key={key}>
                  <Box>
                    <Heading as="h3" size="sm" mb={1}>
                      {key}
                    </Heading>
                    <Box>{value}</Box>
                  </Box>
                </ListItem>
              ))}
            </List>
          </CardBody>
        </Card>
      </AccordionPanel>
    </AccordionItem>
  );
};
