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
          <Card key={profile.id} {...profile} />
        ))}
      </div>
    );
  }
}

// Form Component

class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    );
    const data = await resp.json();
    this.props.onSubmit(data);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          required
        />
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
  state = { profiles: [] };

  addNewProfile = (profileData) => {
    // this.setState((prevState) => ({
    //   profiles: [...prevState.profiles, profileData],
    // }));
    this.setState({ profiles: [...this.state.profiles, profileData] });
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>;
        <Form onSubmit={this.addNewProfile} />
        <Cards profiles={this.state.profiles} />;
      </div>
    );
  }
}

export default App;
