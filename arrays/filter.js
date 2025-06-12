let students = [
    {
        name: 'Student1',
        marks: 24
    },
    {
        name: 'Student2',
        marks: 40
    },
    {
        name: 'Student3',
        marks: 50
    }
]

students = students.filter((student) => student.marks > 30)

console.log(students);