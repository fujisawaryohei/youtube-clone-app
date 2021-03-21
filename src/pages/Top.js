import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGridItem from '../components/VideoGridItem/VideoGridItem'
import { fetchPopularData } from '../apis/index'

const Top = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const popularData = await fetchPopularData()
      setData(popularData)
    }
    fetchData()
  }, [])

  return (
    <Layout>
      <VideoGrid>
        {
          data.map(popular => {
            return (
              <VideoGridItem
                id={ popular.id }
                key={ popular.id }
                src={ popular.snippet.thumbnails.standard.url }
                title={ popular.snippet.title }
              />
            )
          })
        }
      </VideoGrid>
    </Layout>
  )
}

export default Top
