# React Mobx Express Starter
## What is this?
This is a basic boilerplate for a stack that I have really fallen in love with - React applications using MobX for state management and Express for server handling.

## What's included?
- [React](https://reactjs.org/)
- [MobX](https://mobx.js.org/)
- [Express](https://expressjs.com/)
- [Pug](https://pugjs.org/)
- [ESLint](https://eslint.org/) using slightly modified [Airbnb](https://github.com/airbnb/javascript) rules
- [Webpack](https://webpack.js.org/)
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)

Further, the babel configuration is set up to support:

- Syntax Decorators
- Spread Syntax

## About
The application uses Pug as its view engine.
If you are running in dev mode, the application will first render the view in `src/views/index.pug` to a static HTML file. This file will be used as a base for [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

## Getting started
To get started simply clone this repository and run `npm install` to get all the dependencies.

Then run `npm run dev` to start the dev server. The dev server included Hot Reload and the backend server uses nodemon, so changes you do in the code will be reflected without the need for a reload.

You should probably also create a `.env` file specifying which ports you want the services to run on. Look at `.env.example` for inspiration.

## The example project
This repository includes a very simple example, which utilizes some of the most important aspects of MobX. Namely, the `action`, `computed` and `observable` properties.

```javascript
class Person {
  @observable firstName = '';

  @action setFirstName(firstName) {
    this.firstName = firstName;
  }

  @observable lastName = '';

  @action setLastName(lastName) {
    this.lastName = lastName;
  }

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

We have the `observable` properties `firstName` and `lastName`. Observables work in large part similarly as regular class properties. You can alter them directly, and the results will be reflected in any function that has the `observer` decorator. 

The `computed` property is very powerful, in that it acts like an `observable`, except for the fact that it is derived from other observable properties. It is computed once at start up and then again every time one of its dependencies changes (assuming is has observers, otherwise it does nothing).

This class gets imported in the main store. In the example React class, it is able to call the setters to alter the object's values, such that the result will immediately be reflected in the frontend.

```javascript
@observer
class PersonInformation extends React.Component {
  constructor(props) {
 
  handleNameChange(event) {
    const { person } = this.props;

    const { target } = event;
    const { value, name } = target;
    if (name === 'firstName') {
      person.setFirstName(value);
    } else if (name === 'lastName') {
      person.setLastName(value);
    }
  }

  render() {
    const { person } = this.props;
    return (
      <div>
        {person.fullName}
        <input type="text" name="firstName" onChange={this.handleNameChange} />
        <input type="text" name="lastName" onChange={this.handleNameChange} />
      </div>
    );
  }
}
```

We are altering the Person directly in the `handleNameChange` method. The computed property `fullName` updates in real-time as we change this person's first and last name. 