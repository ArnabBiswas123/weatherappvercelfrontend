import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";

export default function Forecast({ title, weather }) {
  return (
    <Box width={["100%", "100%", "100%", "70%"]}>
      <Text color={"white"} textAlign={"left"} fontWeight={"bold"} my={2}>
        {title}
      </Text>
      <hr></hr>
      <Box display={"flex"} justifyContent={"space-between"}>
        {weather.length > 0 &&
          weather.map((item, index) => {
            return (
              <Box
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                key={index}
              >
                <Text color={"white"} fontSize={"sm"}>
                  {item.title}
                </Text>
                <Image src={item.icon} width={"50px"} height={"50px"}></Image>
                <Text color={"white"}>{`${item.temp}°`}</Text>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
}
