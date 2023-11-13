import { Box, Flex, Text, VStack, Image, Link, useColorModeValue } from "@chakra-ui/react";
import { Colors } from "../../DTO/ThemeDTO";
import { theme } from "../../styles/theme";

interface ContinentProps {
  urlImage: string;
  link: string;
  name: string;
  description: string;
}


export function ContinentImage({ urlImage, link, name, description }: ContinentProps) {

  const formBackground = useColorModeValue(theme.colors.ligth, theme.colors.dark) as Colors;

  return (
    <Link href={`/Continent/${link}`}>
      <Box
        maxWidth={[375, 1240]}
        minHeight={[250, 450]}
        backgroundImage={`url(/${urlImage})`}
        backgroundSize='cover'
        backgroundRepeat="no-repeat"
      >
        <Flex
          flex='row'
          align='center'
          justify='center'
          maxWidth={1440}>
          {/* <VStack
            direction='column'
            align='center'
            justifyContent='center'

          > */}
          <Flex
            mt={['110px', '180px']}
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <Text
              fontSize={['24px', '48px']}
              fontWeight='bold'
              color={formBackground[990] == "#000000" ? 'dark.700' : 'ligth.700'}
            >
              {name}
            </Text>

            <Text
              fontSize={['14px', '24px']}
              fontWeight='bold'
              color={formBackground[500]}
            >
              {description}
            </Text>
          </Flex>

          {/* </VStack> */}

        </Flex>

      </Box>
    </Link>
  )
}