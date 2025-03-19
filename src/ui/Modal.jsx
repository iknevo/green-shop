import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

/* eslint-disable react/prop-types */
const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: windowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(windowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;
  return createPortal(
    <div className="fixed top-0 left-0 z-50 h-dvh w-full bg-black/5 backdrop-blur-[4px] transition-all duration-500">
      <div
        className="ba fixed top-1/2 left-1/2 -translate-1/2 rounded-lg bg-white px-16 py-13 transition-all duration-500"
        ref={ref}
      >
        <button
          className="absolute top-1 right-1 cursor-pointer rounded-lg border-none bg-none p-2 transition-all duration-200 hover:scale-110"
          onClick={close}
        >
          <HiXMark className="text-5xl text-gray-500 transition-all duration-200 hover:text-red-500" />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
