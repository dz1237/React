import Mock from 'mockjs'
// Mock.setup({ timeout: 4000 });
Mock.mock('data.php', 'post', function (options) {
    let name = JSON.parse(options.body).name;
    let age = JSON.parse(options.body).age
    return Mock.mock({
        "data|1-6": [{
            'id|+1': 10,
            'name|1': [name, "tom", "jarray", "susan"],
            'age|1': [age, 17, 18, 19],
            'sex|1': ["男", "女"]
        }]
    })
})