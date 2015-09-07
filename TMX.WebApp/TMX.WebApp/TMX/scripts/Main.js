function translate(text, scope) {
    if (scope.Dictionary == null) return text;
    var words = text.split(/[\s,:;]+/);
    for (var i = 0; i < words.length; i++) {
        if (typeof scope.Dictionary[words[i]] != undefined) {
           text =  text.replace(words[i], scope.Dictionary[words[i]]);
        }
    }
    return text;
}

function Init($scope, $http) {
    $scope.selectedTestAccount = null;
    $scope.LangList = [];
    $scope.Dictionary = null;
    getFromServerAndBind($scope, $http, "assets/resources/list-lang.json",setLang);
    $scope.updateLangDictionary = function () {
        getFromServerAndBind($scope, $http, "assets/resources/lang/locale-" + $scope.CurrentLang.value + ".json",setDictionary);
    }
}

function setDictionary(scope,result) {
    scope["Dictionary"] = result;
}

function setLang(scope,result) {
    scope["LangList"] = result;
    scope["CurrentLang"] = result[0];
    scope.updateLangDictionary();
}

function getFromServerAndBind(scope,http,file,final) {
    http(
      {
          method: 'GET',
          url: file,
      }
    ).success(function (result) {
        final(scope, result);
    });
}


