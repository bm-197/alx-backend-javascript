export default function getListStudents() {
    const listStudent = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
      ];

      return listStudent;
}
console.log(getListStudents());