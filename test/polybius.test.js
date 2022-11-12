// Write your tests here!
const {polybius} = require("../src/polybius")
const expect = require("chai").expect;

describe("polybius() tests of student's submission", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter into number pairs", () => {
      const message = "saying";
      const actual = polybius(message);
      const expected = "341145423322";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "jiggling";
      const actual = polybius(message);
      const expected = "4242222213423322";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as they are", () => {
      const message = "my saying";
      const actual = polybius(message);
      const expected = "2345 341145423322";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "11334544432533";
      const actual = polybius(message, false);
      const expected = "anytown";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "4242222213423322";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "2345 2532114451155124";
      const actual = polybius(message, false);
      const expected = "my whatever";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "911";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});

// need to include/maintain spaces
// for encoding output should be a string
// when decoding .length of string excluding spaces should be even, if not return false
// capital letters can be ignored
// The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.
