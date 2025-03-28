import { useState } from "react";
import Button from "../../components/Button";
import { formatCurrency } from "../../utils/helpers";
import CreateRideForm from "./CreateRideForm";
import { useDeleteRide } from "./useDeleteRide";
import Modal from "../../components/Modal";
import ConfirmDelete from "../../components/ConfirmDelete";
import Table from "../../components/Table";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";

const Img = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="border-gray-100-translate-x-2 block aspect-[3/2] w-24 flex-none scale-125 rounded-md border object-cover object-center"
    />
  );
};

const Ride = ({ children }) => {
  return (
    <div className="font-sono text-sm font-semibold text-gray-600 dark:text-gray-200">
      {children}
    </div>
  );
};

const Description = ({ children }) => {
  return (
    <div className="font-sono text-sm font-semibold text-gray-600 dark:text-gray-200">
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
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const { isDeleting, deleteRide } = useDeleteRide();

  const { id: rideId, name, regularPrice, discount, description, image } = ride;

  const totalPrice = (regularPrice - discount).toFixed(2);

  return (
    <>
      <Table.Row>
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
        <div className="flex flex-col items-end gap-2 px-4">
          <button
            onClick={() => setIsOpenModal((show) => !show)}
            disabled={isDeleting}
          >
            <FaPencil size={18} style={{ color: "gray" }} />
          </button>

          <button
            onClick={() => setIsOpenDeleteModal((show) => !show)}
            disabled={isDeleting}
          >
            <RiDeleteBin6Line size={18} style={{ color: "gray" }} />
          </button>
        </div>
      </Table.Row>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateRideForm
            rideToEdit={ride}
            onClose={() => setIsOpenModal(false)}
          />
        </Modal>
      )}

      {isOpenDeleteModal && (
        <Modal onClose={() => setIsOpenDeleteModal(false)}>
          <ConfirmDelete
            resourceName="jazdu"
            onConfirm={() => deleteRide(rideId)}
            disabled={isDeleting}
            onClose={() => setIsOpenDeleteModal(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default RideRow;
