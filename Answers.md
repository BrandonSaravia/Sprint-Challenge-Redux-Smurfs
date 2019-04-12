1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

 A. map - creates a new object while extending the properties of another object

 B. forEach

 C. every

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

 - actions = recive a call from the UI to preform a certin action then sends the data to the reducer for manipulation.

 - reducers = take in the data from the action and preform manipulation to the data specified by the action

 - store = the store is updated with the new information which is rendered to the DOM. The store is the single source of truth because it connects everything in your react application. if something is not functioning as you want it to you made the mistake in your actions/reducers which is held in your store.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

 - Application state is accessible anywhere in the app so long as they hook into it.

 - Component state is accessible in the class component and can only be passed down as props.

 - It is good to use Application state when affecting the dom outputs, but it is better to use Component state when creating small changes like letting the user add information to a form.

1.  What is middleware?

 - middleware is a bridge betweeen the actions and their results as changes are rendered to the UI.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

 - redux-thunk allow us to shift between our action-creators based on the data it recieves such as from type: START to type: SUCCESS or type: FAILURE.

1.  Which `react-redux` method links up our `components` with our `redux store`?

 - connect() links up our `components` with our `redux store`
