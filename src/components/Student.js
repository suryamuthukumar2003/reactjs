function Student(props) {
  return (
    <div>
      <h1>Student Details</h1>
      <p>Student Name-{props.name}</p>
      <p>Student Rollno-{props.id}</p>
      <p>StudentAge-{props.age}</p>
    </div>
  );
}
export default Student;
