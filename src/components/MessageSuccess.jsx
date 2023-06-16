import Button from "./Button";
import Logo from "./Logo";

function MessageSuccess({ onOpen, setOnOpen }) {
  const onClose = () => {
    setOnOpen(false);
  };

  return (
    <>
      {onOpen && (
        <div className="success-wrapper" onClick={onClose}>
          <div className="success" onClick={(e)=> e.stopPropagation()}>
            <div className="success__content">
              <Logo />
              <p>Your order has been successfully processed.</p>
              <p>Thank you for your purchase!</p>
              <Button className="btn btn--light" text="Ok" onClick={onClose} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MessageSuccess;
