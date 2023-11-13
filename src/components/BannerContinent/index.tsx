import { Box, Flex, Text, VStack, Image, Stack, useColorModeValue } from "@chakra-ui/react";
import { Colors } from "../../DTO/ThemeDTO";
import { theme } from "../../styles/theme";

interface BannerContinentProps {
  banner: string;
  localization: string;
}


export function BannerContinent({ banner, localization }: BannerContinentProps) {

  const formBackground = useColorModeValue(theme.colors.ligth, theme.colors.dark) as Colors;


  return (
    <Box
      w="100%"
      h='100%'
      maxWidth={1440}
      minHeight={[150, 500]}
      backgroundImage={`url(${banner})`}
      backgroundSize={['cover', 'contain']}
      backgroundRepeat="no-repeat"
    // mb={['36px', '114px']}
    >

      <Stack

        // spacing={['4', '10']}
        // mt={['28px', '80px']}
        // ml={['16px', '140px']}
        w='100%'
        h={[150, 500]}
        direction='row'
        align={['center', 'flex-end']}
        justifyContent={['center', 'flex-start']}
        pl={['0', '100px']}
        pb={['0', '59px']}


      >
        <Box


        >
          <Text
            fontSize={['28px', '48px']}
            fontWeight='medium'
            color='gray.100'
          >
            {localization}
          </Text>
        </Box>
      </Stack>

    </Box>
  )
}