import { writable } from "svelte/store";
import products from '../../demo-data/jobs.json';

export const allProducts = writable(products);

// export const mailBoxVisibility = writable(false);