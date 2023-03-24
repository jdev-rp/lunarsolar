async function api (datetime) {

    const year = datetime.year(),
          month = datetime.month(),
          day = datetime.date();

    const urlParams = new URLSearchParams()
    urlParams.append('serviceKey', 'FCqO9G+VxdK8E6oVhEroS/OAjL0dSqM4W3kbXlKWosHhLFMKbHtA9mGTspn0Ii3o6qFgfQgOnzDaKAPjLKC4Xw==')
    urlParams.append('solYear', year);
    urlParams.append('solMonth', year);
    urlParams.append('solDay', year);

    const req = new Request('http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService?' + urlParams.toString());

    await fetch(req)
        .then(res => {
            console.log(res);
        })
        .catch(err => {console.log(err);
        });
}

export default api;