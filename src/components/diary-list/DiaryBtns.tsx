import iconEdit from '../../assets/icon/icon-edit-bk.png';
import iconDelete from '../../assets/icon/icon-delete.svg';

export default function DiaryBtns() {
  // const { deleteDocument, updateDocument } = useFirestore('diary');
  const handleDelete = () => {
    // if (window.confirm('정말로 삭제하시겠습니까?')) deleteDocument(item.id);
  };

  const handleUpdate = () => {
    // if (window.confirm('수정하시겠습니까?')) updateDocument(item.id, { 'doc.text': textareaValue });
  };

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
