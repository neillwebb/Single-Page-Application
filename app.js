function showUI1(){
    $("#viewPage").removeClass("hide");
    $("#addPage").addClass("hide");
    // addClass hide to all other sections
};
function showUI2(){
    document.getElementsByClassName("ui1").style.display="none";
    document.getElementsByClassName("ui2").style.display="block";
    document.getElementsByClassName("ui3").style.display="none";
    document.getElementsByClassName("ui4").style.display="none";
    document.getElementsByClassName("ui5").style.display="none";
};
function showUI3(){
    document.getElementsByClassName("ui1").style.display="none";
    document.getElementsByClassName("ui2").style.display="none";
    document.getElementsByClassName("ui3").style.display="block";
    document.getElementsByClassName("ui4").style.display="none";
    document.getElementsByClassName("ui5").style.display="none";
};
function showUI4(){
    document.getElementsByClassName("ui1").style.display="none";
    document.getElementsByClassName("ui2").style.display="none";
    document.getElementsByClassName("ui3").style.display="none";
    document.getElementsByClassName("ui4").style.display="block";
    document.getElementsByClassName("ui5").style.display="none";
};
function showUI5(){
    document.getElementsByClassName("ui1").style.display="none";
    document.getElementsByClassName("ui2").style.display="none";
    document.getElementsByClassName("ui3").style.display="none";
    document.getElementsByClassName("ui4").style.display="none";
    document.getElementsByClassName("ui5").style.display="block";
}

$("#addBtn").on("click", showUI1);