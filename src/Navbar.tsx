import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Box,
  Burger,
  Button,
  Group,
  Skeleton,
  Table,
  TableTbody,
  TableThead,
} from "@mantine/core";
import { useEffect, useState } from "react";
// import { MantineLogo } from '@mantine/ds';
interface empType {
  id: number;
  name: string;
  email: string;
  num: number;
}
export function CollapseDesktop() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [empList, setEmpList] = useState<empType[]>([]);
  const handleDelete = (id: number, source: string) => {
    // source==="ADD"?
  };

  useEffect(() => {
    fetch("http://localhost:5174/emp")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpList(resp);
      })
      .catch((err: string) => {
        console.log("json error", err);
      });
  }, []);

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
            size="md"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="md"
          />
          Profile
          {/* <MantineLogo size={30} /> */}
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="md" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Table>
          <TableThead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>email</td>
              <td>Contact</td>
              <td>Action</td>
            </tr>
          </TableThead>
          {empList?.map((emp: empType) => {
            return (
              <TableTbody>
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.num}</td>
                  <td>
                    <Button
                      onClick={() => {
                        handleDelete(emp.id, "ADD");
                      }}>
                      Add
                    </Button>
                    <Button
                      onClick={() => {
                        handleDelete(emp.id, "REMOVE");
                      }}>
                      Delete
                    </Button>
                  </td>
                </tr>
              </TableTbody>
            );
          })}
        </Table>
      </AppShell.Main>
    </AppShell>
  );
}
// AppShell examples | Mantine
