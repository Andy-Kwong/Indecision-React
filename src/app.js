import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Mike';
    }
    getGreeting() {
        return 'Hi. My name is ${this.name}.';
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(oldSyntax.getGreeting());

// --------------------------

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return 'Hi. My name is ${this.name}.';
    }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newSyntax);
