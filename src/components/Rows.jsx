export const RowHorizontal = ({ children }) => {
  return (
    <div className="flex items-center justify-between pt-6">{children}</div>
  );
};

export const RowVertical = ({ children }) => {
  return <div className="mx-auto flex flex-col gap-4 py-8">{children}</div>;
};
