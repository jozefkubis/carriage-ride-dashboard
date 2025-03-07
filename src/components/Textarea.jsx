const Textarea = (props) => {
  return (
    <textarea
      className="h-32 w-full resize-none rounded-md border border-gray-300 bg-gray-50 p-2 shadow-sm"
      {...props}
    />
  );
};

export default Textarea;
