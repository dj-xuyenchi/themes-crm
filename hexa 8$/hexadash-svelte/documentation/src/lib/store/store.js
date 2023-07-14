// import { writable } from 'svelte/store';
import {getItem} from '../utility/localStorageController';

const storedTheme = getItem("theme");
export const theme = storedTheme;
