import { defineStore } from "pinia";

export const useGlobalStore = defineStore('globalStore', {
  state: () => ({
    message: 'Hello World!'
  })  
})