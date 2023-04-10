import {
  ActionIcon,
  AppShell,
  Aside,
  Group,
  Header,
  Navbar,
  Stack,
} from "@mantine/core";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";

export default function Layout(props: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);
  const aside = useAppSelector((state) => state.aside.aside);

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: visible ? "20%" : "4%" }} height="100%" p="xs">
          <Group position="apart" noWrap align="flex-start">
            {visible && (
              <Stack>
                <Link href={`/`}>Home Page</Link>
                <Link href={`/todo`}>Todo List</Link>
                <Link href={"/fitness"}>Fitness</Link>
              </Stack>
            )}
            <ActionIcon
              color="blue"
              variant="filled"
              ml="20"
              onClick={() => setVisible(!visible)}
            >
              {visible ? (
                <IconEye size="1.125rem" />
              ) : (
                <IconEyeClosed size="1.125rem" />
              )}
            </ActionIcon>
          </Group>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
      aside={aside}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {props.children}
    </AppShell>
  );
}
