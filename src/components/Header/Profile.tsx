import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gabriel Carvalho</Text>
        <Text color="gray.300">braga.gabrielcarvalho@gmail.com</Text>
      </Box>

      <Avatar
        size="md"
        name="Gabriel Carvalho"
        src="https://github.com/gbcarvalho.png"
      />
    </Flex>
  );
}
