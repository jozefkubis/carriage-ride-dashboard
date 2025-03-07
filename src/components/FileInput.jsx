const FileInput = (props) => {
  return (
    <input
      type="file"
      className="file:text-brand-50 file:bg-brand-600 hover:file:bg-brand-700 rounded-md text-sm file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:px-4 file:py-2 file:font-medium file:transition-colors file:duration-200"
      {...props}
    />
  );
};

export default FileInput;
