
const {mpc,re,ecs, calculateGradesAndAverage} = require("./grade.js");
const student = {
        math: 80,
        english: 65,
        swahili: 48,
        physics: 67,
        chemistry: 56,
        religiousEducation: 89,
        computer: 82
    };
        console.log(`maths:`, mpc(student.maths))
        console.log(`physics:`, mpc(student.physics))
        console.log(`chemistry:`, mpc(student.chemistry))
        console.log('religious education:', re(student.religiousEducation))      
        console.log(`english:`, ecs(student.english))
        console.log(`swahili:`, ecs(student.swahili))
        console.log(`computer:`, ecs(student.computer))
        console.log(`avaragepoints`, calculateGradesAndAverage(student));

