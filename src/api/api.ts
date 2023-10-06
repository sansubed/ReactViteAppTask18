import { IPostData } from "../type";

const apiURL = "https://jsonplaceholder.typicode.com/posts";
export async function getPostData() {
  //fetch the api return the promise
  const response = await fetch(apiURL);

  //the data here is in json format and we are converting to javascript object
  const data: IPostData[] = await response.json();

  return data;
}
