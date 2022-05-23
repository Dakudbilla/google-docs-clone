import { addDoc, collection, Firestore, onSnapshot } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import CreateDocsModal from "./modal";

interface docsProps {
  database: Firestore;
}

interface firebaseDataProps {
  title?: string;
  id?: string;
}

const Docs = ({ database }: docsProps) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [docsData, setDocsData] = useState<firebaseDataProps[]>();

  const isMounted = useRef(false);

  //Create collection in firebase firestore
  const collectionRef = collection(database, "docsData");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Add data to firebase
  const addData = () => {
    addDoc(collectionRef, {
      title: title,
    })
      .then(() => {
        alert("Data Added Succesfully");
        handleClose();
      })
      .catch(() => {
        alert("Cannot add data");
      });
  };
  let firebaseData: firebaseDataProps[];
  //Read data to firebase
  const getData = () => {
    onSnapshot(collectionRef, (data) => {
      setDocsData(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };

  useEffect(() => {
    if (isMounted?.current) {
      return;
    }

    isMounted.current = true;

    getData();
  }, []);
  return (
    <div className="docs-main">
      <h1>Docs Clone</h1>

      <button className="add-docs" onClick={handleOpen}>
        Add new document
      </button>

      <CreateDocsModal
        setOpen={setOpen}
        open={open}
        title={title}
        setTitle={setTitle}
        addData={addData}
      />

      <div className="grid-main">
        {docsData?.map((doc) => {
          return (
            <div className="grid-child" key={doc.title}>
              <p>{doc.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Docs;
