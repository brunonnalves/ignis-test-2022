import { Router, Visibility, VisibilityOff } from "@mui/icons-material"
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
import HeaderDefault from "../../components/HeaderDefault/HeaderDefault"
import { authService } from "../../services"
import { LoginFormContainer, LoginFormStyled, LoginMainContainer, LoginPageContainer } from "./styles"

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

const LoginPage: NextPage = () => {
  const router = useRouter();
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      const { accessToken, user } = await authService.login({
        email: values.email,
        password: values.password,
      })
      localStorage.setItem('accessToken', accessToken.token)
      localStorage.setItem('user', JSON.stringify(user))
      router.push('movies')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <LoginPageContainer>
        <Head>
          <title>IgnisFlix | Login</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <LoginMainContainer>
          <HeaderDefault isIconExists={true} />

          <LoginFormContainer>
            <p>E-mail / username</p>
            <LoginFormStyled variant="outlined">
              <OutlinedInput
                id="email"
                type="text"
                value={values.email}
                onChange={handleChange('email')}
              />
            </LoginFormStyled>

            <p>Senha</p>
            <LoginFormStyled variant="outlined">
              <OutlinedInput
                id="password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </LoginFormStyled>
          </LoginFormContainer>

          <ButtonDefault text={`Entrar`} onClick={() => { handleLogin() }} />

        </LoginMainContainer>
      </LoginPageContainer>
    </>
  )
}

export default LoginPage;