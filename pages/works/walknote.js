import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Novafood">
    <Container>
      <Title>
        Talk-A-tive <Badge>2024-</Badge>
      </Title>
      <P>
      Talkative is an advanced real-time messaging application built using the MERN (MongoDB, Express, React, Node.js) stack. Designed for seamless communication, Talkative offers a rich set of features that ensure users stay connected with friends, family, and colleagues. It also allows one to create and manage group chats with multiple participants.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Git link</Meta>
          <Link href="https://github.com/Jasleenxddd/talkative-frontend">
          Frontend
            <ExternalLinkIcon mx="2px" />
          </Link>
          <p>
          <Link  ml={16} href="https://github.com/Jasleenxddd/talkative-backend">
          Backend
            <ExternalLinkIcon mx="2px" />
          </Link>
          </p>
          
          
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Reactjs, ChakraUI, Expressjs, Nodejs, JavaScript, MongoDB, Postman</span>
        </ListItem>
      </List>

      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="http://renewal49.hateblo.jp/entry/20120710/1341925681">
            <Badge mr={2}>リニューアル式</Badge>
            強力すぎて紹介しそびれていた音楽好きのための神アプリ『walknote』
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.appbank.net/2011/10/15/iphone-application/309349.php">
            <Badge mr={2}>appbank</Badge>
            walknote:
            CD屋の試聴機が、自分向けになって手元に到着。そんな曲探しアプリ。無料。
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html">
            <Badge mr={2}>男子ハック</Badge>
            [おすすめの音楽をレコメンド！ストリーミング再生してくれるiPhoneアプリ「walknote」が素敵。
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}>タブロイド</Badge>
          <Link href="http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html">
            「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『walknote』
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>
      </UnorderedList> */}

    
      <WorkImage src="/images/works/talk1.png" alt="Yaabin" />
      <WorkImage src="/images/works/talk2.png" alt="Yaabin" />
      <WorkImage src="/images/works/talk3.png" alt="Yaabin" />
      <WorkImage src="/images/works/talk4.png" alt="Yaabin" />
      <WorkImage src="/images/works/talk5.png" alt="Yaabin" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
