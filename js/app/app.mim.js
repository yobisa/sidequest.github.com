﻿$(function(){function e(){return"<img src='images/icoTks.png' alt='Thanks!' /><p class='textoSucesso'>Thank you! Soon we will send you<br />some news from the front!</p>"}function t(){return"<img src='images/image_362485.gif' alt='Sending...' /><p class='textoInfo'>Sending...</p>"}function n(){return"<p class='textoInfo'>Ooops! Something did not work<br />make sure you provide a valid email address!</p>"}$("#form1").submit(function(r){if($("#campoEmail").val()){var i=$(this);serializedData=i.serialize();$inputs=i.find("input, select, button, textarea");$inputs.attr("disabled","disabled");$("#contatoFormulario").hide();$("#contatoMensagem").html(t());$("#contatoMensagem").show();$.ajax({url:"http://erloncabral.net/api/contact",type:"post",data:serializedData,success:function(t,n,r){$("#contatoMensagem").html(e());$("#contatoMensagem").show();console.log("Hooray, it worked!")},error:function(e,t,r){$("#contatoMensagem").html(n());$("#contatoMensagem").show();console.log("The following error occured: "+t,r);setTimeout(function(){$("#contatoMensagem").hide();$("#contatoFormulario").show()},3e3)},complete:function(){$inputs.removeAttr("disabled")}})}r.preventDefault()})})