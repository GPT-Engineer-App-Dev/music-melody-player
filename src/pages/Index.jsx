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
      <Box as="nav" bg="gray.800" color="white" p={4} mb={4}>
        <Text fontSize="xl" fontWeight="bold">Music Player</Text>
      </Box>
      <VStack spacing={4} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">Song List</Text>
          <VStack spacing={2} mt={2}>
            <Text>Song 1</Text>
            <Text>Song 2</Text>
            <Text>Song 3</Text>
          </VStack>
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <HStack spacing={4} align="center">
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              size={iconSize}
              onClick={togglePlayPause}
            />
            <Text>{isPlaying ? "Playing" : "Paused"}</Text>
          </HStack>
          <Progress value={progress} size="sm" mt={4} />
          <Slider
            aria-label="progress-slider"
            value={progress}
            onChange={handleProgressChange}
            mt={2}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
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