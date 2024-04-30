// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

// with undefined values
// say(helloMessage, "John");
// say(heyThereMessage, "Michael");

// corrected with apply
// say.apply(helloMessage, ["John"])
// say.apply(heyThereMessage, ["Michael"])

// corrected with call
say.call(helloMessage, "John")
say.call(heyThereMessage, "Michael")
