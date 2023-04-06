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

function TablesHutang(props) {
  const { id,namaPenghutang, jumlahHutang, getHutang } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [show, setShow] = React.useState(false);
  async function deletePropose(auth) {
    try {
      await hapus(`delete/hutang/${id}`, localStorage.getItem("token")).then(
        (result) => {
          setShow(false);
          getHutang(localStorage.getItem("token"));
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
      edit(`update/hutang/${id}`,data, localStorage.getItem("token")).then((res) => {
          console.log(res.data);
          setOpenEdit(false)
          getHutang(localStorage.getItem("token"));
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
              {namaPenghutang}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            20 april 05
          </Text>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {jumlahHutang}
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
          1
        </Badge>
      </Td>
      <Td>
        <Button
          onClick={() => {
            setOpenEdit(true);
            getHutang(localStorage.getItem("token"));

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
                <FormControl isInvalid={errors.namaPenghutang}>
                  <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                    Nama Penghutang
                  </FormLabel>
                  <Input
                    borderRadius="15px"
                    // mb="24px"
                    fontSize="sm"
                    type="text"
                    placeholder="Fill it"
                    size="lg"
                    {...register("namaPenghutang", {
                      required: "This is required", value : namaPenghutang
                    })}
                  />
                  <FormErrorMessage>
                    {errors.namaPenghutang && errors.namaPenghutang.message}
                  </FormErrorMessage>
                </FormControl>
                {/* <FormControl isInvalid={errors.tanggalMasuk}>
                  <FormLabel
                    ms="4px"
                    mt="10px"
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    Tanggal Hutang
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
                    {errors.tanggalMasuk && errors.tanggalMasuk.message}
                  </FormErrorMessage>
                </FormControl> */}
                <FormControl isInvalid={errors.jumlahHutang}>
                  <FormLabel
                    ms="4px"
                    mt="10px"
                    fontSize="sm"
                    fontWeight="normal"
                  >
                    Jumlah Hutang
                  </FormLabel>
                  <Input
                    borderRadius="15px"
                    // mb="24px"
                    fontSize="sm"
                    type="text"
                    placeholder="Fill it"
                    size="lg"
                    {...register("jumlahHutang", {
                      required: "This is required", value : jumlahHutang
                    })}
                  />
                  <FormErrorMessage>
                    {errors.jumlahHutang && errors.jumlahHutang.message}
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
        <Button
          bg="red.500"
          color="white"
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
              <Text>Are you sure??</Text>
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
                Delete
              </Button>
              <Button
                colorScheme="blue"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Td>
    </Tr>
  );
}

export default TablesHutang;
