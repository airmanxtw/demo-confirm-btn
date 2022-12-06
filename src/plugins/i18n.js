import { createI18n } from "vue-i18n";
const i18n = createI18n({
  legacy: false,
  locale: "tw",
  messages: {
    en: {
      delete: "DELETE",
      title:"Welcome to the Vuetify 3",
      language:"language",
      confirm:"confirm",
      cancel:"cancel",
      deleteConfirm:"Are you sure you want to delete this item?"
    },
    tw: {
      delete: "刪除",
      title:"歡迎使用Vuetify3",
      language:"語系",
      confirm:"確定",
      cancel:"取消",
      deleteConfirm:"確定要刪除這個項目嗎?"
    },
  },
});

export default i18n;

