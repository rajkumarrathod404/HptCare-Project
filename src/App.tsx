import { MantineProvider, Text, createTheme } from "@mantine/core";
function App() {
  return (
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
      })}>
      <Text>Hello</Text>
    </MantineProvider>
  );
}

export default App;
