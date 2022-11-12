// Write your tests here!
const {substitution} = require("../src/substitution")
const expect = require("chai").expect;

describe("substitution() tests of submission by student", () => {
    describe("substitution", () => {
      it("should return false if the substitution alphabet is missing", () => {
        const message = "saying";
        const actual = substitution(message);
        expect(actual).to.be.false;
      });
  
      it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const message = "saying";
        const alphabet = "fewletters";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
  
      it("should return false if the substitution alphabet does not contain unique characters", () => {
        const message = "saying";
        const alphabet = "aabbccddeeffgg";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
    });
// have not yet changed anything below here:  
    describe("encoding a message", () => {
      it("should encode a message by using the given substitution alphabet", () => {
        const message = 'hello jon doe';
        const alphabet = "plmoknijuhvygctfxrdbzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "jkyyt htc otk";
  
        expect(actual).to.equal(expected);
      });
  
      it("should work with any kind of key with unique characters", () => {
        const message = 'hello jon doe';
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = 'dsccv tvg evs';
  
        expect(actual).to.equal(expected);
      });
  
      it("should preserve spaces", () => {
        const message = 'hello jon doe';
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = 'dsccv tvg evs';
  
        expect(actual).to.equal(expected);
      });
    });
  
    describe("decoding a message", () => {
      it("should decode a message by using the given substitution alphabet", () => {
        const message = "jkyyt htc otk";
        const alphabet = "plmoknijuhvygctfxrdbzeswaq";
        const actual = substitution(message, alphabet, false);
        const expected = "hello jon doe";
  
        expect(actual).to.equal(expected);
      });
  
      it("should work with any kind of key with unique characters", () => {
        const message = "ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "message";
  
        expect(actual).to.equal(expected);
      });
  
      it("should preserve spaces", () => {
        const message = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "my message";
  
        expect(actual).to.equal(expected);
      });
    });
  });

// describe(substitution)
//   it("should return the correctly encoded or decoded string")
//   expected = 
//   actual = 
//   expect(actual)
/*
Tests to include:
 The input could include spaces and letters as well as special characters such as #, $, *, etc.
Spaces should be maintained throughout.
Does it ignore capital letters?
The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
All the characters in the alphabet parameter must be unique. 
Otherwise, it should return false.
*/
