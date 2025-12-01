import React from 'react'
import {
  Card,
  Flex,
  Box,
  Heading,
  Text,
  TextField,
  Button,
  Link,
} from "@radix-ui/themes";
import { useLogin } from '../hooks/login-hook';

const Login = () => {
  const { register, handleSubmit, loginSubmit, errors } = useLogin();

  return (
    <Flex
      height="100vh"
      align="center"
      justify="center"
      style={{ backgroundColor: "#f9f9fb" }}
    >
      <Card
        size="4"
        variant="surface"
        style={{
          width: "100%",
          maxWidth: "420px",
          boxShadow:
            "0 8px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04)",
        }}
      >
        <form onSubmit={handleSubmit(loginSubmit)}>
          <Flex direction="column" gap="3">
            <Heading align="center" size="6" weight="bold" gap="9">
              Login
            </Heading>

            <Flex direction="column" gap="3">
              <Box>
                <Text weight="medium">Email Address</Text>
                <TextField.Root
                  {...register("email")}
                  placeholder="you@example.com"
                  type="email"
                />
                {errors.email && (
                  <div className="mt-1 flex items-center gap-1">
                    <p className="text-xs text-red-600 font-medium tracking-tight">
                      {errors?.email?.message}
                    </p>
                  </div>
                )}
              </Box>

              <Box>
                <Text weight="medium">Password</Text>
                <TextField.Root
                  {...register("password")}
                  placeholder="Enter your password"
                  type="password"
                />
                {errors.password && (
                  <div className="mt-1 flex items-center gap-1">
                    <p className="text-xs text-red-600 font-medium tracking-tight">
                      {errors?.password?.message}
                    </p>
                  </div>
                )}
              </Box>

              <Box>
                <Text size="1" color="gray">
                  Don’t have an account?{" "}
                  <Link
                    href="/register"
                    size="1"
                    weight="medium"
                    color="blue"
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Register
                  </Link>
                </Text>
              </Box>
            </Flex>

            <Flex gap="4" justify="center">
              <Button
                type="submit"
                size="3"
                variant="solid"
                style={{ flex: 1 }}
              >
                Login
              </Button>

              <Button size="3" variant="soft" color="gray" style={{ flex: 1 }}>
                Reset
              </Button>
            </Flex>

            <Text align="center" size="1" color="gray">
              By continuing, you agree to our Terms &amp; Privacy Policy.
            </Text>
          </Flex>
        </form>
      </Card>
    </Flex>
  )
}

export default Login