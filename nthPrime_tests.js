const { nthPrime } = require('./test_functions')

QUnit.module('nthPrime function tests', () => {
    QUnit.test('1th Prime number', function(assert) {
        assert.equal(nthPrime(1), 2, '1th Prime number')
    })

    QUnit.test('5th Prime number', function(assert) {
        assert.equal(nthPrime(5), 11, '5th Prime number')
    })

    QUnit.test('11th Prime number', function(assert) {
        assert.equal(nthPrime(11), 31, '11th Prime number')
    })
})