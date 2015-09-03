#pragma strict

var health : int = 50;
var damage : Damage;
var deathInfo : Damage;

function Start () {

}

function Update () {
	if(damage){
		health = damage.Inflict(health);
	if(health == 0) deathInfo = damage;
		damage = null;
	}
}