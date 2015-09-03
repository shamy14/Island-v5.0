#pragma strict

private var count : int = 0;
var onGround : boolean = false;

function Start () {

}

function Update () {

}

function OnTriggerEnter(){
	count ++;
	if(count > 0) onGround = true;
}

function OnTriggerExit(){
	count --;
	if(count < 1){
		count = 0;
		onGround = false;
	}
}