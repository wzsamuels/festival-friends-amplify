import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useIonRouter } from "@ionic/react";

type Inputs = {
  username: string,
  password: string,
};
const LoginPage = () => {
  const router = useIonRouter();
  const [message, setMessage] = useState("");
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    setMessage("Logging in...");
  }

  return (
    <div>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 grid-rows-2 my-4 items-center">
          <label className="">Username</label>
          <input className="p-2" {...register("username", { required: true } )} />
          {errors.username && <span>This field is required</span>}
        </div>       
        <div className="grid grid-cols-2 grid-rows-2 my-4 items-center">
            <label>Password</label>
            <input className="p-2" type="password" {...register("password", { required: true } )} />    
           <span className="">{errors.password && "This field is required"}</span>
        </div>
        {/* errors will return when field validation fails  */}
        
        <div className="flex w-full justify-center">
          <button type="submit">{ message ? message : "Log In"}</button>
        </div>      
      </form>
    </div>
  )
}

export default LoginPage