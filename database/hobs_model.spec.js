const db = require('../database/dbConfig');
const Hobbits = require('../database/hobs_model');

describe('hobbits model', () => {
  beforeEach(async () => {
    await db('hobbits').truncate();
  });

  describe('insert function ', () => {
    it('inserts hobbits  into the database', async () => {
      let hobbitsNumber;
      hobbitsNumber = await db('hobbits');
      expect(hobbitsNumber).toHaveLength(0);
      await Hobbits.insert({ name: 'Gaffer' });
      await Hobbits.insert({ name: 'Pippin' });
      hobbitsNumber = await db('hobbits');
      expect(hobbitsNumber).toHaveLength(2);
    });

    it('inserts the provided hobbit into the database ', async () => {
      let hobbit = await Hobbits.insert({ name: 'Elwin' });
      expect(hobbit.name).toBe('Elwin');
    });
  });

  describe('delete function', () => {
    it('should delete a hobbit from the database', async () => {
      let deleteHobbit;
      deleteHobbit = await db('hobbits');
      await Hobbits.remove({ name: 'Gaffer' });
      expect(deleteHobbit).toHaveLength(0);
    });
  });
});
