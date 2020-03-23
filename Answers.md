1. What problem does the context API help solve?

Usually in React, data gets passed top-down from parent to child via props whicn can be cumbersome for certain types of props that are required by many components within an application. Context provides a way to share data between components without having to explicitly pass a prop through every level of the tree. With Context API we instead store data on a context object & retrieve it in the necessary components from that context object, not the props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? 
Why is the store known as a 'single source of truth' in a redux application?

In Redux, the store is known as "a single source of truth" because the data of your app is being stored there as a single state object. We then use actions to update the state as an object describing what happened. Finally, reducers (which are essentially pure functions) take the previous state in with an action & return a new, updated state back to the store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is more of a "global" state that oversees all of your components whereas Component state is more of a "local" state for a single Component. If you were building a large-scaled applciation & passing lots of data to multiple Components it would be a good time to think with Application state. If you had a smaller application or few components that needed data passed as props it would make sense to think Component state & save the time of writing extra logic/code figuring how to get less data passed to other components (if you even need to pass anything out of said component).

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux is synchronous so we need to apply middleware to extend the functionality of our Redux package to allow for things like, promises (which are asynchronous). Redux Thunk is a separate node package called redux-thunk used as third-party middleware to make the flow asynchronous and make API calls from our action creators. When an action creator is called redux-thunk intercepts and acts on returned data. If the thing returned is an action, it forwards the action through to the reducer. But, if the thing returned is a function, aka a thunk (a function returned from a function), then it invokes the thunk and passes the dispatch function as an argument to it.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I actually didn't mind learning Redux after having some time to let it settle in. It might not be the easiest or fastest method but it still has its perks. With that said, I think having less steps to setup & more freedom to target things more specifically makes Context API the best state management system we learned this sprint.

