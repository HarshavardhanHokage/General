let gr = {
    name: "John",
    say: function() {
        let name = "Bill";
        console.log("Hello: " +this.name);
        return function() {
            (() => {console.log(this.name)})();
            
        }
    }
}

gr.say()();