import { Box, Flex, Icon, IconButton, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { FiChevronLeft } from 'react-icons/fi';
import { MdBrightness6 } from 'react-icons/md';
import { theme } from "../../styles/theme";
import { Colors } from "../../DTO/ThemeDTO";

interface Props {
  activeLink: boolean;
}

// interface Colors {
//   '990': string;
//   '700': string;
//   '500': string;
//   '450': string;
//   '100': string;
// }


export function Header({ activeLink }: Props) {

  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue(theme.colors.ligth, theme.colors.dark) as Colors;

  console.log(formBackground[990]);


  return (
    <Flex
      bg={formBackground[100]}
    >
      {activeLink &&
        <Box
          position='relative'
          left={['16px', '220px']}
          top={['16px', '30px']}

        >
          <Link href='/'>
            <Icon as={FiChevronLeft} fontSize={['16px', '34px']} color={formBackground[990]} />
          </Link>

        </Box>
      }
      <Flex
        as="header"
        w="100%"
        maxWidth={1440}
        h="100%"
        maxHeight={['50px', '100px']}
        flex='row'
        align="center"
        justify="center"
        bg={formBackground[100]}
      >

        <Logo />

      </Flex>
      <Box
        position='relative'
        right={['16px', '220px']}
        top={['16px', '30px']}
      >
        <IconButton
          aria-label='Open navigation'
          icon={<Icon as={MdBrightness6} />}
          fontSize={['16px', '34px']}
          color={formBackground[990] == "#000000" ? 'dark.100' : 'ligth.100'}
          variant='unstyled'
          onClick={toggleColorMode}

        ></IconButton>
      </Box>
    </Flex>
  )
}