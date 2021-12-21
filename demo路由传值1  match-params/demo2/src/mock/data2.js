import Mock from 'mockjs';
Mock.setup({ timeout: 4000 })
Mock.mock('data2.php', 'get', function (options) {
    return Mock.mock({
        "data|1-6": [{
            'prodId|+1': 88,
            'prodName|1': ['手机', '电脑', '钱包'],
            'price|1': [1000, 5000, 1200]
        }]
    })
})