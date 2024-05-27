import { Box, Container, VStack, Text, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, HStack, Image } from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Box as="nav" bg="brand.700" color="white" p={4} mb={4}>
        <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
      </Box>
      <VStack spacing={4} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="xl" mb={2}>Song List</Text>
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
              size="lg"
            />
            <Slider aria-label="progress-bar" defaultValue={30} flex="1">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Slider aria-label="volume-control" value={volume} onChange={handleVolumeChange} maxW="100px">
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