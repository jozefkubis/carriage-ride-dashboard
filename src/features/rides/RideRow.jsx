import { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import ConfirmDelete from "../../components/ConfirmDelete";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import { formatCurrency } from "../../utils/helpers";
import CreateRideForm from "./CreateRideForm";
import { useDeleteRide } from "./useDeleteRide";

const Img = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="border-gray-100-translate-x-2 block aspect-[3/2] w-24 flex-none scale-125 rounded-md border object-cover object-center"
  />
);

const Ride = ({ children }) => (
  <div className="font-sono text-sm font-semibold text-gray-600 dark:text-gray-200">
    {children}
  </div>
);

const Description = ({ children }) => (
  <div className="font-sono text-sm font-semibold text-gray-600 dark:text-gray-200">
    {children}
  </div>
);

const Price = ({ children }) => (
  <div className="font-sono text-sm font-semibold">{children}</div>
);

const Discount = ({ children }) => (
  <div className="font-sono text-sm font-medium text-green-700">{children}</div>
);

const TotalPrice = ({ children }) => (
  <div className="font-sono text-sm font-semibold">{children}</div>
);

function RideRow({ ride }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { isDeleting, deleteRide } = useDeleteRide();

  const { id, name, regularPrice, discount, description, image } = ride;
  // Chráni pred negatívnou hodnotou
  const totalPrice = Math.max(regularPrice - discount, 0);

  const toggleEditModal = () => setIsEditModalOpen((prev) => !prev);
  const toggleDeleteModal = () => setIsDeleteModalOpen((prev) => !prev);

  return (
    <>
      <Table.Row>
        <Img src={image} alt={name} />
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
            onClick={toggleEditModal}
            disabled={isDeleting}
            className="text-gray-500 transition hover:text-red-600"
          >
            <FaPencil size={18} />
          </button>
          <button
            onClick={toggleDeleteModal}
            disabled={isDeleting}
            className="text-gray-500 transition hover:text-red-600"
          >
            <RiDeleteBin6Line size={18} />
          </button>
        </div>
      </Table.Row>

      {isEditModalOpen && (
        <Modal onClose={() => setIsEditModalOpen(false)}>
          <CreateRideForm
            rideToEdit={ride}
            onClose={() => setIsEditModalOpen(false)}
          />
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal onClose={() => setIsDeleteModalOpen(false)}>
          <ConfirmDelete
            resourceName="jazdu"
            onConfirm={() => deleteRide(id)}
            disabled={isDeleting}
            onClose={() => setIsDeleteModalOpen(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default RideRow;
