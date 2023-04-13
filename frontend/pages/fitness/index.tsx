import { Flex, Group, Stack } from "@mantine/core";

export default function FitnessPage() {
  return (
    <Group>
      <Stack w="75%" h="100vh">
        <Group h="25%" noWrap>
          <Flex bg="blue" w="70%" h="100%">
            helo
          </Flex>
          <Stack w="30%" h="100%">
            <Flex w="100%" h="50%" bg="green">
              n
            </Flex>
            <Flex w="100%" h="50%" bg="red">
              n
            </Flex>
          </Stack>
        </Group>
        <Group></Group>
        <Group></Group>
        <Group></Group>
      </Stack>
      <Stack w="25%"></Stack>
    </Group>
  );
}
