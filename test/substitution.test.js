const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    let input = "a";
    let alphabet = "abc";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.be.false;
  });
  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
    let input = "thinkful";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let expected = "jrufscpw";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should return false if there are any duplicate characters in the given alphabet", () => {
    let input = "thinkful";
    let alphabet = "xxyqmcgrukswaflnthdjpzibev";

    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.be.false;
  });
  it("should maintain spaces when decoding", () => {
    let expected = "you are an excellent spy";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let input = "elp xhm xf mbymwwmfj dne";
    let encode = false;
    let actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces when encoding", () => {
    let input = "you are an excellent spy";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let expected = "elp xhm xf mbymwwmfj dne";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should ignore capitalization", () => {
    let input1 = "you are an excellent spy";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    input2 = "YoU ArE An ExceLLent SpY";
    let actual = substitution(input1, alphabet, (encode = true));
    let expected = substitution(input2, alphabet, (encode = true));

    expect(actual).to.equal(expected);
  });
});
