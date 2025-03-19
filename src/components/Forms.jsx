const Form = ({ children, ...props }) => {
  return (
    <form
      className="w-[26rem] overflow-hidden rounded-md border border-gray-200 bg-white p-6 text-sm"
      {...props}
    >
      {children}
    </form>
  );
};

const ModalForm = ({ children, ...props }) => {
  return (
    <form className="overflow-hidden bg-white text-sm" {...props}>
      {children}
    </form>
  );
};

export { Form, ModalForm };
