import axios from 'axios'

export const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/"
})

export const fetchPopularData = async () => {
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
  const response = await youtube.get('/videos', params)
  return response.data.items
}
