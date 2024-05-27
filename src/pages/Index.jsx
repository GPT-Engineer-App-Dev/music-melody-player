import { Box, Container, VStack, Text, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, HStack, Flex } from "@chakra-ui/react";
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
      <VStack spacing={4} mt={4} px={8}>
        <Box w="100%" bg="gray.800" p={4} borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">Song List</Text>
          <VStack spacing={2} mt={2}>
            <Text>Song 1</Text>
            <Text>Song 2</Text>
            <Text>Song 3</Text>
          </VStack>
        </Box>
        <Box w="100%" bg="gray.800" p={4} borderRadius="md">
          <HStack justifyContent="space-between" w="100%">
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              size="lg"
              onClick={togglePlayPause}
            />
            <Slider aria-label="progress-bar" defaultValue={30} flex="1" mx={4}>
              <SliderTrack bg="gray.700">
                <SliderFilledTrack bg="gray.400" />
              </SliderTrack>
              <SliderThumb boxSize={4} />
            </Slider>
            <HStack>
              <FaVolumeUp />
              <Slider aria-label="volume-control" value={volume} onChange={(val) => setVolume(val)} maxW="100px">
                <SliderTrack bg="gray.700">
                  <SliderFilledTrack bg="gray.400" />
                </SliderTrack>
                <SliderThumb boxSize={4} />
              </Slider>
            </HStack>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;