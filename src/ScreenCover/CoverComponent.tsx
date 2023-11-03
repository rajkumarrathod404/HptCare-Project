import { Overlay, Container, Title, Button, Text, Box } from "@mantine/core";
import classes from "./HeroContentLeft.module.css";
import { Link, Outlet } from "react-router-dom";

export function CoverComponent() {
  return (
    <div className={classes.hero}>
      <Outlet />
      (
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>
          The employee engagement and culture you want – in only 6 weeks
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          Employee is all about serve - best
        </Text>
        <Box style={{ display: "flex", gap: "10px" }}>
          <Link to={"/cover/login"}>
            <Button
              variant="gradient"
              size="xl"
              radius="xl"
              className={classes.button}>
              Log-In
            </Button>
          </Link>
          <Link to={"/cover/signup"}>
            <Button
              variant="gradient"
              size="xl"
              radius="xl"
              className={classes.button}>
              Sign-UP
            </Button>
          </Link>
        </Box>
      </Container>
      )
    </div>
  );
}
