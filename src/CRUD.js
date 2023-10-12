import { useState, useEffect } from "react";
import { db } from "./fbconfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

function CRUD() {
  const [subjectID, setSubjectID] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [subjectClass, setSubjectClass] = useState("");
  const [subjectDescription, setSubjectDescription] = useState("");
  const [subjectContainment, setSubjectContainmentProcedures] = useState("");
  const [subjectImage, setSubjectImage] = useState("");

  const OurCollection = collection(db, "SCP-Subjects");

  const crudCreate = async () => {
    await addDoc(OurCollection, {
      ID: subjectID,
      Name: subjectName,
      Class: subjectClass,
      Description: subjectDescription,
      Containment: subjectContainment,
      Image: subjectImage,
    });
  };

  return (
    <>
      <form>
        <input
          value={subjectID}
          onChange={(id) => setSubjectID(id.target.value)}
          placeholder="ID"
        />
        <input
          value={subjectName}
          onChange={(name) => setSubjectName(name.target.value)}
          placeholder="Name"
        />
        <input
          value={subjectClass}
          onChange={(sclass) => setSubjectClass(sclass.target.value)}
          placeholder="Class"
        />
        <input
          value={subjectDescription}
          onChange={(description) =>
            setSubjectDescription(description.target.value)
          }
          placeholder="Description"
        />
        <input
          value={subjectContainment}
          onChange={(containment) =>
            setSubjectContainmentProcedures(containment.target.value)
          }
          placeholder="Containment Procedures"
        />
        <input
          value={subjectImage}
          onChange={(image) => setSubjectImage(image.target.value)}
          placeholder="Image"
        />
        <button onClick={crudCreate}>Add Subject</button>
      </form>
    </>
  );
}

export default CRUD;
