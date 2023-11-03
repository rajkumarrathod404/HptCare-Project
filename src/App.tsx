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

// export default App;
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Router } from "./Router";
import { theme } from "./theme";
import { CollapseDesktop } from "./Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Routes>
          <Route></Route>
        </Routes>
        <CollapseDesktop />
        {/* <Router /> */}
      </MantineProvider>
    </BrowserRouter>
  );
}
