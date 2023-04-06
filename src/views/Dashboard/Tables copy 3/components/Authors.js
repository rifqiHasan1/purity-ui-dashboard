// Chakra imports
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Button,
  useColorModeValue,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  Flex,
  Box,
  Spacer,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper 
} from "@chakra-ui/react";
// Custom components
import { AddIcon } from "@chakra-ui/icons";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesPermintaan from "components/Tables/TablesPermintaanBarang";
import React from "react";
import { getApi } from "api/resApi";
import { useForm } from "react-hook-form";
import { create } from "api/resApi";
import bgMyKantin from "../../../../assets/img/BgMyKantin.png";

const Authors = ({ title, captions, data }) => {
  const [permintaan, setPermintaan] = React.useState([]);
  const [loadBarangMasuk, setLodBarangMasuk] = React.useState(true);
  const textColor = useColorModeValue("gray.700", "white");
  const [open, setOpen] = React.useState(false);

  const getPermintaan = async (token) => {
    try {
      await getApi("data/permintaan-barang", token).then((res) => {
        console.log(res);
        setPermintaan(res.data.data);
      });
    } catch (error) {}
  };

  React.useEffect(() => {
    getPermintaan(localStorage.getItem("token"));
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    try {
      create("create/permintaan-barang", data).then((res) => {
        console.log(res.data);
        setOpen(false);
        getPermintaan(localStorage.getItem("token"));
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p="6px 0px 22px 0px">
        <Text fontSize="xl" color={textColor} fontWeight="bold">
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px" color="gray.400">
              {captions.map((caption, idx) => {
                return (
                  <Th color="gray.400" key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
              <Button
                onClick={() => {
                  setOpen(true);
                }}
                bg="teal.300"
                borderLeftRadius="0"
              >
                <Center>
                  <AddIcon boxSize={8} color="white" p="5px" />
                </Center>
              </Button>
              <Modal isCentered isOpen={open}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    <Flex>
                      <Box>
                        <Text>Add Barang Masuk</Text>
                      </Box>
                      <Spacer />
                      <Image
                        borderRadius="2xl"
                        boxSize="50px"
                        bg="black"
                        objectFit="cover"
                        src={bgMyKantin}
                      />
                    </Flex>
                  </ModalHeader>
                  {/* <ModalCloseButton /> */}
                  <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <FormControl isInvalid={errors.keterangan}>
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                        keterangan
                        </FormLabel>
                        <Input
                          borderRadius="15px"
                          // mb="24px"
                          fontSize="sm"
                          type="text"
                          placeholder="Fill it"
                          size="lg"
                          {...register("keterangan", {
                            required: "This is required",
                          })}
                        />
                        <FormErrorMessage>
                          {errors.keterangan && errors.keterangan.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={errors.kodeBarang}>
                        <FormLabel
                          ms="4px"
                          mt="10px"
                          fontSize="sm"
                          fontWeight="normal"
                        >
                          kodeBarang 
                        </FormLabel>
                        <Input
                          borderRadius="15px"
                          fontSize="sm"
                          type="text"
                          placeholder="Fill it"
                          size="lg"
                          {...register("kodeBarang", {
                            required: "This is required",
                          })}
                        />
                        <FormErrorMessage>
                          {errors.kodeBarang && errors.kodeBarang.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={errors.tanggalPermintaan}>
                        <FormLabel
                          ms="4px"
                          mt="10px"
                          fontSize="sm"
                          fontWeight="normal"
                        >
                          tanggalPermintaan 
                        </FormLabel>
                        <Input
                          borderRadius="15px"
                          fontSize="sm"
                          type="text"
                          placeholder="Fill it"
                          size="lg"
                          {...register("tanggalPermintaan", {
                            required: "This is required",
                          })}
                        />
                        <FormErrorMessage>
                          {errors.tanggalPermintaan && errors.tanggalPermintaan.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={errors.idPermintaan}>
                        <FormLabel
                          ms="4px"
                          mt="10px"
                          fontSize="sm"
                          fontWeight="normal"
                        >
                          idPermintaan
                        </FormLabel>
                        <Input
                          borderRadius="15px"
                          fontSize="sm"
                          type="text"
                          placeholder="Fill it"
                          size="lg"
                          {...register("idPermintaan", {
                            required: "This is required",
                          })}
                        />
                        <FormErrorMessage>
                          {errors.idPermintaan && errors.idPermintaan.message}
                        </FormErrorMessage>
                      </FormControl>
                      <ModalFooter>
                        <Button
                          type="submit"
                          bg="teal.300"
                          color="white"
                          mr="3"
                        >
                          Add
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          Cancel
                        </Button>
                      </ModalFooter>
                    </form>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Tr>
          </Thead>
          <Tbody>
            {permintaan.map((row) => {
              return (
                <TablesPermintaan
                  key={`${row.email}-${row.name}`}
                  id={row.id}
                  getPermintaan={getPermintaan}
                  idPermintaan={row.idPermintaan}
                  kodeBarang={row.kodeBarang}
                  keterangan={row.keterangan}
                  tanggalPermintaan={row.tanggalPermintaan}
                  
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Authors;
