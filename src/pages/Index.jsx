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
      <Box bg="gray.800" color="white" py={4} px={8}>
        <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
      </Box>
      <Container centerContent maxW="container.md" py={8}>
        <VStack spacing={4} width="100%">
          <Box width="100%">
            <Text fontSize="xl" mb={2}>Song List</Text>
            <Box bg="gray.700" p={4} borderRadius="md">
              <Text>Song 1</Text>
              <Text>Song 2</Text>
              <Text>Song 3</Text>
            </Box>
          </Box>
          <HStack spacing={4} width="100%" justifyContent="center">
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              size="lg"
              onClick={togglePlayPause}
            />
            <Box flex="1">
              <Progress value={50} size="xs" colorScheme="green" />
            </Box>
            <HStack spacing={2}>
              <FaVolumeUp />
              <Slider aria-label="volume-slider" value={volume} onChange={(val) => setVolume(val)} min={0} max={100} width="100px">
                <SliderTrack bg="gray.600">
                  <SliderFilledTrack bg="green.400" />
                </SliderTrack>
                <SliderThumb boxSize={4} />
              </Slider>
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;