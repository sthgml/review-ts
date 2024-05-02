import iconEdit from '../../assets/icon/icon-edit-bk.png';
import iconDelete from '../../assets/icon/icon-delete.svg';

type DiaryBtnsProps = {
  fns: {
    handleDelete: () => void;
    handleUpdate: () => void;
  }
}

export default function DiaryBtns({ fns }: DiaryBtnsProps) {
  const { handleUpdate, handleDelete } = fns;
  return (
    <div className="div-btns">
      <button type="button" onClick={() => handleUpdate()} className="edit-btn">
        <img src={iconEdit} alt="수정" />
      </button>
      <span className="divider-btns" />
      <button type="button" onClick={() => handleDelete()} className="delete-btn">
        <img src={iconDelete} alt="삭제" />
      </button>
    </div>
  );
}
