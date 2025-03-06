import { formatCurrency } from "../../utils/helpers";

const TableRow = ({ children }) => {
  return (
    <div className="grid grid-cols-[0.6fr_1.5fr_1fr_1fr_1fr_2fr_0.5fr] items-center gap-6 border-b border-gray-200 p-4 last:border-b-0">
      {children}
    </div>
  );
};

const Img = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="block aspect-[3/2] w-16 -translate-x-2 scale-150 object-cover object-center"
    />
  );
};

const Ride = ({ children }) => {
  return (
    <div className="font-sono text-sm font-semibold text-gray-600">
      {children}
    </div>
  );
};

const Description = ({ children }) => {
  return (
    <div className="font-sono text-sm font-semibold text-gray-600">
      {children}
    </div>
  );
};

const Price = ({ children }) => {
  return <div className="font-sono text-sm font-semibold">{children}</div>;
};

const Discount = ({ children }) => {
  return (
    <div className="font-sono text-sm font-medium text-green-700">
      {children}
    </div>
  );
};

const TotalPrice = ({ children }) => {
  return <div className="font-sono text-sm font-semibold">{children}</div>;
};

function RideRow({ ride }) {
  const { name, regularPrice, discount, description, image } = ride;

  const totalPrice = (regularPrice - discount).toFixed(2);

  return (
    <TableRow>
      {<Img src={image} alt={ride.name} />}
      <Ride>{name}</Ride>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <TotalPrice>{formatCurrency(totalPrice)}</TotalPrice>
      <Description>{description}</Description>
      <button>Delete</button>
    </TableRow>
  );
}

export default RideRow;
