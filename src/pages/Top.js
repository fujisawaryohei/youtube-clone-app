import React, {useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGridItem from '../components/VideoGridItem/VideoGridItem'
import { YOUTUBE_KEY } from '../apis/index'
import { useAppDispatch } from "../store"
import { requestGetPopular } from "../stores/popular"
import { popularsAdapter } from "../stores/popular"
import { store } from '../store'

const Top = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const params = {
	    params: {
	      part: "snippet",
		    maxResults: 40,
		    key: YOUTUBE_KEY,
		    regionCode: 'JP',
		    type: "video",
		    chart: "mostPopular",
	    }     
    }
    dispatch(requestGetPopular(params));
  }, [])
  return (
    <Layout>
		  <VideoGrid>
        {
          popularsAdapter.getSelectors((state) => state.popular).selectAll(store.getState()).map(popular => {
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
