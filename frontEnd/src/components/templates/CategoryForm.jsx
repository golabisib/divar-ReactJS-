import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { addCategory } from "src/services/admin";

import styles from "./CategoryForm.module.css";


function CategoryForm() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const {mutate, isLoading, error, data} = useMutation(addCategory)
  console.log({isLoading, error, data})

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(!form.name || !form.slug || !form.icon) return;
    mutate(form)
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h3>دسته بندی جدید</h3>
      {!!error && <p>مشکلی پیش آمده است</p>}
      {data?.status === 201 && <p>دسته بندی با موفقیت اضافه شد</p>}
      <label htmlFor="name">نام دسته بندی</label>
      <input type="text" name="name" id="name" autoComplete="off" />

      <label htmlFor="slug">اسلاگ</label>
      <input type="text" name="slug" id="slug" autoComplete="off" />

      <label htmlFor="icon">نام آیکون</label>
      <input type="text" name="icon" id="icon" autoComplete="off" />

      <button type="submit" disabled={isLoading}>ایجاد دسته بندی</button>
    </form>
  );
}

export default CategoryForm;
