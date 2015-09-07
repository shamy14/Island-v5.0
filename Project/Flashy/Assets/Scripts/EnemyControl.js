#pragma strict

var health : int;
var deadFace : Material;
var deathInfo : Damage;
var enemy : GameObject;
//var newscore : int;

function Start () {

}

function Update () {
	health = this.gameObject.GetComponent(Health).health;
	
	if(health == 0){
		deathInfo = this.gameObject.GetComponent(Health).deathInfo;
		renderer.material = deadFace;
		Destroy(enemy,0.5);
		//newscore = newscore + 10;
		//global.score = newscore;
	if(deathInfo != null){
			rigidbody.AddForce(deathInfo.direction*3);
			rigidbody.AddTorque(-deathInfo.direction*3);
			deathInfo = null;
		}
	}
}