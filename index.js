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




/* 

We call makeState<number>() a "generic function" because its literally a 
generic -- you have a choice to make it number-only or string-only.  And you know
it's a generic function if it takes a type parameter.
 */


// technique of creating a generic allowing only string or number states.
// prevent non-number and non-string states.

function makeStateTwo<S extends string | number>() {
    let state:S
    function getState() {
     return state;
    }

    function setState(x: S) {
        state = x;
    }
  return {getState, setState}
}

// this function below will NOT work.
// const makeBooleanState = makeStateTwo<boolean>();

function makePair<F extends number | string,S extends boolean | F>() {
    let pair: {first: F, second: S}

    function getPair() {
        return pair;
    }
    function setPair(x:F,y:S) {
        return {
            first: x,
            second: y,
        }
    }

    return {getPair, setPair}
}

makePair<number, boolean>()
makePair<number, number>()
makePair<string, boolean>()
makePair<string, string>()



// This will fail because the second
// parameter must extend boolean | number,
// but instead it’s string
makePair<number, string>()
