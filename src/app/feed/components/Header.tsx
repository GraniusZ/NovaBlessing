"use client";
import useLogout from "@/hooks/auth/useLogout";
import { User } from "@/app/types/User";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Menu,
  IconButton,
  MenuItem,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
export const Header = ({ user }: { user: User | null }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = useLogout();
  const handleLogout = async () => {
    return signOut();
  };
  return (
    <AppBar position="sticky" sx={{ top: 0, px: 0 }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link
            href={"/feed"}
            style={{ textDecoration: "none", display: "flex", gap: "4px" }}
          >
            <Typography color="white" fontWeight="bold">
              NovaBlessing
            </Typography>
            <Typography color="white" fontWeight="bold">
              |
            </Typography>
            <Typography color="white" fontWeight="bold">
              {user?.user_metadata.role}
            </Typography>
          </Link>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "button",
            }}
          >
            <MenuItem
              sx={[
                {
                  "&:hover": { backgroundColor: "transparent" },
                  "&:active": { backgroundColor: "transparent" },
                },
              ]}
              onClick={(event) => event.stopPropagation()}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                {" "}
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ flexGrow: 1, fontWeight: "bold" }}
                >
                  {user?.user_metadata.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="span"
                  sx={{ flexGrow: 1, opacity: "50%" }}
                >
                  {"@" + user?.user_metadata.username}
                </Typography>
              </Box>
            </MenuItem>
            <MenuItem style={{ backgroundColor: "transparent" }}>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </MenuItem>
          </Menu>
          <IconButton
            id="basic-button"
            aria-controls={open ? "menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu-open"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
