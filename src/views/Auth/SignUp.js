// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { register1 } from "api/resApi";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function SignUp() {

  const history = useHistory();

  const handleLinkClick = (path) => {
    history.push(path);
  };

  const navigate = useHistory()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      register1("/create/users", data).then((res) => {
        console.log(res.data.status);
        if (res.data.status == "Sucess") {
          // localStorage.setItem("token", res.data.token)
          navigate.push("/auth/signin")
          console.log(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
    >
      <Box
        position="absolute"
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={BgSignUp}
        bgSize="cover"
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}
      ></Box>
      <Flex
        direction="column"
        textAlign="center"
        justifyContent="center"
        align="center"
        mt="6.5rem"
        mb="30px"
      >
        <Text fontSize="4xl" color="white" fontWeight="bold">
          Welcome!
        </Text>
        <Text
          fontSize="md"
          color="white"
          fontWeight="normal"
          mt="10px"
          mb="26px"
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}
        >
          Use these awesome forms to login or create new account in your project
          for free.
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
        <Flex
          direction="column"
          w="445px"
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          <Text
            fontSize="xl"
            color={textColor}
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            Register With
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.nama}>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Username
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Your full name"
                size="lg"
                {...register("nama", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel mt="10px" ms="4px" fontSize="sm" fontWeight="normal">
                Email
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="email"
                placeholder="Your email address"
                size="lg"
                {...register("email", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel mt="10px" ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="password"
                placeholder="Your password"
                size="lg"
                {...register("password", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password_confirmation}>
              <FormLabel mt="10px" ms="4px" fontSize="sm" fontWeight="normal">
                Password_confirmation
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="password"
                placeholder="Your password_confirmation"
                size="lg"
                {...register("password_confirmation", {
                  required: "This is required",
                })}
              />
              <FormErrorMessage>
                {errors.password_confirmation && errors.password_confirmation.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt="35px"
              isLoading={isSubmitting}
              type="submit"
              bg="teal.300"
              fontSize="10px"
              color="white"
              fontWeight="bold"
              w="100%"
              h="45"
              mb="24px"
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}
            >
              SIGN UP
            </Button>
          </form>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColor} fontWeight="medium">
              Already have an account?
              <Link
                onClick={() => handleLinkClick("/auth/signin")}
                color={titleColor}
                as="span"
                ms="5px"
                href="#"
                fontWeight="bold"
              >
                Sign In
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
