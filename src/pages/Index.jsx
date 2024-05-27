import { Box, Container, VStack, HStack, Text, IconButton, Progress, Slider, SliderTrack, SliderFilledTrack, SliderThumb, useBreakpointValue } from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);
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
    <Container maxW="container.xl" p={0}>
      <Box bg="gray.800" color="white" py={4} px={8}>
        <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
      </Box>
      <VStack spacing={4} align="stretch" p={8}>
        <Box bg="gray.700" p={4} borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">Song List</Text>
          <VStack spacing={2} mt={2}>
            <Text>Song 1</Text>
            <Text>Song 2</Text>
            <Text>Song 3</Text>
            <Text>Song 4</Text>
          </VStack>
        </Box>
        <Box bg="gray.700" p={4} borderRadius="md">
          <HStack justify="space-between" align="center">
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              size={iconSize}
              onClick={handlePlayPause}
            />
            <Text>00:30 / 03:00</Text>
          </HStack>
          <Progress value={progress} size="sm" mt={2} />
          <Slider aria-label="progress-slider" value={progress} onChange={handleProgressChange} mt={2}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <Box bg="gray.700" p={4} borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">Volume</Text>
          <Slider aria-label="volume-slider" value={volume} onChange={handleVolumeChange} mt={2}>
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