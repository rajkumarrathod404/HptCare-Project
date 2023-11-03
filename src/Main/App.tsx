// import { MantineProvider, createTheme } from "@mantine/core";
// import Navbar from "./Navbar";
// function App() {
//   return (
//     <MantineProvider
//       theme={createTheme({
//         fontFamily: "Open Sans, sans-serif",
//         primaryColor: "red",
//         components: {
//           Text: {
//             styles: () => ({
//               root: { color: "red" },
//             }),
//           },
//         },
//       })}>
//       <>
//         <Navbar />
//       </>
//     </MantineProvider>
//   );
// }
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
  })}></MantineProvider>;
// export default App;
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
// import { Router } from "./Router";
import { theme } from "../theme";
import { CollapseDesktop } from "../Navbar";
// import Count from "./Count";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      {/* <Count /> */}
      <CollapseDesktop />
    </MantineProvider>
  );
}
