var DataTypes = require("sequelize").DataTypes;
var _activitystream_events = require("./activitystream_events");
var _activitystream_events_status = require("./activitystream_events_status");
var _activitystream_events_targets = require("./activitystream_events_targets");
var _feeds_aggregatorgroup = require("./feeds_aggregatorgroup");
var _feeds_aggregatorurl = require("./feeds_aggregatorurl");
var _feeds_aggregatorurlgroups = require("./feeds_aggregatorurlgroups");
var _feeds_feedentry = require("./feeds_feedentry");
var _feeds_feedentrytags = require("./feeds_feedentrytags");
var _feeds_keyword = require("./feeds_keyword");
var _mailsender_events = require("./mailsender_events");
var _notification_filter_prefs = require("./notification_filter_prefs");
var _xwikiattachment = require("./xwikiattachment");
var _xwikiattachment_archive = require("./xwikiattachment_archive");
var _xwikiattachment_content = require("./xwikiattachment_content");
var _xwikiattrecyclebin = require("./xwikiattrecyclebin");
var _xwikicomments = require("./xwikicomments");
var _xwikidates = require("./xwikidates");
var _xwikidbversion = require("./xwikidbversion");
var _xwikidoc = require("./xwikidoc");
var _xwikidoubles = require("./xwikidoubles");
var _xwikifloats = require("./xwikifloats");
var _xwikiid = require("./xwikiid");
var _xwikiintegers = require("./xwikiintegers");
var _xwikilargestrings = require("./xwikilargestrings");
var _xwikilinks = require("./xwikilinks");
var _xwikilistitems = require("./xwikilistitems");
var _xwikilists = require("./xwikilists");
var _xwikilock = require("./xwikilock");
var _xwikilongs = require("./xwikilongs");
var _xwikiobjects = require("./xwikiobjects");
var _xwikipreferences = require("./xwikipreferences");
var _xwikiproperties = require("./xwikiproperties");
var _xwikircs = require("./xwikircs");
var _xwikirecyclebin = require("./xwikirecyclebin");
var _xwikispace = require("./xwikispace");
var _xwikistatsdoc = require("./xwikistatsdoc");
var _xwikistatsreferer = require("./xwikistatsreferer");
var _xwikistatsvisit = require("./xwikistatsvisit");
var _xwikistrings = require("./xwikistrings");

function initModels(sequelize) {
  var activitystream_events = _activitystream_events(sequelize, DataTypes);
  var activitystream_events_status = _activitystream_events_status(sequelize, DataTypes);
  var activitystream_events_targets = _activitystream_events_targets(sequelize, DataTypes);
  var feeds_aggregatorgroup = _feeds_aggregatorgroup(sequelize, DataTypes);
  var feeds_aggregatorurl = _feeds_aggregatorurl(sequelize, DataTypes);
  var feeds_aggregatorurlgroups = _feeds_aggregatorurlgroups(sequelize, DataTypes);
  var feeds_feedentry = _feeds_feedentry(sequelize, DataTypes);
  var feeds_feedentrytags = _feeds_feedentrytags(sequelize, DataTypes);
  var feeds_keyword = _feeds_keyword(sequelize, DataTypes);
  var mailsender_events = _mailsender_events(sequelize, DataTypes);
  var notification_filter_prefs = _notification_filter_prefs(sequelize, DataTypes);
  var xwikiattachment = _xwikiattachment(sequelize, DataTypes);
  var xwikiattachment_archive = _xwikiattachment_archive(sequelize, DataTypes);
  var xwikiattachment_content = _xwikiattachment_content(sequelize, DataTypes);
  var xwikiattrecyclebin = _xwikiattrecyclebin(sequelize, DataTypes);
  var xwikicomments = _xwikicomments(sequelize, DataTypes);
  var xwikidates = _xwikidates(sequelize, DataTypes);
  var xwikidbversion = _xwikidbversion(sequelize, DataTypes);
  var xwikidoc = _xwikidoc(sequelize, DataTypes);
  var xwikidoubles = _xwikidoubles(sequelize, DataTypes);
  var xwikifloats = _xwikifloats(sequelize, DataTypes);
  var xwikiid = _xwikiid(sequelize, DataTypes);
  var xwikiintegers = _xwikiintegers(sequelize, DataTypes);
  var xwikilargestrings = _xwikilargestrings(sequelize, DataTypes);
  var xwikilinks = _xwikilinks(sequelize, DataTypes);
  var xwikilistitems = _xwikilistitems(sequelize, DataTypes);
  var xwikilists = _xwikilists(sequelize, DataTypes);
  var xwikilock = _xwikilock(sequelize, DataTypes);
  var xwikilongs = _xwikilongs(sequelize, DataTypes);
  var xwikiobjects = _xwikiobjects(sequelize, DataTypes);
  var xwikipreferences = _xwikipreferences(sequelize, DataTypes);
  var xwikiproperties = _xwikiproperties(sequelize, DataTypes);
  var xwikircs = _xwikircs(sequelize, DataTypes);
  var xwikirecyclebin = _xwikirecyclebin(sequelize, DataTypes);
  var xwikispace = _xwikispace(sequelize, DataTypes);
  var xwikistatsdoc = _xwikistatsdoc(sequelize, DataTypes);
  var xwikistatsreferer = _xwikistatsreferer(sequelize, DataTypes);
  var xwikistatsvisit = _xwikistatsvisit(sequelize, DataTypes);
  var xwikistrings = _xwikistrings(sequelize, DataTypes);

  xwikilists.belongsToMany(xwikilists, { as: 'XWL_NAME_xwikilists', through: xwikilistitems, foreignKey: "XWL_ID", otherKey: "XWL_NAME" });
  xwikilists.belongsToMany(xwikilists, { as: 'XWL_ID_xwikilists', through: xwikilistitems, foreignKey: "XWL_NAME", otherKey: "XWL_ID" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWS_NAME_xwikiproperties', through: xwikidates, foreignKey: "XWS_ID", otherKey: "XWS_NAME" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWS_ID_xwikiproperties', through: xwikidates, foreignKey: "XWS_NAME", otherKey: "XWS_ID" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWD_NAME_xwikiproperties', through: xwikidoubles, foreignKey: "XWD_ID", otherKey: "XWD_NAME" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWD_ID_xwikiproperties', through: xwikidoubles, foreignKey: "XWD_NAME", otherKey: "XWD_ID" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWF_NAME_xwikiproperties', through: xwikifloats, foreignKey: "XWF_ID", otherKey: "XWF_NAME" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWF_ID_xwikiproperties', through: xwikifloats, foreignKey: "XWF_NAME", otherKey: "XWF_ID" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWI_NAME_xwikiproperties', through: xwikiintegers, foreignKey: "XWI_ID", otherKey: "XWI_NAME" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWI_ID_xwikiproperties', through: xwikiintegers, foreignKey: "XWI_NAME", otherKey: "XWI_ID" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWL_NAME_xwikiproperties', through: xwikilargestrings, foreignKey: "XWL_ID", otherKey: "XWL_NAME" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWL_ID_xwikiproperties', through: xwikilargestrings, foreignKey: "XWL_NAME", otherKey: "XWL_ID" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWL_NAME_xwikiproperties_xwikilists', through: xwikilists, foreignKey: "XWL_ID", otherKey: "XWL_NAME" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWL_ID_xwikiproperties_xwikilists', through: xwikilists, foreignKey: "XWL_NAME", otherKey: "XWL_ID" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWL_NAME_xwikiproperties_xwikilongs', through: xwikilongs, foreignKey: "XWL_ID", otherKey: "XWL_NAME" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWL_ID_xwikiproperties_xwikilongs', through: xwikilongs, foreignKey: "XWL_NAME", otherKey: "XWL_ID" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWS_NAME_xwikiproperties_xwikistrings', through: xwikistrings, foreignKey: "XWS_ID", otherKey: "XWS_NAME" });
  xwikiproperties.belongsToMany(xwikiproperties, { as: 'XWS_ID_xwikiproperties_xwikistrings', through: xwikistrings, foreignKey: "XWS_NAME", otherKey: "XWS_ID" });
  activitystream_events_status.belongsTo(activitystream_events, { as: "ases_event", foreignKey: "ases_eventid"});
  activitystream_events.hasMany(activitystream_events_status, { as: "activitystream_events_statuses", foreignKey: "ases_eventid"});
  activitystream_events_targets.belongsTo(activitystream_events, { as: "event", foreignKey: "eventId"});
  activitystream_events.hasMany(activitystream_events_targets, { as: "activitystream_events_targets", foreignKey: "eventId"});
  feeds_aggregatorurlgroups.belongsTo(feeds_aggregatorurl, { as: "agl", foreignKey: "agl_id"});
  feeds_aggregatorurl.hasMany(feeds_aggregatorurlgroups, { as: "feeds_aggregatorurlgroups", foreignKey: "agl_id"});
  feeds_feedentrytags.belongsTo(feeds_feedentry, { as: "fet", foreignKey: "fet_id"});
  feeds_feedentry.hasMany(feeds_feedentrytags, { as: "feeds_feedentrytags", foreignKey: "fet_id"});
  xwikilistitems.belongsTo(xwikilists, { as: "XWL", foreignKey: "XWL_ID"});
  xwikilists.hasMany(xwikilistitems, { as: "xwikilistitems", foreignKey: "XWL_ID"});
  xwikilistitems.belongsTo(xwikilists, { as: "XWL_NAME_xwikilist", foreignKey: "XWL_NAME"});
  xwikilists.hasMany(xwikilistitems, { as: "XWL_NAME_xwikilistitems", foreignKey: "XWL_NAME"});
  xwikidates.belongsTo(xwikiproperties, { as: "XW", foreignKey: "XWS_ID"});
  xwikiproperties.hasMany(xwikidates, { as: "xwikidates", foreignKey: "XWS_ID"});
  xwikidates.belongsTo(xwikiproperties, { as: "XWS_NAME_xwikiproperty", foreignKey: "XWS_NAME"});
  xwikiproperties.hasMany(xwikidates, { as: "XWS_NAME_xwikidates", foreignKey: "XWS_NAME"});
  xwikidoubles.belongsTo(xwikiproperties, { as: "XWD", foreignKey: "XWD_ID"});
  xwikiproperties.hasMany(xwikidoubles, { as: "xwikidoubles", foreignKey: "XWD_ID"});
  xwikidoubles.belongsTo(xwikiproperties, { as: "XWD_NAME_xwikiproperty", foreignKey: "XWD_NAME"});
  xwikiproperties.hasMany(xwikidoubles, { as: "XWD_NAME_xwikidoubles", foreignKey: "XWD_NAME"});
  xwikifloats.belongsTo(xwikiproperties, { as: "XWF", foreignKey: "XWF_ID"});
  xwikiproperties.hasMany(xwikifloats, { as: "xwikifloats", foreignKey: "XWF_ID"});
  xwikifloats.belongsTo(xwikiproperties, { as: "XWF_NAME_xwikiproperty", foreignKey: "XWF_NAME"});
  xwikiproperties.hasMany(xwikifloats, { as: "XWF_NAME_xwikifloats", foreignKey: "XWF_NAME"});
  xwikiintegers.belongsTo(xwikiproperties, { as: "XWI", foreignKey: "XWI_ID"});
  xwikiproperties.hasMany(xwikiintegers, { as: "xwikiintegers", foreignKey: "XWI_ID"});
  xwikiintegers.belongsTo(xwikiproperties, { as: "XWI_NAME_xwikiproperty", foreignKey: "XWI_NAME"});
  xwikiproperties.hasMany(xwikiintegers, { as: "XWI_NAME_xwikiintegers", foreignKey: "XWI_NAME"});
  xwikilargestrings.belongsTo(xwikiproperties, { as: "XWL", foreignKey: "XWL_ID"});
  xwikiproperties.hasMany(xwikilargestrings, { as: "xwikilargestrings", foreignKey: "XWL_ID"});
  xwikilargestrings.belongsTo(xwikiproperties, { as: "XWL_NAME_xwikiproperty", foreignKey: "XWL_NAME"});
  xwikiproperties.hasMany(xwikilargestrings, { as: "XWL_NAME_xwikilargestrings", foreignKey: "XWL_NAME"});
  xwikilists.belongsTo(xwikiproperties, { as: "XWL", foreignKey: "XWL_ID"});
  xwikiproperties.hasMany(xwikilists, { as: "xwikilists", foreignKey: "XWL_ID"});
  xwikilists.belongsTo(xwikiproperties, { as: "XWL_NAME_xwikiproperty", foreignKey: "XWL_NAME"});
  xwikiproperties.hasMany(xwikilists, { as: "XWL_NAME_xwikilists", foreignKey: "XWL_NAME"});
  xwikilongs.belongsTo(xwikiproperties, { as: "XWL", foreignKey: "XWL_ID"});
  xwikiproperties.hasMany(xwikilongs, { as: "xwikilongs", foreignKey: "XWL_ID"});
  xwikilongs.belongsTo(xwikiproperties, { as: "XWL_NAME_xwikiproperty", foreignKey: "XWL_NAME"});
  xwikiproperties.hasMany(xwikilongs, { as: "XWL_NAME_xwikilongs", foreignKey: "XWL_NAME"});
  xwikistrings.belongsTo(xwikiproperties, { as: "XW", foreignKey: "XWS_ID"});
  xwikiproperties.hasMany(xwikistrings, { as: "xwikistrings", foreignKey: "XWS_ID"});
  xwikistrings.belongsTo(xwikiproperties, { as: "XWS_NAME_xwikiproperty", foreignKey: "XWS_NAME"});
  xwikiproperties.hasMany(xwikistrings, { as: "XWS_NAME_xwikistrings", foreignKey: "XWS_NAME"});

  return {
    activitystream_events,
    activitystream_events_status,
    activitystream_events_targets,
    feeds_aggregatorgroup,
    feeds_aggregatorurl,
    feeds_aggregatorurlgroups,
    feeds_feedentry,
    feeds_feedentrytags,
    feeds_keyword,
    mailsender_events,
    notification_filter_prefs,
    xwikiattachment,
    xwikiattachment_archive,
    xwikiattachment_content,
    xwikiattrecyclebin,
    xwikicomments,
    xwikidates,
    xwikidbversion,
    xwikidoc,
    xwikidoubles,
    xwikifloats,
    xwikiid,
    xwikiintegers,
    xwikilargestrings,
    xwikilinks,
    xwikilistitems,
    xwikilists,
    xwikilock,
    xwikilongs,
    xwikiobjects,
    xwikipreferences,
    xwikiproperties,
    xwikircs,
    xwikirecyclebin,
    xwikispace,
    xwikistatsdoc,
    xwikistatsreferer,
    xwikistatsvisit,
    xwikistrings,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
