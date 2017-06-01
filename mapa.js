// JavaScript Document

 var flag= false;
 var flag2 = false;
 var mapLayer,topLayer,stage;
 var active_zone= false;
 
 
 function resize_map(){
 	
	
	var scale = $("body").width() / 860;
	mapLayer.setScale({ x: scale, y: scale});
	mapLayer.draw();
	stage.setWidth($("body").width());
	stage.setHeight( scale * 550 );
	

 }

function activate_zone(region)
{
	
	if( active_zone !== false )
		active_zone.destroy();
		
	active_zone = new Kinetic.Path({
		data: paises[region].path,
		fill:paises[region].fill ,
		stroke: '#FFF',
		strokeWidth: 2,
		opacity: 0.6,
		id : region
   		});

		
   	mapLayer.add(active_zone);
	active_zone.moveToBottom();
	mapLayer.draw();
}
		

//función para desplegar menú

function despliega_menu()
	 {
		 

		 
		 if( flag === false ){
			 document.getElementById("pais_mapa").style.backgroundImage =('url(img/arrow_bk_2.png)');
			 
			 flag = true; }
		 else { 
		 	document.getElementById("pais_mapa").style.backgroundImage =('url(img/arrow_bk.png)');
			 flag = false;
		  }


               if ($('#desplagable_comerciales').is(":hidden"))
               {
                    $('#desplagable_comerciales').fadeIn('fast');
					 $('#datos_comerciales').height('150px');
		            $('#datos_comerciales').css( {"display" : "none"});
               } else {
                    $('#desplagable_comerciales').fadeOut('fast');
					   
					 $('#datos_comerciales').height('auto');
		            $('#datos_comerciales').css( {"display" : "block"});
               }
               return false;
			   

	 };



// función para mostrar datos desde el menú desplegable

	function muestra(zona) {
	
	
	despliega_menu();
	
	
	
	  var nombre_region = ""; 
  var comercial_region = "";
  var telefono_region = "";
  var email_region = "";
  
  
  
 
  
  var pais_recuadro = document.getElementById("pais_mapa");
  var comercial_recuadro = document.getElementById("nombre_comercial");
  var telefono_recuadro = document.getElementById("telefono_comercial");
  var email_recuadro = document.getElementById("email_comercial");
  
  
  
  var icon_comercial  = "<span class = 'icono_mapa'> <img src='img/User.png' alt='comercial' width='16px' height='16px'/></span>";
  var icon_telefono = "<span class = 'icono_mapa'> <img src='img/phone.png' alt='comercial' width='16px' height='16px'/></span>";
  var icon_mail = "<span class = 'icono_mapa'> <img src='img/mail.png' alt='comercial' width='16px' height='16px'/></span>";
	
	
	
	
	 if( active_zone !== false )
		active_zone.destroy();



	
		switch (zona)
 	{
	case "Portugal":
		
		nombre_region = "Portugal / PALOP" ;
		comercial_region = icon_comercial + "Jefferson da Rocha Sánchez";
        telefono_region = icon_telefono +  "+351 308802598";
        email_region = icon_mail + " <a href='mailto:jdarocha@visiotech.es' target='_blank'>jdarocha@visiotech.es</a>";
		break;
		
    case "Francia_Bélgica_Magreb":
		
		nombre_region = "<span style = 'font-size: 17px; line-height: 26px;'>Francia / Bélgica / Magreb </span>" ;
		comercial_region = icon_comercial + "Meriem Bouhfid<br><br>" + icon_comercial + "Khalid El Hajui";
        telefono_region = icon_telefono +  "+33 182880926<br><br>" + icon_telefono +   "+33 182880926";
        email_region = icon_mail + " <a href='mailto:mbouhfid@visiotech.es' target='_blank'>mbouhfid@visiotech.es</a><br><br>" + icon_mail + "<a href='mailto:kelhajui@visiotech.es' target='_blank'>kelhajui@visiotech.es</a>";
		break;
		
	case "Francia_Central":
		
		nombre_region = "Francia Centro" ;
		comercial_region = icon_comercial +  "Haimin Wang";
        telefono_region = icon_telefono +  "+33 685090207";
        email_region = icon_mail +  "<a href='mailto:hwang@visiotech.es' target='_blank'>hwang@visiotech.es</a>";
		break;
		
	case "Italia":
		
		nombre_region = "Italia" ;
		comercial_region = icon_comercial +  "Vincenzo Timeo";
        telefono_region = icon_telefono +  "694803224";
        email_region = icon_mail + "<a href='mailto:vtimeo@visiotech.es' target='_blank'>vtimeo@visiotech.es</a>";
		break;

	case "Italia_Sur":
		
		nombre_region = "Italia Sur" ;
		comercial_region = icon_comercial + "Francesco Spezzano";
        telefono_region = icon_telefono +  "+39 3312770538";
        email_region = icon_mail + "<a href='mailto:fspezzano@visiotech.es' target='_blank'>fspezzano@visiotech.es</a>";
		break;
		
	case "Canarias":
		
		nombre_region = "Canarias" ;
		comercial_region = icon_comercial + "David Jiménez Rocha";
        telefono_region = icon_telefono +  "622018665";
        email_region = icon_mail + "<a href='mailto:djjimenez@visiotech.es' target='_blank'>djjimenez@visiotech.es</a>";
		break;
		
	case "España_Noreste":
		
		nombre_region = "España Noreste";
		comercial_region = icon_comercial +  "Comercial Visiotech";
        telefono_region = icon_telefono +  "911836285";
        email_region = icon_mail + "<a href='mailto:comercial@visiotech.es' target='_blank'>comercial@visiotech.es</a>";
		break;
		
	case "España_Centro":
		
		nombre_region = "España Centro";
		comercial_region = icon_comercial + "Felix Carrasquilla Hernández";
        telefono_region = icon_telefono +  "692648420";
        email_region = icon_mail + "<a href='mailto:fcarrasquilla@visiotech.es' target='_blank'>fcarrasquilla@visiotech.es</a>";
		break;
	
	case "España_Norte":
		
		
		nombre_region = "España Norte";
		comercial_region = icon_comercial + "Jose Ignacio Bello";
        telefono_region = icon_telefono +   "622027588";
        email_region = icon_mail + "<a href='mailto:jibello@visiotech.es' target='_blank'>jibello@visiotech.es</a>";
		break;
		
	case "España_Levante":
		
		nombre_region = "España Levante";
		comercial_region = icon_comercial + "Roberto Giménez de los Galanes ";
        telefono_region = icon_telefono +  "622608802";
        email_region = icon_mail + "<a href='mailto:rgimenez@visiotech.es' target='_blank'>rgimenez@visiotech.es</a>";
		break;
		
	case "España_Sur":
		
		nombre_region = "España Sur" ;
		comercial_region = icon_comercial + "Miguel Ángel Borrego Escudero";
        telefono_region = icon_telefono +  "615242919";
        email_region = icon_mail + "<a href='mailto:maborrego@visiotech.es' target='_blank'>maborrego@visiotech.es</a>";
		break;

 }
	
	
	pais_recuadro.innerHTML = nombre_region;
	comercial_recuadro.innerHTML = comercial_region ;
   telefono_recuadro.innerHTML =  telefono_region ;
    email_recuadro.innerHTML = email_region ;
	
	
	activate_zone(zona);
	
	/* $('#desplagable_comerciales').fadeOut('fast');
		 $('#datos_comerciales').height('0px');
	 $('#datos_comerciales').css( {"display" : "block"});*/
	
};
    


// función inicial

function init() {



//crear elementos 
	

	
   stage = new Kinetic.Stage({	  
    container: 'container',
    width: 860,  
    height: 550,
	id: 'mapa_container'
  });
  
  
  mapLayer = new Kinetic.Layer({ y: 0, x: 0,});


   
  var nombre_region = ""; 
  var comercial_region = "";
  var telefono_region = "";
  var email_region = "";
  var active_zone= false;
  
  var pais_recuadro = document.getElementById("pais_mapa");
  var comercial_recuadro = document.getElementById("nombre_comercial");
  var telefono_recuadro = document.getElementById("telefono_comercial");
  var email_recuadro = document.getElementById("email_comercial");
  
  var icon_comercial  = "<span class = 'icono_mapa'> <img src='img/User.png' alt='comercial' width='16px' height='16px'/></span>";
  var icon_telefono = "<span class = 'icono_mapa'> <img src='img/phone.png' alt='comercial' width='16px' height='16px'/></span>";
  var icon_mail = "<span class = 'icono_mapa'> <img src='img/mail.png' alt='comercial' width='16px' height='16px'/></span>";
 
 
 
 //bucle para recorrer los mapas de paises.js y crear los trazados y los datos
   
  for(id in paises) {
	 
	 var idd = id;
	 var idd = idd.replace( /[_]/g, " ");
	 

	 
	$("#desplagable_comerciales_ul").append("<li class='desplagable_comerciales_ul_li'><p rel='"+ id +"' onclick=\"muestra('"+ id + "')\" class='desplagable_comerciales_ul_p'> " + idd + " </p></li>");

    var path = new Kinetic.Path({
      data: paises [id].path,
      fill:paises [id].fill ,
      stroke: '#FFF',
      strokeWidth: 2,
	  opacity: 0,
	  id : paises [id].id 
	  

    });

    path.on('mouseover', function() {
      this.setOpacity(1);
      mapLayer.drawScene();
	document.body.style.cursor = "pointer";

    }); 


//función para mostrar datos y trazados cuando cliques en una región
 
  path.on('click', function( )
  
  {
	  
	var region = this.getId();
	activate_zone(region);
  

	switch (region)
 	{
	case "Portugal":
		
		nombre_region = "Portugal / PALOP" ;
		comercial_region = icon_comercial + "Jefferson da Rocha Sánchez";
        telefono_region = icon_telefono +  "+351 308802598";
        email_region = icon_mail + " <a href='mailto:jdarocha@visiotech.es' target='_blank'>jdarocha@visiotech.es</a>";
		break;
		
    case "Francia_Bélgica_Magreb":
		
		nombre_region = "<span style = 'font-size: 17px; line-height: 26px;'>Francia / Bélgica / Magreb </span>" ;
		comercial_region = icon_comercial + "Meriem Bouhfid<br><br>" + icon_comercial + "Khalid El Hajui";
        telefono_region = icon_telefono +  "+33 182880926<br><br>" + icon_telefono +   "+33 182880926";
        email_region = icon_mail + " <a href='mailto:mbouhfid@visiotech.es' target='_blank'>mbouhfid@visiotech.es</a><br><br>" + icon_mail + "<a href='mailto:kelhajui@visiotech.es' target='_blank'>kelhajui@visiotech.es</a>";
		break;
		
	case "Francia_Central":
		
		nombre_region = "Francia Centro" ;
		comercial_region = icon_comercial +  "Haimin Wang";
        telefono_region = icon_telefono +  "+33 685090207";
        email_region = icon_mail +  "<a href='mailto:hwang@visiotech.es' target='_blank'>hwang@visiotech.es</a>";
		break;
		
	case "Italia":
		
		nombre_region = "Italia" ;
		comercial_region = icon_comercial +  "Vincenzo Timeo";
        telefono_region = icon_telefono +  "694803224";
        email_region = icon_mail + "<a href='mailto:vtimeo@visiotech.es' target='_blank'>vtimeo@visiotech.es</a>";
		break;

	case "Italia_Sur":
		
		nombre_region = "Italia Sur" ;
		comercial_region = icon_comercial + "Francesco Spezzano";
        telefono_region = icon_telefono +  "+39 3312770538";
        email_region = icon_mail + "<a href='mailto:fspezzano@visiotech.es' target='_blank'>fspezzano@visiotech.es</a>";
		break;
		
	case "Canarias":
		
		nombre_region = "Canarias" ;
		comercial_region = icon_comercial + "David Jiménez Rocha";
        telefono_region = icon_telefono +  "622018665";
        email_region = icon_mail + "<a href='mailto:djjimenez@visiotech.es' target='_blank'>djjimenez@visiotech.es</a>";
		break;
		
	case "España_Noreste":
		
		nombre_region = "España Noreste";
		comercial_region = icon_comercial +  "Comercial Visiotech";
        telefono_region = icon_telefono +  "911836285";
        email_region = icon_mail + "<a href='mailto:comercial@visiotech.es' target='_blank'>comercial@visiotech.es</a>";
		break;
		
	case "España_Centro":
		
		nombre_region = "España Centro";
		comercial_region = icon_comercial + "Felix Carrasquilla Hernández";
        telefono_region = icon_telefono +  "692648420";
        email_region = icon_mail + "<a href='mailto:fcarrasquilla@visiotech.es' target='_blank'>fcarrasquilla@visiotech.es</a>";
		break;
	
	case "España_Norte":
		
		
		nombre_region = "España Norte";
		comercial_region = icon_comercial + "Jose Ignacio Bello";
        telefono_region = icon_telefono +   "622027588";
        email_region = icon_mail + "<a href='mailto:jibello@visiotech.es' target='_blank'>jibello@visiotech.es</a>";
		break;
		
	case "España_Levante":
		
		nombre_region = "España Levante";
		comercial_region = icon_comercial + "Roberto Giménez de los Galanes ";
        telefono_region = icon_telefono +  "622608802";
        email_region = icon_mail + "<a href='mailto:rgimenez@visiotech.es' target='_blank'>rgimenez@visiotech.es</a>";
		break;
		
	case "España_Sur":
		
		nombre_region = "España Sur" ;
		comercial_region = icon_comercial + "Miguel Ángel Borrego Escudero";
        telefono_region = icon_telefono +  "615242919";
        email_region = icon_mail + "<a href='mailto:maborrego@visiotech.es' target='_blank'>maborrego@visiotech.es</a>";
		break;
 }
	
	
	pais_recuadro.innerHTML = nombre_region;
	comercial_recuadro.innerHTML = comercial_region ;
   telefono_recuadro.innerHTML =  telefono_region ;
    email_recuadro.innerHTML = email_region ;


 });

   
 
    path.on('mouseout', function() {
	
		  this.setOpacity(0);
		  //this.moveTo(mapLayer);
		  mapLayer.draw();
		  document.body.style.cursor = "default";
    	});

    mapLayer.add(path);

  }


stage.add(mapLayer);

resize_map(); 
}
	 
window.addEventListener( 'load', init);


$( window ).resize(function() {
	resize_map();
});


