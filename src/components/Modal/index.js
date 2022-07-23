
import { useImperativeHandle, useState, forwardRef } from "react";

function Modal(props, ref) {
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    showModal: () => {
      console.log("123");
      setShow(true);
    },
    hideModal: () => {
      setShow(false);
    },
  }));
  return show && <div className="modal">{props.children}</div>;
}

export default forwardRef(Modal);
