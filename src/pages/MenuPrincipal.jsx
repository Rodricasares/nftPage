import { Navegation } from "../components/Navegation";
import { Light } from "../styles/Themes";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Home } from "../components/sections/Home";
import { About } from "../components/sections/About";
import { Roadmap } from "../components/sections/RoadMap";
export function MenuPrincipal() {

  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light}>
      <Navegation />
      <Home />
      <About />
      <Roadmap />
      </ThemeProvider>


 </main>
  )
}