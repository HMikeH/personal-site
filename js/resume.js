
let sk_list =["sk-javascript","sk-jquery","sk-d3js","sk-php","sk-python","sk-ga","sk-mysql","sk-linux","sk-proxmox","sk-docker","sk-omekas"]
let rd_list = ["rd-ner","rd-dm","rd-db","rd-tm","rd-vis","rd-topic","rd-hlda","rd-lsa","rd-sna","rd-im"]

let All_sk = {"wk_aiec":["sk-javascript","sk-d3js","sk-php","sk-python","sk-mysql","sk-linux","sk-proxmox","sk-docker","sk-omekas"],
              "wk_ssic":["sk-javascript","sk-d3js","sk-php","sk-python","sk-mysql","sk-linux","sk-proxmox","sk-omekas"],
              "wk_dlll":["sk-javascript","sk-python"]}

let All_rd = {"wk_aiec":["rd-ner","rd-dm","rd-db","rd-tm","rd-vis"],
              "wk_ssic":["rd-ner","rd-dm","rd-db","rd-tm","rd-vis","rd-topic","rd-hlda","rd-im"],              
              "wk_dlll":["rd-dm"]}




function highlight(elem){
    let _sk_items = document.querySelector(".sk-items");
    _sk_items.style.color = "#DEDEDE";
    let _rd_items = document.querySelector(".rd-items");
    _rd_items.style.color = "#DEDEDE";

    // 尚未做其他wk的反灰
    // elem.style.color = "black";
    let _name=$(elem).attr("class");
    console.log(_name);

    for(i=0;i<All_sk[_name].length;i++){
        // console.log(All_sk[_name][i]);
        let cc = document.getElementById(All_sk[_name][i]);
        cc.style.color = "black";
    }

    for(i=0;i<All_rd[_name].length;i++){
        // console.log(All_sk[_name][i]);
        let dd = document.getElementById(All_rd[_name][i]);
        dd.style.color = "black";
    }
    
    
}

function out(elem){
    let _sk_items = document.querySelector(".sk-items");
    _sk_items.style.color = "black";
    let _rd_items = document.querySelector(".rd-items");
    _rd_items.style.color = "black";
    elem.style.color = "black";
}


