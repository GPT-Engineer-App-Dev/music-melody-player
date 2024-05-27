import { Container, VStack, Box, Text, IconButton, Progress, Slider, SliderTrack, SliderFilledTrack, SliderThumb, HStack, Image } from "@chakra-ui/react";
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
    <Container maxW="container.xl" p={4}>
      <Box as="nav" bg="gray.800" color="white" p={4} mb={4}>
        <Text fontSize="xl" fontWeight="bold">Music Player</Text>
      </Box>
      <VStack spacing={4} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>Song List</Text>
          <VStack spacing={2} align="stretch">
            <Box p={2} bg="white" borderRadius="md" boxShadow="sm">Song 1</Box>
            <Box p={2} bg="white" borderRadius="md" boxShadow="sm">Song 2</Box>
            <Box p={2} bg="white" borderRadius="md" boxShadow="sm">Song 3</Box>
          </VStack>
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <HStack spacing={4} align="center">
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              onClick={togglePlayPause}
            />
            <Text>{isPlaying ? "Playing" : "Paused"}</Text>
          </HStack>
          <Progress value={progress} size="sm" mt={4} />
          <Slider aria-label="progress-slider" value={progress} onChange={handleProgressChange} mt={4}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <HStack spacing={4} align="center" mt={4}>
            <FaVolumeUp />
            <Slider aria-label="volume-slider" value={volume} onChange={handleVolumeChange}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;