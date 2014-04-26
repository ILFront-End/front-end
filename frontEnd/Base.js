function Base(){

}

Base.prototype.getClass=function(str){
	var all=document.getElementsByTagName('*');
	var elements=[];
	for(var i=0;i<all.length;i++){
		if(all[i].className==str){
			elements.push(all[i]);
		}
	}
	return elements;
};

Base.prototype.addEvent=function(element,type,fn){
	for(var i=0;i<element.length;i++){
		if(addEventListener){
			element[i].addEventListener(type,fn,false);
		}else if(attachEvent){
			attachEvent(element[i],'on'+type,fn);
		}else{
			element[i]['on'+type]=fn;
		}
	}
};

Base.prototype.preventDefault=function(event){
	if(event.preventDefault){
		event.preventDefault();
	}else if(event.returnValue){
		event.returnValue=false;
	}
};

Base.prototype.getOff=function(element){
	var offsetL=element.offsetLeft;
	var offsetT=element.offsetTop;
	var current=element.offsetParent;
	while(current!=null){
		offsetL+=current.offsetLeft;
		offsetT+=current.offsetTop;
		current=current.offsetParent;
	}
	return {'top' : offsetT, 'left' : offsetL}
};

Base.prototype.show=function(element){
	for(var i=0;i<element.length;i++){
		element[i].style.display='block';
	}
	
};

Base.prototype.hide=function(element){	
	for(var i=0;i<element.length;i++){
		element[i].style.display='none';
	}
	
};

Base.prototype.css=function(element,type,str){
	for(var i=0;i<element.length;i++){
		element[i].style[type]=str;
	}
};

Base.prototype.val=function(element){
	var value=[];
	for(var i=0;i<element.length;i++){
		value.push(element[i].value)
	}
	return value.join('');
}



window.Base=new Base();