function Student (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.fullName = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

Student.prototype.enroll = function (course) {
  if (!this.courses.includes(course)) {
    this.courses.push(course);
    course.students.push(this);
  }
};

Student.prototype.courseLoad = function () {
  let load = {};
  for (var i = 0; i < this.courses.length; i++) {
    let course = this.courses[i];
    if (load[course.dept] === undefined ) {
      load[course.dept] = 1;
    } else {
      load[course.dept]++;
    }
  }
  return load;
};

function Course(name, dept, numCredits) {
  this.name = name;
  this.dept = dept;
  this.numCredits = numCredits;
  this.students = [];
}

Course.prototype.addStudent = function (student) {
  student.enroll(this);
};


let s1 = new Student("Alex", "Scott");
let s2 = new Student("Brady", "Kimball");
let s3 = new Student("Bryant", "Luong");

let c1 = new Course("Recursion", "appacademy", 1);
let c2 = new Course("Ruby", "appacademy", 1);
let c3 = new Course("JavaScript", "hackreactor", 1);

s1.enroll(c1);
s1.enroll(c2);
s1.enroll(c3);

c2.addStudent(s2);
console.log(s1.courseLoad());
console.log(c2);
