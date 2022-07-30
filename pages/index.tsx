import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
//import Image from 'next/image'
import Feed from '../Components/Feed'
import Sidebar from '../Components/Sidebar'
import Widgets from '../Components/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

interface Props{
  tweets: Tweet[]
}

const Home = ({ tweets }: Props) => {
console.log(tweets)

  return (
    <div className="mx-auto lg:max-w-6xl max-h-screen overflow-hidden">
      <Head>
        <title>Twitter 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-9'>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />

      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets()

  return {
    props: {
      tweets,
    },
  }
}
