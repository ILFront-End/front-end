(function(){

	var add=Base.getClass('Ble');
	var bubble=Base.getClass('hide');
	var Close=Base.getClass('close');
	var add_resource=Base.getClass('resource');
	var input=Base.getClass('text');
	var contB=Base.getClass('contBcont');
	var num;

	function Control(){
		Base.addEvent(add,'click',fn);
		Base.addEvent(Close,'click',fn1);
		Base.addEvent(add_resource,'click',fn2);
		Base.addEvent(fn3(),'click',fn4);
	};

	function fn4(){
		var parent=this.parentNode.parentNode;
		parent.removeChild(this.parentNode);
	}

	function fn3(){
		var I=[];
		var b=Base.getClass('contBcont');
		for(var i=0;i<b.length;i++){
			var span=b[i].children;
			for(var j=0;j<span.length;j++){
				I.push(span[j].children[0]);
			}
		}
		return I;		
	}

	function fn2(){
		var array=Base.val(input).split(',');
		var html=[];
		for(var i=0;i<array.length;i++){
			var str='<span>'+array[i]+'<i></i></span>';
			html.push(str);
		}
		contB[num].innerHTML+=html.join('');


		Base.addEvent(fn3(),'click',fn4);


	};

	function fn1(){
			Base.hide(bubble);
	};

	function fn(){
		Base.preventDefault(event);
		var top=Base.getOff(this).top+40+'px';
		var left=Base.getOff(this).left-30+'px';
		if(top=='228px'){num=0;}
		else if(top=='308px'){num=1;}
		else if(top=='388px'){num=2;}
		else{num=3;}
		Base.show(bubble);
		Base.css(bubble,'top',top);
		Base.css(bubble,'left',left);
	};

	Control();

})();


