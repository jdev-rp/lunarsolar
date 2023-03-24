<template>
  <main>
    <a-row type="flex" justify="center" align="middle">
      <a-col :span="8">
        <a-form @submit.prevent="onSubmit">
          <a-form-item>
            <a-radio-group v-model:value="type" button-style="solid">
              <a-radio-button value="solar">양력</a-radio-button>
              <a-radio-button value="lunar">음력</a-radio-button>
            </a-radio-group>
            으로 변환하기
          </a-form-item>
          <a-form-item>
            <a-date-picker v-model:value="datetime" format="YYYY-MM-DD"></a-date-picker>
            <a-button type="primary" html-type="submit" :disabled="isDisabledSubmit">변환</a-button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
    <a-row>
      <a-col>
        <a-descriptions title="변환 정보" bordered>
          <a-descriptions-item label="년월일"></a-descriptions-item>
        </a-descriptions>
      </a-col>
    </a-row>
  </main>
</template>

<script>
import lunarToSolar from "../openapi/lunarToSolar";
import solarToLunar from "../openapi/solarToLunar";

export default {
  name: "index",
  data: () => ({
    type: 'solar',
    datetime: ''
  }),
  computed: {
    isDisabledSubmit() {
      return !this.datetime;
    }
  },
  methods: {
    onSubmit() {
      const isSolar = this.type === 'solar';

      if(isSolar) lunarToSolar(this.datetime);
      else solarToLunar(this.datetime);
    },
  }
}
</script>

<style scoped>

</style>