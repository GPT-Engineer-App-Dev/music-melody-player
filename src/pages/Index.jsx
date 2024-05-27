import { Box, Container, VStack, HStack, Text, IconButton, Progress, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image } from "@chakra-ui/react";
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
      <VStack spacing={4} align="stretch">
        {/* Navigation Bar */}
        <HStack justifyContent="space-between" p={4} bg="gray.800" color="white">
          <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
          <HStack spacing={4}>
            <Text>Home</Text>
            <Text>Library</Text>
            <Text>Search</Text>
          </HStack>
        </HStack>

        {/* Main Section */}
        <Box flex="1" p={4}>
          <VStack spacing={4} align="stretch">
            <Text fontSize="xl" fontWeight="bold">Songs</Text>
            <VStack spacing={2} align="stretch">
              <HStack justifyContent="space-between" p={2} bg="gray.100" borderRadius="md">
                <Text>Song 1</Text>
                <Text>Artist 1</Text>
              </HStack>
              <HStack justifyContent="space-between" p={2} bg="gray.100" borderRadius="md">
                <Text>Song 2</Text>
                <Text>Artist 2</Text>
              </HStack>
              <HStack justifyContent="space-between" p={2} bg="gray.100" borderRadius="md">
                <Text>Song 3</Text>
                <Text>Artist 3</Text>
              </HStack>
            </VStack>
          </VStack>
        </Box>

        {/* Player Controls */}
        <HStack justifyContent="space-between" p={4} bg="gray.800" color="white" borderRadius="md">
          <HStack spacing={4}>
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              onClick={togglePlayPause}
            />
            <Text>Now Playing: Song 1</Text>
          </HStack>
          <VStack spacing={2} align="stretch" flex="1">
            <Progress value={30} size="xs" colorScheme="green" />
            <HStack justifyContent="space-between">
              <Text fontSize="xs">0:30</Text>
              <Text fontSize="xs">3:00</Text>
            </HStack>
          </VStack>
          <HStack spacing={4}>
            <FaVolumeUp />
            <Slider aria-label="volume-slider" value={volume} onChange={(val) => setVolume(val)} maxW="100px">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </HStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;