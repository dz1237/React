import Mock from 'mockjs'
Mock.setup({ timeout: 4000 });
Mock.mock('data.php', 'post', function (options) {
    // let name = decodeURI(options.body.split("&")[0].split("=")[1]);
    // let age = options.body.split("&")[1].split("=")[1];
    let params = new URLSearchParams(options.body);
    let name = params.get("name");
    let age = params.get("age")

    return Mock.mock({
        "data|1-6": [{
            'id|+1': 88,
            'name|1': [name, "tom", "jarray", "susan"],
            'age|1': [age, 17, 18, 19],
            'sex|1': ["男", "女"]
        }]
    })
})