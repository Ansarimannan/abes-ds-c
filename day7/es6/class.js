const student1={
    rollno:1,
    name:"xyz",
    branch:"cse-ds",
    section:"c"
}
const student2={
    rollno:2,
    name:"abc",
    branch:"cse-ds",
    section:"c"

}
console.log("object student1:",student1);
console.log("object student2:",student2);

class Student {
    constructor(rollno,name,branch,section){
        this.rollno=rollno;
        this.name=name;
        this.branch=branch;
        this.section=section;
    }
}

const student3=new Student(3,"ab","cse-ds","c");
console.log(student3);
