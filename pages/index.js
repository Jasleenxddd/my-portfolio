import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an Web app developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jasleen Kaur
          </Heading>
          <p>Tech Artisan (Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 5, md: 0 }}
          ml={{ md: 4 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/jas2.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Hello! I&apos;m Jasleen Kaur, a versatile and passionate full-stack developer based in Harayana. As a freelancer, I specialize in creating innovative digital solutions that bring ideas to life. My journey in tech has been fueled by a deep-seated passion for building digital services and products that matter. When I am not immersed in the digital world, you will often find me exploring the nature&apos;s aesthetics through my camera lens. Thank you for visiting my portfolio, and I look forward to working with you!


        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          Born in Panipat,India.
        </BioSection>
        <BioSection>
          <BioYear>2022-Now</BioYear>
          Studying Bachelor&apos;s Program in the Graduate School of
          Information Technology at Indian Institute of Information Technology Gwalior.
        </BioSection>
     
        <BioSection>
          <BioYear>2023-Now</BioYear>
          Works as a freelance
        </BioSection>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          
            Photography,{' '}
            Designing, Reading Journals
        </Paragraph>
      </Section>

     
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
