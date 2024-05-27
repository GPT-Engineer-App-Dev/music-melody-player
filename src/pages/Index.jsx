import { Box, Container, VStack, HStack, Text, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Progress, Image } from "@chakra-ui/react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(30);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="gray.800" color="white" p={4}>
        <HStack justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
          <HStack spacing={4}>
            <Text>Home</Text>
            <Text>Library</Text>
            <Text>Search</Text>
          </HStack>
        </HStack>
      </Box>
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Box bg="gray.700" p={4} borderRadius="md">
            <HStack justifyContent="space-between">
              <Text fontSize="lg">Song Title - Artist</Text>
              <IconButton
                aria-label={isPlaying ? "Pause" : "Play"}
                icon={isPlaying ? <FaPause /> : <FaPlay />}
                onClick={togglePlayPause}
              />
            </HStack>
            <Progress value={progress} size="xs" colorScheme="green" mt={2} />
          </Box>
          <Box bg="gray.700" p={4} borderRadius="md">
            <HStack justifyContent="space-between">
              <Text fontSize="lg">Song Title - Artist</Text>
              <IconButton
                aria-label={isPlaying ? "Pause" : "Play"}
                icon={isPlaying ? <FaPause /> : <FaPlay />}
                onClick={togglePlayPause}
              />
            </HStack>
            <Progress value={progress} size="xs" colorScheme="green" mt={2} />
          </Box>
          <Box bg="gray.700" p={4} borderRadius="md">
            <HStack justifyContent="space-between">
              <Text fontSize="lg">Song Title - Artist</Text>
              <IconButton
                aria-label={isPlaying ? "Pause" : "Play"}
                icon={isPlaying ? <FaPause /> : <FaPlay />}
                onClick={togglePlayPause}
              />
            </HStack>
            <Progress value={progress} size="xs" colorScheme="green" mt={2} />
          </Box>
        </VStack>
      </Box>
      <Box bg="gray.900" color="white" p={4} position="fixed" bottom="0" width="100%">
        <HStack justifyContent="space-between">
          <HStack>
            <Image boxSize="50px" src="https://via.placeholder.com/50" alt="Album Art" />
            <VStack align="start" spacing={0}>
              <Text fontSize="lg">Song Title</Text>
              <Text fontSize="sm">Artist</Text>
            </VStack>
          </HStack>
          <HStack spacing={4}>
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              onClick={togglePlayPause}
            />
            <Slider aria-label="progress-bar" value={progress} onChange={(val) => setProgress(val)} maxW="300px">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </HStack>
          <HStack spacing={4}>
            <FaVolumeUp />
            <Slider aria-label="volume-slider" value={volume} onChange={(val) => setVolume(val)} maxW="100px">
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