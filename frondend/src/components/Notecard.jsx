import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const Notecard = ({ note, setNotes }) => {  const handleDelete = async (e, id) => {
    e.preventDefault(); // Prevent the default action of the button
    e.stopPropagation(); // Prevent event bubbling to the Link

    if (!window.confirm("Are you sure you want to delete this note?")) return;    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note.id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      toast.error("Error deleting note");
      console.error("Error deleting note:", error);
    }
  };  return (
    <Link
      to={`/notes/${note.id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00ff9d]"
    >
      <div className="card-body">
        <h2 className="card-title text-base-content">{note.title}</h2>
        <p className="text-gray-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note.id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Notecard;
