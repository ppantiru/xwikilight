const db = require('./connectDB');
const model = require('./models/init-models');
const fs = require('fs');
const xpath = require('xpath')
const dom = require('xmldom').DOMParser

async function getDocument (docFullName){
    try {
      const doc = model.initModels(db).xwikidoc.findOne({
        where: [
          {'XWD_FULLNAME': docFullName},
          {'XWD_TRANSLATION': '0'}
        ]
      });
      return doc;
    } catch (error) {
      return error;
    }
    //var string = JSON.stringify(doc);
    //var objectValue = JSON.parse(string);
  }

  const map = fs.readFileSync(__dirname + '/mapping/xwiki.hbm.xml', 'utf8').toString();
  const xml = new dom().parseFromString(map);
  const nodes = xpath.select("//class[@table='xwikidoc']/property[@name='fullName']/@column", xml);
  //console.log(nodes[0].value.toString());
  module.exports.getDocument = getDocument;