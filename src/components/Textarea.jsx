const Textarea = (props) => {
  return (
    <textarea
      className="h-20 w-full resize-none rounded-md border border-gray-300 bg-white p-2 shadow-sm dark:text-gray-800"
      {...props}
    />
  );
};

export default Textarea;
