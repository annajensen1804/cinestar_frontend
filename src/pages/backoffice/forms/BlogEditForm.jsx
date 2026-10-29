import { useCrud } from "../../../hooks/useCrud";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../components/button/Button";
import styles from "./form.module.css";
import ConfirmationForm from "./ConfirmationForm";
import { useState } from "react";

const BlogEditForm = ({ blog, onClose }) => {
  const { update } = useCrud();

  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingData, setPendingData] = useState(null);

  const schema = yup.object().shape({
    title: yup.string().required("Titel er påkrævet"),
    teaser: yup.string().required("Teaser er påkrævet"),
    description: yup.string().required("Beskrivelse er påkrævet"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: blog.title,
      teaser: blog.teaser,
      description: blog.description,
    },
  });

  const handlePreSubmit = (data) => {
    setPendingData(data); // Gemmer data fra input-felterne i modal
    setShowConfirm(true); // Viser bekræftelse-modal
  };

  // Når vi trykker på Ja-knappen
  const handleActualSubmit = async () => {
    if (!pendingData) return;

    const formData = new FormData();
    formData.append("id", blog._id);
    formData.append("title", pendingData.title);
    formData.append("teaser", pendingData.teaser);
    formData.append("description", pendingData.description);
    if (pendingData.image && pendingData.image[0]) {
      formData.append("file", pendingData.image[0]);
    }

    try {
      await update("blog", formData);
      onClose();
    } catch (error) {
      console.log("Fejl ved opdatering af blogindlæg:", error);
    }
  };

  // Viser bekræftelse-modal
    if (showConfirm) {
      return (
        <ConfirmationForm
          message={`Vil du gemme ændringerne for "${pendingData?.title}"?`}
          onConfirm={handleActualSubmit}
          onCancel={() => {
            setShowConfirm(false);
            setPendingData(null);
          }}
        />
      );
    }

  return (
    <form onSubmit={handleSubmit(handlePreSubmit)} className={styles.form}>
      <div>
        <label htmlFor="title">Titel:</label>
        <input id="title" type="text" {...register("title")} />
        {errors.title && (
          <span className={styles.error}>{errors.title.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="image">Skift billede (valgfrit):</label>
        <input id="image" type="file" {...register("image")} />
      </div>

      <div>
        <label htmlFor="teaser">Teaser:</label>
        <textarea id="description" rows={2} {...register("teaser")} />
        {errors.teaser && (
          <span className="error">{errors.teaser.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="description">Beskrivelse:</label>
        <textarea id="description" rows={5} {...register("description")} />
        {errors.description && (
          <span className="error">{errors.description.message}</span>
        )}
      </div>

      <Button
        type="submit"
        buttonText={isSubmitting ? "Gemmer..." : "Opdater blogindlæg"}
      />
    </form>
  );
};;

export default BlogEditForm;
