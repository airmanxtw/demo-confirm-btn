import {createI18n} from 'vue-i18n'
const langs = {
  en: {
    title: {
      delete: "delete",
    },
  },
  tw: {
    title: {
      delete: "刪除",
    },
  },
};

const i18n = createI18n({
    legacy:false,
    locale: 'tw', // 设置地区
    langs, // 设置地区信息
})

export default i18n;

