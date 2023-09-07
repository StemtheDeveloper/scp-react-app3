import React from "react";
import subjects from "./subjectData.json"; // Adjust the path as needed
import SubjectImage from "./assets/SCP-682.jpg";

function SCP682() {
  // Find the SCP-682 data in the subjects array
  const scp682Data = subjects.find((subject) => subject["SCP-ID"] === 5);

  return (
    <div className="SCP-682">
      <h1>{scp682Data.name}</h1>
      <img src={SubjectImage} alt={scp682Data.name} />
      <div className="subject-info">
        <p>Subject Class: {scp682Data.subject_class}</p>
        <p>Description: {scp682Data.description}</p>
        <p>Containment Procedures: {scp682Data.containment_procedures}</p>
      </div>
    </div>
  );
}

export default SCP682;
