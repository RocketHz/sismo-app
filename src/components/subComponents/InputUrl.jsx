import React from "react";

const InputUrl = ({ onApiUrlChange }) => {
 const handleSubmit = (event) => {
    event.preventDefault();
    const url = event.target.elements.url.value;
    onApiUrlChange(url);
 };

 return (
    <form onSubmit={handleSubmit} className="relative rounded-3xl bg-black">
      <input
        type="url"
        name="url"
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlInputURL"
        placeholder="Ingrese la URL de la API"
      />
      <button type="submit" className="absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-50 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-50 dark:peer-focus:text-primary">
        Enviar
      </button>
    </form>
 );
};

export default InputUrl;
