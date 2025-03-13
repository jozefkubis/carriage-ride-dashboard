import { useState } from "react";
import Button from "../../components/Button";
import { formatCurrency } from "../../utils/helpers";
import CreateRideForm from "./CreateRideForm";
import { useDeleteRide } from "./useDeleteRide";
import Modal from "../../components/Modal";

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
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { isDeleting, deleteRide } = useDeleteRide();

  const { id: rideId, name, regularPrice, discount, description, image } = ride;

  const totalPrice = (regularPrice - discount).toFixed(2);

  return (
    <>
      <TableRow>
        {<Img src={image} alt={ride.name} />}
        <Ride>{name}</Ride>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <TotalPrice>{formatCurrency(totalPrice)}</TotalPrice>
        <Description>{description}</Description>
        <div className="flex flex-col gap-1">
          <Button size="small" onClick={() => setIsOpenModal((show) => !show)}>
            Upraviť
          </Button>
          <Button
            size="small"
            onClick={() => deleteRide(rideId)}
            disabled={isDeleting}
          >
            Vyzmazať
          </Button>
        </div>
      </TableRow>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateRideForm
            rideToEdit={ride}
            onClose={() => setIsOpenModal(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default RideRow;
