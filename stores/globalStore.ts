import { defineStore } from "pinia";

export const useGlobalStore = defineStore('globalStore', {
  state: () => ({
    message: 'Hello World!'
  }),

  actions: {
    setMessage(text: string) {
      if(text.trim().length > 0) {
        this.message = text;
      }
    }
  }
})