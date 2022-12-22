import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import fetcherLogin from "../functions/fetchers/fetcherLogin";
import { ResponseLogin } from "../types/Responses";
import { User } from "../types/Users";

const Login = (props: { setUser: any; setToken: any; setSelection: any }) => {
  const { setUser, setToken, setSelection } = props;

  const [submitLogin, setSubmitLogin] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<User | null>(null);

  const theme = useTheme();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newUser = {
      email: formData.get("email"),
      password: formData.get("password"),
    } as User;
    setUser(newUser);
    setSubmitLogin(true);
  };

  if (submitLogin && newUser !== null) {
    const { data, error } = useSWR<ResponseLogin, Error>(
      "http://localhost:3300/api/user/login",
      (url: string, newUser: User) => fetcherLogin(url, newUser)
    );
    let rtn = "";

    useEffect(() => {
      if (!data) return;
      if (data.status == "success") {
        setUser(newUser);
        setToken(data.data);
        rtn = "Login Eseguito";
        setSubmitLogin(false);
        setSelection("Calendario");
      } else {
        alert("Login Errato");
        rtn = "Login Errato";
      }
    }, [data]);

    return (
      <>
        <Typography>{rtn}</Typography>
      </>
    );
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
};
export default Login;
