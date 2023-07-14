import { writable } from "svelte/store";
import allMails from '../../demo-data/emailData.json';

export const mailList = writable(allMails);

export const mailBoxVisibility = writable(false);