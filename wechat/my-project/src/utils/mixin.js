import { mapGetters, mapActions } from 'vuex'
export const ebookMixin = {
  computed: {
    ...mapGetters([
      'isAuthenticated',
      'user',
      'openId',
      'lessonInfo'
    ]),
  },
  methods: {
    ...mapActions([
      'setIsAuthenticated',
      'setUser',
      'setOpenId',
      'setLessonInfo',
    ]),
  }
};
