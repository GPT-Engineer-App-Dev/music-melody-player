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
    <Container maxW="container.xl" p={0}>
      <Box bg="gray.900" color="white" minH="100vh">
        {/* Navigation Bar */}
        <Box bg="gray.800" p={4}>
          <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
        </Box>

        {/* Main Section */}
        <VStack spacing={4} p={4} align="stretch">
          <Text fontSize="xl" fontWeight="bold">Song List</Text>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text>Song 1</Text>
          </Box>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text>Song 2</Text>
          </Box>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text>Song 3</Text>
          </Box>
        </VStack>

        {/* Player Controls */}
        <Box bg="gray.800" p={4} position="fixed" bottom={0} width="100%">
          <HStack spacing={4} justify="center">
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              onClick={togglePlayPause}
              size="lg"
              isRound
            />
            <Box flex="1">
              <Progress value={50} size="xs" colorScheme="green" />
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
      </Box>
    </Container>
  );
};

export default Index;