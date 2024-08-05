class Kata {
  static getVolumeOfCuboid(length, width, height) {
    const volume = length * width * height
    
    return volume;
  }
}

// Instructions:
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.


// Tests:
// const { assert } = require('chai')

// describe("Tests", () => {
//   it("Example tests", () => {
//     assert.strictEqual(Kata.getVolumeOfCuboid(1,2,2),  4);
//     assert.strictEqual(Kata.getVolumeOfCuboid(6,2,5), 60);
//   });
// });
