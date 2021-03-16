import { useState } from "react";
import "./App.css";

function Modal({ open, onClose }) {
  return (
    <div className="home__modal" style={{ display: open ? "flex" : "none" }}>
      <svg
        className="modal__heart"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="#ff5075"
          d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"
        />
      </svg>
      <p className="modal__title">Bisouuuuus !</p>
      <button className="modal__button" onClick={() => onClose(false)}>
        retour
      </button>
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="home">
      <h1>Coucou ZoK !</h1>
      <button onClick={() => setOpen(true)} className="home__button">
        click me !
      </button>
      <Modal open={open} onClose={(close) => setOpen(close)} />
    </div>
  );
}

export default App;
