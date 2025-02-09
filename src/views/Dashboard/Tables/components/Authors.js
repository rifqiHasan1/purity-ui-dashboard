// Chakra imports
import {
  Button,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Box,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesBarang from "components/Tables/TablesBarang";
import React from "react";
import { getApi } from "api/resApi";
import { AddIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { create } from "api/resApi";
import bgMyKantin from "../../../../assets/img/BgMyKantin.png";

const Authors = ({ title, captions, data }) => {
  const [barang, setBaramg] = React.useState([]);
  const [loadBarang, setLodBarang] = React.useState(true);
  const textColor = useColorModeValue("gray.700", "white");
  const [open, setOpen] = React.useState(false);

  const getBarang = async (token) => {
    try {
      await getApi("data/barang", token).then((res) => {
        console.log(res);
        setBaramg(res.data.data);
      });
    } catch (error) {}
  };

  React.useEffect(() => {
    getBarang(localStorage.getItem("token"));
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    try {
      create("create/barang", data).then((res) => {
          console.log(res.data);
          setOpen(false)
          getBarang(localStorage.getItem("token"))
      });
    } catch (error) {}
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
                        <Text>Add Barang</Text>
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
                      <FormControl isInvalid={errors.namaBarang}>
                        <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                          Nama Barang
                        </FormLabel>
                        <Input
                          borderRadius="15px"
                          // mb="24px"
                          fontSize="sm"
                          type="text"
                          placeholder="Fill it"
                          size="lg"
                          {...register("namaBarang", {
                            required: "This is required",
                          })}
                        />
                        <FormErrorMessage>
                          {errors.namaBarang && errors.namaBarang.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={errors.jenisBarang}>
                        <FormLabel
                          ms="4px"
                          mt="10px"
                          fontSize="sm"
                          fontWeight="normal"
                        >
                          Jenis Barang
                        </FormLabel>
                        <Input
                          borderRadius="15px"
                          fontSize="sm"
                          type="text"
                          placeholder="Fill it"
                          size="lg"
                          {...register("jenisBarang", {
                            required: "This is required",
                          })}
                        />
                        <FormErrorMessage>
                          {errors.jenisBarang && errors.jenisBarang.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={errors.hargaBarang}>
                        <FormLabel
                          ms="4px"
                          mt="10px"
                          fontSize="sm"
                          fontWeight="normal"
                        >
                          Harga Barang
                        </FormLabel>
                        <Input
                          borderRadius="15px"
                          // mb="24px"
                          fontSize="sm"
                          type="text"
                          placeholder="Fill it"
                          size="lg"
                          {...register("hargaBarang", {
                            required: "This is required",
                          })}
                        />
                        <FormErrorMessage>
                          {errors.hargaBarang && errors.hargaBarang.message}
                        </FormErrorMessage>
                      </FormControl>
                      {/* <FormControl isInvalid={errors.admin}>
                        <FormLabel
                          ms="4px"
                          mt="10px"
                          fontSize="sm"
                          fontWeight="normal"
                        >
                          Id Admin
                        </FormLabel>
                        <Input
                          borderRadius="15px"
                          // mb="24px"
                          fontSize="sm"
                          type="text"
                          placeholder="Fill it"
                          size="lg"
                          {...register("idAdmin", {
                            required: "This is required",
                          })}
                        />
                        <FormErrorMessage>
                          {errors.admin && errors.admin.message}
                        </FormErrorMessage>
                      </FormControl> */}
                      <ModalFooter>
                        <Button
                          type="submit"
                          bg="teal.300"
                          color="white"
                          mr="3"
                        >
                          Send
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
            {barang.map((row) => {
              return (
                <TablesBarang
                  // key={`${row.email}-${row.name}`}
                  name={row.namaBarang}
                  jenisBarang1={row.jenisBarang}
                  hargaBarang1={row.hargaBarang}
                  Admin={row.idAdmin}
                  getBarang={getBarang}
                  id={row.id}
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
