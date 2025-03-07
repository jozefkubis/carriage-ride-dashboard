const Form = ({ children, ...props }) => {
  return (
    <form
      className="overflow-hidden rounded-md border border-gray-200 bg-gray-50 p-6 text-sm"
      {...props}
    >
      {children}
    </form>
  );
};

const ModalForm = ({ children, ...props }) => {
  return (
    <form className="w-[80rem] overflow-hidden text-sm" {...props}>
      {children}
    </form>
  );
};

export { Form, ModalForm };
