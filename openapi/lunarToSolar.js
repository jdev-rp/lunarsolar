import xmlToJson from 'xmltojson'
import { message } from 'ant-design-vue/lib'

async function api (datetime) {

    const year = datetime.year();
    let month = datetime.format('MM'),
        day = datetime.format('DD');

    const urlParams = new URLSearchParams()
    urlParams.append('serviceKey', 'FCqO9G+VxdK8E6oVhEroS/OAjL0dSqM4W3kbXlKWosHhLFMKbHtA9mGTspn0Ii3o6qFgfQgOnzDaKAPjLKC4Xw==')
    urlParams.append('lunYear', year);
    urlParams.append('lunMonth', month);
    urlParams.append('lunDay', day);

    const req = new Request(`http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getSolCalInfo?${urlParams.toString()}`, {
        method: 'GET',
        redirect: 'follow',
    });

    const res = await fetch(req);
    const text = await res.text();
    const data = xmlToJson.parseXML(new DOMParser().parseFromString(text, 'text/xml'));

    const result = data?.response[0]?.body[0]?.items[0]?.item[0];

    if(!result) return message.error('데이터가 존재하지않습니다');

    console.log(result?.solYear[0]);

    return {
        year: result?.solYear[0]?._text,
        month: result?.solMonth[0]?._text,
        day: result?.solDay[0]?._text,
        type: 'solar'
    };
}

export default api