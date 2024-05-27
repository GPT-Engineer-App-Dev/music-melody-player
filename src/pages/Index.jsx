import { Box, Container, VStack, HStack, Text, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Progress, Image } from "@chakra-ui/react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="gray.900" color="white" minH="100vh">
        {/* Navigation Bar */}
        <Box bg="gray.800" p={4}>
          <Text fontSize="2xl" fontWeight="bold">My Music Player</Text>
        </Box>

        {/* Main Section */}
        <VStack spacing={4} p={4}>
          {/* Song List */}
          <Box w="100%" bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="xl" mb={2}>Songs</Text>
            <VStack spacing={2} align="start">
              <Text>Song 1</Text>
              <Text>Song 2</Text>
              <Text>Song 3</Text>
              <Text>Song 4</Text>
            </VStack>
          </Box>

          {/* Player Controls */}
          <Box w="100%" bg="gray.800" p={4} borderRadius="md">
            <HStack justify="space-between" align="center">
              <IconButton
                aria-label={isPlaying ? "Pause" : "Play"}
                icon={isPlaying ? <FaPause /> : <FaPlay />}
                size="lg"
                onClick={togglePlayPause}
              />
              <Box flex="1" mx={4}>
                <Progress value={30} size="xs" colorScheme="green" />
              </Box>
              <HStack>
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
      </Box>
    </Container>
  );
};

export default Index;