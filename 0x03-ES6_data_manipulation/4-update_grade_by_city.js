export default function updateStudentGradeByCity(listStudents, city, newGrades) {
    if (listStudents instanceof Array) {
        return listStudents.filter((student) => student.location === city).map((student) => ({
            id: student.id,
            firstName: student.firstName,
            location: student.location,
            grade:(newGrades.filter((grade) => grade.studentId === student.id).pop() || {grade: 'N/A'}).grade,
        }));
    }
    return [];
}