export default function getListStudentIdsSums(listStudents) {
  if (listStudents instanceof Array) {
    return listStudents.reduce((sum, student) => sum + student.id, 0);
  }
}
