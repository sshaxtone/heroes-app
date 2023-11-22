import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ButtonInfo from "./ButtonInfo/ButtonInfo";
import Modal from "./Modal/Modal";

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""} `
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""} `
            }
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">Miranda</span>

          <button className="nav-item nav-link btn">Logout</button>
          {/* Agregar el botón aquí */}
          <ButtonInfo onClick={toggleModal} />

          {/* Renderizar el modal */}
          <Modal isOpen={showModal} onClose={toggleModal} />
        </ul>
      </div>
    </nav>
  );
};
