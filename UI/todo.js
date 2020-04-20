window.onload = function () {
  const addButton = document.querySelector(".addButton");
  var input = document.querySelector(".input");
  const container = document.querySelector(".container");

  class item {
    constructor(itemName) {
      //create the task list div
      this.createDiv(itemName);
    }

    createDiv(itemName) {
      let input = document.createElement("input");
      input.value = itemName;
      input.disabled = true;
      input.classList.add("myInput");
      input.type = "text";

      let itemBox = document.createElement("div");
      itemBox.classList.add("item");

      let editButton = document.createElement("button");
      editButton.innerHTML = "Edit";
      editButton.classList.add("editButton");

      let removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove";
      removeButton.classList.add("removeButton");

      let doneButton = document.createElement("button");
      doneButton.innerHTML = "Done";
      doneButton.classList.add("doneButton");

      container.appendChild(itemBox);

      itemBox.appendChild(input);
      itemBox.appendChild(editButton);
      itemBox.appendChild(removeButton);
      itemBox.appendChild(doneButton);

      editButton.addEventListener("click", () => this.edit(input));
      removeButton.addEventListener("click", () => this.remove(itemBox));
      doneButton.addEventListener("click", () => this.done(itemBox));
    }

    edit(input) {
      input.disabled = !input.disabled;
    }

    remove(item) {
      container.removeChild(item);
    }

    done(item) {
      container.checkOut(item);
    }
  }

  function addToList() {
    if (input.value === "") {
      alert("No task entered, enter one before adding");
    } else {
      if (input.value != "") {
        new item(input.value);
        input.value = "";
      }
    }
  }

  //Add tasks to the list at Add button press / click
  addButton.addEventListener("click", addToList);

  window.addEventListener("keydown", (e) => {
    if (e.which == 13) {
      addToList();
    }
  });

  // Check out done item on the list after Done button press
  function checkOut() {
    alert();
  } //not yet active

  //create a function to show and call id to display the date and time
  // included in the HTML head

  // Save the list to localStorage
  //in my next commit
};
