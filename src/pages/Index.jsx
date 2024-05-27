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
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <HStack justifyContent="space-between" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
        <HStack spacing={4}>
          <Text>Home</Text>
          <Text>Library</Text>
          <Text>Search</Text>
        </HStack>
      </HStack>

      {/* Main Section */}
      <VStack spacing={4} align="stretch">
        {/* Song List */}
        <Box>
          <Text fontSize="xl" mb={2}>Songs</Text>
          <VStack align="stretch" spacing={2}>
            <HStack justifyContent="space-between" p={2} borderWidth="1px" borderRadius="md">
              <Text>Song 1</Text>
              <Text>Artist 1</Text>
            </HStack>
            <HStack justifyContent="space-between" p={2} borderWidth="1px" borderRadius="md">
              <Text>Song 2</Text>
              <Text>Artist 2</Text>
            </HStack>
            <HStack justifyContent="space-between" p={2} borderWidth="1px" borderRadius="md">
              <Text>Song 3</Text>
              <Text>Artist 3</Text>
            </HStack>
          </VStack>
        </Box>

        {/* Player Controls */}
        <Box borderWidth="1px" borderRadius="md" p={4}>
          <HStack justifyContent="space-between" mb={4}>
            <Image boxSize="50px" src="https://via.placeholder.com/50" alt="Album Art" />
            <VStack align="start">
              <Text fontWeight="bold">Current Song</Text>
              <Text>Current Artist</Text>
            </VStack>
            <IconButton
              aria-label={isPlaying ? "Pause" : "Play"}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              onClick={togglePlayPause}
            />
          </HStack>

          {/* Progress Bar */}
          <Progress value={progress} size="xs" mb={4} />

          {/* Volume Control */}
          <HStack>
            <FaVolumeUp />
            <Slider aria-label="volume-slider" value={volume} onChange={(val) => setVolume(val)}>
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