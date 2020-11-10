var assert = require('assert');
var rewire = require('rewire');

import { Dog } from '../lib/index';

describe('Dog', function() {
  describe('name', function() {
    it('should be Fido', function() {
      assert.strictEqual(Dog.name, "Fido");
    });
  });
});

describe('rewire', function() {
  describe('__get__', function() {
    it('should work with ES6 modules', function() {
      const appModule = rewire('../lib/index');
      const rewiredDog = appModule.__get__("Dog");

      assert.strictEqual(rewiredDog.name, "Fido");
    })
  });

  const mock = function() {
    return 'ima mock'
  };

  describe('__set__', function() {
    it('should work with ES6 modules', function() {
      const appModule = rewire('../lib/index');
      appModule.__set__("dependency", mock);
      
      assert.strictEqual(appModule.Dog.useDependency(), "ima mock");
    });

    it('should work with ES6 modules when we rename them', function() {
      const appModule = rewire('../lib/index');
      appModule.__set__("newDependency", mock);

      assert.strictEqual(appModule.Dog.useDependency(), "ima mock");
    });

    it('should work with ES6 modules if we use transpiled names', function() {
      const appModule = rewire('../lib/index');
      appModule.__set__("_dependency", mock);

      assert.strictEqual(appModule.Dog.useDependency(), "ima mock");
    })
  });
});
