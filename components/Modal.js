import PropTypes from "prop-types";
import ReactModal from "react-modal";

export const Modal = (props) => {
  const {
    children,
    isOpen,
    onAfterClose,
    onRequestClose,
    hideCloseBtn,
    centered,
  } = props;

  const modalContentClassName = [
    "react-modal--content-style",
    centered ? "centered_modal" : "",
  ].join(" ");

  return (
    <ReactModal
      isOpen={isOpen}
      // closeTimeoutMS={500}
      onAfterClose={onAfterClose}
      onRequestClose={onRequestClose}
      className={modalContentClassName}
      overlayClassName="react-modal--overlay-style"
    >
      {isOpen ? (
        <>
          {children}

          {hideCloseBtn ? null : (
            <span className="close-modal" onClick={onRequestClose}>
              X
            </span>
          )}
        </>
      ) : null}
    </ReactModal>
  );
};

Modal.defaultProps = {
  isOpen: false,
  centered: false,
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  centered: PropTypes.bool,
  hideCloseBtn: PropTypes.bool,
  onAfterClose: PropTypes.func,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
