import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { theme } from "./theme";
import { CollapseDesktop } from "./CollapseDesktop";

<MantineProvider
  theme={createTheme({
    fontFamily: "Open Sans, sans-serif",
    primaryColor: "red",
    components: {
      Text: {
        styles: () => ({
          root: { color: "red" },
        }),
      },
    },
  })}
/>;

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <CollapseDesktop />
    </MantineProvider>
  );
}
