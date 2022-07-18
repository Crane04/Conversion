let Info=document.getElementById("info")
let Final=document.getElementById('final')
let Unit=document.getElementById('unit')
let UnitEl=document.getElementById('iniunit')
let Ttk=false
let Dtk=false
let Dtp=false
let Dtt=false
let Dtg=false
let Dto=false
let Otk=false
let Otp=false
let Ott=false
let Otg=false
let Otd=false
let Ttd=false
let Ttg=false
let Tto=false
let Ttp=false
let Ptd=false
let Ptg=false
let Ptt=false
let Pto=false
let Ptk=false
let Ktd=false
let Kto=false
let Ktl=false
let Ktg=false
let Ktt=false
 Initial=parseFloat(document.getElementById("initial").value)
//let InitialEl=document.getElementById("initial")
function convo(){

let Initial=parseFloat(document.getElementById("initial").value)

let Final=document.getElementById('final')
    if(Kto){    
    Final.value=Initial*35.27
    }else if(Ktl){
    Final.value=Initial*2.205
    }else if (Ktt){
    Final.value=Initial*0.001
    }else if(Ktg){
    Final.value=Initial*15432.36
    }else if(Ktd){
    Final.value=Initial*546.38
    }else if(Ptk){
    Final.value=Initial/2.205
    }else if(Ptt){
    Final.value=Initial*0.001/2.2025
    }else if(Pto){
    Final.value=Initial*25.27/2.205
    }else if(Ptg){
    Final.value=Initial*15432.36/2.205
    }else if(Ptd){
    Final.value=Initial*546.38/2.205
    }else if(Ttk){
    Final.value=Initial*1000
    }else if(Ttp){
    Final.value=Initial*2205
    }else if(Tto){
    Final.value=Initial*25270
    }else if(Ttg){
    Final.value=Initial*15432358.4
    }else if(Ttd){
    Final.value=Initial*564381.8
    }else if(Otk){
    Final.value=Initial*0.0283
    }else if(Otp){
    Final.value=Initial*0.0625
    }else if(Ott){
    Final.value=Initial*2.835*10**-5
    }else if(Otg){
    Final.value=Initial*437.5
    }else if(Otd){
    Final.value=Initial*16
    }else if(Dtk){
    Final.value=Initial*0.00177185
    }else if(Dtp){
    Final.value=Initial*0.00390626
    }else if(Dtt){
    Final.value=Initial*1.7719*10**-6
    }else if(Dtg){
    Final.value=Initial*27.344
    }else if(Dto) {
    Final.value=Initial*0.0625002
    }
}

function dtk(){
    Info.innerText="Drams to Kilogram"
    Unit.innerText="Kg"
    UnitEl.innerText="dr"
    Dtk=true
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0  
}
function dtp(){
    Info.innerText="Drams to Pounds"
    Unit.innerText="oz"
    UnitEl.innerText="dr"
    Dtp=true
    Dtk=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0  
}
function dtt(){
    Info.innerText="Drams to Tonnes"
    Unit.innerText="t"
    UnitEl.innerText="dr"
    Dtt=true
    Dtp=false
    Dtk=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0  
}
function dtg(){
    Info.innerText="Drams to Grains"
    Unit.innerText="gr"
    UnitEl.innerText="dr"
    Dtg=true
    Dtp=false
    Dtt=false
    Dtk=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0  
}
function dto(){
    Info.innerText="Drams to Ounces"
    Unit.innerText="oz"
    UnitEl.innerText="dr"
    Dto=true
    Dtp=false
    Dtt=false
    Dtg=false
    Dtk=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0  
}
function otk(){
    Info.innerText="Ounces to Kilogram"
    Unit.innerText="Kg"
    UnitEl.innerText="oz"
    Otk=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0  
}
function otp(){
    Info.innerText="Ounces to Pounds"
    Unit.innerText="lbs"
    UnitEl.innerText="oz"
    Otp=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0  
}
function ott(){
    Info.innerText="Ounces to Tonnes"
    Unit.innerText="t"
    UnitEl.innerText="oz"
    Ott=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otp=false
    Otk=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0  
}
function otg(){
    Info.innerText="Ounces to Grains"
    Unit.innerText="gr"
    UnitEl.innerText="oz"
    Otg=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otp=false
    Ott=false
    Otk=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0  
}
function otd(){
    Info.innerText="Ounces to Drams"
    Unit.innerText="dr"
    UnitEl.innerText="oz"
    Otd=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otp=false
    Ott=false
    Otg=false
    Otk=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0  
}
function ttd(){
    Info.innerText="Tonnes to Drams"
    Unit.innerText="dr"
    UnitEl.innerText="t"
    Ttd=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0
}
function ttg(){
    Info.innerText="Tonnes to Grains"
    Unit.innerText="gr"
    UnitEl.innerText="t"
    Ttg=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0
}
function tto(){
    Info.innerText="Tonnes to Ounces"
    Unit.innerText="oz"
    UnitEl.innerText="t"
    Tto=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0
}
function ttp(){
    Info.innerText="Tonnes to Pounds"
    Unit.innerText="lbs"
    UnitEl.innerText="t"
    Ttp=true
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttg=false
    Ttd=false
    Tto=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0
}
function ttk(){
    Info.innerText="Tonnes to Kilogram"
    Unit.innerText="Kg"
    UnitEl.innerText="t"
    Ttk=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0
}
function ptd(){
    Info.innerText="Pounds to Dram"
    Unit.innerText="dr"
    UnitEl.innerText="lbs"
    Ptd=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0
}
function ptg(){
    Info.innerText="Pounds to Grains"
    Unit.innerText="gr"
    UnitEl.innerText="lbs"
    Ptg=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0
}
function pto(){
    Info.innerText="Pounds to Ounces"
    Unit.innerText="oz"
    UnitEl.innerText="lbs"
    Pto=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Ptt=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0
}
function ptt(){
    Info.innerText="Pounds to Tonnes"
    Unit.innerText="t"
    UnitEl.innerText="lbs"
    Ptt=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptk=false
    Ktd=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0
}
function ptk(){
    Info.innerText="Pounds to Kilogram"
    Unit.innerText="Kg"
    UnitEl.innerText="lbs"
    Ptk=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ktd=false
    Ptt=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0
    }
function ktd(){
    Info.innerText="Kilogram to Dram"
    Unit.innerText="dr"
    UnitEl.innerText="Kg"
    Ktd=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Ttp=false
    Tto=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptk=false
    Ptt=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktt=false
    Final.value=0
} 
function ktg(){
    Info.innerText="Kilogram to Grains"
    UnitEl.innerText="Kg"
    Unit.innerText="gr"
    Ktg=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Kto=false
    Ktl=false
    Ktt=false
    Ktd=false
    Final.value=0
} 
function kto(){
    Info.innerText="Kilogram to Ounces" 
    Unit.innerText="oz"
    UnitEl.innerText="Kg"
    Kto=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktg=false
    Ktl=false
    Ktt=false
    Ktd=false
    Final.value=0
}
function ktt(){
    Info.innerText="Kilogram to Tonnes" 
    Unit.innerText="t"
    UnitEl.innerText="Kg"
    Ktt=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktg=false
    Kto=false
    Ktl=false
    Ktd=false
    Final.value=0
    
}

 function ktl(){
    Info.innerText="Kilogram to Pounds" 
    Unit.innerText="lbs"
    UnitEl.innerText="Kg"
    Ktl=true
    Dtk=false
    Dtp=false
    Dtt=false
    Dtg=false
    Dto=false
    Otk=false
    Otp=false
    Ott=false
    Otg=false
    Otd=false
    Ttd=false
    Ttg=false
    Tto=false
    Ttp=false
    Ttk=false
    Ptd=false
    Ptg=false
    Pto=false
    Ptt=false
    Ptk=false
    Ktg=false
    Ktt=false
    Ktd=false
    Kto=false
    Final.value=0
    
}




let Info2=document.getElementById("info2")
let Final2=document.getElementById('final2')
let Unit2=document.getElementById('unit2')
let UnitEl2=document.getElementById('iniunit2')
let Mty=false
let  Mtmi=false
let Mti=false
let    Mtf=false
let    Ytm=false
let    Ytmi=false
let    Yti=false
let    Ytf=false
let    Mity=false
let    Mitm=false
let    Miti=false
let    Mitf=false
let   Ity=false
let    Itmi=false
let    Itm=false
let   Itf=false
let    Fty=false
let   Ftmi=false
let    Fti=false
let    Ftm=false
 Initial2=parseFloat(document.getElementById("initial2").value)
//let InitialEl=document.getElementById("initial")
function convo2(){

let Initial2=parseFloat(document.getElementById("initial2").value)

let Final2=document.getElementById('final2')
    if(Mty){    
    Final2.value=Initial2*1.094
    }else if(Mtmi){
    Final2.value=Initial2*0.000621
    }else if (Mti){
    Final2.value=Initial2*39.37
    }else if(Mtf){
    Final2.value=Initial2*3.281
    }else if(Ytm){
    Final2.value=Initial2*0.9144
    }else if(Ytmi){
    Final2.value=Initial2*0.000568
    }else if(Yti){
    Final2.value=Initial2*36
    }else if(Ytf){
    Final2.value=Initial2*3
    }else if(Mity){
    Final2.value=Initial2*1769
    }else if(Mitm){
    Final2.value=Initial2*1609.344
    }else if(Miti){
    Final2.value=Initial2*63360
    }else if(Mitf){
    Final2.value=Initial2*5280
    }else if(Ity){
    Final2.value=Initial2*0.02778
    }else if(Itmi){
    Final2.value=Initial2*0.0000158
    }else if(Itm){
    Final2.value=Initial2*0.0254
    }else if(Itf){
    Final2.value=Initial2*0.0833
    }else if(Fty){
    Final2.value=Initial2*0.3333
    }else if(Ftmi){
    Final2.value=Initial*0.0001894
    }else if(Fti){
    Final2.value=Initial*12
    }else if(Ftm){
    Final2.value=Initial2*0.3048
    }
}

function mty(){
    Info2.innerText="Meter to Yards"
    Unit2.innerText="yd"
    UnitEl2.innerText="m"
    Mty=true
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }
function mtmi(){
    Info2.innerText="Meter to Miles"
    Unit2.innerText="mi"
    UnitEl2.innerText="m"
    Mty=false
    Mtmi=true
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }
function mti(){
    Info2.innerText="Meter to Inch"
    Unit2.innerText="in"
    UnitEl2.innerText="m"
    Mty=false
    Mtmi=false
    Mti=true
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }
function mtf(){
    Info2.innerText="Meter to Foot"
    Unit2.innerText="ft"
    UnitEl2.innerText="m"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=true
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }

function ytm(){
    Info2.innerText="Yards to Meters"
    Unit2.innerText="m"
    UnitEl2.innerText="yd"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=true
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }

function ytmi(){
    Info2.innerText="Yards to Miles"
    Unit2.innerText="mi"
    UnitEl2.innerText="yd"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=true
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }

function yti(){
    Info2.innerText="Yards Inches"
    Unit2.innerText="in"
    UnitEl2.innerText="yd"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=true
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }

function ytf(){
    Info2.innerText="Yards to foot"
    Unit2.innerText="ft"
    UnitEl2.innerText="yd"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=true
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }

function mity(){
    Info2.innerText="Miles to Yard"
    Unit2.innerText="yd"
    UnitEl2.innerText="mi"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=true
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }

function mitm(){
    Info2.innerText="Miles to Meter"
    Unit2.innerText="m"
    UnitEl2.innerText="mi"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=true
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }

function miti(){
    Info2.innerText="Miles to Inch"
    Unit2.innerText="in"
    UnitEl2.innerText="mi"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=true
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }

function mitf(){
    Info2.innerText="Miles to foot"
    Unit2.innerText="ft"
    UnitEl2.innerText="mi"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=true
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }

function ity(){
    Info2.innerText="Inches to Yards"
    Unit2.innerText="yd"
    UnitEl2.innerText="in"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=true
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }

function itmi(){
    Info2.innerText="Inch to Miles"
    Unit2.innerText="mi"
    UnitEl2.innerText="in"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=true
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }

function itm(){
    Info2.innerText="Inch to meter"
    Unit2.innerText="m"
    UnitEl2.innerText="in"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=true
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }

function itf(){
    Info2.innerText="Inch to Foot"
    Unit2.innerText="ft"
    UnitEl2.innerText="in"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=true
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }

function fty(){
    Info2.innerText="Foot to Yard"
    Unit2.innerText="yd"
    UnitEl2.innerText="ft"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=true
    Ftmi=false
    Fti=false
    Ftm=false
    Final2.value=0
    }
    function ftmi(){
    Info2.innerText="Foot to Miles"
    Unit2.innerText="yd"
    UnitEl2.innerText="m"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=true
    Fti=false
    Ftm=false
    Final2.value=0
    }
function fti(){
    Info2.innerText="Foot to Inch"
    Unit2.innerText="in"
    UnitEl2.innerText="ft"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=true
    Ftm=false
    Final2.value=0
    }
function ftm(){
    Info2.innerText="Feet to Meter"
    Unit2.innerText="m"
    UnitEl2.innerText="ft"
    Mty=false
    Mtmi=false
    Mti=false
    Mtf=false
    Ytm=false
    Ytmi=false
    Yti=false
    Ytf=false
    Mity=false
    Mitm=false
    Miti=false
    Mitf=false
    Ity=false
    Itmi=false
    Itm=false
    Itf=false
    Fty=false
    Ftmi=false
    Fti=false
    Ftm=true
    Final2.value=0
    }





let Info3=document.getElementById("info3")
let Final3=document.getElementById('final3')
let Unit3=document.getElementById('unit3')
let UnitEl3=document.getElementById('iniunit3')

let Dtr=false
let Dtgl=false
let Rtd=false
let Rtg=false
let Gtd=false
let Gtr=false

 Initial3=parseFloat(document.getElementById("initial3").value)
//let InitialEl=document.getElementById("initial")
function convo3(){

let Initial3=parseFloat(document.getElementById("initial3").value)

let Final3=document.getElementById('final3')
    if(Dtr){    
    Final3.value=Initial3*0.01745
    }else if(Dtgl){
    Final3.value=Initial3*1.11111
    }else if (Rtd){
    Final3.value=Initial3*57.296
    }else if(Rtg){
    Final3.value=Initial3*63.662
    }else if (Gtd){
    Final3.value=Initial3*0.9
    }
    else if (Gtr){
    Final3.value=Initial3*0.0157
    }
  }
    
function dtr(){
    Info3.innerText="Degree to Radian"
    Unit3.innerText="rad"
    UnitEl3.innerText="°"
    Dtr=true
    Dtgl=false
    Rtd=false
    Rtg=false
    Gtd=false
    Gtr=false
}

function dtgl(){
    Info3.innerText="Degree to Gradian"
    Unit3.innerText="grad"
    UnitEl3.innerText="°"
    Dtgl=true
    Dtr=false
    Rtd=false
    Rtg=false
    Gtd=false
    Gtr=false
}

function rtd(){
    Info3.innerText="Radian to Degree"
    Unit3.innerText="°"
    UnitEl3.innerText="rad"
    Dtr=false
    Dtgl=false
    Rtd=true
    Ttg=false
    Gtd=false
    Gtr=false
}

function rtg(){
    Info3.innerText="Radian to Gradian"
    Unit3.innerText="grad"
    UnitEl3.innerText="rad"
    Dtr=false
    Dtgl=false
    Rtg=true
    Rtd=false
    Gtd=false
    Gtr=false
}

function gtd(){
    Info3.innerText="Gradian to Degree"
    Unit3.innerText="°"
    UnitEl3.innerText="grad"
    Dtr=false
    Dtgl=false
    Rtd=false
    Rtg=false
    Gtd=true
    Gtr=false
}

function gtr(){
    Info3.innerText="Gradian to Radian"
    Unit3.innerText="rad"
    UnitEl3.innerText="grad"
    Dtr=false
    Dtgl=false
    Rtd=false
    Rtg=false
    Gtr=true
    Gtd=false
}


