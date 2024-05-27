import { Box, Container, VStack, HStack, Text, IconButton, Progress, Slider, SliderTrack, SliderFilledTrack, SliderThumb, useBreakpointValue } from "@chakra-ui/react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  const handleProgressChange = (value) => {
    setProgress(value);
  };

  const iconSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Container maxW="container.xl" p={4}>
      <Box as="nav" bg="gray.800" color="white" p={4} mb={4} borderRadius="md" boxShadow="lg">
        <Text fontSize="2xl" fontWeight="extrabold" textAlign="center">Music Player</Text>
      </Box>
      <VStack spacing={4} align="stretch">
        <Box bg="white" p={6} borderRadius="lg" boxShadow="lg">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Song List</Text>
          <VStack spacing={3} mt={2} align="stretch">
            <Box p={2} bg="gray.50" borderRadius="md" boxShadow="sm">Song 1</Box>
            <Box p={2} bg="gray.50" borderRadius="md" boxShadow="sm">Song 2</Box>
            <Box p={2} bg="gray.50" borderRadius="md" boxShadow="sm">Song 3</Box>
          </VStack>
        </Box>
        <Box bg="white" p={6} borderRadius="lg" boxShadow="lg">
          <HStack spacing={6} align="center" justify="center">
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              size={iconSize}
              onClick={togglePlayPause}
              bg="blue.500"
              color="white"
              _hover={{ bg: "blue.600" }}
            />
            <Text fontSize="lg" fontWeight="medium">{isPlaying ? "Playing" : "Paused"}</Text>
          </HStack>
          <Progress value={progress} size="sm" mt={4} colorScheme="blue" borderRadius="md" />
          <Slider
            aria-label="progress-slider"
            value={progress}
            onChange={handleProgressChange}
            mt={4}
            colorScheme="blue"
          >
            <SliderTrack bg="blue.100">
              <SliderFilledTrack bg="blue.500" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <HStack spacing={4} align="center">
            <FaVolumeUp />
            <Slider
              aria-label="volume-slider"
              value={volume}
              onChange={handleVolumeChange}
              min={0}
              max={100}
              flex="1"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text>{volume}%</Text>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;