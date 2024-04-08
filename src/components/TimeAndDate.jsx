import React from "react";
import { Center, Text } from "@chakra-ui/react";

export default function TimeAndDate({ weather }) {
  return (
    <Center m={4} display={"flex"} flexDirection={"column"}>
      <Text
        color={"white"}
        fontFamily="Poppins"
        fontWeight={"bold"}
        fontSize={"x-large"}
        mt={4}
      >
        {`${weather.name}, ${weather.country}`}
      </Text>
    </Center>
  );
}
