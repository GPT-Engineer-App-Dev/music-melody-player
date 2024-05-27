import { Box, Container, VStack, HStack, Text, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, useBreakpointValue } from "@chakra-ui/react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  const handleProgressChange = (value) => {
    setProgress(value);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={4}>
      <Box as="nav" bg="brand.800" color="white" p={4} mb={4} borderRadius="md">
        <Text fontSize="xl" fontWeight="bold">Music Player</Text>
      </Box>
      <VStack spacing={4} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold" mb={2}>Song List</Text>
          <VStack spacing={2} align="stretch">
            <Text>Song 1</Text>
            <Text>Song 2</Text>
            <Text>Song 3</Text>
            <Text>Song 4</Text>
          </VStack>
        </Box>
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <HStack spacing={4} align="center">
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              onClick={handlePlayPause}
              size="lg"
            />
            <Slider
              aria-label="progress-bar"
              value={progress}
              onChange={handleProgressChange}
              flex="1"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <HStack spacing={2} align="center">
              <FaVolumeUp />
              <Slider
                aria-label="volume-control"
                value={volume}
                onChange={handleVolumeChange}
                max={100}
                w={isMobile ? "100px" : "200px"}
              >
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