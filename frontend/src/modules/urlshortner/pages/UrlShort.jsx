import { Box, Flex, Heading, TextField, Button, Text, Card } from '@radix-ui/themes'
import React, { useRef } from 'react'
import { shortenerApiCall } from '../api/url-api.js';

const UrlShort = () => {
  const url = useRef();

  const takeUrl = async () => {
    const URL = url.current.value;
    try {
      const response = await shortenerApiCall({ bigUrl: URL });
      console.log("res", response);

      if (response && response.data.shortUrl) {
        console.log('small url: ', response.data.shortUrl);
      } else {
        console.log('something went wrong.');
      }
    } catch (err) {
      console.log("Problem in short URL", err);

    }
    console.log("URL", URL);
  }

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
            "0 8px 24px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)",
        }}
      >
        <Flex direction="column" gap="4">
          <Heading align="center" size="6" weight="bold">
            URL Shortener
          </Heading>

          <Box>
            <Text weight="medium">Enter URL</Text>
            <TextField.Root
              ref={url}
              placeholder="Paste your long URL..."
              type="text"
            />
          </Box>

          <Button onClick={takeUrl} size="3" variant="solid" style={{ width: "100%" }}>
            Shorten URL
          </Button>
        </Flex>
      </Card>

      <p></p>
    </Flex>
  )
}

export default UrlShort