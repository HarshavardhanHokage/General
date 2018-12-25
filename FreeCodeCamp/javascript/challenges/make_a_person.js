var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let name = firstAndLast;
    this.getFullName = function() {
        return name;
    };
    this.getFirstName = function() {
        return name.split(" ")[0];
    }
    this.getLastName = function() {
        return name.split(" ")[1];
    }

    this.setFullName = function(fullName) {
        name = fullName;
    }
    this.setFirstName = function(firstName) {
        name = name.replace(this.getFirstName(), firstName);
    }
    this.setLastName = function(lastName) {
        name = name.replace(this.getLastName(), lastName);
    }
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  console.log(bob.getFullName());
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  bob.setFullName("Dragon Lee");
  console.log(bob.getFullName());
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  bob.setFirstName("Monkey");
  console.log(bob.getFullName());
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  bob.setFirstName("Luffy");
  console.log(bob.getFullName());
  console.log(bob.getFirstName());
  console.log(bob.getLastName());