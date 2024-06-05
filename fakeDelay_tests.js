const { fakeDelay } = require('./async_test_functions')

QUnit.module('async fakeDelay function tests', () => {
    QUnit.test('test with 1000 milliseconds delay', async function(assert) {
        const start = Date.now()
        await fakeDelay(1000)
        const end = Date.now()
        const difference = end - start
        
        assert.ok(difference >= 1000, 'Delay is at least 1000 milliseconds')
    })
})