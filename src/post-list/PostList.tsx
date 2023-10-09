import React, { useEffect, useState } from "react";
import { getPostData } from "../api/api";
import { IPostData } from "../type";
import styles from "./post-list.module.css";

function PostList() {
  const [postData, setPostData] = useState<IPostData[]>([]);

  useEffect(() => {
    //here getPostData() when called returns the promise
    getPostData().then((data) => {
      setPostData(data);
    });
  }, []);
  return (
    <div className={styles.post}>
      {postData.map((postData) => (
        <>
          <h1 key={postData.id}></h1>
          <div className={styles.userId}>UserId: {postData.userId}</div>
          <div className={styles.title}> Title: {postData.title}</div>
          <div className={styles.body}>Body: {postData.body}</div>
        </>
      ))}
    </div>
  );
}

export default PostList;
