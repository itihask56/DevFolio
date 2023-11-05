"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href=`mailto:dev.itihas@gmail.com?subject=${data.subject}&body=Hey its ${data.name}, ${data.message}`
  }
  return (
    <section className="h-screen p-5 mx-auto max-w-7xl flex flex-col items-center justify-center space-y-24 w-full ">
      <h1 className="text-2xl uppercase tracking-[20px] text-violet-500">
        Contact
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center space-y-3 w-full md:w-[30%]"
      >
        <input
          {...register("name", { required: true })}
          placeholder="Aapka Subh Name..."
          type="text"
          className=" placeholder-violet-100 placeholder-opacity-40 border border-violet-500 focus:outline-none p-2 bg-transparent rounded-lg w-full text-white "
        />
        {errors.name && (
          <span className="text-sm text-red-500">This field is required</span>
        )}

        <input
          {...register("subject", { required: true })}
          placeholder="kis vishay me...."
          type="text"
          className="placeholder-violet-100 placeholder-opacity-40 border border-violet-500 focus:outline-none p-2 bg-transparent rounded-lg w-full text-white  "
        />
        {errors.subject && (
          <span className="text-sm text-red-500">This field is required</span>
        )}
        <textarea
          {...register("message", { required: true })}
          placeholder="Aapka sandesh..."
          rows={9}
          className="placeholder-violet-100 placeholder-opacity-40 border border-violet-500 focus:outline-none p-2 bg-transparent rounded-lg w-full text-white  "
        />
        {errors.message && (
          <span className="text-sm text-red-500">This field is required</span>
        )}
        <button
          type="submit"
          className="bg-gradient-to-r from-violet-500 to-pink-500 p-3 rounded-lg font-bold text-white w-full hover:opacity-80 duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
