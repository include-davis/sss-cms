const { ContentType, FieldType } = require('@include/hearth');

const leadership = new ContentType({
  name: 'leadership',
  singularDisplayName: 'Teams: Executive Leadership',
  pluralDisplayName: 'Teams: Executive Leadership',
});

leadership
  .createField({
    name: 'photo',
    displayName: 'Photo',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'name',
    displayName: 'Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'title',
    displayName: 'Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'study',
    displayName: 'Major/Study',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'email',
    displayName: 'Email',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = leadership;
