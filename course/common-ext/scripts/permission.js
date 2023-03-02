var permission = new function() {

  function setSession() {
    var current = new Date();
    var expires = new Date(current.getTime());
    expires.setDate(expires.getDate() + 1);
    document.cookie = "logincheck=" + current.getDate() + "; expires=" + expires.toUTCString() + "; path=/";
  }

  function checkSession(callback) {
    var value = document.cookie.replace(/(?:(?:^|.*;\s*)logincheck\s*\=\s*([^;]*).*$)|^.*$/, "$1") || null;
    if (value == (new Date()).getDate()) {
      callback(true);
      return;
    }
    callback(false);
  }

  function updateLoginLink(domain) {
    //
  }
  function mapURL(url) {
    return null;
  }
	var urls = new Array();
	urls[0] = "https://www.netacad.com/group/landing/learn?p_p_id=omni_WAR_omniportlet&p_p_lifecycle=2&p_p_state=maximized&_omni_WAR_omniportlet_action=crossDomainAuth&_omni_WAR_omniportlet_jspPage=%2Fteach%2Fcross_domain_auth.jsp";
	//skillzone
  urls[1] = "https://CiscoSkillZone.com/home?p_p_id=stellaclassicportlet_WAR_stellaclassicportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_cacheability=cacheLevelPage&p_p_col_id=column-1&p_p_col_count=1&p_p_resource_id=crossDomainAuth";
	urls[2] = "https://test.ciscoskillzone.com/home?p_p_id=stellaclassicportlet_WAR_stellaclassicportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_cacheability=cacheLevelPage&p_p_col_id=column-1&p_p_col_count=1&p_p_resource_id=crossDomainAuth";
	urls[3] = "https://skillzone.cisconetspace.com/home?p_p_id=stellaclassicportlet_WAR_stellaclassicportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_cacheability=cacheLevelPage&p_p_col_id=column-1&p_p_col_count=1&p_p_resource_id=crossDomainAuth";
	urls[4] = "https://liferay-test.ciscoskillzone.com/home?p_p_id=stellaclassicportlet_WAR_stellaclassicportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_cacheability=cacheLevelPage&p_p_col_id=column-1&p_p_col_count=1&p_p_resource_id=crossDomainAuth";
	// asterix
  urls[5] = "https://cisco-colleges.fr/group/landing/learn?p_p_id=omni_WAR_omniportlet&p_p_lifecycle=2&p_p_state=maximized&_omni_WAR_omniportlet_action=crossDomainAuth&_omni_WAR_omniportlet_jspPage=%2Fteach%2Fcross_domain_auth.jsp";
      
  var i = 0;

  function checkHostname(callback) {
    // WEF courses - launched from canvas but logged in from OKTA rather than liferay so we can't do a standard test
    try{
    var r = netacad.settings.get(netacad.settings.RETURN_KEY);
    var url = new netacad.net.URL(r);
    console.log("check WEF: "+url)
     if(url.authority.indexOf("568933118")>= 0){
      //  if return to class URL is from the WEF academy then ok
      console.log("from Okta")
        callback(true)
        return
      }
    }catch(e){
      //
    }
    //   end WEF 
    testURL(function(success){
    if(success){
      callback(true);
    }else{
      if(i<=4){
        i++;
        checkHostname(function(success){
          if (success){
            callback(true);
          }else{
            callback(false);  
          }
        });
      }else{
        callback(false);
      }
    }
  }, urls, i);
  }
  function testURL(callback, urls,i){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(event) {
      if (request.readyState == XMLHttpRequest.DONE) {
      if(request.status == 200){
		callback(true);
      }else{
		callback(false);
      }
    }
    };
    request.withCredentials = "true";
    request.open("GET", urls[i], true);
    request.send();
  }

  this.check = function(callback) {
    if (window.location.hostname == "static-course-assets.s3.amazonaws.com") {
     checkSession(function(success) {
        if (success) {
          callback(true);
        } else {
          checkHostname(function(success) {
            if (success) {
              setSession();
              callback(true);
            } else {
        document.body.innerHTML = document.body.innerHTML.replace('<a href="http://netacad.com">netacad.com</a>', 'your class');
              callback(false);
            }
          });
        }
      });
    } else {
      callback(true);
    }
  };
  
}();
