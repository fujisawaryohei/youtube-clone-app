import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchPopularData } from "../apis";

export const popularsAdapter = createEntityAdapter();

const slice = createSlice({
	name: 'popular',
	initialState: popularsAdapter.getInitialState(),
	reducers: {
	  setPopular: (state, action) => {
		popularsAdapter.setAll(state, action.payload);
	  },
	  getPopularRequest: (state) => {
		// リクエスト前になんかしたいなら（ローディングとか）ここ
	  },
	  getPopularSuccess: (state, action) => {
		popularsAdapter.setAll(state, action.payload.populars);
	  },
	  getPopularFailure: (state) => {
		// エラーの時なんかしたいなら（エラーメッセージとか）ここ
	  },
	},
});

export default slice.reducer;

export const {
  getPopularRequest,
  getPopularSuccess,
  getPopularFailure,
} = slice.actions;

export const requestGetPopular = (params) => async (dispatch) => {
  dispatch(getPopularRequest());
  try {
	const { items } = await fetchPopularData(params);
	dispatch(getPopularSuccess({populars: items}));
  } catch (error) {
	dispatch(getPopularFailure());
  }
};
