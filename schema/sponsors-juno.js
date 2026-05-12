const { ContentType, FieldType } = require('@include/hearth');

const juno = new ContentType({
  name: 'juno',
  singularDisplayName: 'Sponsors: Juno',
  pluralDisplayName: 'Sponsors: Juno',
});

juno
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

module.exports = juno;
