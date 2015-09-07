#pragma strict

var destroyTime : float = 5;
var explosion : GameObject;

function Start () {

}

function Update () {
	Destroy(this.gameObject,destroyTime);
}

function OnCollisionEnter(hit : Collision){
	var hitInfo : Collider[] = Physics.OverlapSphere(transform.position,2.5);
	
	for(hitobj in hitInfo){
		var explodeDir : Vector3 = Vector3.Normalize(hitobj.transform.position - transform.position);
	
		if(hitobj.transform.gameObject.GetComponent(Health)) hitobj.transform.gameObject.GetComponent(Health).damage = Damage(25,explodeDir);
		if(hitobj.rigidbody && !hitobj.transform.gameObject.GetComponent(Health)){
			hitobj.rigidbody.AddForce(explodeDir*400);
		}
	}

	Instantiate(explosion,transform.position,Quaternion.identity);
	Destroy(this.gameObject);
}