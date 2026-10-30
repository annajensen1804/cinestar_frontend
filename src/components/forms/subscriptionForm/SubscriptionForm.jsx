import styles from "./subscriptionForm.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { serverPath } from "../../../settings";
import Button from "../../button/Button";

const SubscriptionForm = () => {

    const schema = yup.object().shape({
        email: yup
            .string()
            .email("Ugyldig emailadresse")
            .required("Email er påkrævet"),
         });
    
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });


      const onSubmit = async (data) => {
        try {
          const response = await fetch(`${serverPath}/subscription`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
    
          if (!response.ok) {
            toast.error("Der skete en fejl...");
          } else {
            Swal.fire({
              icon: "success",
              title: `Tak for din tilmelding, ${data.name}!`,
              text: "Vi glæder os til at dele vores indsigter og inspirere dig",
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

          <Button
            buttonText="Tilmeld nu"
            type="submit"
          />
        </form>
      );
}

export default SubscriptionForm;