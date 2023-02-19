
let sk_list =["sk-javascript","sk-jquery","sk-d3js","sk-php","sk-python","sk-ga","sk-mysql","sk-linux","sk-proxmox","sk-docker","sk-omekas","sk-me"]
let rd_list = ["rd-ner","rd-dm","rd-db","rd-tm","rd-vis","rd-topic","rd-hlda","rd-lsa","rd-sna","rd-im","rd-me"]

let All_sk = {"wk_aiec":["sk-javascript","sk-d3js","sk-php","sk-python","sk-mysql","sk-linux","sk-proxmox","sk-docker","sk-omekas"],
              "wk_ssic":["sk-javascript","sk-d3js","sk-php","sk-python","sk-mysql","sk-linux","sk-proxmox","sk-omekas"],
              "wk_dlll":["sk-javascript","sk-python"],
              "wk_cy":["sk-me"],
              "ma_thesis":["sk-javascript","sk-jquery","sk-d3js","sk-python","sk-ga","sk-mysql","sk-linux","sk-proxmox"]}

let All_rd = {"wk_aiec":["rd-ner","rd-dm","rd-db","rd-tm","rd-vis"],
              "wk_ssic":["rd-ner","rd-dm","rd-db","rd-tm","rd-vis","rd-topic","rd-hlda","rd-im"],              
              "wk_dlll":["rd-dm"],
              "wk_cy":["rd-me"],
              "ma_thesis":["rd-ner","rd-dm","rd-tm","rd-vis","rd-topic","rd-hlda","rd-lsa"]}

let All_wk = ["wk_aiec","wk_ssic","wk_dlll","wk_cy","ma_thesis",]
let All_hyperlink =["wk_aiec_hy","wk_ssic_hy","wk_dlll_hy","wk_cy_hy","ma_thesis_hy"]


// TO DO:直接不包括的項目變灰即可
function highlight(elem){

    // 第0步:主項目之外變灰
    elem.style.color = "black";
    let _name=$(elem).attr("class");
    // console.log(_name);

    for(i=0;i<All_wk.length;i++){
        // console.log(All_wk[i])
        if (All_wk[i] !=_name){
            // console.log(All_wk[i])
            let aa = document.getElementById(All_wk[i]); 
            aa.style.color ="#DEDEDE";
        }
    }

    
    // 第1步:全部變灰
    for(i=0;i<sk_list.length;i++){
        let ff = document.getElementById(sk_list[i]);
        ff.style.color = "#DEDEDE";
    }
    for(i=0;i<rd_list.length;i++){
        let gg = document.getElementById(rd_list[i]);
        gg.style.color = "#DEDEDE";

    }
    
    

    // 第2步:有的項目變黑
    for(i=0;i<All_sk[_name].length;i++){
        // console.log(All_sk[_name][i]);
        let cc = document.getElementById(All_sk[_name][i]);
        cc.style.color = "black";
    }

    for(i=0;i<All_rd[_name].length;i++){
        let dd = document.getElementById(All_rd[_name][i]);
        dd.style.color = "black";
    }
    
    //第3步:處理hyperlink變色
    for(i=0;i<All_hyperlink.length;i++){
        // console.log(All_wk[i])
        if (All_hyperlink[i] !=_name+"_hy"){
            console.log(All_hyperlink[i]);
            let hy = document.getElementById(All_hyperlink[i]); 
            hy.style.color ="#DEDEDE";
        }
    }

    
}


function out(elem){
    for(i=0;i<All_wk.length;i++){
        let aa = document.getElementById(All_wk[i]);
        aa.style.color = "black";
    }

    for(i=0;i<sk_list.length;i++){
        let ff = document.getElementById(sk_list[i]);
        ff.style.color = "black";
    }

    for(i=0;i<rd_list.length;i++){
        let gg = document.getElementById(rd_list[i]);
        gg.style.color = "black";
    }
    // hyperlink
    for(i=0;i<All_hyperlink.length;i++){
        let hy = document.getElementById(All_hyperlink[i]);
        hy.style.color = "blue";
    }
    


}


