import { Center, Text, Image, Box } from "@chakra-ui/react";
import React from "react";
import { UilTemperature } from "@iconscout/react-unicons";
import { UilTear } from "@iconscout/react-unicons";
import { UilWind } from "@iconscout/react-unicons";
import { UilCompressArrows } from "@iconscout/react-unicons";
import { UilArrowUp } from "@iconscout/react-unicons";
import { UilArrowDown } from "@iconscout/react-unicons";
export default function TempDetails({ weather }) {
  const {
    details,
    icon,
    temp,
    feels_like,
    humidity,
    temp_max,
    speed,
    temp_min,
    pressure,
  } = weather;

  return (
    <Center display={"flex"} flexDir={"column"}>
      <Text color="cyan.300" fontFamily="Roboto">
        {" "}
        {details}
      </Text>
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        w={"100%"}
      >
        <Image src={icon} width={"60px"} height={"60px"}></Image>
        <Text
          color={"white"}
          fontSize={"xx-large"}
          fontWeight={"bold"}
          pl={["0", "24%", "18%", "14%"]}
        >
          {`${temp}°`}
        </Text>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Center display={"flex"}>
            <Box
              as={UilTemperature}
              size={20}
              color={"white"}
              margin="auto 10px"
              cursor="pointer"
              transition="transform 0.3s ease-out, color 0.3s ease"
              _hover={{
                transform: "scale(1.3)",
              }}
            />
            <Text
              color={"white"}
              fontSize={"sm"}
            >{`Real felt ${feels_like}°`}</Text>
          </Center>

          <Center display={"flex"}>
            <Box
              as={UilTear}
              size={20}
              color={"white"}
              margin="auto 10px"
              cursor="pointer"
              transition="transform 0.3s ease-out, color 0.3s ease"
              _hover={{
                transform: "scale(1.3)",
              }}
            />
            <Text
              color={"white"}
              fontSize={"sm"}
            >{`Humidity ${humidity}`}</Text>
          </Center>
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"} m={4}>
        <Box
          as={UilArrowUp}
          size={30}
          color={"white"}
          margin="auto 10px"
          cursor="pointer"
          transition="transform 0.3s ease-out, color 0.3s ease"
          _hover={{
            transform: "scale(1.3)",
          }}
        />
        <Text fontSize={"sm"} color={"white"}>{`Min ${temp_max}°`}</Text>
        <Box
          as={UilArrowDown}
          size={30}
          color={"white"}
          margin="auto 10px"
          cursor="pointer"
          transition="transform 0.3s ease-out, color 0.3s ease"
          _hover={{
            transform: "scale(1.3)",
          }}
        />
        <Text fontSize={"sm"} color={"white"}>{`Max ${temp_min}°`}</Text>
        <Box
          as={UilCompressArrows}
          size={30}
          color={"white"}
          margin="auto 10px"
          cursor="pointer"
          transition="transform 0.3s ease-out, color 0.3s ease"
          _hover={{
            transform: "scale(1.3)",
          }}
        />
        <Text fontSize={"sm"} color={"white"}>{`Pressure ${pressure}`}</Text>
        <Box
          as={UilWind}
          size={20}
          color={"white"}
          margin="auto 10px"
          cursor="pointer"
          transition="transform 0.3s ease-out, color 0.3s ease"
          _hover={{
            transform: "scale(1.3)",
          }}
        />
        <Text
          color={"white"}
          fontSize={"sm"}
        >{`Wind Speed ${speed} Km/h`}</Text>
      </Box>
    </Center>
  );
}
