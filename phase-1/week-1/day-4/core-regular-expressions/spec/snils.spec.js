const {
  hasSNILS,
  grabSNILS,
  grabAllSNILS,
  hideAllSNILS,
  formatSNILS
} = require("../snils");

describe("hasSNILS", () => {
  it("returns true if it finds a SNILS", () => {
    expect(hasSNILS("The number is 234-600-142 22")).toBe(true);
  });

  it("returns false if it does not find a SNILS", () => {
    expect(hasSNILS("The number is XXX-XXX-XXX 22")).toBe(false);
  });
});

describe("grabSNILS", () => {
  it("returns a SNILS if it finds a SNILS", () => {
    let SNILS = grabSNILS("The number is 234-600-142 22");
    expect(SNILS).toEqual("234-600-142 22");
  });

  it("returns the first SNILS it finds", () => {
    let SNILS = grabSNILS(
      "The numbers are 350-802-074 94, 234-600-142 22, and 013-605-876 94"
    );
    expect(SNILS).toEqual("350-802-074 94");
  });
});

describe("grabAllSNILS", () => {
  it("returns a collection of all the SNILS if it finds any SNILS", () => {
    let allSNILS = grabAllSNILS(
      "The numbers are 350-802-074 94, 234-600-142 22, and 013-605-876 94"
    );
    expect(allSNILS).toEqual([
      "350-802-074 94",
      "234-600-142 22",
      "013-605-876 94",
    ]);
  });

  it("returns null if does not find any SNILS", () => {
    let allSNILS = grabAllSNILS("The number is XXX-XXX-XXX 22");
    expect(allSNILS).toBeNull();
  });
});

describe("hideAllSNILS", () => {
  it("hides any SNILS it finds", () => {
    let hiddenSNILS = hideAllSNILS(
      "The numbers are 350-802-074 94, 234-600-142 22, and 013-605-876 94"
    );
    expect(hiddenSNILS).toEqual(
      "The numbers are XXX-XXX-XXX 94, XXX-XXX-XXX 22, and XXX-XXX-XXX 94"
    );
  });

  it("returns its input if it finds no SNILS", () => {
    let input = "The number is XXX-XXX-XXX 22";
    expect(hideAllSNILS(input)).toEqual(input);
  });
});

describe("formatSNILS", () => {
  it("formats any SNILS it finds", () => {
    let formattedSNILS = formatSNILS(
      "The numbers are 35080207494, 234.600.142.22, and 013--605--876 94"
    );
    expect(formattedSNILS).toEqual(
      "The numbers are 350-802-074 94, 234-600-142 22, and 013-605-876 94"
    );
  });

  it("returns its input if it finds no SNILS", () => {
    let input = "The number is XXX-XXX-XXX 22";
    expect(formatSNILS(input)).toEqual(input);
  });
});
