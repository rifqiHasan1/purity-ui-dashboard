// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import { tablesTableData, dashboardTableData } from "variables/general";

function TablesCopy4() {
  return (
    <Flex direction='column' pt={{ base: "75px", md: "75px" }}>
      <Authors
        title={"Daftar Hutang"}
        captions={["Keterangan", "Pemasukan", "tanggalTransaksi", "idAmin", ""]}
        data={tablesTableData}
      />
    </Flex>
  );
}

export default TablesCopy4;
