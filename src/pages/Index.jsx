import { Box, Container, VStack, HStack, Text, IconButton, Progress, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container maxW="container.xl" p={{ base: 2, md: 4 }}>
      <Box bg="gray.900" color="white" minH="100vh" p={{ base: 2, md: 4 }}>
        {/* Navigation Bar */}
        <Box bg="gray.800" p={{ base: 2, md: 4 }} borderBottom="1px" borderColor="gray.700">
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">Music Player</Text>
        </Box>

        {/* Main Section */}
        <VStack spacing={4} p={{ base: 2, md: 4 }} align="stretch">
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">Song List</Text>
          <Box bg="gray.700" p={{ base: 2, md: 4 }} borderRadius="md" _hover={{ bg: "gray.600" }}>
            <Text>Song 1</Text>
          </Box>
          <Box bg="gray.700" p={{ base: 2, md: 4 }} borderRadius="md" _hover={{ bg: "gray.600" }}>
            <Text>Song 2</Text>
          </Box>
          <Box bg="gray.700" p={{ base: 2, md: 4 }} borderRadius="md" _hover={{ bg: "gray.600" }}>
            <Text>Song 3</Text>
          </Box>
        </VStack>

        {/* Player Controls */}
        <Box bg="gray.800" p={{ base: 2, md: 4 }} position="fixed" bottom={0} width="100%" borderTop="1px" borderColor="gray.700">
          <HStack spacing={4} justify="center" align="center">
            <IconButton
        aria-label={isPlaying ? "Pause" : "Play"}
        icon={isPlaying ? <FaPause /> : <FaPlay />}
        onClick={togglePlayPause}
        size="lg"
        isRound
        _hover={{ bg: "gray.600" }}
    />
            <Box flex="1" mx={{ base: 2, md: 4 }}>
        <Progress value={50} size="xs" colorScheme="green" />
    </Box>
            <HStack spacing={2} align="center">
        <FaVolumeUp />
        <Slider aria-label="volume-slider" value={volume} onChange={(val) => setVolume(val)} maxW="100px">
            <SliderTrack bg="gray.600">
                <SliderFilledTrack bg="green.500" />
            </SliderTrack>
            <SliderThumb boxSize={4} />
        </Slider>
    </HStack>
          </HStack>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;