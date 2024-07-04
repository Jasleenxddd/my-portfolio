import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Webgl-Simulation">
    <Container>
      <Title>
      EVOGYM-Fitnesss App <Badge>2024-</Badge>
      </Title>
      <P>
      EvoGym is fitness application designed to help users achieve their health and wellness goals. Combining personalized workout plans, nutrition tracking, and progress monitoring, EvoGym provides a holistic approach to fitness. The app leverages modern technology to create an engaging and user-friendly experience, making it easier for users to stay motivated and committed to their fitness journey.      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://evo-gym-fitness-app.vercel.app/">
          https://evo-gym-fitness-app.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Any Web Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React ,TypeScript, TailwindCSS, Vite, JavaScript</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <WorkImage src="/images/works/gym1.png" alt="Inkdrop" />
      <WorkImage src="/images/works/gym2.png" alt="Inkdrop" />
      <WorkImage src="/images/works/gym3.png" alt="Inkdrop" />
      <WorkImage src="/images/works/gym4.png" alt="Inkdrop" />

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
