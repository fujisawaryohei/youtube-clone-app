import React from 'react'
import Layout from '../components/Layout/Layout'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGridItem from '../components/VideoGridItem/VideoGridItem'
// import { YOUTUBE_KEY } from '../apis/index'

const Top = () => {
  // useEffect(() => {
  //   const params = {
	//     params: {
	//       part: "snippet",
	// 	    maxResults: 40,
	// 	    key: YOUTUBE_KEY,
	// 	    regionCode: 'JP',
	// 	    type: "video",
	// 	    chart: "mostPopular",
	//     }     
  //   }
  // }, [])
  return (
    <Layout>
		  <VideoGrid>
        {/* {        
          <VideoGridItem
            id={ popular.id }
            key={ popular.id }
            src={ popular.snippet.thumbnails.standard.url }
            title={ popular.snippet.title }
          />
        } */}
      </VideoGrid> 
	  </Layout>
  )
}

export default Top
