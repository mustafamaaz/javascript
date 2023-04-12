function Student(name, rollNo, grade) {
    this.name = name;
    this.rollNo = rollNo;
    this.grade = grade;
  
    this.showDetails = function() {
      console.log(`Name: ${this.name}, Roll No: ${this.rollNo}, Grade: ${this.grade}`);
    }
    
    this.cleanup = function() {
      console.log(`Cleaning up resources for ${this.name}`);
      // Perform any cleanup logic here
    }
  }
  
  var students = [];
  
  // Create some students
  students.push(new Student("John", 1, "A"));
  students.push(new Student("Jane", 2, "B"));
  students.push(new Student("Bob", 3, "C"));
  
  // Show student details
  for (var i = 0; i < students.length; i++) {
    students[i].showDetails();
  }
  
  // Clean up resources for each student
  for (var i = 0; i < students.length; i++) {
    students[i].cleanup();
  }
  