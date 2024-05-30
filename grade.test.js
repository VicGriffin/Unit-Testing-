const {mpc,re,ecs, calculateGradesAndAverage} = require("./grade.js");

describe("mpc", () => {
    it("should return 'A' when the score is greater than 70", () => {
        expect(mpc(75)).toEqual('A');
    });

    it("should return 'B' when the score is greater than 60 and less than or equal to 70", () => {
        expect(mpc(65)).toEqual('B');
    });

    it("should return 'C' when the score is greater than 50 and less than or equal to 60", () => {
        expect(mpc(55)).toEqual('C');
    });

    it("should return 'D' when the score is greater than 40 and less than or equal to 50", () => {
        expect(mpc(45)).toEqual('pass');
    });

    it("should return 'sup' when the score is less than or equal to 40", () => {
        expect(mpc(35)).toEqual('sup');
    });
});
describe("re", () => {
    it("should return 'A' when the score is greater than 80", () => {
        expect(re(85)).toEqual('A');
    });

    it("should return 'B' when the score is greater than 70 and less than or equal to 79", () => {
        expect(re(75)).toEqual('B');
    });

    it("should return 'C' when the score is greater than 60 and less than or equal to 69", () => {
        expect(re(67)).toEqual('C');
    });

    it("should return 'pass' when the score is greater than 50 and less than or equal to 59", () => {
        expect(re(56)).toEqual('pass');
    });

    it("should return 'sup' when the score is less than or equal to 49", () => {
        expect(re(20)).toEqual('sup');
    });
});
describe("ecs", () => {
    it("should return 'A' when the score is greater than 75", () => {
        expect(ecs(80)).toEqual('A');
    });

    it("should return 'B' when the score is greater than 65 and less than or equal to 74", () => {
        expect(ecs(65)).toEqual('B');
    });

    it("should return 'C' when the score is greater than 55 and less than or equal to 64", () => {
        expect(ecs(55)).toEqual('C');
    });

    it("should return 'D' when the score is greater than 45 and less than or equal to 54", () => {
        expect(ecs(45)).toEqual('pass');
    });

    it("should return 'sup' when the score is less than or equal to 44", () => {
        expect(ecs(35)).toEqual('sup');
    });
});


describe("calculateGradesAndAverage", () => {
    it("should return an object with grades and average", () => {
        const student = {
            math: 80,
            english: 50,
            swahili: 60,
            physics: 79,
            chemistry: 70,
            religiousEducation: 68,
            computer: 36
        };
        const expectedResult = Math.floor((student.math + student.english + student.swahili + student.physics + student.chemistry + student.religiousEducation + student.computer) / 7)
        expect(calculateGradesAndAverage(student)).toEqual(63);
    });
});
