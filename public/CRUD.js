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
  const [subjectName, setSubjectName] = useState("");
  const [subjectClass, setSubjectClass] = useState("");
  const [subjectDescription, setSubjectDescription] = useState("");
  const [subjectContainment, setSubjectContainmentProcedures] = useState("");
  const [subjectImage, setSubjectImage] = useState("");
  const [readData, setReadData] = useState([]);
  const [id, setId] = useState("");
  const [showDoc, setShowDoc] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const ourDocsToRead = await getDocs(OurCollection);
      setReadData(
        ourDocsToRead.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getData();
  }, []);

  const OurCollection = collection(db, "SCP-Subjects");

  const crudCreate = async () => {
    await addDoc(OurCollection, {
      ID: id,
      Name: subjectName,
      Class: subjectClass,
      Description: subjectDescription,
      Containment: subjectContainment,
      Image: subjectImage,
    });
  };

  const crudDelete = async (id) => {
    const docToDelete = doc(db, "SCP-Subjects", id);
    await deleteDoc(docToDelete);
  };

  const showEdit = async (id, name, description, containment, image) => {
    setId(id);
    setSubjectName(name);
    setSubjectDescription(description);
    setSubjectContainmentProcedures(containment);
    setSubjectImage(image);
    setShowDoc(true);
  };

  const crudUpdate = async () => {
    const updateSubject = doc(db, "SCP-Subjects", id);
    await updateDoc(updateSubject, {
      Name: subjectName,
      Class: subjectClass,
      Description: subjectDescription,
      Containment: subjectContainment,
      Image: subjectImage,
    });

    setShowDoc(false);
    setSubjectName("");
    setSubjectClass("");
    setSubjectDescription("");
    setSubjectContainmentProcedures("");
    setSubjectImage("");
  };

  return (
    <>
      <form>
        <input
          value={id}
          onChange={(id) => setId(id.target.value)}
          placeholder="ID"
          required
        />
        <input
          value={subjectName}
          onChange={(name) => setSubjectName(name.target.value)}
          placeholder="Name"
          required
        />
        <input
          value={subjectClass}
          onChange={(sclass) => setSubjectClass(sclass.target.value)}
          placeholder="Class"
          required
        />
        <input
          value={subjectDescription}
          onChange={(description) =>
            setSubjectDescription(description.target.value)
          }
          placeholder="Description"
          required
        />
        <input
          value={subjectContainment}
          onChange={(containment) =>
            setSubjectContainmentProcedures(containment.target.value)
          }
          placeholder="Containment Procedures"
          required
        />
        <input
          value={subjectImage}
          onChange={(image) => setSubjectImage(image.target.value)}
          placeholder="Image"
          required
        />
        {!showDoc ? (
          <button onClick={crudCreate}>Create</button>
        ) : (
          <button onClick={crudUpdate}>Update</button>
        )}
      </form>

      <hr />
      {readData.map((values) => (
        <div key={values.ID}>
          <h1>{values.Name}</h1>
          <h2>{values.Class}</h2>
          <p>{values.Description}</p>
          <p>{values.Containment}</p>
          <img src={values.Image} alt={values.Name} />
          <button onClick={() => crudDelete(values.id)}>Delete</button>{" "}
          <button
            onClick={() =>
              showEdit(
                values.id,
                values.Name,
                values.Description,
                values.Containment,
                values.Image
              )
            }
          >
            Edit
          </button>
        </div>
      ))}
    </>
  );
}

export default CRUD;
