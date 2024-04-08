import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { Center, Input, Box, Text, Button } from "@chakra-ui/react";

export default function Inputs({ setQuery, setLatLon, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleClick = () => {
    setLatLon({ lat: "", lon: "" });
    if (city !== "") {
      setQuery(city);
    }
  };

  const handleLocation = () => {
    setCity("");
    setQuery("");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setLatLon({ lat, lon });
      });
    }
  };

  const handleunits = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <Center>
      <Input
        type="text"
        bgColor={"white"}
        placeholder="search ...."
        _focus={{ outline: "none" }}
        fontFamily="Roboto, sans-serif"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      ></Input>

      <Box
        as={UilSearch}
        size={35}
        color={"white"}
        margin="auto 10px"
        cursor="pointer"
        transition="transform 0.3s ease-out, color 0.3s ease"
        _hover={{
          transform: "scale(1.2)",
        }}
        onClick={handleClick}
      />
      <Box
        as={UilLocationPoint}
        size={35}
        color={"white"}
        margin="auto 10px"
        cursor="pointer"
        transition="transform 0.3s ease-out, color 0.3s ease"
        _hover={{
          transform: "scale(1.3)",
        }}
        onClick={handleLocation}
      />
      <Center>
        <Button
          bgColor={"transparent"}
          variant={"none"}
          name="metric"
          cursor={"pointer"}
          color={"white"}
          fontSize="lg"
          fontWeight="bold"
          m={2}
          transition="transform 0.3s ease-out, color 0.3s ease"
          _hover={{
            transform: "scale(1.3)",
          }}
          onClick={handleunits}
        >
          °C
        </Button>
        <Text color={"white"} fontSize="lg" fontWeight="bold">
          |
        </Text>
        <Button
          cursor={"pointer"}
          variant={"none"}
          name="imperial"
          bgColor={"transparent"}
          color={"white"}
          fontSize="lg"
          fontWeight="bold"
          m={2}
          transition="transform 0.3s ease-out, color 0.3s ease"
          _hover={{
            transform: "scale(1.3)",
          }}
          onClick={handleunits}
        >
          °F
        </Button>
      </Center>
    </Center>
  );
}
