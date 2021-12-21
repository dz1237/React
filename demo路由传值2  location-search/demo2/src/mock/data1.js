import Mock from 'mockjs'
// Mock.setup({ timeout: 4000 });
Mock.setup({ timeout: 1000 })
Mock.mock('data1.php', 'get', function (options) {
    return Mock.mock({
        "data|1-6": [{
            'id|+1': 10,
            'name|1': ["tom", "jarray", "susan"],
            'age|18-28': 0,
            'sex|1': ["男", "女"]
        }]
    })
})