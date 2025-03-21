const FileInput = (props) => {
  return (
    <input
      type="file"
      className="rounded-md text-sm file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:font-medium file:text-white file:transition-colors file:duration-200 hover:file:bg-blue-700"
      {...props}
    />
  );
};

export default FileInput;
