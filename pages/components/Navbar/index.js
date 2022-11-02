import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const navItems = ["home", "conheça-mais", "contatos"];

function appBarLabel(label) {
  return (
    <>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {label}
        </Typography>
      </Toolbar>

      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {navItems.map((item) => (
          <Button key={item} sx={{ color: "#fff" }} href={item}>
            {item}
          </Button>
        ))}
      </Box>
    </>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function Navbar() {
  return (
    <Stack spacing={1} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Container>
            <Toolbar>{appBarLabel("Redblock")}</Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
