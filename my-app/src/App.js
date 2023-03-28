import React from "react";
import "./App.css";

// Test Data

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

// const App = ({ title }) => {
//   return <div className="header">{title}</div>;
// };

// Card Component

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img src={this.props.avatar_url} alt="" />
        <div className="info">
          <div className="name">{this.props.name}</div>
          <div className="company">{this.props.company}</div>
        </div>
      </div>
    );
  }
}

// Cards Component

class Cards extends React.Component {
  render() {
    return (
      <div>
        {this.props.profiles.map((profile) => (
          <Card {...profile} />
        ))}
      </div>
    );
  }
}

// Form Component

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <input type="text" placeholder="Github username" />
        <button>Add Card</button>
      </form>
    );
  }
}

// App Component
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   };
  // }

  // or

  // using class fields ()
  state = { profiles: testData };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>;
        <Form />
        <Cards profiles={this.state.profiles} />;
      </div>
    );
  }
}

export default App;
