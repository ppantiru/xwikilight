const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto('xwiki', 'xwiki', 'xwiki', {
    host: 'localhost',
    dialect: 'mysql',
    directory: './models', // where to write files
    port: '3306',
    caseModel: 'c', // convert snake_case column names to camelCase field names: user_id -> userId
    caseFile: 'c', // file names created for each model use camelCase.js not snake_case.js
    singularize: true, // convert plural table names to singular model names
    additional: {
        timestamps: false
        // ...options added to each model
    },
    tables: ['activitystream_events', 'activitystream_events_status', 'activitystream_events_targets', 'feeds_aggregatorgroup', 'feeds_aggregatorurl', 'feeds_aggregatorurlgroups', 'feeds_feedentry', 'feeds_feedentrytags', 'feeds_keyword', 'mailsender_events', 'notification_filter_prefs', 'xwikiattachment',  'xwikiattachment_archive', 'xwikiattachment_content', 'xwikiattrecyclebin', 'xwikicomments', 'xwikidates', 'xwikidbversion', 'xwikidoc', 'xwikidoubles', 'xwikifloats', 'xwikiid', 'xwikiintegers', 'xwikilargestrings', 'xwikilinks', 'xwikilistitems', 'xwikilists', 'xwikilock', 'xwikilongs', 'xwikiobjects', 'xwikipreferences', 'xwikiproperties', 'xwikircs', 'xwikirecyclebin', 'xwikispace', 'xwikistatsdoc', 'xwikistatsreferer', 'xwikistatsvisit', 'xwikistrings'] // use all tables, if omitted
    //...
})

auto.run().then(data => {
  console.log(data.tables);      // table and field list
  console.log(data.foreignKeys); // table foreign key list
  console.log(data.indexes);     // table indexes
  console.log(data.hasTriggerTables); // tables that have triggers
  console.log(data.relations);   // relationships between models
  console.log(data.text)         // text of generated models
});
