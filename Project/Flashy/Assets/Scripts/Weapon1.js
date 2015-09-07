#pragma strict

var projectile : GameObject;
var bulletForce : float = 100;
var myWeapon : GameObject;
var shootSound : AudioClip;
var shootVolume : float = 0.4;

private var instaPro : GameObject;

function Start () {

}

function Update () {
	if(Input.GetAxis("Horizontal")!=0 || Input.GetAxis("Vertical")!=0){
		myWeapon.animation.Play("walk");
	}
	if(Input.GetButtonDown("Fire1")){
	myWeapon.audio.PlayClipAtPoint(shootSound, transform.position,shootVolume);
	myWeapon.animation.Stop();
	myWeapon.animation.Play("weapon1");
	instaPro = Instantiate(projectile,transform.position,transform.rotation);
	instaPro.rigidbody.AddRelativeForce(Vector3(0,0,bulletForce));
	}
}