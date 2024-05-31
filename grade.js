function mpc(grade) {
    if (grade >= 70) {
        return(`A`);               
    }     
    else if(grade >= 60){
        return(`B`);
    }       
    else if(grade >=50){
        return(`C`);
    }
    else if (grade >=40) {
        return(`pass`);                
    }
    else{
        return(`sup`);
    }
}


function re(grade1) {
    
    if (grade1 >= 80) {
        return(`A`);               
    }     
    else if(grade1 >= 70 ){
        return(`B`);
    }       
    else if(grade1 >=60){
        return(`C`);
    }
    else if (grade1 >=50) {
        return(`pass`);                
    }
    else{
        return(`sup`);
    }
}

function ecs(grade2) {
    
    if (grade2 >= 75) {
        return(`A`);               
    }     
    else if(grade2 >= 65){
        return(`B`);
    }       
    else if(grade2 >=55){
        return(`C`);
    }
    else if (grade2 >=45) {
        return(`pass`);                
    }
    else{
        return(`sup`);
    }
}

function calculateGradesAndAverage(student) {
    let student; 
    let avgPts = Math.floor((student.math + student.english + student.swahili + student.physics + student.chemistry + student.religiousEducation + student.computer) / 7);
    
    return student, avgPts;

}
module.exports = {mpc,re,ecs, calculateGradesAndAverage};
