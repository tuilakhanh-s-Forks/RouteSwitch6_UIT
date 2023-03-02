function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {
    if (_id == 2) {
        highlightedBtnSrc = ['media_10.3.4.4.png'];

        var imgElement = document.createElement("div");
        imgElement.style.cssText = "position:absolute;";
        imgElement.id = "domElement_img";
        imgElement.innerHTML = "<img id='imgHighlighted' alt='Figure one shows the output from the \"show license u. d. i.\" command on router one. Figure two shows a router with a pull out label displaying the u. d. i. and the p. i. d. for the router. Figure three is an interactive activity that allows the learner to practice displaying the u. d. i. for a router at the command line.' height='490' width='680' src=" + highlightedBtnSrc[0] + "></img>";
        console.log("created");
        $("#slide_2").append(imgElement);
        $("#imgHighlighted").css({
            'position': 'relative'

        });
    }
    var domElement = new createjs.DOMElement(htmlElement);

});
