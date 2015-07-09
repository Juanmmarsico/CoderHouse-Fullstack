var cadenaOrArr = prompt("ingrese algo que invertir si quiere ingresar un arreglo use [] y separelos con ,");
var cadenaDef;
var i=0;
var comascant=0;
var invertidaS=" ";
var invertidaN=[];
var numero=0;

// definir que tipo de arreglo se le esta pasando 
	if(cadenaOrArr[0]=="["){
		i++;
		cadenaDef=[];
		while(cadenaOrArr[i]!="]" && i<cadenaOrArr.length){
		if(cadenaOrArr[i]==","){
			comascant++;
			i++;
			continue;
		}else{
			cadenaDef[i-comascant-1]=cadenaOrArr[i];
		}
		i++;
		}
	}
	else{
		cadenaDef="";
		while( i<cadenaOrArr.length){
		cadenaDef=cadenaDef+cadenaOrArr[i];
		i++;
		}	
	}	
	console.log(cadenaDef);

//invertir el arreglo
	if (typeof(cadenaDef)=== 'object'){
		for(numero = cadenaDef.length-1; numero>-1;numero--){
		// invertidaN[cadenaDef.length-numero-1] =cadenaDef[numero];
		invertidaN.push(cadenaDef[numero]);
	}
	console.log(invertidaN);

}else{
		for( numero = cadenaDef.length-1; numero>-1; numero--){
		invertidaS=invertidaS+cadenaDef[numero];

	}
	console.log(invertidaS);

}