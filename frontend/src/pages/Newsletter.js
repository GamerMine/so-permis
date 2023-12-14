import React, { useState, useEffect } from 'react';
import { ChakraProvider, UnorderedList, ListItem, Box, Center, Heading, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import axios from 'axios';

const Newsletter = () => {
  const [listItems, setListItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/GetNewsletter');
        setListItems(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []); 

  const totalPages = Math.ceil(listItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ChakraProvider>
      <Box m="20%" textAlign="center">
        <Box bg="black" color="white" p={4} textAlign="center">
          <Heading as="h2" size="lg">
            Newsletter
          </Heading>
        </Box>

        <Table size="sm">
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Content</Th>
            </Tr>
          </Thead>
          <Tbody>
            {[...Array(itemsPerPage)].map((_, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td></Td>
              </Tr>
            ))}
            {currentItems.map((item, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{item}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Center mt={4}>
          <Box>
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index}
                colorScheme={currentPage === index + 1 ? 'teal' : 'gray'}
                onClick={() => paginate(index + 1)}
                mx={1}
              >
                {index + 1}
              </Button>
            ))}
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

export default Newsletter;
