// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by my-theme.js.
import { name as packageName } from "meteor/my-theme";

// Write your tests here!
// Here is an example.
Tinytest.add('my-theme - example', function (test) {
  test.equal(packageName, "my-theme");
});
