import dependency from './dependency';

const newDependency = dependency;

export const Dog = {
  name: "Fido",
  bark: function() { return "arf!"},
  useDependency: function() { return newDependency(); }
}

const useless = Dog.bark();
const useless2 = Dog.useDependency();

// console.log('index.js executed successfully');
