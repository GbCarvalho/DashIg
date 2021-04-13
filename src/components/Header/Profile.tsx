import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Carvalho</Text>
          <Text color="gray.300">braga.gabrielcarvalho@gmail.com</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gabriel Carvalho"
        src="https://github.com/gbcarvalho.png"
      />
    </Flex>
  );
}
