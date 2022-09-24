import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {

  console.log("Page render")

  return (
    <div className="w-screen h-screen bg-gray-50">
      <h1 className='text-2xl text-gray-600'>Hello, World!</h1>
      <h2>Nguyen109</h2>
    </div>
  )
}

export default Home
