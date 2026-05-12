const { ContentType, FieldType } = require('@include/hearth');

const sputnik = new ContentType({
  name: 'sputnik',
  singularDisplayName: 'Sponsors: Sputnik I',
  pluralDisplayName: 'Sponsors: Sputnik I',
});

sputnik
  .createField({
    name: 'name',
    displayName: 'Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'logo',
    displayName: 'Logo',
    type: FieldType.MEDIA_LIST,
    required: false,
  });

module.exports = sputnik;
