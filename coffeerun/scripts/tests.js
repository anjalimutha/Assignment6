var ds = new App.DataStore();

QUnit.test('hello test', function(assert) {
    assert.ok(1 == '1', 'Passed!');
});

QUnit.test('add ok test', function(assert) {
    assert.equal(Object.keys(ds.getAll()).length, 0, 'Passed!');
    ds.add('m@bond.com', 'tea');
    assert.equal(Object.keys(ds.getAll()).length, 1, 'Passed!');
    assert.ok(Object.keys(ds.getAll()).length, 1, 'Passed!');
});

QUnit.test('addAll ok test', function(assert) {
    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');

    var obj = {
        'm@bond.com': 'tea',
        'james@bond.com': 'eshpressho'
    };
    assert.deepEqual(ds.getAll(), obj, 'Passed!');
    assert.equal(Object.keys(ds.getAll()).length, 2, 'Passed!');
    assert.ok(Object.keys(ds.getAll()).length, 2, 'Passed!');
});

QUnit.test('remove ok test', function(assert) {
    ds.remove('james@bond.com');
    assert.ok(ds.data, ds.getAll(), 'Passed!');
    assert.equal(ds.data, ds.getAll(), 'Passed!');
});

QUnit.test('get ok test', function(assert) {
    assert.ok(ds.get('m@bond.com'), 'tea', 'Passed!');
    assert.equal(ds.get('m@bond.com'), 'tea', 'Passed!');
    assert.strictEqual(ds.get('m@bond.com'), 'tea', 'Passed!');
});

// QUnit test functions for Truck DataStore
QUnit.test('createOrderTest ok test', function(assert) {
    var order = {
        emailAddress: 'anjali@gmail.com',
        coffee: 'decaf'
    };
    assert.deepEqual(myTruck.createOrderTest(order), order, 'Passed!');
});

QUnit.test('printOrdersTest ok test', function(assert) {
    assert.equal(myTruck.printOrdersTest(), Object.keys(myTruck.db.data).length, 'Passed!');
});

QUnit.test('printOrdersTest ok test', function(assert) {
    assert.equal(myTruck.deliverOrderTest('anjali@gmail.com'), undefined, 'Passed!');
});


/*
  What problem do you run into when you attempt to convert the code in Figure 8.32 into QUnit tests for Truck?
  The functions that we created do not have return type and thus "undefined" is returned by default which fails the test case.
  */
