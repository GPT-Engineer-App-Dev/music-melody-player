import { Box, Container, VStack, HStack, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, Image } from "@chakra-ui/react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";

const songs = [
  { title: "Song 1", artist: "Artist 1", duration: "3:45" },
  { title: "Song 2", artist: "Artist 2", duration: "4:20" },
  { title: "Song 3", artist: "Artist 3", duration: "2:50" },
];

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Box as="nav" bg="brand.700" color="white" p={4} mb={4} display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
        <Image src="/path/to/logo.png" alt="Logo" boxSize="40px" />
      </Box>
      <VStack spacing={4} align="stretch">
        {songs.map((song, index) => (
          <HStack key={index} justifyContent="space-between" p={4} bg="gray.100" borderRadius="md" boxShadow="sm">
            <VStack align="start" spacing={0}>
              <Text fontSize="lg" fontWeight="bold">{song.title}</Text>
              <Text fontSize="sm" color="gray.600">{song.artist}</Text>
            </VStack>
            <Text fontSize="sm" color="gray.600">{song.duration}</Text>
          </HStack>
        ))}
      </VStack>
      <Box position="fixed" bottom={0} left={0} right={0} bg="white" p={4} boxShadow="md">
        <HStack justifyContent="space-between">
          <IconButton
            aria-label={isPlaying ? "Pause" : "Play"}
            icon={isPlaying ? <FaPause /> : <FaPlay />}
            onClick={togglePlayPause}
            size="lg"
            variant="ghost"
            colorScheme="teal"
          />
          <Slider aria-label="progress-bar" defaultValue={30} flex="1" mx={4}>
            <SliderTrack bg="gray.200">
              <SliderFilledTrack bg="teal.500" />
            </SliderTrack>
            <SliderThumb boxSize={4} />
          </Slider>
          <HStack>
            <FaVolumeUp />
            <Slider aria-label="volume-control" value={volume} onChange={(val) => setVolume(val)} maxW="100px">
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="teal.500" />
              </SliderTrack>
              <SliderThumb boxSize={4} />
            </Slider>
          </HStack>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;