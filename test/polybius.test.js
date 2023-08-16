const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  describe("encoding", () => {
    it("should translate the letters 'i' and 'j' to '42'", () => {
      expect(polybius("ij")).to.equal("4242");
    });

    it("should encode 'Isaac' to 4234111131", () => {
      expect(polybius("Isaac")).to.equal("4234111131");
    });

    it("should maintain spaces", () => {
      expect(polybius("Isaac Cloninger")).to.equal("4234111131 311343334233225124");
    });
    it("should ignore capital letters", () => {
      expect(polybius("ijIJazAZ")).to.equal("4242424211551155");
    });
  });
  describe("decoding", () => {
    it("should decode 4234111131 to (i/j)saac", () => {
      expect(polybius("4234111131", false)).to.eql("(i/j)saac");
    });

    it("should translate 42 to (i/j)", () => {
      expect(polybius("42", false)).to.eql("(i/j)");
    });

    it("should ignore capital letters", () => {
      expect(polybius("4242424211551155", false)).to.eql(
        "(i/j)(i/j)(i/j)(i/j)azaz"
      );
    });
    it("should maintain spaces", () => {
      expect(polybius("4234111131 311343334233225124", false)).to.eql("(i/j)saac clon(i/j)nger");
    });
    it("should return false if the length of all numbers is odd", () => {
      expect(polybius("245", false)).to.be.false;
    });
  });
});