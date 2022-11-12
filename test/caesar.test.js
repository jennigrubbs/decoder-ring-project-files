// Write your tests here!
const {caesar} = require("../src/caesar")
const expect = require("chai").expect;

describe("caesar() tests of submission by student", () => {
  describe("caesar", () => {
    it("should return false if shift amount is 0", () => {
        const message = "some saying";
        const shift = 0;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });
  
    it("should return false if shift amount is above 25", () => {
        const message = "some saying";
        const shift = 28;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });
  
    it("should return false if shift amount is less than -25", () => {
        const message = "some saying";
        const shift = -26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });
    });
  
  describe("caesar", () => {
    it("should encode a message by shifting letters", () => {
        const message = "saying";
        const shift = 6;
        const actual = caesar(message, shift);
        const expected = "ygeotm";
  
        expect(actual).to.equal(expected);
      });
  
    it("should leave spaces and other symbols as they are", () => {
        const message = "this saying is.";
        const shift = 6;
        const actual = caesar(message, shift);
        const expected = "znoy ygeotm oy.";
  
        expect(actual).to.equal(expected);
      });
  
    it("should ignore all capital letters", () => {
        const message = "This Saying Is";
        const shift = 6;
        const actual = caesar(message, shift);
        const expected = "znoy ygeotm oy";
  
        expect(actual).to.equal(expected);
      });
  
    it("should handle letters at end of alphabet appropriately", () => {
        const message = "zebras migrating";
        const shift = 6;
        const actual = caesar(message, shift);
        const expected = "fkhxgy somxgzotm";
  
        expect(actual).to.equal(expected);
      });
  
    it("should allow for a negative shift that will shift to left", () => {
        const message = "zebras migrating";
        const shift = -6;
        const actual = caesar(message, shift);
        const expected = "tyvlum gcaluncha";
  
        expect(actual).to.equal(expected);
      });
    });
  
  describe("caesar", () => {
    it("should decode a message by shifting letters in opposite direction", () => {
        const message = 'fkhxgy somxgzotm';
        const shift = 6;
        const actual = caesar(message, shift, false);
        const expected = "zebras migrating";
  
        expect(actual).to.equal(expected);
      });
  
    it("should leave all spaces and other symbols as is", () => {
        const message = "fkhxgy somxgzotm.";
        const shift = 6;
        const actual = caesar(message, shift, false);
        const expected = "zebras migrating.";
  
        expect(actual).to.equal(expected);
      });
  
    it("should ignore all capital letters", () => {
        const message = "Fkhxgy Somxgzotm";
        const shift = 6;
        const actual = caesar(message, shift, false);
        const expected = "zebras migrating";
  
        expect(actual).to.equal(expected);
      });
  
    it("should handle letters at the end of the alphabet appropriately", () => {
        const message = "fkhxgy somxgzotm";
        const shift = 6;
        const actual = caesar(message, shift, false);
        const expected = "zebras migrating";
  
        expect(actual).to.equal(expected);
      });
  
    it("should allow for a negative shift that will shift to left", () => {
        const message = "tyvlum gcaluncha";
        const shift = -6;
        const actual = caesar(message, shift, false);
        const expected = "zebras migrating";
  
        expect(actual).to.equal(expected);
      });
    })
});

  
// things to test: 
// Does it return false if shift value isn't present, === 0, is < less than -25 
// or > -25?
// Does it maintain spaces and other nonalphabetic symbols throughout?
// Does it ignore capital letters?
// Does it wrap back to front of alphabet if input includes a shift on letter z? 
// Does it return the expected encoded or decoded phrase?
