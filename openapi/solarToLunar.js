import xmlToJson from 'xmltojson'
import {message} from "ant-design-vue";
async function api (datetime) {

    const year = datetime.year();
    let month = datetime.format('MM'),
        day = datetime.format('DD');

    const urlParams = new URLSearchParams()
    urlParams.append('serviceKey', 'FCqO9G+VxdK8E6oVhEroS/OAjL0dSqM4W3kbXlKWosHhLFMKbHtA9mGTspn0Ii3o6qFgfQgOnzDaKAPjLKC4Xw==')
    urlParams.append('solYear', year);
    urlParams.append('solMonth', month);
    urlParams.append('solDay', day);

    const req = new Request(`http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo?${urlParams.toString()}`, {
        method: 'GET',
        redirect: 'follow',
    });

    const res = await fetch(req);
    const text = await res.text();
    const data = xmlToJson.parseXML(new DOMParser().parseFromString(text, 'text/xml'));

    const result = data?.response[0]?.body[0]?.items[0]?.item[0];

    if(!result) return message.error('데이터가 존재하지않습니다');

    return {
        year: result?.lunYear[0]?._text,
        month: result?.lunMonth[0]?._text,
        day: result?.lunDay[0]?._text,
        type: 'lunar'
    };
}

export default api