import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useCrud } from "../../../hooks/useCrud";
import styles from "./form.module.css";
import Button from "../../../components/button/Button";
import "react-toastify/dist/ReactToastify.css";

const BlogForm = ({ onClose }) => {
  const { create } = useCrud();

  const schema = yup.object().shape({
    title: yup.string().required("Titel er påkrævet"),
    teaser: yup.string().required("Teaser er påkrævet"),
    description: yup.string().required("Beskrivelse er påkrævet"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("teaser", data.teaser);
    formData.append("description", data.description);
    if (data.image && data.image[0]) {
      formData.append("file", data.image[0]);
    }

    try {
      await create("blog", formData);
      onClose();
    } catch (error) {
      console.error("Fejl ved oprettelse af blogindlæg:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label htmlFor="title">Titel:</label>
        <input id="title" type="text" {...register("title")} />
        {errors.title && <span className="error">{errors.title.message}</span>}
      </div>

      <div>
        <label>Vælg billede</label>
        <input id="image" type="file" {...register("file")} />
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
        buttonText={isSubmitting ? "Gemmer..." : "Tilføj blogindlæg"}
      />
    </form>
  );
};

export default BlogForm;
