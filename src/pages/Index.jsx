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
      <Box as="nav" bg="brand.700" color="white" p={4} mb={4}>
        <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
      </Box>
      <VStack spacing={4} align="stretch">
        {songs.map((song, index) => (
          <HStack key={index} justifyContent="space-between" p={4} bg="gray.100" borderRadius="md">
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold">{song.title}</Text>
              <Text fontSize="sm">{song.artist}</Text>
            </VStack>
            <Text fontSize="sm">{song.duration}</Text>
          </HStack>
        ))}
      </VStack>
      <Box position="fixed" bottom={0} left={0} right={0} bg="white" p={4} boxShadow="md">
        <HStack justifyContent="space-between">
          <IconButton
            aria-label={isPlaying ? "Pause" : "Play"}
            icon={isPlaying ? <FaPause /> : <FaPlay />}
            onClick={togglePlayPause}
          />
          <Slider aria-label="progress-bar" defaultValue={30} flex="1" mx={4}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <HStack>
            <FaVolumeUp />
            <Slider aria-label="volume-control" value={volume} onChange={(val) => setVolume(val)} maxW="100px">
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