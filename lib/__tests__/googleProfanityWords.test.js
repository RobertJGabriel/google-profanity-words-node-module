const profanity = require('../index.js');
const profanityList = require('../profanity.js');

describe('Google Profanity Tests', () => {
  it('Ensure profanity list is returned', () => {
    return expect(profanity.list()).toEqual(profanityList.profanity());
  });
});
