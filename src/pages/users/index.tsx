import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";
import { useEffect } from "react";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
  const { data, isLoading, isFetching, error } = useUsers();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth="1480" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" marginLeft="4" />
              )}
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    {isWideVersion && <Th width="8"></Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td px={["4", "4", "6"]}>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="small" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}

                        {isWideVersion && (
                          <Td>
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="blue"
                              leftIcon={
                                <Icon as={RiPencilLine} fontSize="16" />
                              }
                              iconSpacing={isWideVersion ? "2" : "0"}
                            >
                              {isWideVersion ? "Editar" : ""}
                            </Button>
                          </Td>
                        )}
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
