import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { getCategory } from "src/services/admin";
import cookiesUtils from "src/utils/cookie";
const { getCookie } = cookiesUtils;

import styles from "./AddPost.module.css";
import toast from "react-hot-toast";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: null,
    city: "",
    category: "",
    images: null,
  });

  const { data } = useQuery(["get-categories"], getCategory);
  //   console.log(data);

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "image") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };

  const addHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (let key in form) {
      formData.append(key, form[key]);
    }
    // console.log(formData);
    const token = getCookie("accessToken");

    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => toast.success(res.data.message))
      .catch(() => toast.error("مشکلی پیش آمده است!"));
  };

  return (
    <form onChange={changeHandler} className={styles.form}>
      <h3>افزودن آگهی</h3>

      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" autoComplete="off"  />

      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content"/>

      <label htmlFor="amount">قیمت</label>
      <input type="number" name="amount" id="amount"  autoComplete="off"/>

      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" autoComplete="off" />

      <label htmlFor="category">دسته بندی</label>
      <select name="category" id="category" >
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>

      <label htmlFor="images">عکس</label>
      <input type="file" name="images" id="images" />

      <button onClick={addHandler}>ایجاد آگهی</button>
    </form>
  );
}

export default AddPost;
