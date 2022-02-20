/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const laptop = {
  type: "dell", //string
  color: "gray",
  processor: "intel core i7",
  modelNumber: "inspiron 5570",
  displaySize: "15'",
  ports: {
    right: 3, //number
    left: 7,
    names: ["usbA", "usbc", "power", "SDcard"],
  },
  fnkeys: [12, 3, 4, 5, 6, 9],
  powerOn: true,
  togglePower: function (powerStatus) {
    this.powerOn = powerStatus;
  },
  changeString: function (property, value) {
    this[property] = value;
  },
};
console.log("laptop object", laptop);
console.log("laptop object %d inches", laptop.fnkeys[3]);
console.log("laptop object", laptop.ports.names[3]);
console.log(laptop["type"]);
