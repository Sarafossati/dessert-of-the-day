var obj;

fetch('https://random-data-api.com/api/dessert/random_dessert')
  .then(response => response.json())
  .then(data => obj = data)
    .then(function(data) {
      var variety = document.createElement("h1");
      var topping = document.createElement("h2");
      var flavor = document.createElement("h3");

      variety.innerHTML = obj.variety;
      document.body.appendChild(variety);  

      topping.innerHTML = obj.topping;
      document.body.appendChild(topping); 

      flavor.innerHTML = obj.flavor;
      document.body.appendChild(flavor); 
    })





