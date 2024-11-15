const _storeTemlate = {};
const loadTemplate = function (tmpl, vals) {
  if (!_storeTemlate[tmpl]) {
    _storeTemlate[tmpl] = document.getElementById(tmpl).innerHTML.split("}}");
  }
  var response = "";

  // loop each line... skip last.
  var i = 0;
  for (; i < _storeTemlate[tmpl].length - 1; ++i) {
    var listLine = _storeTemlate[tmpl][i].split("{{");
    response += listLine[0];
    if (vals[listLine[1]] !== undefined)
      response += vals[listLine[1]];
  }

  return response + _storeTemlate[tmpl][i];
};

export { loadTemplate };