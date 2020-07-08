// namespace objects
(function(objects)
{
    class Student extends objects.Person {
        // CONSTRUCTOR
        constructor(name, age, studentID) {
            super(name, age);
            this.StudentID = studentID;
        }
        get StudentID() {
            return this.m_studentID;
        }
        set StudentID(value) {
            this.m_studentID = value;
        }
        // PUBLIC METHODS
        Studies() {
            console.log(`${this.Name} is studying`);
        }
    }
    objects.Student = Student;

}(objects || (objects = {})));