import React from "react";

import Header from "../header/header.component";
import FoodDirectory from "../food-directory/food-directory.component";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json"
    )
      .then(response => response.json())
      .then(res => this.setState({ foods: res }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { foods, searchField } = this.state;
    const filteredFoods = foods.filter(food =>
      food.itemname.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <Header handleChange={this.handleChange} {...this.props} />
        <FoodDirectory foodItems={filteredFoods} />
      </div>
    );
  }
}

export default Homepage;
