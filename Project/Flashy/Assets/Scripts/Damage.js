#pragma strict

function Start () {

}

class Damage{
	public var amount : int;
	public var direction : Vector3;
	
	function Damage(a : int,d : Vector3){
		amount = a;
		direction = d;
	}
	
	function Damage(a : int){
		amount = a;
	}
	
	function Inflict(h : int){
		var health : int = h - amount;
		if(health < 0) health = 0;
		return health;
	}
}