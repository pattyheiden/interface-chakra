import { Box, Image, Text, Stack, useColorModeValue } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import { Colors } from '../../DTO/ThemeDTO';
import { theme } from '../../styles/theme';

interface IconProps {
  sourceLarge: string;
  about: string;
}

export function Icons({ sourceLarge, about }: IconProps) {

  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')
  const formBackground = useColorModeValue(theme.colors.ligth, theme.colors.dark) as Colors;

  return (

    <Stack

      height={[27, 145]}
      direction={['row', 'column']}
      alignItems='center'
      justify={['flex-start', 'space-between']}
      mb={['25px', '0']}
    >
      <Box>
        {!isLargerThan480 ?
          <Image src='/elipse.svg' alt="elipse" />
          :
          <Image src={sourceLarge} alt={`${sourceLarge} logo`} />
        }
      </Box>
      <Box>
        <Text
          fontSize={['18px', '24px']}
          fontWeight={['medium', 'semibold']}
          color={formBackground[700]}


        >

          {about}
        </Text>
      </Box>
    </Stack>

  )
}