import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
  Box,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { hapus } from "api/resApi";
import { useForm } from "react-hook-form";
import { edit } from "api/resApi";

function TablesPermintaan(props) {
  const { id, logo, getPermintaan , tanggalPermintaan, keterangan, kodeBarang, idPermintaan} = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [show, setShow] = React.useState(false);
  async function deletePropose(auth) {
    try {
      await hapus(`delete/permintaan-barang/${id}`, localStorage.getItem("token")).then(
        (result) => {
          setShow(false);
          getPermintaan(localStorage.getItem("token"));
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    try {
      edit(`update/permintaan-barang/${id}`,data, localStorage.getItem("token")).then((res) => {
          console.log(res.data);
          setOpenEdit(false)
          getPermintaan(localStorage.getItem("token"));
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          {/* <Avatar  w="50px" borderRadius="12px" me="18px" /> */}
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {keterangan}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {kodeBarang}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Badge
          bg="white"
          fontSize="16px"
          // p="3px 10px"
          borderRadius="8px"
        >
          {tanggalPermintaan}
        </Badge>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {idPermintaan}
        </Text>
      </Td>
      <Td>
        <Button
          onClick={() => {
            setOpenEdit(true);
          getPermintaan(localStorage.getItem("token"));

          }}
          p="0px"
          bg="transparent"
          variant="no-hover"
        >
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Edit
          </Text>
        </Button>
        <Modal isCentered isOpen={openEdit}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Flex>
                <Box>
                  <Text>Edit Barang</Text>
                </Box>
                <Spacer />
                {/* <Image
                  borderRadius="2xl"
                  boxSize="50px"
                  bg="black"
                  objectFit="cover"
                  src={bgMyKantin}
                /> */}
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
                      required: "This is required", value : keterangan
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
                      required: "This is required", value : kodeBarang
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
                    // mb="24px"
                    fontSize="sm"
                    type="text"
                    placeholder="Fill it"
                    size="lg"
                    {...register("tanggalPermintaan", {
                      required: "This is required", value : tanggalPermintaan
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
                    // mb="24px"
                    fontSize="sm"
                    type="text"
                    placeholder="Fill it"
                    size="lg"
                    {...register("idPermintaan", {
                      required: "This is required", value : idPermintaan
                    })}
                  />
                  <FormErrorMessage>
                    {errors.idPermintaan && errors.idPermintaan.message}
                  </FormErrorMessage>
                </FormControl>
                <ModalFooter>
                  <Button onClick={() => {
                      setOpenEdit(true);
                    }} type="submit" bg="teal.300" color="white" mr="3">
                    Edit
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() => {
                      setOpenEdit(false);
                    }}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Td>
      <Td>
        <Button bg="red.500" color="white"
          onClick={() =>{
            setOpen(true)
          }}
        >
          Delete
        </Button>

        <Modal isCentered isOpen={open}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete</ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <Text>Apakah anda yakin ingin menghapus barang ini ?</Text>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => {
                  deletePropose();
                  setOpen(false);
                }}
                colorScheme="red"
                mr="3"
              >
                Iya
              </Button>
              <Button
                bg="teal.300"
                color="white"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Tidak   
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Td>
    </Tr>
  );
}

export default TablesPermintaan;
