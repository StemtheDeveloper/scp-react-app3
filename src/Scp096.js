import React from "react";
import subjects from "./subjectData.json"; // Adjust the path as needed
import SubjectImage from "./assets/SCP-096.jpg";

function SCP096() {
  // Find the SCP-096 data in the subjects array
  const scp096Data = subjects.find((subject) => subject["SCP-ID"] === 2);

  return (
    <div className="SCP-096">
      <h1>{scp096Data.name}</h1>
      <img src={SubjectImage} alt={scp096Data.name} />
      <div className="subject-info">
        <p>Subject Class: {scp096Data.subject_class}</p>
        <p>Description: {scp096Data.description}</p>
        <p>Containment Procedures: {scp096Data.containment_procedures}</p>
      </div>
    </div>
  );
}

export default SCP096;
