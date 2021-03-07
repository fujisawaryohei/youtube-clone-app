import {popularsAdapter} from "../stores/popular";
import {store} from "../store";

const Popular = () => {
	const populars = popularsAdapter.getSelectors((state) => state.popular).selectAll(store.getState());

	return (
		<div>
			{populars.map((popular) => (
				<div key={popular.id}>
					<span>id: 【{popular.id}】</span><span>etag:【{popular.etag}】</span>
				</div>
			))}
		</div>
	)
}

export default Popular;
