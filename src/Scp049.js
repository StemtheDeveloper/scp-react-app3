import React from "react";
import subjects from "./subjectData.json"; // Adjust the path as needed
import SubjectImage from "./assets/SCP-049.png";

function SCP049() {
  // Find the SCP-049 data in the subjects array
  const scp049Data = subjects.find((subject) => subject["SCP-ID"] === 1);

  return (
    <div className="SCP-049">
      <h1>{scp049Data.name}</h1>
      <img src={SubjectImage} alt={scp049Data.name} />
      <div className="subject-info">
        <p>Subject Class: {scp049Data.subject_class}</p>
        <p>Description: {scp049Data.description}</p>
        <p>Containment Procedures: {scp049Data.containment_procedures}</p>
      </div>
    </div>
  );
}

export default SCP049;
