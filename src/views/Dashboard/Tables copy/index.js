// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import { tablesTableData, dashboardTableData } from "variables/general";

function TablesCopy() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Authors
        title={"Stock Barang Masuk"}
        captions={["Keterangan", "Tanggal Masuk", "Expired Barang", "Id Admin", ""]}
        data={tablesTableData}
      />
    </Flex>
  );
}

export default TablesCopy;
