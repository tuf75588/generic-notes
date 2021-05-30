/* 
we could use generics to create a number only state
and a string only state
 */


function makeState<S>() {
    let state: S;
    function getState() {
        return state;
    }
    function setState(x:S) {
        state = x;
    }
    return {getState, setState}
}

//  S will be another thing that you pass in when you call the function

// the important thing is, instead of passing a number of a string, you pass a type.


/* 
Because state will be number and setState will only take number, 
it creates a number-only state.
 */


const {getState, setState} = makeState<number>()

const b = makeState<number>();
b.setState(699);
console.log(b.getState())


// Creates a string-only state
const strState = makeState<string>()
strState.setState('foo')
console.log(strState.getState())
// strState.setState(1) will fail!
