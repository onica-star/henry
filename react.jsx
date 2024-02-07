/*React is a java script library that allows you to build interactive user interfaces for web applications. it follows a component based architecture which means you can break down your user interfaces into reuseable,self-contained component. this makes it easier to manange and scale complex applications.
key concept of react
1) Component: they are the building block of react application.a component can be a button, form, a header or any other user element.each component can have its own state ans properties

2) java script XML(jsx); jsx is a syntax extention for java script. it allows you to write HTML like codeswithin your java script files 

3) Visual DOM: React uses visual DOM to efficiently updata the UI instead of directly manipulating the DOM. React creates a light weight epresentation of the DOM in memory and updates it whenever the state of a component changes.
then it compares the visual DOM with the real DOM and only applies this neccessary update
4) State represents the data tha is managed within a component. it determines how a component behaves and renders. state can be operated using 
setState() method triggering a re-render of the componet

Props(properties): they are read only data passed from the parent component to the child component