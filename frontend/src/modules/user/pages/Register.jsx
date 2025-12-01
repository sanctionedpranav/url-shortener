import {
  Card,
  Flex,
  Box,
  Heading,
  Text,
  TextField,
  Button,
  Link
} from "@radix-ui/themes";
import { useRegister } from "../hooks/register-hook";

export default function Register() {
  const { register, handleSubmit, registerSubmit, errors } = useRegister();
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
            "0 8px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04)"
        }}
      >
        <form onSubmit={handleSubmit(registerSubmit)}>
          <Flex direction="column" gap="3">
            <Heading align="center" size="6" weight="bold">
              Create Your Account
            </Heading>

            <Flex direction="column" gap="3">
              <Box>
                <Text weight="medium">
                  Full Name
                </Text>
                <TextField.Root {...register("name")} placeholder="Enter your name" type="text" />
                {errors.name && (
                  <div className="mt-1 flex items-center gap-1">
                    <p className="text-xs text-red-600 font-medium tracking-tight">
                      {errors?.name?.message}
                    </p>
                  </div>
                )}
              </Box>

              <Box>
                <Text weight="medium">
                  Email Address
                </Text>
                <TextField.Root {...register("email")} placeholder="you@example.com" type="email" />
                {errors.email && (
                  <div className="mt-1 flex items-center gap-1">
                    <p className="text-xs text-red-600 font-medium tracking-tight">
                      {errors?.email?.message}
                    </p>
                  </div>
                )}
              </Box>

              <Box>
                <Text weight="medium">
                  Password
                </Text>
                <TextField.Root {...register("password")} placeholder="Enter your password" type="password" />
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
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    size="1"
                    weight="medium"
                    color="blue"
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Sign in
                  </Link>
                </Text>
              </Box>
            </Flex>

            <Flex gap="4" justify="center">
              <Button type="submit" size="3" variant="solid" style={{ flex: 1 }}>
                Register
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
    </Flex >
  );
}
