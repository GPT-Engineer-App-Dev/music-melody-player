import { Box, Container, VStack, HStack, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, Image, Flex, Heading } from "@chakra-ui/react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Box as="nav" bg="brand.900" color="white" p={4} mb={4}>
        <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
      </Box>
      <VStack spacing={6}>
        <Box w="100%" bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <HStack spacing={4}>
            <Image boxSize="100px" objectFit="cover" src="https://via.placeholder.com/100" alt="Song Cover" />
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold">Song Title</Text>
              <Text fontSize="md" color="gray.600">Artist Name</Text>
            </VStack>
          </HStack>
        </Box>
        <HStack spacing={4}>
          <IconButton
            aria-label={isPlaying ? "Pause" : "Play"}
            icon={isPlaying ? <FaPause /> : <FaPlay />}
            size="lg"
            onClick={togglePlayPause}
          />
          <Slider aria-label="progress-bar" defaultValue={30} flex="1">
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </HStack>
        <HStack spacing={4} w="100%">
          <FaVolumeUp />
          <Slider aria-label="volume-control" value={volume} onChange={(val) => setVolume(val)} flex="1">
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;