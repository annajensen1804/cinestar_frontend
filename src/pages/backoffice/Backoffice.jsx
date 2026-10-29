import { useLoaderData } from 'react-router-dom';
import { useCrud } from "../../hooks/useCrud";
import styles from './backoffice.module.css'
import BlogsSec from './components/BlogsSec';
import BlogForm from './forms/BlogForm';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import BlogEditForm from './forms/BlogEditForm';
import Modal from '../../components/modal/Modal';
import { useState } from 'react';
import ConfirmationForm from './forms/ConfirmationForm';

const Backoffice = () => {
  const [modal, setModal] = useState(null);

  const close = () => setModal(null);

  const { blogs } = useLoaderData();

  const { remove } = useCrud();

  // Titler til modal vinduer
  const titles = {
    "blog-add": "Tilføj blogindlæg",
    "blog-edit": "Rediger blogindlæg",
    "confirm-delete": "Bekræft sletning",
  };

  const handleConfirmDelete = async () => {
    if (!modal?.item?._id) return;
    try {
      await remove("blog", modal.item._id);
      close();
    } catch (error) {
      console.error("Fejl ved sletning af blogindlæg:", error);
    }
  };

  return (
    <article className={styles.backoffice}>
      <a href="/">← Tilbage til forsiden</a>
      <h1>Backoffice</h1>
      <h2>Blogs</h2>
      <BlogsSec
        blogs={blogs}
        onAdd={() => setModal({ type: "blog-add" })}
        onEdit={(blog) => setModal({ type: "blog-edit", item: blog })}
        onDelete={(blog) =>
          setModal({
            type: "confirm-delete",
            message: `Er du sikker på, at du vil slette "${blog.title}"?`,
            item: blog,
          })
        }
      />

      <Modal
        isOpen={!!modal}
        onClose={close}
        title={modal ? titles[modal.type] : ""}
      >
        {modal?.type?.startsWith("confirm-") && (
          <ConfirmationForm
            message={modal.message}
            onConfirm={handleConfirmDelete}
            onCancel={close}
          />
        )}

        {modal?.type === "blog-add" && (
          <BlogForm blogs={blogs} onClose={close} />
        )}
        {modal?.type === "blog-edit" && (
          <BlogEditForm blogs={blogs} blog={modal.item} onClose={close} />
        )}
      </Modal>

      <ToastContainer position="bottom-center" autoClose={3000} theme="light" />
    </article>
  );
}

export default Backoffice;