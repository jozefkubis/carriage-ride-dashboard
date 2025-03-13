import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = ({ children }) => {
  return <div className="flex w-[30rem] flex-col gap-5">{children}</div>;
};

function ConfirmDelete({ resourceName, onConfirm, disabled, onClose }) {
  return (
    <StyledConfirmDelete>
      <Heading type="h3">Vymazať {resourceName}</Heading>
      <p className="mb-5 text-gray-500">
        Ste si istý, že chcete vymazať túto {resourceName}?
      </p>

      <div className="flex justify-end gap-5">
        <Button
          size="medium"
          variant="secondary"
          disabled={disabled}
          onClick={() => onClose?.()}
        >
          Zrušiť
        </Button>
        <Button variant="danger" disabled={disabled} onClick={onConfirm}>
          Vymazať
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
