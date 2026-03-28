const { ContentType, FieldType } = require('@include/hearth');

const opportunity = new ContentType({
  name: 'opportunity',
  singularDisplayName: 'Sponsors: Opportunity',
  pluralDisplayName: 'Sponsors: Opportunity',
});

opportunity.createField({
  name: 'name',
  displayName: 'Name',
  type: FieldType.SHORT_TEXT,
  required: true,
});

module.exports = opportunity;
