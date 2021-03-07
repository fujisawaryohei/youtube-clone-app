import React, { useEffect }from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../apis/index'

const Top = () => {
  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <Layout>
      <p>this is the top page</p>
    </Layout>
  )
}

export default Top
