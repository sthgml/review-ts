import iconEditLight from '../../assets/icon/icon-edit-bk.png';
import iconEdit from '../../assets/icon/light/icon-edit-light.svg';
import iconDelete from '../../assets/icon/icon-delete.svg';
import iconDeleteLight from '../../assets/icon/light/icon-delete-light.svg';
import useStateContexts from '../../hooks/useStateContexts';

type DiaryBtnsProps = {
  fns: {
    handleDelete: () => void;
    handleUpdate: () => void;
  }
}

export default function DiaryBtns({ fns }: DiaryBtnsProps) {
  const { handleUpdate, handleDelete } = fns;
  const { lightTheme } = useStateContexts();
  return (
    <div className="div-btns">
      <button type="button" onClick={() => handleUpdate()} className="edit-btn">
        <img src={lightTheme ? iconEditLight : iconEdit} alt="수정" />
      </button>
      <span className="divider-btns" />
      <button type="button" onClick={() => handleDelete()} className="delete-btn">
        <img src={lightTheme ? iconDeleteLight : iconDelete} alt="삭제" />
      </button>
    </div>
  );
}
