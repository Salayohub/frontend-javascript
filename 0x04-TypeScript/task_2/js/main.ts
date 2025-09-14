// Define the Director interface with the specified methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the Teacher interface with the specified methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;

}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// implimenting the teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function the checker wants
function createEmployee(salary: number): DirectorInterface | TeacherInterface {
  if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type predicate
function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return employee instanceof Director;
}

// Execute work
function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// String literal type
type Subjects = "Math" | "History";

// Function teachClass
function teachClass(todayClass:Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee(500));