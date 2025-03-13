import { createContext, useContext } from "react";

const StyledTable = ({ children }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 text-[1.4rem]">
      {children}
    </div>
  );
};

const CommonRow = ({ children, columns }) => {
  return (
    <div
      className="grid items-center gap-6 border-b border-gray-200 p-3 last:border-b-0"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
};

const StyledHeader = ({ children, columns }) => {
  return (
    <CommonRow
      columns={columns}
      className="border-b border-gray-300 bg-gray-100 px-6 py-4 font-semibold uppercase tracking-[0.4px] text-gray-600"
    >
      {children}
    </CommonRow>
  );
};

const StyledRow = ({ children, columns }) => {
  return (
    <CommonRow
      columns={columns}
      className="border-b px-6 py-3 last:border-none"
    >
      {children}
    </CommonRow>
  );
};

const StyledBody = ({ children }) => {
  return <section className="my-1">{children}</section>;
};

const Footer = ({ children }) => {
  return (
    <footer
      className={`flex justify-center bg-gray-100 p-3 ${!children && "hidden"}`}
    >
      {children}
    </footer>
  );
};

const Empty = ({ children }) => {
  return (
    <p className="my-6 text-center text-[1.6rem] font-medium">{children}</p>
  );
};

const TableContext = createContext();

function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader role="row" columns={columns}>
      {children}
    </StyledHeader>
  );
}
function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}
function Body({ render, data }) {
  return <StyledBody>{data.map(render)}</StyledBody>;
}
// function Footer({ children }) {}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
