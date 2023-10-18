import React, { useEffect, useState } from "react";

const StudentListing = () => {
  const [students, setStudents] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:1210/student").then((r) =>
      r.json()
    );
    setStudents(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h2>Student Listing</h2>
        <div className="student-list">
          {students.length === 0 && "No data"}

          {students.length !== 0 &&
            students.map((student) => (
              <div key={student._id} className="student-card">
                <h3>Name: {student.name}</h3>
                <p>Class: {student.class}</p>
                <p>Marks: {student.marks}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default StudentListing;
