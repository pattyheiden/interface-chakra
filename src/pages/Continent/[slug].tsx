import { useRouter } from "next/router";
import { Box, Flex, SimpleGrid, Stack, Text, Tooltip, useColorModeValue, useMediaQuery } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { BannerContinent } from "../../components/BannerContinent";
import { CardCity } from "../../components/CardCity";
import { Colors } from "../../DTO/ThemeDTO";
import { theme } from "../../styles/theme";
import { Search2Icon } from '@chakra-ui/icons'

interface ContinetProps {
  id_fk: number;
  slug: string;
  localization: string;
  banner: string;
  text: string;
  countries: string;
  languages: string;
  cities: string;
  cityTops: {
    id: number,
    city: string;
    country: string;
    photograph: string;
    flag: string;
  }[];
}


export default function Continent() {
  const [isLargerThan1235] = useMediaQuery('(min-width: 1275px)')
  const link = useRouter();
  const formBackground = useColorModeValue(theme.colors.ligth, theme.colors.dark) as Colors;

  const dados = [
    {
      id_fk: 1,
      slug: 'europa',
      localization: 'Europa',
      banner: '/images/banner-londres.png',
      text: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
      countries: '50',
      languages: '60',
      cities: '27',
      cityTops: [
        {
          id: 1,
          city: 'Londres',
          country: 'Reino Unido',
          photograph: '/images/photograph-londres.png',
          flag: '/images/flag-londres.png'

        },
        {
          id: 2,
          city: 'Paris',
          country: 'França',
          photograph: '/images/photograph-franca.png',
          flag: '/images/flag-franca.png'

        },
        {
          id: 3,
          city: 'Roma',
          country: 'Itália',
          photograph: '/images/photograph-roma.png',
          flag: '/images/flag-roma.png'

        },
        {
          id: 4,
          city: 'Praga',
          country: 'República Tcheca',
          photograph: '/images/photograph-praga.png',
          flag: '/images/flag-praga.png'

        },
        {
          id: 5,
          city: 'Amsterdã',
          country: 'Holanda',
          photograph: '/images/photograph-amsterda.png',
          flag: '/images/flag-amsterda.png'

        }

      ]

    },
    {
      id_fk: 2,
      slug: 'africa',
      localization: 'Africa',
      banner: '/images/banner-default.png',
      text: 'Lorem ipsum dolor ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae culpa iusto reiciendis nihil atque consectetur doloribus eius hic ad aliquid unde deleniti nam quidem praesentium temporibus optio, eveniet assumenda.',
      countries: 'XX',
      languages: 'XX',
      cities: 'XX',
      cityTops: [
        {
          id: 1,
          city: 'XXXXX',
          country: 'XXXX',
          photograph: '/images/photograph-default.png',
          flag: '/images/flag-default.png'

        },
        {
          id: 2,
          city: 'XXXXX',
          country: 'XXXX',
          photograph: '/images/photograph-default.png',
          flag: '/images/flag-default.png'

        }
      ]

    },
    {
      id_fk: 3,
      slug: 'asia',
      localization: 'Asia',
      banner: '/images/banner-default.png',
      text: 'Lorem ipsum dolor ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae culpa iusto reiciendis nihil atque consectetur doloribus eius hic ad aliquid unde deleniti nam quidem praesentium temporibus optio, eveniet assumenda.',
      countries: 'XX',
      languages: 'XX',
      cities: 'XX',
      cityTops: [
        {
          id: 1,
          city: 'XXXXX',
          country: 'XXXX',
          photograph: '/images/photograph-default.png',
          flag: '/images/flag-default.png'

        },
        {
          id: 2,
          city: 'XXXXX',
          country: 'XXXX',
          photograph: '/images/photograph-default.png',
          flag: '/images/flag-default.png'

        }
      ]

    }
  ]

  const continent = dados.find(dado => dado.slug == link.query.slug) as ContinetProps;

  console.log(continent);


  return (
    <Box
      w="100%"
      maxWidth={1440}
      margin="0 auto"
      bg={formBackground[100]}
      pb={['16px', '36px']}
    >
      <Header activeLink />
      <BannerContinent banner={continent?.banner} localization={continent?.localization} />
      <Stack
        paddingX={['16px', '140px']}
        pt={['24px', '80px']}
        pb={['32px', '80px']}
        direction={['column', 'row']}
        align='center'
        spacing={['5px', '70px']}
      >
        <Box
          as="div"
          w={[343, 600]}
        >
          <Text
            as='p'
            fontWeight='normal'
            lineHeight={['21px', '36px']}
            fontSize={['14px', '24px']}
            color={formBackground[700]}
            align='justify'
          >{continent?.text}</Text>
        </Box>
        <Flex
          as="div"
          w={[343, 600]}
          h={100}
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Flex
            as="div"
            flexDirection='column'
            alignItems={['start', 'center']}
            justifyContent='space-between'
          >

            <Text
              fontWeight='semibold'
              lineHeight='36px'
              fontSize={['16px', '48px']}
              color='yellow.900'
              align='justify'
            >{continent?.countries}</Text>

            <Text
              fontWeight={['normal', 'semibold']}
              lineHeight='36px'
              fontSize={['16px', '24px']}
              color={formBackground[700]}
              align='justify'
            >países</Text>

          </Flex>

          <Flex
            as="div"
            flexDirection='column'
            alignItems={['start', 'center']}
            justifyContent='space-between'
          >
            <Text
              fontWeight='semibold'
              lineHeight='36px'
              fontSize={['16px', '48px']}
              color='yellow.900'
              align='justify'
            >{continent?.languages}</Text>
            <Text
              fontWeight={['normal', 'semibold']}
              lineHeight='36px'
              fontSize={['16px', '24px']}
              color={formBackground[700]}
              align='justify'
            >línguas</Text>
          </Flex>

          <Flex
            as="div"
            flexDirection='column'
            alignItems={['start', 'center']}
            justifyContent='space-between'
          >
            <Text
              fontWeight='semibold'
              lineHeight='36px'
              fontSize={['16px', '48px']}
              color='yellow.900'
              align='justify'
            >{continent?.cities}</Text>
            <Flex

              flexDirection='row'
              align='center'
            >
              <Text
                fontWeight={['normal', 'semibold']}
                lineHeight='36px'
                fontSize={['16px', '24px']}
                color={formBackground[700]}
                align='justify'
              >cidades + 100</Text>
              <Tooltip hasArrow label='Search places' placement="top" bg='gray.500' color='black'>
                <Search2Icon p='2px' w={4} h={4} color={formBackground[700]} />
              </Tooltip>
            </Flex>
          </Flex>
        </Flex>
      </Stack>
      <Flex
        flexDirection='column'
      >
        <Box
          w='100%'
          pl={['16px', '140px']}
          pr={['16px', '140px']}
          mb={['10px', '40px']}
        >
          <Text
            fontWeight='medium'
            lineHeight='36px'
            fontSize={['24px', '36px']}
            color={formBackground[700]}
            align='justify'
          >Cidade +100</Text>
        </Box>
        <SimpleGrid
          columns={[1, isLargerThan1235 ? 4 : 2]}
          spacingX={['0px', '45px']}
          spacingY={['20px', '48px']}
          pl={['50px', '140px']}
          pr={['50px', '140px']}

        >
          {continent?.cityTops.map(city => {
            return (
              <CardCity key={city.id} city={city} />
            )
          })}


        </SimpleGrid>
      </Flex>
    </Box >
  )
}