import React, { useState, useEffect } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button, Center } from '@chakra-ui/react';
import axios from 'axios';
import {HOSTNAME} from "../Variables";

const Newsletter = () => {
  const [listItems, setListItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleDelete = async (item) => {
    const formData = new FormData();
    formData.append ('email', item);
    const response = await axios.post(HOSTNAME+'/DeleteNewsletter', //TestConnexion
    formData);
    window.location.reload();
  };
  useEffect(() => {
    const fetchData = async () => {
      await refreshPage();
    };

    fetchData();
  }, []); 

  const refreshPage = async () => {
    try {
      const response = await axios.get(HOSTNAME+'/GetNewsletter');
      setListItems(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  const totalPages = Math.ceil(listItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = listItems.slice(indexOfFirstItem, indexOfLastItem);

  // Fill remaining rows with empty strings
  currentItems = [...currentItems, ...Array(itemsPerPage - currentItems.length).fill('')];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box textAlign="center">
      <Heading textAlign="Left" marginLeft="10%" paddingTop="20px" marginBottom="20px">
        Newsletter
      </Heading>

      {/* Your card and table */}
      <Box marginStart="10%" marginBottom="2%" width="70%" mx="auto">
        <Table variant="striped" colorScheme="gray" width="100%">
          <Thead backgroundColor="black">
            <Tr>
              <Th color="white" textAlign="center">
                Email
              </Th>
              <Th color="white"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentItems.map((item, index) => (
              <Tr key={index} bgColor={index % 2 === 0 ? 'white' : '#D8D8D8'}>
                <Td textAlign="center">{item}</Td>
                <Td>
                  <Button colorScheme="red" size="xs" marginLeft="auto" display="block" onClick={() => handleDelete(item)}>
                    Supprimer
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        {/* Pagination buttons */}
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
    </Box>
  );
};

export default Newsletter;
