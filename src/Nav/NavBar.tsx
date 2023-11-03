import avtarImg from "../assets/Avtar.jpeg";
interface sideBarType {
  path: string;
  text: string;
}

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Avatar, Box, Burger, Button, Group } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <Avatar src={avtarImg} radius="xl" alt="it's me" />
          <Link to={"/profile"}><Button style={{backgroundColor:"#5DADE2"}}>Profile</Button></Link>
          <Link to={"/"}><Button style={{backgroundColor:"#5DADE2"}}>Employee Details</Button></Link>
          <Link to={"/cover"}><Button>Log Out </Button></Link>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Box h={28} mt="md">
          {[
            { path: "/", text: "Home" },
            { path: "/about", text: "About" },
            { path: "/contactus", text: "Contact US" },
            { path: "/chat", text: "Chat" },
          ].map((item: sideBarType, index: number) => {
            return (
              <ul>
                <li key={index}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              </ul>
            );
          })}
        </Box>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
