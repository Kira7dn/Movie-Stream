import React from "react";
import { Tabs, Button, Tab } from "@mui/material";
import { tokens } from "@/theme";
import logo from "@/assets/Movream.svg";
import { Link } from "react-router-dom";
import FlexBetween from "@/components/wrapper/FlexBetween";
import { IconButton } from "@mui/material";
import { Search, Public, AccountCircle } from "@mui/icons-material";
import ContainerWrapper from "@/components/wrapper/ContainerWrapper";

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ContainerWrapper>
      <FlexBetween>
        <Button component="a" href="/" sx={{ padding: 0 }}>
          <img src={logo} style={{}} />
        </Button>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          textColor="inherit"
        >
          <Tab
            component={Link}
            label="Home"
            to="/"
            sx={{
              color: tokens.grey[30],
              fontWeight: 700,
              fontSize: "14px",
            }}
          />
          <Tab
            component={Link}
            label="Movies"
            to="/movies"
            sx={{
              color: tokens.grey[30],
              fontWeight: 700,
              fontSize: "14px",
            }}
          />
          <Tab
            component={Link}
            label="Series"
            to="/series"
            sx={{
              color: tokens.grey[30],
              fontWeight: 700,
              fontSize: "14px",
            }}
          />
          <Tab
            component={Link}
            label="Cartoons"
            to="/cartoons"
            sx={{
              color: tokens.grey[30],
              fontWeight: 700,
              fontSize: "14px",
            }}
          />
          <Tab
            component={Link}
            label="TV-Shows"
            to="/tvshows"
            sx={{
              color: tokens.grey[30],
              fontWeight: 700,
              fontSize: "14px",
            }}
          />
        </Tabs>
        <FlexBetween>
          <IconButton
            aria-label="search"
            sx={{
              color: tokens.grey[10],
            }}
          >
            <Search fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="language"
            sx={{
              color: tokens.grey[10],
            }}
          >
            <Public fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="account"
            sx={{
              color: tokens.grey[10],
            }}
          >
            <AccountCircle fontSize="large" />
          </IconButton>
        </FlexBetween>
      </FlexBetween>
    </ContainerWrapper>
  );
};

export default Navbar;
