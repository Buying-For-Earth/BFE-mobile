import axios from 'axios';

const URL = 'http://ec2-52-79-76-54.ap-northeast-2.compute.amazonaws.com:5000';

export const fetchHome = () => axios.get(URL + '/home');

export const fetchProduct = (id: number) => axios.get(URL + `/product/${id}`);