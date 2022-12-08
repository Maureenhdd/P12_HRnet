import "./Modal.scss";
const Modal = (props) => {
  const onClick = props.onClick;

  return (
    <div className="modal">
      <div className="modal_content">
        <h2 className="modal_content__title">{props.title} </h2>
        <p>{props.description} </p>
        <button
          className="modal_content__btn"
          onClick={() => {
            onClick();
          }}
        >
          {props.titleBtn}
        </button>
      </div>
    </div>
  );
};

export default Modal;
