import { Box, Container, VStack, Text, IconButton, Progress, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Flex, Spacer, HStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (value) => {
    setProgress(value);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  return (
    <Container maxW="container.md" height="100vh" display="flex" flexDirection="column">
      <Box as="nav" bg="brand.800" color="white" p={4}>
        <Text fontSize="xl" fontWeight="bold">Music Player</Text>
      </Box>
      <VStack spacing={4} flex="1" justifyContent="center" alignItems="center">
        <Text fontSize="2xl">Song List</Text>
        <Text>1. Song One</Text>
        <Text>2. Song Two</Text>
        <Text>3. Song Three</Text>
      </VStack>
      <Box p={4} bg="gray.100" width="100%">
        <Flex align="center">
          <IconButton
            aria-label={isPlaying ? "Pause" : "Play"}
            icon={isPlaying ? <FaPause /> : <FaPlay />}
            onClick={togglePlayPause}
          />
          <Spacer />
          <HStack spacing={4} flex="1">
            <Text>00:00</Text>
            <Progress value={progress} flex="1" />
            <Text>03:30</Text>
          </HStack>
          <Spacer />
          <HStack spacing={2}>
            <FaVolumeUp />
            <Slider aria-label="volume-slider" value={volume} onChange={handleVolumeChange} maxW="100px">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;