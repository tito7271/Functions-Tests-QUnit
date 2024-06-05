const { isEven } = require('./test_functions')

QUnit.module('isEven function tests', () => {
    QUnit.test('Even number is given as parameter', function(assert) {
        assert.ok(isEven(6), 'Even number is given as parameter')
    })

    QUnit.test('Odd number', function(assert) {
        assert.notOk(isEven(1), 'Odd number')
    })

    QUnit.test('Zero number', function(assert) {
        assert.ok(isEven(0), 'Zero number')
    })

    QUnit.test('Negative even number', function(assert) {
        assert.ok(isEven(-6), 'Negative even number')
    })

    QUnit.test('Negative odd number', function(assert) {
        assert.notOk(isEven(-1), 'Negative odd number')
    })
})