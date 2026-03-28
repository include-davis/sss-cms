const { ContentType, FieldType } = require('@include/hearth');

const voyager = new ContentType({
  name: 'voyager',
  singularDisplayName: 'Sponsors: Voyager I',
  pluralDisplayName: 'Sponsors: Voyager I',
});

voyager
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
    required: true,
  });

module.exports = voyager;
