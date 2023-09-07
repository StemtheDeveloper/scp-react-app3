import React from "react";
import subjects from "./subjectData.json"; // Adjust the path as needed
import SubjectImage from "./assets/SCP-173.webp";

function SCP173() {
  // Find the SCP-173 data in the subjects array
  const scp173Data = subjects.find((subject) => subject["SCP-ID"] === 4);

  return (
    <div className="SCP-173">
      <h1>{scp173Data.name}</h1>
      <img src={SubjectImage} alt={scp173Data.name} />
      <div className="subject-info">
        <p>Subject Class: {scp173Data.subject_class}</p>
        <p>Description: {scp173Data.description}</p>
        <p>Containment Procedures: {scp173Data.containment_procedures}</p>
      </div>
    </div>
  );
}

export default SCP173;
