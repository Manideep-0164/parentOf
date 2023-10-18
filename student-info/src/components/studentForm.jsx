import React, { useState } from "react";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [marks, setMarks] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:1210/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        class: className,
        marks,
      }),
    }).then((r) => r.json());
    console.log(response);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          id="class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <input
          type="text"
          id="marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default StudentForm;
