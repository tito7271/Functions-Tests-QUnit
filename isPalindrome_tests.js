const { isPalindrome } = require('./test_functions')

QUnit.module('isPalindrome function tests', () => {
    QUnit.test('Single palindrome word', function(assert) {
        assert.ok(isPalindrome('racecar'), 'Single palindrome word')
    })

    QUnit.test('Multiple palindrome phrase with special characters', function(assert) {
        assert.ok(isPalindrome('A man, a plan, a canal, Panama!'), 'Multiple palindrome phrase with special characters')
    })

    QUnit.test('Non palindrome word', function(assert) {
        assert.notOk(isPalindrome('hello'), 'Non palindrome word')
    })

    QUnit.test('Empty string', function(assert) {
        assert.notOk(isPalindrome(''), 'Empty string')
    })
})