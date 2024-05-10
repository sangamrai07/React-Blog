import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

    
export const notify = (msg) => toast(msg);
export const success = (msg) => toast(msg);
export const error = (msg) => toast(msg);