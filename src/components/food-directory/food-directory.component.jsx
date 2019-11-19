import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./food-directory.styles.css";

const FoodDirectory = props => (
  <div className="FoodDirectoryContainer">
    <div className="FoodDirectoryContainerHeader">
      <div className="FoodDirectoryContainerHeaderBody">Lunch</div>
    </div>
    <div className="FoodDirectoryContainerBody">
      {getHoursAndMinutes("7:00-11:00,17:00-20:02")}
      {props.foodItems.map(foodItem => {
        if (getHoursAndMinutes(foodItem.availabletime)) {
          return (
            <Card key={foodItem.itemname}>
              <Card.Body>
                <Card.Title>
                  <div className="CardTitle">
                    <div className="CardTitleName">{foodItem.itemname}</div>
                    <div className="CardTitlePrice">
                      &#8377;{foodItem.price}
                    </div>
                  </div>
                </Card.Title>
                <div className="CardAddItemBtn">
                  <Button variant="outline-warning">Add</Button>
                </div>
              </Card.Body>
            </Card>
          );
        } else {
          return null;
        }
      })}
    </div>
  </div>
);

const getHoursAndMinutes = availableTime => {
  let currentDate = new Date();
  let date = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();

  date = date.toString().length === 1 ? "0" + date : date.toString();
  month = month.toString().length === 1 ? "0" + month : month.toString();

  let splitAvailableTime = availableTime.split(",");
  let firstHalf = splitAvailableTime[0].split("-");
  let secondHalf = splitAvailableTime[1].split("-");

  if (
    currentDate.getTime() >=
      new Date(
        month + "/" + date + "/" + year + " " + firstHalf[0]
      ).getTime() &&
    currentDate.getTime() <=
      new Date(month + "/" + date + "/" + year + " " + firstHalf[1]).getTime()
  ) {
    return true;
  }

  if (
    currentDate.getTime() >=
      new Date(
        month + "/" + date + "/" + year + " " + secondHalf[0]
      ).getTime() &&
    currentDate.getTime() <=
      new Date(month + "/" + date + "/" + year + " " + secondHalf[1]).getTime()
  ) {
    return true;
  }
  return false;
};

export default FoodDirectory;
