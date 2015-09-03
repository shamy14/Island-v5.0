#pragma strict

function Start () {

}

function Update () {
	transform.Rotate(Vector3(-Input.GetAxis("Mouse Y") * PlayerControl.sensitivity,0,0));
}