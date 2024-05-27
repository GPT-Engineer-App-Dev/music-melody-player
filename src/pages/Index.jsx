import { Box, Container, VStack, HStack, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, Image, Flex, Heading, List, ListItem, useBreakpointValue } from "@chakra-ui/react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const songs = [
    { title: "Song Title 1", artist: "Artist Name 1", cover: "https://via.placeholder.com/100" },
    { title: "Song Title 2", artist: "Artist Name 2", cover: "https://via.placeholder.com/100" },
    { title: "Song Title 3", artist: "Artist Name 3", cover: "https://via.placeholder.com/100" },
  ];

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={4}>
      <Box as="nav" bg="brand.900" color="white" p={4} mb={4} borderRadius="md" boxShadow="md">
        <Flex justify="space-between" align="center">
          <Text fontSize="2xl" fontWeight="bold">Music Player</Text>
        </Flex>
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
        <HStack spacing={4} w="100%">
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
        <Box w="100%" bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>Songs List</Heading>
          <List spacing={3}>
            {songs.map((song, index) => (
              <ListItem key={index} p={2} bg="white" borderRadius="md" boxShadow="sm" _hover={{ bg: "gray.200" }}>
                <HStack spacing={4}>
                  <Image boxSize="50px" objectFit="cover" src={song.cover} alt={`${song.title} Cover`} />
                  <VStack align="start" spacing={0}>
                    <Text fontSize="md" fontWeight="bold">{song.title}</Text>
                    <Text fontSize="sm" color="gray.600">{song.artist}</Text>
                  </VStack>
                </HStack>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;