#pragma strict

private var moveForward : float = 0;
private var moveSideways : float = 0;

var detector : GameObject;
var moveSpeed : float = 20;
var jumpForce : float = 3;
static var sensitivity : float = 5;

function Start () {

}

function FixedUpdate () {
	moveForward = Input.GetAxis("Vertical") * moveSpeed * Time.deltaTime * 15;
	moveSideways = Input.GetAxis("Horizontal") * moveSpeed * Time.deltaTime * 15;

	rigidbody.velocity = transform.TransformDirection(Vector3(moveSideways,rigidbody.velocity.y,moveForward));
}

function Update() {
    if (Input.GetKey(KeyCode.Escape)) {
        Application.LoadLevel(0);
    }

	var onGround : boolean = detector.GetComponent(Detector).onGround;

	transform.Rotate(Vector3(0,Input.GetAxis("Mouse X") * sensitivity,0));
	if(Input.GetButtonDown("Skok") && onGround){
		rigidbody.velocity.y += jumpForce;
	}
}