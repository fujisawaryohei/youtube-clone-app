import React, {useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import {YOUTUBE_KEY} from '../apis/index'
import {store, useAppDispatch} from "../store";
import {popularsAdapter, requestGetPopular} from "../stores/popular";
import Popular from "./Popular";

const Top = () => {
	const dispatch = useAppDispatch();

	const fetch = () => {
		const params = {
			params: {
				part: "snippet",
				maxResult: 40,
				key: YOUTUBE_KEY,
				regionCode: 'JP',
				type: "video",
				chart: "mostPopular",
			}
		}
		dispatch(requestGetPopular(params));
	}

	useEffect(() => {
		//雑に呼び出す
		fetch();
	}, [])

	return (
		<Layout>
			<p>this is the top page</p>
			<Popular/>
		</Layout>
	)
}

export default Top
