import { Dispatch, SetStateAction } from 'react';

export default function TodayModal({ setIsModalOpen }: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const handleClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div><button type="button" onClick={handleClick}>TodayModal</button></div>
  );
}
