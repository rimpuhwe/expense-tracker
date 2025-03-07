
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Enter atleast 3 characters minimum" })
    .max(20, { message: "you reached the maximum characters" }),
  amount: z.number({ invalid_type_error: "Amount is required" }).min(0,{message:' the minimum amount must be greater than 0'}),
  category: z.enum(["Groceries", "Utilities", "Luxury"], {
    message: "select any category from the list",
  }),
});

const Form = ({ onSubmitData }: { onSubmitData: (data: any) => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors , isValid},
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmitHandler = (data:any) => {
    onSubmitData(data);
    reset(); 
  };
  return (
    <form
      action=""
      className=" mx-auto my-5 p-3 w-50"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <label htmlFor="description" className="form-label d-block">
        Description
      </label>
      <input
        type="text"
        id="description"
        className="w-50 p-1"
        {...register("description")}
      />
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}
      <label htmlFor="amount" className="form-label d-block">
        Amount
      </label>
      <input
        type="text"
        id="amount"
        className="w-50 p-1"
        {...register("amount", { valueAsNumber: true })}
      />
      {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      <label htmlFor="category" className="form-label d-block">
        Category
      </label>
      <select id="category" className="w-50 p1" {...register("category")}>
        <option value="">Select category</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Luxury">Luxury</option>
      </select>
      {errors.category && (
        <p className="text-danger">{errors.category.message}</p>
      )}
      <button className="btn btn-primary d-block mt-5 py-2 px-5" disabled={!isValid}>Add</button>
    </form>
  );
};

export default Form;
