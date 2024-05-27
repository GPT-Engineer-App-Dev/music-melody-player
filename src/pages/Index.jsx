import { Box, Container, VStack, HStack, Text, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Progress, Image } from "@chakra-ui/react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(30); // Example progress value

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="gray.800" color="white" py={4} px={8}>
        <HStack justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
          <HStack spacing={4}>
            <Text>Home</Text>
            <Text>Library</Text>
            <Text>Search</Text>
          </HStack>
        </HStack>
      </Box>

      <Box p={8}>
        <VStack spacing={4} align="stretch">
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Song Title - Artist</Text>
          </Box>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Song Title - Artist</Text>
          </Box>
          <Box bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Song Title - Artist</Text>
          </Box>
        </VStack>
      </Box>

      <Box bg="gray.900" color="white" py={4} px={8} position="fixed" bottom={0} width="100%">
        <HStack justifyContent="space-between">
          <HStack spacing={4}>
            <Image boxSize="50px" src="/path/to/album/art.jpg" alt="Album Art" />
            <VStack align="start" spacing={0}>
              <Text fontSize="md" fontWeight="bold">Current Song Title</Text>
              <Text fontSize="sm">Current Artist</Text>
            </VStack>
          </HStack>
          <HStack spacing={4}>
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              onClick={togglePlayPause}
              size="lg"
              colorScheme="teal"
            />
            <Box width="400px">
              <Progress value={progress} size="xs" colorScheme="teal" />
            </Box>
          </HStack>
          <HStack spacing={4}>
            <FaVolumeUp />
            <Slider aria-label="volume-slider" value={volume} onChange={(val) => setVolume(val)} maxW="150px">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </HStack>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;