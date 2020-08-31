import React from "react";
import store from "./redux/store";
import { bugAdded, bugResolved, bugRemoved } from "./redux/actions";

const App = () => {
	const unsubscribe = store.subscribe(() => {
		console.log("Store Changed!", store.getState());
	});
	
	store.dispatch(bugAdded("Bug 1"));
	store.dispatch(bugAdded("Bug 2"));
	store.dispatch(bugAdded("Bug 3"));
	store.dispatch(bugAdded("Bug 4"));
	store.dispatch(bugAdded("Bug 5"));
	
	store.dispatch(bugResolved(1))
	store.dispatch(bugResolved(5))
	// unsubscribe();
	
	store.dispatch(bugRemoved(3));
	
	console.log(store.getState());
	console.log(store,"store")
	
  return <div>
		<h1>REDUX PROJECT</h1>
	</div>;
};

export default App;