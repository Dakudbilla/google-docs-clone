import { useState } from "react";
import CreateDocsModal from "./modal";

const Docs = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className="docs-main">
      <h1>Docs Clone</h1>

      <button className="add-docs" onClick={handleOpen}>
        Add new document
      </button>

      <CreateDocsModal setOpen={setOpen} open={open} />
    </div>
  );
};

export default Docs;
