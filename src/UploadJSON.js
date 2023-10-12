import React, { useState } from "react";
import { db } from "./fbconfig";
import { addDoc, collection } from "firebase/firestore";

const OurCollection = collection(db, "SCP-Subjects");

const UploadJSON = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const uploadJSON = async () => {
    if (file) {
      try {
        const reader = new FileReader();

        reader.onload = async () => {
          const fileContent = reader.result;
          const jsonData = JSON.parse(fileContent);

          for (const object of jsonData) {
            await addDoc(OurCollection, object);
          }

          alert("JSON data uploaded successfully.");
        };

        reader.readAsText(file);
      } catch (error) {
        console.error("Error uploading JSON data:", error);
        alert("Error uploading JSON data.");
      }
    } else {
      alert("Please select a JSON file to upload.");
    }
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileUpload} />
      <button onClick={uploadJSON}>Upload JSON</button>
    </div>
  );
};

export default UploadJSON;
