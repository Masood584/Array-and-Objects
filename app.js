 //  creating an object as simple
      //  we can add multiple objects in an array same like we can add multiple variable in an array
      //  let car=["corolla","vigo","swifht","etc....."]

      let anObject = [
        {
          color: "purple",
          type: "minivan",
          registration: new Date("2023-2-28"),
          capacity: "7",
        },
        {
          color: "green",
          type: "bigvan",
          registration: new Date("2023-2-1"),
          capacity: "4",
        },
        {
          color: "red",
          type: "vegan",
          registration: new Date("2023-2-2"),
          capacity: "5",
        },
        {
          color: "purple",
          type: "minicar",
          registration: new Date("2023-2-3"),
          capacity: "3",
        },
        {
          color: "red",
          type: "croser",
          registration: new Date("2023-2-4"),
          capacity: "8",
        },
        {
          color: "purple",
          type: "cororlla",
          registration: new Date("2023-2-4"),
          capacity: "6",
        },
      ];

      let values = Object.values(anObject);
      document.getElementById("print_object_vlaues").innerText = values;

      let keys = Object.keys(anObject);
      document.getElementById("print_object_vlaues").innerText = keys;
      console.log(anObject.length);

      // Applyin a mini consition using ternary operator
      anObject.length >= 6
        ? console.log("object Okay ara hai")
        : console.log("object glt ara hai");

      // To add an object at the first position, use Array.unshift.

      let newCar = {
        color: "green",
        type: "mehran",
        registration: new Date("2023-2-28"),
        capacity: "5",
      };

      console.log(
        "adding a new object at first position",
        anObject.unshift(newCar)
      ); // return lenth
      console.log("updatedArray", anObject);

      // To add an object at the last position, use Array.push.

      let moreNewCar = {
        color: "red",
        type: "aulto",
        registration: new Date("2023-2-28"),
        capacity: "5",
      };

      console.log(
        "adding a new object at last position",
        anObject.push(moreNewCar)
      ); // return length
      console.log("updatedArray", anObject);

      // Add a new object in the middle - Array.splice

      let anotherNewCar = {
        color: "purple",
        type: "aulto",
        registration: new Date("2023-2-28"),
        capacity: "5",
      };

      console.log(
        "adding a new object at middle position",
        anObject.splice(4, 0, anotherNewCar)
      ); // return null array

      let newArr = anObject.splice(4, 0, anotherNewCar);
      newArr.push({
        name: "masood",
        age: 21,
      });

      console.log(newArr);
      console.log("updatedArray", anObject);

      // Find an object in an array by its values - Array.find

      let findFirstRedCAr = anObject.find(
        (anObject) => anObject.color === "red"
      );
      console.log("findedFirstElement", findFirstRedCAr);

      // we can also add more keys to find

      let findFirstRedCroserCar = anObject.find(
        (anObject) => anObject.color === "red" && anObject.type === "croser"
      );
      console.log("findFirstRedCroserCar", findFirstRedCroserCar);

      let allPurpleCar = anObject.filter(
        (anObject) => anObject.color === "purple"
      );
      console.log("allPurpleCar", allPurpleCar);

      // Transform objects of an array - Array.map

      let capacityCheck = anObject.map((values) => {
        if (values.capacity <= 3) {
          return "small";
        }

        if (values.capacity <= 5) {
          return "meduim";
        }

        return "large";
      });

      console.log("capacityCheck.....", capacityCheck);

      const updatedArraAfterKeyAdd = anObject.map((values,index) => {
        return (   
         { ...values, size: capacityCheck[index] });
      });
      console.log("updatedArraAfterKeyAdd", updatedArraAfterKeyAdd);