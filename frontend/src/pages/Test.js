import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Stack,
    StackDivider,
    Text,
    Image
} from "@chakra-ui/react";
import DocumentsInformations from "../components/DocumentsInformations";

const Test = () => {

    const [bado, setTextbado] = useState()
    useEffect(() => {
        getTextbado();
    },[])

    const getTextbado = async() =>
    {
        const text = await axios.get('http://localhost:8080/testBado')
        setTextbado(text.data)
    }
    return (
        <Stack>

            <Card border="1px">
                <CardHeader> Hello test ~ Ceci est le titre </CardHeader>
                <CardBody> {bado} </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Client Report</Heading>
                </CardHeader>

                <DocumentsInformations titre={"Comment s’inscrire chez So’Permis ?"}/>
                <CardBody>
                    <Stack divider={<StackDivider/>} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Summary
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                View a summary of all your clients over the last month.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Overview
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                Check out the overview of your clients.
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                See a detailed analysis of all your business clients.
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>The perfect latte</Heading>

                        <Text py='2'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>


        </Stack>



    )
};

export default Test