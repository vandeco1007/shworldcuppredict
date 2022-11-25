const { translate } = require('free-translate');

module.exports = (text)=>{
  return translate(text, { from: 'en', to: 'vi' });
}