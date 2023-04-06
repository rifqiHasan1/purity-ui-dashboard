// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import { tablesTableData, dashboardTableData } from "variables/general";

function TablesCopy2() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Authors
        title={"Daftar Hutang"}
        captions={["Nama Penghutang","Tanggal Hutang", "Jumlah Hutang", "Id Admin", ""]}
        data={tablesTableData}
      />
    </Flex>
  );
}

export default TablesCopy2;
