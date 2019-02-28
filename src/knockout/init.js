import ko from "knockout";

let Counter = null;

const updateDependency = {
  Counter: null,

  setup: store => {
    const CounterViewModel = function(value) {
      this.counterValue = ko.observable(value);
    };

    Counter = new CounterViewModel(store.getState().value);

    ko.applyBindings(Counter, document.getElementById("knockout"));
  },

  update: store => {
    Counter.counterValue(store.value);
  }
};

export default updateDependency;
