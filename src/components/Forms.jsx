const Form = ({ children, ...props }) => {
  return (
    <form
      className="mx-auto w-[26rem] overflow-hidden rounded-md border border-gray-200 bg-white p-6 text-sm dark:bg-gray-800 dark:text-gray-200"
      {...props}
    >
      {children}
    </form>
  );
};

const SignUpForm = ({ children, ...props }) => {
  return (
    <form
      className="mx-auto w-[44rem] overflow-hidden rounded-md border border-gray-200 bg-white p-6 text-sm dark:bg-gray-800 dark:text-gray-200"
      {...props}
    >
      {children}
    </form>
  );
};

const SettingsForm = ({ children, ...props }) => {
  return (
    <form
      className="mx-auto w-[44rem] overflow-hidden rounded-md border border-gray-200 bg-white p-6 text-sm dark:bg-gray-800 dark:text-gray-200"
      {...props}
    >
      {children}
    </form>
  );
};

const ModalForm = ({ children, ...props }) => {
  return (
    <form
      className="overflow-hidden bg-white text-sm dark:bg-gray-700 dark:text-gray-200"
      {...props}
    >
      {children}
    </form>
  );
};

export { Form, ModalForm, SettingsForm, SignUpForm };
