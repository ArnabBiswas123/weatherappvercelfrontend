import { Center, useToast } from "@chakra-ui/react";
import Inputs from "./components/Inputs";
import TimeAndDate from "./components/TimeAndDate";
import TempDetails from "./components/TempDetails";
import Forecast from "./components/Forecast";

import { useEffect, useState } from "react";
function App() {
  const toast = useToast();
  const [query, setQuery] = useState("Delhi");
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [latlon, setLatLon] = useState({ lat: "", lon: "" });
  const fetchToasts = async (details) => {
    if (!details) return;
    if (details === "Mist") {
      toast({
        title: "Lost in the mist, but never lost in spirit! 🌀",
        description: "Get cozy with a cuppa on misty days! ☕️",
        position: "top",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
    }
    if (details === "Haze") {
      toast({
        title: "🔮 Embrace the haze!",
        description:
          "🌫️ It's a bit hazy out there! Stay indoors and cozy up with a good book!",
        position: "top",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    if (details === "Smoke") {
      toast({
        title: "With a touch of smoke in the air",
        description:
          "Looks like the skies are veiled in mystery today with a touch of smoke.",
        position: "top",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
    if (details === "Dust") {
      toast({
        title: "Time for some indoor activities!",
        description: "Wear a mask outdoors! Dust levels are high",
        position: "top",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
    if (details === "Fog") {
      toast({
        title: "Step into the foggy wonderland!",
        description: "Peekaboo! Foggy weather calls for mysterious adventures.",
        position: "top",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
    if (details === "Sand") {
      toast({
        title: "Lost in the sands of time?",
        description:
          "Feel the warmth of the desert breeze! Sandstorms may dance on the horizon",
        position: "top",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
    if (details === "Ash") {
      toast({
        title: "Stay indoors, close all windows and doors",
        description: "Alert! Volcanic ash is in the air.",
        position: "top",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
    if (details === "Squall") {
      toast({
        title: "Squally Weather",
        description: "Hold onto your hats! It's a squall out there.",
        position: "top",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
    if (details === "Tornado") {
      toast({
        title: "Tornado alert in effect!",
        description: "Hold onto your hats! Tornado on the horizon!",
        position: "top",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
    if (details === "Clouds") {
      toast({
        title: "Cloudy with a chance of fun! ☁️",
        description: "Stay cozy on this cloudy day! ☁️",
        position: "top",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
    }
    if (details === "Clear") {
      toast({
        title: "Enjoy the clean sky! ☀️",
        description: "It's a beautiful day! 🌞",
        position: "top",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    if (details === "Snow") {
      toast({
        title: "Snowflakes are kisses from heaven! ❄️",
        description: "Winter wonderland alert! ❄️",
        position: "top",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
    if (details === "Rain") {
      toast({
        title: "Rainy days are perfect for cuddling! ☔️",
        description: "Rainy weather calls for some hot tea! 🍵",
        position: "top",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
    }
    if (details === "Thunderstorm") {
      toast({
        title: "Stay safe indoors during the storm! ⛈️",
        description: "Thunder and lightning make for a dramatic show! ⚡",
        position: "top",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
    if (details === "Drizzle") {
      toast({
        title: "Nature's delicate dance begins with a drizzle",
        description: "Perfect weather for a cozy read indoors!",
        position: "top",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const fetchWeatherBylat = async () => {
    // console.log('run')
    if (latlon.lat !== "" && latlon.lon !== "") {
      const result = await fetch(
        `https://weatherappvercel.vercel.app/api/v1/weather/getweatherdatabylat/${latlon.lat}/${latlon.lon}/${units}`
      );
      const data = await result.json();
      if (data.success === false) {
        toast({
          title: "No data avaliable",
          description: "Some error happened",
          position: "top",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        return;
      }
      setWeather(data);
      fetchToasts(data.data.details);
    }
  };

  const fetchweather = async () => {
    const result = await fetch(
      `https://weatherappvercel.vercel.app/api/v1/weather/getweatherdata/${query}/${units}`
    );
    const data = await result.json();
    if (data.success === false) {
      toast({
        title: "No data avaliable",
        description: "Some error happened",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setWeather(data);
    fetchToasts(data.data.details);
  };

  useEffect(() => {
    fetchweather();
  }, [query, units]);
  useEffect(() => {
    fetchWeatherBylat();
  }, [latlon, units]);

  const formatBackground = () => {
    if (!weather) return "linear(to-t, cyan.500, blue.500)";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.data.temp <= threshold)
      return "linear(to-t, cyan.500, blue.500)";
    return "linear(to-t, yellow.500, orange.500)";
  };

  return (
    <Center
      bgGradient={formatBackground()}
      borderRadius="md"
      boxShadow="dark-lg"
      width={["100%", "85%", "70%", "50%"]}
      mx={"auto"}
      mt={10}
      py={5}
      px={4}
      display={"flex"}
      flexDirection={"column"}
      overflow={"hidden"}
    >
      <Inputs
        setQuery={setQuery}
        setLatLon={setLatLon}
        units={units}
        setUnits={setUnits}
      ></Inputs>
      {weather && (
        <>
          <TimeAndDate weather={weather.data}></TimeAndDate>
          <TempDetails weather={weather.data}></TempDetails>
          <Forecast
            title={"Daily Forecast"}
            weather={weather.data.filteredForecastArray}
          ></Forecast>
        </>
      )}
    </Center>
  );
}

export default App;
