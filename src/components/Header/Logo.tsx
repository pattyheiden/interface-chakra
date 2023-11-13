import { Box, Image, useColorModeValue } from '@chakra-ui/react'
import { Colors } from '../../DTO/ThemeDTO';
import { theme } from '../../styles/theme';

export function Logo() {
  const formBackground = useColorModeValue(theme.colors.ligth, theme.colors.dark) as Colors;

  const logo = formBackground[990];
  return (
    <Box
      py='8'
    >

      {logo == '#000000' ?
        <Image boxSize={['81px', '187px']} src='/logo.svg' alt='logo' />
        :
        <Image boxSize={['81px', '187px']} src='/logodark.svg' alt='logo' />
      }

    </Box>

  )
}