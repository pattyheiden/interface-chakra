import { Box, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Colors } from "../../DTO/ThemeDTO";
import { theme } from "../../styles/theme";

interface CityProps {
  id: number,
  city: string;
  country: string;
  photograph: string;
  flag: string;
}

interface Props {
  city: CityProps;
}

export function CardCity({ city }: Props) {

  const formBackground = useColorModeValue(theme.colors.ligth, theme.colors.dark) as Colors;
  return (
    <Box
      as='div'
      w='259px'
      h='279px'

    >
      <Box
        w="100%"
        flex='row'
        alignItems='center'
      >
        <Box
          minHeight='173px'
          backgroundImage={`url(${city.photograph})`}
          backgroundSize='cover'
          backgroundRepeat="no-repeat"
        >
        </Box>

      </Box>

      {/* <Image src={city.photograph} alt={city.city} /> */}
      <Stack
        minHeight='106px'
        paddingX='24px'
        pt='18px'
        pb='25px'
        direction='row'
        align='center'
        border='1px'
        borderColor='yellow.500'
        borderBottomRadius='8px'
      >
        <Box
          as="div"
          w={600}
        >
          <Text
            as='p'
            fontFamily='Barlow'
            fontWeight='semibold'
            lineHeight='26px'
            fontSize='20px'
            color={formBackground[700]}
            align='justify'
          >{city.city}</Text>
          <Text
            as='p'
            fontFamily='Barlow'
            fontWeight='normal'
            lineHeight='26px'
            fontSize='16px'
            color='gray.500'
            align='justify'
          >{city.country}</Text>
        </Box>

        <Image
          boxSize='30px'
          objectFit='cover'
          src={city.flag} alt={city.city}
        />

      </Stack>

    </Box>
  )
}