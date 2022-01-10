import React from 'react'

class HelloWorld extends React.Component {
   
    render(){
        return(
            <div>
                <h1>Hello World , I am Shivam !! </h1>
            </div>
        )
    }
}

export default HelloWorld;

/**
 * Notes :-
 * 
 * 1. What is render method in class-based Components ?
 * Ans : render() method is one of the most important methods , when it comes to interacting with the web page . 
 * Means if a class components wants to show itself on the web page it must have render method which then returns some JSX
 * In this method's body we can read props & state . But we cannot change state in this render method . 
 * 
 * 2. Can you write other methods inside render method body , before return statement ?
 * Ans : https://stackoverflow.com/a/50403824/14439701  
 */