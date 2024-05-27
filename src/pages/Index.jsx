import { Box, Container, VStack, HStack, Text, IconButton, Progress, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Box as="nav" bg="brand.800" color="white" p={4} mb={4}>
        <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
      </Box>
      <VStack spacing={4} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">Song List</Text>
          <VStack spacing={2} mt={2}>
            <Text>Song 1</Text>
            <Text>Song 2</Text>
            <Text>Song 3</Text>
            <Text>Song 4</Text>
          </VStack>
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <HStack spacing={4} justify="center">
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              size="lg"
              onClick={togglePlayPause}
            />
            <Box flex="1">
              <Progress value={30} size="sm" colorScheme="blue" />
            </Box>
            <HStack spacing={2}>
              <FaVolumeUp />
              <Slider aria-label="volume-slider" value={volume} onChange={(val) => setVolume(val)} maxW="100px">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </HStack>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;