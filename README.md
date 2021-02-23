1. Variables and Strings

var name -> will return undefined
camel-case for the variables

Naming rules:

1.  Variables only contain letters, numbers, symbols $ \_
2.  first letter cannot be a number
3.  Cannot use reserved word.

4.  Strict Mode
    Global object - window
    //browser - window
    //server - global

globalThis is used to properly reference the global object.

Sloopy mode (default) and Strict mode (throws more errors).

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

2. Let and Const

Let and const cannot be hoisted.

The space between the place where you access the variable and where the variable is assigned is called - Temporal Dead Zone.

Let is used when the value is going to change. Let does not have to initialized.
Valid:
let age
age = 26
age = 36

Const - has to be initialized, otherwise you get an error. You cannot reassign the value.

Const is the best choice to declare variables.
Restrictions:

1. Must be initialized with a value.
2. Cannot be modified after declaration.

Variable shadowing - one varibale overrides the other variable.

Let and const are BLOCK scoped.

Template literal

` ${}` - string interpulation

3. Types and Conditionals

Primitive types:

- string
- number
- boolean
- undefined
- null
- symbol

Object types:

- everything else

To get the type of a variable, we use -->typeof<--
console.log(typeof message)

Convert to a different type:

1)Explicit type conversion

- number to a string: String(42)
- string to a boolean: Boolean(message)
  2)Implicit type conversion (coercion)
- '1' \* '2'. Multiplication coercise strings to a number.

IMPORTANT!
if(Boolean(value) === true) {
if true, do something value
}

Falsy values:

- false
- 0
- ''
- null
- undefined
- NaN

4. Functions
   Reference error - not defined
   Function returns Undefinied by default (if you dont return anything)

   Closure

   1. Closures are a property of the JavaScript functions.
   2. Call a function in a diffrent scope than where function was orifinaly defined.

   toFixed(deciamlPlace) return string
   Number(fahrenheit.toFixed(decimalPlace))

   Arrow Function

   function capitalize(name) {
   return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
   }

   const capitalize = (name) => {
   return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
   }

   Higher order functions: when passing one function to another.

5. Objects
