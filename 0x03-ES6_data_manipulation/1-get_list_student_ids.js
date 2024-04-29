export default function getListStudentIds(listStudents) {
  if (listStudents instanceof Array0) {
    return listStudents.map((student) => student.id);
  }
  return [];
}
