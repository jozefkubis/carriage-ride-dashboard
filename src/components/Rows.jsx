export const RowHorizontal = ({ children }) => {
  return (
    <div className="flex items-center justify-between px-6 pt-6">
      {children}
    </div>
  );
};

export const RowVertical = ({ children }) => {
  return <div className="flex flex-col gap-4 px-6">{children}</div>;
};
