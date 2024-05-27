import { Box, Container, VStack, Text, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, HStack, Image } from "@chakra-ui/react";
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
      <Box bg="gray.900" color="white" py={4} px={8}>
        <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
      </Box>
      <Box p={8}>
        <VStack spacing={8}>
          <Box w="100%" bg="gray.800" p={4} borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Song List</Text>
            <VStack spacing={4} mt={4}>
              <Box w="100%" p={4} bg="gray.700" borderRadius="md">
                <Text>Song 1</Text>
              </Box>
              <Box w="100%" p={4} bg="gray.700" borderRadius="md">
                <Text>Song 2</Text>
              </Box>
              <Box w="100%" p={4} bg="gray.700" borderRadius="md">
                <Text>Song 3</Text>
              </Box>
            </VStack>
          </Box>
          <Box w="100%" bg="gray.800" p={4} borderRadius="md">
            <HStack spacing={4}>
              <IconButton
                aria-label={isPlaying ? "Pause" : "Play"}
                icon={isPlaying ? <FaPause /> : <FaPlay />}
                onClick={togglePlayPause}
                size="lg"
                colorScheme="teal"
              />
              <Slider aria-label="progress-bar" defaultValue={30} flex="1">
                <SliderTrack bg="gray.600">
                  <SliderFilledTrack bg="teal.500" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
              </Slider>
              <HStack spacing={2}>
                <FaVolumeUp />
                <Slider aria-label="volume-control" value={volume} onChange={(val) => setVolume(val)} maxW="100px">
                  <SliderTrack bg="gray.600">
                    <SliderFilledTrack bg="teal.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={6} />
                </Slider>
              </HStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;