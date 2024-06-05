const { fetchData } = require('./async_test_functions')

QUnit.module('async fetchData function tests', () => {
    QUnit.test('async fetchData function test for Bulgarian post code', async function(assert) {
        const data = await fetchData('https://www.zippopotam.us/bg/8000')

        assert.ok(data.hasOwnProperty('post code'), "data contains 'post code'")
        assert.equal(data['post code'], '8000', 'post code is 8000')

        assert.ok(data.hasOwnProperty('country'), "data contains 'country'")
        assert.equal(data['country'], 'Bulgaria', 'country is Bulgaria')

        assert.ok(data.hasOwnProperty('country abbreviation'), "data contains 'country abbreviation'")
        assert.equal(data['country abbreviation'], 'BG', 'country abbreviation is BG')

        assert.ok(Array.isArray(data.places), 'place is an array')
        assert.equal(data.places.length, 1, 'places array has one element')

        const places = data.places[0]
        assert.ok(places.hasOwnProperty('place name'), "place contains 'place name'")
        assert.equal(places['place name'], 'Бургас / Burgas', 'place name is Бургас / Burgas')

        assert.ok(places.hasOwnProperty('longitude'), "place contains 'longitude'")
        assert.equal(places['longitude'], '27.4667', 'longitude is 27.4667')

        assert.ok(places.hasOwnProperty('state'), "place contains 'state'")
        assert.equal(places['state'], 'Бургас / Burgas', 'state is Бургас / Burgas')

        assert.ok(places.hasOwnProperty('state abbreviation'), "place contains 'state abbreviation'")
        assert.equal(places['state abbreviation'], 'BGS', 'state abbreviation is BGS')

        assert.ok(places.hasOwnProperty('latitude'), "place contains 'latitude'")
        assert.equal(places['latitude'], '42.5', 'latitude is 42.5')

    })

    QUnit.test('async fetchData function test for Bulgarian post code with unexisting post code', async function(assert) {
        const data = await fetchData('https://www.zippopotam.us/bg/8000999')

        assert.notOk(data)
        assert.true(data === undefined)
    })

    QUnit.test('async fetchData function test with unexisting url', async function(assert) {
        const data = await fetchData('https://wwww.zippopotam.us/bg/8000')

        assert.equal(data, 'fetch failed')
    })
})