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
import TablesTransaksi from "components/Tables/TablesTranksaksiHarian";
import React from "react";
import { getApi } from "api/resApi";
import { useForm } from "react-hook-form";
import { create } from "api/resApi";
import bgMyKantin from "../../../../assets/img/BgMyKantin.png";

const Authors = ({ title, captions, data }) => {
  const [transaksi, setTransaksi] = React.useState([]);
  const [loadBarangMasuk, setLodBarangMasuk] = React.useState(true);
  const textColor = useColorModeValue("gray.700", "white");
  const [open, setOpen] = React.useState(false);

  const getTransaksi = async (token) => {
    try {
      await getApi("data/transaksi-harian", token).then((res) => {
        console.log(res);
        setTransaksi(res.data.data);
      });
    } catch (error) {}
  };

  React.useEffect(() => {
    getTransaksi(localStorage.getItem("token"));
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    try {
      create("create/transaksi-harian", data).then((res) => {
        console.log(res.data);
        setOpen(false);
        getTransaksi(localStorage.getItem("token"));
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
                      <FormControl isInvalid={errors.pemasukan}>
                        <FormLabel
                          ms="4px"
                          mt="10px"
                          fontSize="sm"
                          fontWeight="normal"
                        >
                          pemasukan
                        </FormLabel>
                        <Input
                          borderRadius="15px"
                          fontSize="sm"
                          type="text"
                          placeholder="Fill it"
                          size="lg"
                          {...register("pemasukan", {
                            required: "This is required",
                          })}
                        />
                        <FormErrorMessage>
                          {errors.pemasukan && errors.pemasukan.message}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={errors.tanggalTransaksi}>
                        <FormLabel
                          ms="4px"
                          mt="10px"
                          fontSize="sm"
                          fontWeight="normal"
                        >
                          tanggalTransaksi
                        </FormLabel>
                        <Input
                          borderRadius="15px"
                          fontSize="sm"
                          type="text"
                          placeholder="Fill it"
                          size="lg"
                          {...register("tanggalTransaksi", {
                            required: "This is required",
                          })}
                        />
                        <FormErrorMessage>
                          {errors.tanggalTransaksi && errors.tanggalTransaksi.message}
                        </FormErrorMessage>
                      </FormControl>
                      {/* <FormControl isInvalid={errors.idAdmin}>
                        <FormLabel
                          ms="4px"
                          mt="10px"
                          fontSize="sm"
                          fontWeight="normal"
                        >
                          idAdmin
                        </FormLabel>
                        <Input
                          borderRadius="15px"
                          fontSize="sm"
                          type="text"
                          placeholder="Fill it"
                          size="lg"
                          {...register("idAdmin", {
                            required: "This is required",
                          })}
                        />
                        <FormErrorMessage>
                          {errors.idAdmin && errors.idAdmin.message}
                        </FormErrorMessage>
                      </FormControl> */}
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
            {transaksi.map((row) => {
              return (
                <TablesTransaksi
                  key={`${row.email}-${row.name}`}
                  id={row.id}
                  getTransaksi={getTransaksi}
                  pemasukan={row.pemasukan}
                  keterangan={row.keterangan}
                  tanggalTransaksi={row.tanggalTransaksi}
                  idAdmin={row.idAdmin}
                  
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
