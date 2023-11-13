import { Box, Flex, Text, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react'
import { Colors } from "../../DTO/ThemeDTO";
import { theme } from "../../styles/theme";


export function Banner() {

  const [isLargerThan1235] = useMediaQuery('(min-width: 1235px)')
  const formBackground = useColorModeValue(theme.colors.ligth, theme.colors.dark) as Colors;

  return (
    <Box

      w="100%"
      h='100%'
      maxWidth={1440}
      minHeight={[163, 335]}
      backgroundImage='url(/background.png)'
      backgroundSize='auto'
      backgroundRepeat="no-repeat"
      mb={['36px', '114px']}
    >
      <Flex
        justify='space-between'
        w="100%"
        maxWidth={1440}>
        <VStack
          spacing={['4', '10']}
          mt={['28px', '80px']}
          ml={['16px', '140px']}
          direction='row'
          align='flex-start'
          justifyContent='flex-start'

        >
          <Box>
            <Text
              fontSize={['20px', '36px']}
              fontWeight='medium'
              color={formBackground[100]}
            >
              5 Continentes,
            </Text>

            <Text
              fontSize={['20px', '36px']}
              fontWeight='medium'
              color={formBackground[100]}
            >
              infinitas possibilidades.
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={['13px', '20px']}
              fontWeight='medium'
              color={formBackground[500]}
            >
              Chegou a hora de tirar do papel a viagem que você
            </Text>
            <Text
              fontSize={['14px', '20px']}
              fontWeight='medium'
              color={formBackground[500]}
            >
              sempre sonhou.
            </Text>
          </Box>

        </VStack>
        {isLargerThan1235 && (
          <Box
            mt={'76px'}
            mr={'140px'}
          >
            <Image src={formBackground[990] == "#000000" ? '/airplane.svg' : '/airplanedark.svg'} alt='yellow airplane' />
          </Box>
        )
        }
      </Flex>

    </Box>
  )
}