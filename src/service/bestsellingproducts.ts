import axios from 'axios';
import { BESTSELLINGPHONES } from '../urls/urls';


export default async function getBestSellingPhonesAPI() {
  try {
    const response = await axios.get(BESTSELLINGPHONES);
    console.log(response.data)
    return response;
  } catch (err) {
    throw err;
  }
}