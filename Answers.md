1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    -> Object.keys, array.ForEach, Object.assign

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    ->Action are are packets of info or functiosn that describe what has changed in the UI, Reducers are in charge of creating a new version of state depending on what actiond were fired, Because the store is where our application state is held.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    ->Application state is global and live inside the store while component state  only lives in side one component, It becomes useful when you want to only change something very specific to the component.

1.  What is middleware?

    ->Middleware intercepts our application and usually makes asynch calls with thunk.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    ->redux-thunk, allows us to make asynch calls to the servers, it stops actions creators before they get to the reducers

1.  Which `react-redux` method links up our `components` with our `redux store`?

    ->Connect links up our components to our redux store. 
