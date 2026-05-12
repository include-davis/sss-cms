const { ContentType, FieldType } = require('@include/hearth');

const apollo = new ContentType({
  name: 'apollo',
  singularDisplayName: 'Sponsors: Apollo 11',
  pluralDisplayName: 'Sponsors: Apollo 11',
});

apollo
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

module.exports = apollo;
