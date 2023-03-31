<template>
  <main style="text-align: center;">
    <a-row  type="flex" justify="center" style="margin-top: 5%;">
      <a-col>
        <iframe
            src="https://ads-partners.coupang.com/widgets.html?id=652161&template=carousel&trackingCode=AF2048636&subId=&width=680&height=140"
            width="680" height="140" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>
      </a-col>
    </a-row>
    <a-row type="flex" justify="center" align="middle" style="margin-top: 3%">
      <a-col :md="8" :xs="16" :span="24">
        <a-form @submit.prevent="onSubmit">
          <a-form-item>
            <a-radio-group v-model:value="type" button-style="solid">
              <a-radio-button value="lunar">음력</a-radio-button>
              <a-radio-button value="solar">양력</a-radio-button>
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
    <a-row type="flex" justify="center">
      <a-col :md="8" :xs="16" :span="24">
        년월일(변환): {{resultDateTime}}
      </a-col>
    </a-row>
    <a-row type="flex" justify="center" style="margin-top: 3%">
      <a-col>
        <iframe
            src="https://ads-partners.coupang.com/widgets.html?id=652161&template=carousel&trackingCode=AF2048636&subId=&width=680&height=140"
            width="680" height="140" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>
      </a-col>
    </a-row>
    <a-row type="flex" justify="center">
      <a-col>
        <a-col>
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
        </a-col>
      </a-col>
    </a-row>
  </main>
</template>

<script>
import lunarToSolar from "../openapi/lunarToSolar";
import solarToLunar from "../openapi/solarToLunar";
import dayjs from 'dayjs';

export default {
  name: "index",
  data: () => ({
    type: 'lunar',
    datetime: '',
    result: {
      year: '',
      month: '',
      day: '',
    }
  }),
  computed: {
    isDisabledSubmit() {
      return !this.datetime;
    },
    resultDateTime() {
      return this.result.year ? dayjs([this?.result?.year, this?.result?.month, this?.result?.day]).format('YYYY-MM-DD')  : '';
    }
  },
  methods: {
    async onSubmit() {
      const isSolar = this.type === 'solar';
      this.result = isSolar ? await lunarToSolar(this.datetime) : await solarToLunar(this.datetime);

    },
  }
}
</script>

<style scoped>

</style>