import styles from "./contactForm.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { serverPath } from "../../../settings";
import Button from "../../button/Button";

const ContactForm = () => {

    const schema = yup.object().shape({
        name: yup.string().required("Navn er påkrævet"),
        email: yup
            .string()
            .email("Ugyldig emailadresse")
            .required("Email er påkrævet"),
        subject: yup.string().required("Emne er påkrævet"),
        description: yup
            .string()
            .min(10, "Beskeden skal være på mindst 10 tegn")
            .required("Besked er påkrævet"),
         });
    
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
    } = useForm({ resolver: yupResolver(schema) });


    // react-hook-form giver os de validerede felter i "data".
      const onSubmit = async (data) => {
        try {
          const response = await fetch(`${serverPath}/message`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
    
          if (!response.ok) {
            toast.error("Der skete en fejl..");
          } else {
            Swal.fire({
              icon: "success",
              title: `Tak for din besked, ${data.name}!`,
              text: "Vi bestræber os på at kontakte dig via din email indenfor 24 timer.",
              background: "#000",
              color: "#ffffff",
              confirmButtonColor: "#F07232",
            });
            reset();
          }
        } catch (error) {
          console.error("Fejl:", error);
          toast.error("Der skete en fejl...");
        }
      };

      return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name"></label>
            <input
              id="name"
              type="text"
              placeholder="Navn"
              {...register("name")}
            />
            {errors.name && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="subject"></label>
            <input id="subject" type="text" placeholder="Emne" {...register("subject")} />
            {errors.subject && (
              <span className={styles.error}>{errors.subject.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="description"></label>
            <textarea id="description" rows="5" placeholder="Besked" {...register("description")} />
            {errors.description && (
              <span className={styles.error}>{errors.description.message}</span>
            )}
          </div>

          <Button
            buttonText={isSubmitting ? "Sender..." : "Send besked"}
            type="submit"
          />
        </form>
      );
}

export default ContactForm;