import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateDoc, collection, doc, onSnapshot } from "firebase/firestore";
export default function EditDocs({ database }) {
  const isMounted = useRef();

  const collectionRef = collection(database, "docsData");

  let params = useParams();

  const [documentTitle, setDocumentTitle] = useState("");

  const [docsDesc, setDocsDesc] = useState("");

  const getQuillData = (value) => {
    setDocsDesc(value);
  };

  useEffect(() => {
    const updateDocsData = setTimeout(() => {
      const document = doc(collectionRef, params.id);
      updateDoc(document, {
        docsDesc: docsDesc,
      })
        .then(() => {
          toast.success("Document Saved", {
            autoClose: 2000,
          });
        })
        .catch(() => {
//close toast in 2seconds 
          toast.error("Document failed to Saved", {
            autoClose: 2000,
          });
        });
    }, 1000);
    return () => clearTimeout(updateDocsData);
  }, [docsDesc]);

  const getData = () => {
    const document = doc(collectionRef, params.id);
    onSnapshot(document, (docs) => {
      setDocumentTitle(docs.data().title);
      setDocsDesc(docs.data().docsDesc ? docs.data().docsDesc : "");
      console.log(docs);
    });
  };

  useEffect(() => {
    if (isMounted.current) {
      return;
    }

    isMounted.current = true;
    getData();
  }, []);
  return (
    <div>
      <div className="editDocs-main">
        <div style={{ marginLeft: "0px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </div>

        <h1>{documentTitle}</h1>
        <div className="editDocs-inner">
          <ReactQuill
            className="react-quill"
            value={docsDesc}
            onChange={getQuillData}
          />
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}
