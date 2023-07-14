import { writable } from "svelte/store";
import allChats from '@data/chatData.json';

export const chatContent = writable(allChats);
