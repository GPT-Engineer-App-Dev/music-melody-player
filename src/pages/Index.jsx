import { Box, Container, VStack, HStack, Text, IconButton, Progress, Slider, SliderTrack, SliderFilledTrack, SliderThumb, useBreakpointValue } from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (value) => {
    setProgress(value);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  const iconSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Container maxW="container.xl" p={4}>
      <Box as="nav" bg="gray.800" color="white" p={4} mb={4} borderRadius="md">
        <Text fontSize="xl" fontWeight="bold">Music Player</Text>
      </Box>
      <VStack spacing={4} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">Song List</Text>
          <VStack spacing={2} mt={2}>
            <Text>Song 1</Text>
            <Text>Song 2</Text>
            <Text>Song 3</Text>
          </VStack>
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md">
          <HStack spacing={4} justify="center">
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              size={iconSize}
              onClick={handlePlayPause}
            />
          </HStack>
          <Progress value={progress} size="sm" mt={4} />
          <Slider
            aria-label="progress-slider"
            value={progress}
            onChange={handleProgressChange}
            mt={4}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text mt={4}>Volume</Text>
          <Slider
            aria-label="volume-slider"
            value={volume}
            onChange={handleVolumeChange}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;