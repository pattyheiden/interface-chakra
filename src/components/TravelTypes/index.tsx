import { Box, Flex, HStack, SimpleGrid } from "@chakra-ui/react";
import { Icons } from "./Icons";


export function TravelTypes() {
  const travelTypes = [
    {
      id: 1,
      source: '/cocktail.svg',
      about: "vida noturna"
    },
    {
      id: 2,
      source: '/surf.svg',
      about: "praia",
    },
    {
      id: 3,
      source: '/building.svg',
      about: "moderno",
    },
    {
      id: 4,
      source: '/museum.svg',
      about: "clássico",
    },
    {
      id: 5,
      source: '/earth.svg',
      about: "e mais...",
    }
  ]
  return (
    <Flex
      as="div"
      w="100%"
      maxWidth={[375, 1440]}
      h="100%"

      mx="auto"
      align="center"
      justify="center"
    >
      <Box
        w={1160}
        h={145}
      >
        <SimpleGrid
          columns={[2, 5]}
          spacing={0}
          pl={['50px', '0px']}
          pr={['50px', '0px']}

        >
          {travelTypes.map(travel => {
            return (
              <Icons
                key={travel.id}
                sourceLarge={travel.source}

                about={travel.about}
              />
            )
          })}


        </SimpleGrid>
      </Box>


    </Flex>
  )
}