// import {
//   Container,
//   Badge,
//   List,
//   ListItem,
//   Link,
//   ExternalLinkIcon
// } from '@chakra-ui/react'
// import Layout from '../../components/layouts/article'
// import { Title, WorkImage, Meta } from '../../components/work'
// import P from '../../components/paragraph'

// const Work = () => (
//   <Layout title="Ebike Design">
//     <Container>
//       <Title>
//         Ebike Design <Badge>2017</Badge>
//       </Title>
//       <P>
//       MyTube is a video player web application where a user can view, search, and comment on videos. The application provides a seamless experience for video consumption, offering features like video recommendations, and responsive design. 
//       </P>

//       <List ml={4} my={4}>
//         <ListItem>
//           <Meta>Platform</Meta>
//           <span>Web App</span>
//         </ListItem>
//         <ListItem>
//           <Meta>Website</Meta>
//           <Link href="https://my-tube-six.vercel.app/">
//           https://my-tube-six.vercel.app/
//             <ExternalLinkIcon mx="2px" />
//           </Link>
//         </ListItem>
//         <ListItem>
//           <Meta>Stack</Meta>
//           <span>Figma</span>
//         </ListItem>
//       </List>

//       {/* <Heading as="h4" fontSize={16} my={6}>
//         <Center>Media coverage</Center>
//       </Heading>

//       <UnorderedList my={4}>
//         <ListItem>
//           <Link href="http://www.donpy.net/standard-entry/app-reiview/4303.html">
//             <Badge mr={2}>覚醒する @CDiP</Badge>
//             Webアプリ版twitterクライアントの「pichu*pichu」が凄い。{' '}
//             <ExternalLinkIcon mx="2px" />
//           </Link>
//         </ListItem>

//         <ListItem>
//           <Link href="http://labs.laurahouse.net/articles/iphone/1115.html">
//             <Badge mr={2}>LauraHouse Labs</Badg
//             知っておきたいWebアプリ版Twitterクライアント活用法{' '}
//             <ExternalLinkIcon mx="2px" />
//           </Link>
//         </ListItem>
//       </UnorderedList> */}

//       <WorkImage src="/images/works/tube1.png" alt="JointJS" />
//       <WorkImage src="/images/works/tube2.png" alt="JointJS" />
//       <WorkImage src="/images/works/tube3.png" alt="JointJS" />
//       <WorkImage src="/images/works/tube4.png" alt="JointJS" />

//     </Container>
//   </Layout>
// )

// export default Work
// export { getServerSideProps } from '../../components/chakra'
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
        MyTube <Badge>2024-</Badge>
      </Title>
      <P>
      MyTube is a video player web application where a user can view, search, and comment on videos. The application provides a seamless experience for video consumption, offering features like video recommendations, and responsive design. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://my-tube-six.vercel.app/">
       https://my-tube-six.vercel.app/
           <ExternalLinkIcon mx="2px" />
          </Link>
          
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Reactjs, Material-UI, Axios, Rapid-API, JavaScript</span>
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

    
<WorkImage src="/images/works/tube1.png" alt="JointJS" />
      <WorkImage src="/images/works/tube2.png" alt="JointJS" />
      <WorkImage src="/images/works/tube3.png" alt="JointJS" />
      <WorkImage src="/images/works/tube4.png" alt="JointJS" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
