// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";


function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Authors
        title={"Stock Barang"}
        captions={["Nama Barang", "Jenis Barang", "Harga Barang", "Id Admin", ""]}
      />
    </Flex>
  );
}

export default Tables;
