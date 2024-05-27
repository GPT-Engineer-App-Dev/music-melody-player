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

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="gray.800" color="white" p={4}>
        <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
      </Box>
      <VStack spacing={4} p={4} align="stretch">
        <Box bg="gray.700" p={4} borderRadius="md">
          <Text fontSize="lg" fontWeight="bold">Song List</Text>
          <VStack spacing={2} mt={2}>
            <Box bg="gray.600" p={2} borderRadius="md" w="100%">
              <Text>Song 1</Text>
            </Box>
            <Box bg="gray.600" p={2} borderRadius="md" w="100%">
              <Text>Song 2</Text>
            </Box>
            <Box bg="gray.600" p={2} borderRadius="md" w="100%">
              <Text>Song 3</Text>
            </Box>
          </VStack>
        </Box>
        <Box bg="gray.700" p={4} borderRadius="md">
          <HStack justifyContent="space-between">
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              onClick={togglePlayPause}
              size="lg"
              colorScheme="teal"
            />
            <VStack flex="1" spacing={2} mx={4}>
              <Progress value={progress} size="sm" colorScheme="teal" w="100%" />
              <Slider value={progress} onChange={handleProgressChange} colorScheme="teal">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </VStack>
            <HStack>
              <FaVolumeUp />
              <Slider value={volume} onChange={handleVolumeChange} colorScheme="teal" maxW={isMobile ? "100px" : "200px"}>
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