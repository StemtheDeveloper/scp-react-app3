import React from "react";
import subjects from "./subjectData.json"; // Adjust the path as needed
import SubjectImage from "./assets/SCP-106.jpeg";

function SCP106() {
  // Find the SCP-106 data in the subjects array
  const scp106Data = subjects.find((subject) => subject["SCP-ID"] === 3);

  return (
    <div className="SCP-106">
      <h1>{scp106Data.name}</h1>
      <img src={SubjectImage} alt={scp106Data.name} />
      <div className="subject-info">
        <p>Subject Class: {scp106Data.subject_class}</p>
        <p>Description: {scp106Data.description}</p>
        <p>Containment Procedures: {scp106Data.containment_procedures}</p>
      </div>
    </div>
  );
}

export default SCP106;
