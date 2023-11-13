import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    ligth: {
      "990": '#000000',
      "700": '#47585B',
      "500": '#DADADA',
      "450": '#808080',
      "100": '#F5F8FA',
    },
    dark: {
      "990": '#FFFFFF',
      "700": '#F5F8FA',
      "500": '#999999',
      "450": '#808080',
      "100": '#47585B',
    },
    red: {
      "990": '#FFFFFF',
      "700": '#F5F8FA',
      "500": '#DADADA',
    },
    yellow: {
      "500": 'rgba(255, 186 ,8, 0.5)',
      "900": "#FFBA08"

    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'yellow.500',
        color: 'gray.100',
      }
    }
  }

})